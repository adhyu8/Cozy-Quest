/**
 * COZY QUEST — WORLD ENGINE (ADVENTURE WORLD)
 * Self-contained, modular 2D pixel-art RPG world system.
 * Zero overwrite: Designed to plug into or run alongside Cozy Quest.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['./adventure-world-config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./adventure-world-config'));
  } else {
    root.AdventureWorld = factory(root.AdventureWorldConfig);
  }
}(typeof self !== 'undefined' ? self : this, function (Config) {
  'use strict';

  var instance = null;

  function AdventureWorldCore() {
    this.container = null;
    this.canvas = null;
    this.ctx = null;
    this.animId = null;

    // Academic progress state
    this.progress = {
      completedTopics: 0,
      totalTopics: 205,
      overallPct: 0,
      xp: 0,
      levelName: 'Rookie'
    };

    // World persistent state (stored under cozyQuest.world.state)
    this.state = {
      currentStageId: 1,
      unlockedStageId: 1,
      claimedChests: {},
      activeCompanionId: 'robin',
      selectedOutfitId: 'auto',
      checkpointsVisited: {}
    };

    // Hero character model
    this.hero = {
      x: 140,
      targetX: 140,
      dir: 1,
      state: 'idle', // 'idle', 'walk', 'celebrate'
      animStep: 0,
      bobTimer: 0,
      cheerTimer: 0
    };

    // Parallax background layers & particles
    this.cameraX = 0;
    this.targetCameraX = 0;
    this.clouds = [
      { x: 30, y: 24, speed: 0.18, w: 72, h: 20 },
      { x: 260, y: 45, speed: 0.12, w: 90, h: 26 },
      { x: 520, y: 18, speed: 0.22, w: 60, h: 18 },
      { x: 800, y: 40, speed: 0.16, w: 104, h: 28 }
    ];
    this.ambientParticles = [];
    this.eventListeners = {};

    this.loadState();
  }

  /* ==========================================================================
     PERSISTENCE (Isolated under cozyQuest.world.state)
     ========================================================================== */
  AdventureWorldCore.prototype.loadState = function () {
    try {
      var raw = localStorage.getItem(Config.storageKey);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          for (var k in parsed) {
            if (parsed.hasOwnProperty(k)) {
              this.state[k] = parsed[k];
            }
          }
        }
      }
    } catch (e) {
      console.warn('[AdventureWorld] Could not read world state', e);
    }
  };

  AdventureWorldCore.prototype.saveState = function () {
    try {
      localStorage.setItem(Config.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn('[AdventureWorld] Could not save world state', e);
    }
  };

  /* ==========================================================================
     MOUNT & INITIALIZATION
     ========================================================================== */
  AdventureWorldCore.prototype.init = function (targetContainer) {
    var self = this;
    if (typeof targetContainer === 'string') {
      this.container = document.querySelector(targetContainer);
    } else {
      this.container = targetContainer;
    }

    if (!this.container) {
      console.warn('[AdventureWorld] Target container not found. Engine idle.');
      return false;
    }

    // Clear existing inner contents of container to mount clean engine
    this.container.innerHTML = '';
    this.container.classList.add('adventure-world-root');

    // Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'aw-canvas';
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    // Build UI Overlays
    this.buildDomOverlays();

    // Resize
    this.resizeHandler = function () { self.resize(); };
    window.addEventListener('resize', this.resizeHandler);
    this.resize();

    // Canvas Click Listener for walk-to and interactions
    this.canvas.addEventListener('click', function (e) {
      var rect = self.canvas.getBoundingClientRect();
      var clickX = e.clientX - rect.left;
      var clickY = e.clientY - rect.top;
      self.handleCanvasClick(clickX, clickY);
    });

    // Start loop
    this.startLoop();
    this.updateWorldStage();

    return true;
  };

  AdventureWorldCore.prototype.resize = function () {
    if (!this.container || !this.canvas) return;
    this.canvas.width = this.container.clientWidth || 800;
    this.canvas.height = this.container.clientHeight || 280;
    this.groundY = this.canvas.height - 45;
  };

  /* ==========================================================================
     DOM OVERLAY BUILDER (HUD, Wardrobe, Modals)
     ========================================================================== */
  AdventureWorldCore.prototype.buildDomOverlays = function () {
    var self = this;

    this.hudEl = document.createElement('div');
    this.hudEl.className = 'aw-hud-overlay';
    this.hudEl.innerHTML = [
      '<div class="aw-stage-pill">',
      '  <span id="aw-stage-icon" class="aw-stage-icon">🏡</span>',
      '  <div class="aw-stage-details">',
      '    <span id="aw-stage-title" class="aw-stage-title">THE FORGOTTEN MEADOW</span>',
      '    <span id="aw-stage-sub" class="aw-stage-sub">Stage 1 • A peaceful starting haven</span>',
      '  </div>',
      '</div>',
      '<div class="aw-hud-actions">',
      '  <button class="aw-action-btn" id="aw-wardrobe-btn">Wardrobe</button>',
      '  <button class="aw-action-btn" id="aw-chest-btn">Chests</button>',
      '</div>'
    ].join('');
    this.container.appendChild(this.hudEl);

    this.ribbonEl = document.createElement('div');
    this.ribbonEl.id = 'aw-ribbon';
    this.ribbonEl.className = 'aw-milestone-ribbon';
    this.container.appendChild(this.ribbonEl);

    this.toastEl = document.createElement('div');
    this.toastEl.className = 'aw-toast';
    this.container.appendChild(this.toastEl);

    this.speechEl = document.createElement('div');
    this.speechEl.className = 'aw-speech';
    this.speechEl.style.display = 'none';
    this.container.appendChild(this.speechEl);

    this.modalEl = document.createElement('div');
    this.modalEl.className = 'aw-modal-backdrop';
    this.modalEl.innerHTML = [
      '<div class="aw-modal-box">',
      '  <button class="aw-modal-close-corner" id="aw-modal-corner-close" title="Close">✖</button>',
      '  <div class="aw-modal-icon" id="aw-modal-icon">🎁</div>',
      '  <div class="aw-modal-title" id="aw-modal-title">TITLE</div>',
      '  <div class="aw-modal-desc" id="aw-modal-desc">Description text</div>',
      '  <div id="aw-modal-custom"></div>',
      '  <div style="margin-top: 14px;">',
      '    <button class="aw-action-btn" id="aw-modal-close" style="padding: 8px 18px;">← Back to Game</button>',
      '  </div>',
      '</div>'
    ].join('');
    this.container.appendChild(this.modalEl);

    this.hudEl.querySelector('#aw-wardrobe-btn').addEventListener('click', function () {
      self.openWardrobeModal();
    });
    this.hudEl.querySelector('#aw-chest-btn').addEventListener('click', function () {
      self.openChestsModal();
    });
    this.modalEl.querySelector('#aw-modal-close').addEventListener('click', function () {
      self.closeModal();
    });
    this.modalEl.querySelector('#aw-modal-corner-close').addEventListener('click', function () {
      self.closeModal();
    });
    this.modalEl.addEventListener('click', function (e) {
      if (e.target === self.modalEl) {
        self.closeModal();
      }
    });
  };

  /* ==========================================================================
     PROGRESSION ADAPTER (Direct updates from Cozy Quest)
     ========================================================================== */
  AdventureWorldCore.prototype.updateProgress = function (data) {
    if (!data) return;
    if (typeof data.completedTopics === 'number') this.progress.completedTopics = data.completedTopics;
    if (typeof data.totalTopics === 'number') this.progress.totalTopics = data.totalTopics;
    if (typeof data.overallPct === 'number') {
      this.progress.overallPct = data.overallPct;
    } else if (this.progress.totalTopics > 0) {
      this.progress.overallPct = Math.round((this.progress.completedTopics / this.progress.totalTopics) * 100);
    }
    if (typeof data.xp === 'number') this.progress.xp = data.xp;
    if (data.levelName) this.progress.levelName = data.levelName;

    this.updateWorldStage();
    this.updateMilestoneRibbon();
  };

  AdventureWorldCore.prototype.updateFromCozyQuest = function (cqState, subjectsData) {
    if (!cqState || !subjectsData) return;

    var totalTopics = 0;
    var completedCount = 0;
    var subProgress = {};

    for (var i = 0; i < subjectsData.length; i++) {
      var sub = subjectsData[i];
      totalTopics += sub.topics.length;
      var sDone = 0;
      for (var t = 0; t < sub.topics.length; t++) {
        if (cqState.completedTopics && cqState.completedTopics[sub.id + ':' + t]) {
          completedCount++;
          sDone++;
        }
      }
      subProgress[sub.id] = {
        done: sDone,
        total: sub.topics.length,
        pct: Math.round((sDone / sub.topics.length) * 100)
      };
    }

    var overallPct = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

    this.updateProgress({
      completedTopics: completedCount,
      totalTopics: totalTopics,
      overallPct: overallPct,
      xp: cqState.extraActivitiesXp || 0,
      levelName: cqState.lastLevelReached || 'Rookie'
    });
  };

  AdventureWorldCore.prototype.updateWorldStage = function () {
    var pct = this.progress.overallPct;
    var matchedStage = Config.stages[0];

    for (var i = 0; i < Config.stages.length; i++) {
      var st = Config.stages[i];
      if (pct >= st.range[0] && pct <= st.range[1]) {
        matchedStage = st;
        break;
      }
    }

    var oldStage = this.state.currentStageId;
    this.state.currentStageId = matchedStage.id;
    if (matchedStage.id > this.state.unlockedStageId) {
      this.state.unlockedStageId = matchedStage.id;
      this.triggerStageCelebration(matchedStage);
    }

    // Reversible progression: If student unticks topics and pct falls below stage threshold
    if (pct < matchedStage.range[0]) {
      this.state.currentStageId = matchedStage.id;
    }

    this.saveState();
    this.refreshHudUI(matchedStage);
  };

  AdventureWorldCore.prototype.refreshHudUI = function (stage) {
    var titleEl = document.getElementById('aw-stage-title');
    var subEl = document.getElementById('aw-stage-sub');
    var iconEl = document.getElementById('aw-stage-icon');
    if (titleEl && subEl && iconEl) {
      titleEl.textContent = stage.name.toUpperCase();
      subEl.textContent = 'Stage ' + stage.id + ' • ' + stage.subtitle;
      iconEl.textContent = stage.checkpointIcon;
    }
  };

  AdventureWorldCore.prototype.updateMilestoneRibbon = function () {
    var ribbon = document.getElementById('aw-ribbon');
    if (!ribbon) return;
    ribbon.innerHTML = '';
    var self = this;

    Config.stages.forEach(function (st) {
      var isUnlocked = self.progress.overallPct >= st.range[0];
      var isCurrent = self.state.currentStageId === st.id;
      var node = document.createElement('div');
      node.className = 'aw-step-node ' + (isUnlocked ? 'active ' : '') + (isCurrent ? 'current' : '');
      node.innerHTML = '<span class="aw-step-dot"></span><span>' + st.checkpointIcon + ' S' + st.id + '</span>';
      node.title = st.name + ' (' + st.range[0] + '–' + st.range[1] + '%)';
      node.addEventListener('click', function () {
        self.say(st.name + ': Requires ' + st.range[0] + '% academic syllabus completion.');
      });
      ribbon.appendChild(node);
    });
  };

  /* ==========================================================================
     INTERACTIONS & MODALS
     ========================================================================== */
  AdventureWorldCore.prototype.handleCanvasClick = function (clickX, clickY) {
    var self = this;
    // Check if clicked near hero
    var distHero = Math.abs(clickX - this.hero.x);
    if (distHero < 30) {
      this.hero.state = 'celebrate';
      this.hero.cheerTimer = 40;
      this.say(this.getRandomHeroQuote());
      return;
    }

    // Check if clicked near an interactive milestone chest
    var chestClicked = false;
    Config.milestoneChests.forEach(function (chest) {
      if (chest.stage === self.state.currentStageId) {
        var chestX = (self.canvas.width * 0.78);
        if (Math.abs(clickX - chestX) < 30) {
          self.openChestPrompt(chest);
          chestClicked = true;
        }
      }
    });

    if (!chestClicked) {
      this.hero.targetX = Math.max(70, Math.min(clickX, this.canvas.width - 70));
      this.hero.state = 'walk';
    }
  };

  AdventureWorldCore.prototype.openChestPrompt = function (chest) {
    var isUnlocked = this.progress.overallPct >= chest.pct;
    var isClaimed = !!this.state.claimedChests[chest.id];

    var modalIcon = document.getElementById('aw-modal-icon');
    var modalTitle = document.getElementById('aw-modal-title');
    var modalDesc = document.getElementById('aw-modal-desc');
    var customArea = document.getElementById('aw-modal-custom');
    var closeBtn = document.getElementById('aw-modal-close');

    modalIcon.textContent = chest.icon;
    modalTitle.textContent = chest.title.toUpperCase();

    if (isClaimed) {
      modalDesc.innerHTML = 'You have already unlocked this milestone treasure!<br><strong>Reward:</strong> ' + chest.rewardText;
      customArea.innerHTML = '<div style="font-size: 11px; color: #4caf50; font-weight: bold; margin-bottom: 8px;">✓ CLAIMED & SAFE IN WARDROBE</div>';
      closeBtn.textContent = 'Close';
    } else if (isUnlocked) {
      modalDesc.innerHTML = 'Milestone reached at ' + chest.pct + '% syllabus mastery!<br><strong>Reward:</strong> ' + chest.rewardText;
      customArea.innerHTML = '<div style="font-size: 11px; color: #e5a93c; font-weight: bold; margin-bottom: 8px;">✨ READY TO CLAIM!</div>';
      closeBtn.textContent = '← Back to Game';
      this.state.claimedChests[chest.id] = true;
      if (chest.companionId) this.state.activeCompanionId = chest.companionId;
      this.saveState();
      this.showToast('Unlocked: ' + chest.title);
    } else {
      modalDesc.innerHTML = 'Locked! Complete more syllabus topics to unlock this chest.<br><strong>Requires:</strong> ' + chest.pct + '% overall semester completion (Current: ' + this.progress.overallPct + '%).';
      customArea.innerHTML = '<div style="font-size: 11px; color: #e76f51; font-weight: bold; margin-bottom: 8px;">🔒 LOCKED</div>';
      closeBtn.textContent = 'Back to Quest';
    }

    this.modalEl.classList.add('open');
  };

  AdventureWorldCore.prototype.openWardrobeModal = function () {
    var self = this;
    var modalIcon = document.getElementById('aw-modal-icon');
    var modalTitle = document.getElementById('aw-modal-title');
    var modalDesc = document.getElementById('aw-modal-desc');
    var customArea = document.getElementById('aw-modal-custom');
    var closeBtn = document.getElementById('aw-modal-close');

    modalIcon.textContent = '👗';
    modalTitle.textContent = 'ADVENTURER WARDROBE';
    modalDesc.textContent = 'Select unlocked outfits and companions earned through your KTU S3 progress:';

    var html = '<div style="font-size: 11px; font-weight:bold; margin-bottom:6px; text-align:left;">Outfits:</div><div class="aw-wardrobe-grid">';
    Config.characterTiers.forEach(function (tier) {
      var isUnlocked = self.progress.overallPct >= tier.minPct;
      var isSelected = self.getCurrentTier().id === tier.id;
      html += '<div class="aw-wardrobe-card ' + (isSelected ? 'selected ' : '') + (!isUnlocked ? 'locked' : '') + '" data-tier="' + tier.id + '">';
      html += '  <div style="font-size:20px;">' + (isUnlocked ? '🥋' : '🔒') + '</div>';
      html += '  <div style="font-size:9px; font-weight:bold; margin-top:4px;">' + tier.title + '</div>';
      html += '  <div style="font-size:8px; color:#7d6b62;">' + tier.minPct + '%+</div>';
      html += '</div>';
    });
    html += '</div>';

    html += '<div style="font-size: 11px; font-weight:bold; margin-bottom:6px; text-align:left;">Companions:</div><div class="aw-wardrobe-grid">';
    Config.companions.forEach(function (comp) {
      var isUnlocked = self.progress.overallPct >= (comp.stageRequired - 1) * 20;
      var isSelected = self.state.activeCompanionId === comp.id;
      html += '<div class="aw-wardrobe-card ' + (isSelected ? 'selected ' : '') + (!isUnlocked ? 'locked' : '') + '" data-comp="' + comp.id + '">';
      html += '  <div style="font-size:20px;">' + (isUnlocked ? '🐾' : '🔒') + '</div>';
      html += '  <div style="font-size:9px; font-weight:bold; margin-top:4px;">' + comp.name + '</div>';
      html += '  <div style="font-size:8px; color:#7d6b62;">Stage ' + comp.stageRequired + '</div>';
      html += '</div>';
    });
    html += '</div>';

    customArea.innerHTML = html;
    closeBtn.textContent = 'Save & Close';

    // Click delegates for wardrobe
    customArea.querySelectorAll('[data-comp]').forEach(function (el) {
      el.addEventListener('click', function () {
        var compId = el.getAttribute('data-comp');
        var targetComp = Config.companions.find(function (c) { return c.id === compId; });
        if (self.progress.overallPct >= (targetComp.stageRequired - 1) * 20) {
          self.state.activeCompanionId = compId;
          self.saveState();
          self.openWardrobeModal();
          self.say(targetComp.dialogue);
        } else {
          self.showToast('Companion locked! Advance to Stage ' + targetComp.stageRequired);
        }
      });
    });

    this.modalEl.classList.add('open');
  };

  AdventureWorldCore.prototype.openChestsModal = function () {
    var currentStageChests = Config.milestoneChests.filter(function (c) {
      return true;
    });
    if (currentStageChests.length > 0) {
      this.openChestPrompt(currentStageChests[this.state.currentStageId - 1] || currentStageChests[0]);
    }
  };

  AdventureWorldCore.prototype.closeModal = function () {
    this.modalEl.classList.remove('open');
  };

  AdventureWorldCore.prototype.showToast = function (text) {
    var self = this;
    if (!this.toastEl) return;
    this.toastEl.textContent = text;
    this.toastEl.classList.add('show');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(function () {
      self.toastEl.classList.remove('show');
    }, 3200);
  };

  AdventureWorldCore.prototype.say = function (text) {
    var self = this;
    if (!this.speechEl) return;
    this.speechEl.textContent = text;
    this.speechEl.style.display = 'block';
    if (this.speechTimer) clearTimeout(this.speechTimer);
    this.speechTimer = setTimeout(function () {
      self.speechEl.style.display = 'none';
    }, 4500);
  };

  AdventureWorldCore.prototype.getRandomHeroQuote = function () {
    var quotes = [
      'Every topic completed expands our realm!',
      'Onward through ' + this.getStageData().name + '!',
      'My gear grows stronger with each revision.',
      'From the Forgotten Meadow to the Celestial Sanctuary!',
      'Knowledge is the purest magic.'
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  AdventureWorldCore.prototype.getStageData = function () {
    var self = this;
    return Config.stages.find(function (s) { return s.id === self.state.currentStageId; }) || Config.stages[0];
  };

  AdventureWorldCore.prototype.getCurrentTier = function () {
    var pct = this.progress.overallPct;
    var tier = Config.characterTiers[0];
    for (var i = 0; i < Config.characterTiers.length; i++) {
      if (pct >= Config.characterTiers[i].minPct) {
        tier = Config.characterTiers[i];
      }
    }
    return tier;
  };

  AdventureWorldCore.prototype.triggerStageCelebration = function (stage) {
    this.hero.state = 'celebrate';
    this.hero.cheerTimer = 80;
    this.say('Hooray! Discovered new realm: ' + stage.name + '! ✨');
    this.showToast('NEW REALM UNLOCKED: ' + stage.name);
  };

  /* ==========================================================================
     CANVAS 2D PIXEL-ART RENDER PIPELINE
     ========================================================================== */
  AdventureWorldCore.prototype.startLoop = function () {
    var self = this;
    function loop() {
      self.updatePhysics();
      self.render();
      self.animId = requestAnimationFrame(loop);
    }
    this.animId = requestAnimationFrame(loop);
  };

  AdventureWorldCore.prototype.stopLoop = function () {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  };

  AdventureWorldCore.prototype.updatePhysics = function () {
    // Hero movement
    this.hero.bobTimer += 0.05;

    if (this.hero.cheerTimer > 0) {
      this.hero.cheerTimer--;
      if (this.hero.cheerTimer <= 0) this.hero.state = 'idle';
    }

    if (this.hero.state === 'walk') {
      var dx = this.hero.targetX - this.hero.x;
      if (Math.abs(dx) > 2) {
        this.hero.dir = dx > 0 ? 1 : -1;
        this.hero.x += this.hero.dir * 1.35;
        this.hero.animStep += 0.22;
      } else {
        this.hero.state = 'idle';
      }
    } else if (this.hero.state === 'idle') {
      if (Math.random() < 0.008) {
        this.hero.targetX = 100 + Math.random() * (this.canvas.width - 240);
        this.hero.state = 'walk';
      }
    }

    // Camera follow hero gently
    this.targetCameraX = (this.hero.x - this.canvas.width * 0.4) * 0.2;
    this.cameraX += (this.targetCameraX - this.cameraX) * 0.05;

    // Update speech bubble position over hero head
    if (this.speechEl && this.speechEl.style.display !== 'none') {
      var hScreenX = this.hero.x - this.cameraX;
      var hScreenY = this.groundY - 38;
      this.speechEl.style.left = hScreenX + 'px';
      this.speechEl.style.top = hScreenY + 'px';
    }
  };

  AdventureWorldCore.prototype.render = function () {
    var ctx = this.ctx;
    var w = this.canvas.width;
    var h = this.canvas.height;
    var stage = this.getStageData();

    ctx.save();
    ctx.clearRect(0, 0, w, h);

    // 1. Sky Gradient
    var sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, stage.sky.top);
    sky.addColorStop(0.5, stage.sky.mid);
    sky.addColorStop(1, stage.sky.bottom);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    // 2. Celestial Body (Sun/Moon/Supernova)
    ctx.save();
    ctx.fillStyle = stage.sun.glow;
    ctx.beginPath();
    ctx.arc(w * 0.75 - this.cameraX * 0.2, h * stage.sun.yRatio, stage.sun.radius * 1.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = stage.sun.color;
    ctx.beginPath();
    ctx.arc(w * 0.75 - this.cameraX * 0.2, h * stage.sun.yRatio, stage.sun.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 3. Clouds & Stars
    this.renderClouds(ctx, w, h);

    // 4. Parallax Background Layers
    this.renderParallaxHills(ctx, w, h, stage);

    // 5. Ground / Floating Island
    var groundY = this.groundY;
    this.renderGround(ctx, w, h, stage, groundY);

    // 6. Stage-specific landmarks & environment
    this.renderStageScenery(ctx, w, h, stage, groundY);

    // 7. Milestone Checkpoint Chest
    this.renderMilestoneChest(ctx, w, h, stage, groundY);

    // 8. Companion Follower
    this.renderCompanion(ctx, groundY);

    // 9. Hero Adventurer Sprite
    this.renderHero(ctx, groundY);

    // 10. Ambient Weather / Spore Particles
    this.renderAmbientParticles(ctx, w, h, stage);

    ctx.restore();
  };

  AdventureWorldCore.prototype.renderClouds = function (ctx, w, h) {
    ctx.fillStyle = 'rgba(255, 245, 235, 0.75)';
    for (var i = 0; i < this.clouds.length; i++) {
      var c = this.clouds[i];
      c.x += c.speed;
      if (c.x > w + 120) c.x = -120;
      var drawX = c.x - this.cameraX * 0.15;
      ctx.fillRect(drawX, c.y, c.w, c.h);
      ctx.fillRect(drawX + 8, c.y - 6, c.w - 16, 6);
      ctx.fillRect(drawX + 12, c.y + c.h, c.w - 24, 5);
    }
  };

  AdventureWorldCore.prototype.renderParallaxHills = function (ctx, w, h, stage) {
    for (var i = 0; i < stage.parallaxHills.length; i++) {
      var hill = stage.parallaxHills[i];
      ctx.fillStyle = hill.color;
      ctx.beginPath();
      var baseY = h * hill.yRatio;
      ctx.moveTo(0, baseY);

      var step = hill.sharp ? 30 : 50;
      for (var x = -100; x <= w + 100; x += step) {
        var shiftedX = x + this.cameraX * hill.speed;
        var yOffset = Math.sin(shiftedX * 0.015) * hill.amplitude;
        if (hill.sharp) {
          yOffset = Math.abs(Math.sin(shiftedX * 0.02)) * -hill.amplitude * 1.4;
        }
        ctx.lineTo(x, baseY + yOffset);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();
    }
  };

  AdventureWorldCore.prototype.renderGround = function (ctx, w, h, stage, groundY) {
    if (stage.isFloatingIslands) {
      // Stage 5 Floating Sky Islands
      ctx.fillStyle = stage.groundColor;
      for (var ix = 40; ix < w + 200; ix += 260) {
        var islandX = ix - this.cameraX * 0.5;
        ctx.beginPath();
        ctx.ellipse(islandX, groundY + 15, 110, 24, 0, 0, Math.PI * 2);
        ctx.fill();
        // Lower island rock core
        ctx.fillStyle = '#251b4e';
        ctx.beginPath();
        ctx.moveTo(islandX - 85, groundY + 18);
        ctx.lineTo(islandX, groundY + 75);
        ctx.lineTo(islandX + 85, groundY + 18);
        ctx.fill();
        ctx.fillStyle = stage.groundColor;
      }
    } else {
      // Standard Ground
      ctx.fillStyle = stage.groundColor;
      ctx.fillRect(0, groundY, w, h - groundY);

      // Grass fringe
      ctx.fillStyle = stage.groundFringe;
      for (var gx = 0; gx < w; gx += 8) {
        var gh = (gx % 16 === 0) ? 5 : 3;
        ctx.fillRect(gx, groundY - gh, 6, gh);
      }

      // Cobblestone or path
      ctx.fillStyle = stage.pathColor;
      ctx.fillRect(0, groundY + 18, w, 14);
      if (stage.cobblestone) {
        ctx.fillStyle = '#4a3b32';
        for (var cx = 0; cx < w; cx += 18) {
          ctx.fillRect(cx, groundY + 22, 12, 6);
        }
      }
    }
  };

  AdventureWorldCore.prototype.renderStageScenery = function (ctx, w, h, stage, groundY) {
    var self = this;
    var cam = this.cameraX;

    if (stage.id === 1) {
      // Meadow: Cottage on left, trees on right
      this.drawCottage(ctx, 40 - cam * 0.7, groundY - 76);
      this.drawPixelTree(ctx, 290 - cam * 0.7, groundY - 68, '#3a6642');
      this.drawPixelTree(ctx, w - 120 - cam * 0.7, groundY - 74, '#2d5335');
    } else if (stage.id === 2) {
      // Whispering Woods: Glowing mushrooms & ancient willow
      this.drawWillowTree(ctx, 80 - cam * 0.7, groundY - 88);
      this.drawGlowingMushroom(ctx, 260 - cam * 0.7, groundY - 26, '#00f5d4');
      this.drawGlowingMushroom(ctx, 300 - cam * 0.7, groundY - 18, '#f72585');
      this.drawPixelTree(ctx, w - 90 - cam * 0.7, groundY - 78, '#1e382b');
    } else if (stage.id === 3) {
      // Crystal Highlands: Crystal spikes & waterfall
      this.drawCrystalSpire(ctx, 110 - cam * 0.7, groundY - 75, '#4cc9f0');
      this.drawCrystalSpire(ctx, 145 - cam * 0.7, groundY - 50, '#caf0f8');
      this.drawCrystalSpire(ctx, w - 160 - cam * 0.7, groundY - 80, '#00b4d8');
    } else if (stage.id === 4) {
      // Ancient Kingdom: Stone archway & Citadel Towers
      this.drawCitadelTower(ctx, 70 - cam * 0.7, groundY - 95);
      this.drawStoneArch(ctx, w - 190 - cam * 0.7, groundY - 78);
    } else if (stage.id === 5) {
      // Celestial Sanctuary: Monolith shrine & astral star pillar
      this.drawCelestialMonolith(ctx, 100 - cam * 0.7, groundY - 85);
      this.drawCelestialMonolith(ctx, w - 140 - cam * 0.7, groundY - 105);
    }
  };

  /* Pixel Drawing Helpers */
  AdventureWorldCore.prototype.drawCottage = function (ctx, x, y) {
    ctx.fillStyle = '#6b4632';
    ctx.fillRect(x + 44, y - 22, 14, 26);
    ctx.fillStyle = '#b85437';
    ctx.beginPath();
    ctx.moveTo(x - 12, y + 24);
    ctx.lineTo(x + 50, y - 28);
    ctx.lineTo(x + 112, y + 24);
    ctx.fill();
    ctx.fillStyle = '#faeed7';
    ctx.fillRect(x, y + 26, 100, 48);
    ctx.fillStyle = '#694833';
    ctx.fillRect(x + 16, y + 42, 20, 32);
    ctx.fillStyle = '#ffdf78';
    ctx.fillRect(x + 62, y + 38, 22, 22);
  };

  AdventureWorldCore.prototype.drawPixelTree = function (ctx, x, y, foliageColor) {
    ctx.fillStyle = '#5c3e2e';
    ctx.fillRect(x + 14, y + 36, 12, 34);
    ctx.fillStyle = foliageColor;
    ctx.fillRect(x - 6, y + 20, 52, 22);
    ctx.fillRect(x, y + 4, 40, 20);
    ctx.fillRect(x + 6, y - 10, 28, 18);
  };

  AdventureWorldCore.prototype.drawWillowTree = function (ctx, x, y) {
    ctx.fillStyle = '#3a2c27';
    ctx.fillRect(x + 22, y + 34, 18, 52);
    ctx.fillStyle = '#285844';
    ctx.fillRect(x - 14, y + 6, 90, 34);
    ctx.fillStyle = '#3e7c64';
    for (var i = 0; i < 70; i += 12) {
      ctx.fillRect(x - 10 + i, y + 36, 6, 26 + (i % 8) * 2);
    }
  };

  AdventureWorldCore.prototype.drawGlowingMushroom = function (ctx, x, y, glowColor) {
    ctx.fillStyle = '#faeed7';
    ctx.fillRect(x + 8, y + 10, 8, 16);
    ctx.fillStyle = glowColor;
    ctx.beginPath();
    ctx.arc(x + 12, y + 10, 16, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 6, y + 4, 3, 3);
    ctx.fillRect(x + 14, y + 2, 4, 4);
  };

  AdventureWorldCore.prototype.drawCrystalSpire = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + 12, y - 18);
    ctx.lineTo(x + 24, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 9, y, 3, 24);
  };

  AdventureWorldCore.prototype.drawCitadelTower = function (ctx, x, y) {
    ctx.fillStyle = '#5c544e';
    ctx.fillRect(x, y + 10, 48, 85);
    ctx.fillStyle = '#7a7068';
    ctx.fillRect(x - 4, y, 56, 12);
    ctx.fillStyle = '#d00000';
    ctx.fillRect(x + 18, y - 20, 12, 14);
  };

  AdventureWorldCore.prototype.drawStoneArch = function (ctx, x, y) {
    ctx.fillStyle = '#5c544e';
    ctx.fillRect(x, y, 16, 75);
    ctx.fillRect(x + 60, y, 16, 75);
    ctx.fillRect(x, y, 76, 18);
    ctx.fillStyle = '#ffba08';
    ctx.fillRect(x + 34, y + 24, 8, 8);
  };

  AdventureWorldCore.prototype.drawCelestialMonolith = function (ctx, x, y) {
    ctx.fillStyle = '#e0c9ff';
    ctx.fillRect(x + 10, y, 22, 85);
    ctx.fillStyle = '#f72585';
    ctx.fillRect(x + 17, y + 15, 8, 8);
    ctx.fillRect(x + 17, y + 38, 8, 8);
  };

  /* Milestone Chest Rendering */
  AdventureWorldCore.prototype.renderMilestoneChest = function (ctx, w, h, stage, groundY) {
    var self = this;
    var chestX = w * 0.78 - this.cameraX * 0.7;
    var chestY = groundY - 24;

    var chestObj = Config.milestoneChests.find(function (c) { return c.stage === stage.id; });
    var isClaimed = chestObj && !!self.state.claimedChests[chestObj.id];

    // Pulsing aura if ready to open
    if (chestObj && self.progress.overallPct >= chestObj.pct && !isClaimed) {
      ctx.fillStyle = 'rgba(255, 214, 104, ' + (0.3 + Math.sin(this.hero.bobTimer * 3) * 0.2) + ')';
      ctx.beginPath();
      ctx.arc(chestX + 12, chestY + 10, 20, 0, Math.PI * 2);
      ctx.fill();
    }

    // Chest Body
    ctx.fillStyle = isClaimed ? '#6d4c3d' : '#8b5a2b';
    ctx.fillRect(chestX, chestY, 24, 18);
    // Trim / Lock
    ctx.fillStyle = '#e5a93c';
    ctx.fillRect(chestX, chestY + 6, 24, 3);
    ctx.fillRect(chestX + 10, chestY + 8, 4, 4);

    // Indicator flag above chest
    ctx.font = '10px sans-serif';
    ctx.fillText(isClaimed ? '✓' : (chestObj ? chestObj.icon : '🎁'), chestX + 6, chestY - 6);
  };

  /* Companion Follower Rendering */
  AdventureWorldCore.prototype.renderCompanion = function (ctx, groundY) {
    var self = this;
    var comp = Config.companions.find(function (c) { return c.id === self.state.activeCompanionId; });
    if (!comp) return;

    var cx = this.hero.x - this.cameraX + comp.offset.x * this.hero.dir;
    var cy = groundY - 24 + comp.offset.y + (comp.type === 'flying' ? Math.sin(this.hero.bobTimer * 2) * 4 : 0);

    ctx.save();
    ctx.fillStyle = comp.color;
    ctx.fillRect(cx, cy, 10, 10);
    ctx.fillStyle = comp.accentColor;
    ctx.fillRect(cx + 2, cy + 2, 4, 4);

    // Companion wings/ears
    if (comp.type === 'flying') {
      ctx.fillStyle = comp.accentColor;
      ctx.fillRect(cx - 3, cy + 1, 3, 4);
    }
    ctx.restore();
  };

  /* Character Adventurer Sprite Rendering */
  AdventureWorldCore.prototype.renderHero = function (ctx, groundY) {
    var tier = this.getCurrentTier();
    var hx = this.hero.x - this.cameraX;
    var hy = groundY - 32 + (this.hero.state === 'walk' ? Math.sin(this.hero.animStep * 3) * 2.5 : Math.sin(this.hero.bobTimer) * 1.2);

    if (this.hero.state === 'celebrate') {
      hy -= Math.abs(Math.sin(this.hero.cheerTimer * 0.2)) * 14;
    }

    // Character Shadow
    ctx.fillStyle = 'rgba(30, 20, 14, 0.35)';
    ctx.beginPath();
    ctx.ellipse(hx + 8, groundY - 2, 10, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Aura if unlocked
    if (tier.auraColor) {
      ctx.fillStyle = tier.auraColor;
      ctx.beginPath();
      ctx.arc(hx + 8, hy + 12, 18 + Math.sin(this.hero.bobTimer * 4) * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.save();
    if (this.hero.dir === -1) {
      ctx.translate(hx + 16, hy);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(hx, hy);
    }

    // Cape
    if (tier.capeColor) {
      ctx.fillStyle = tier.capeColor;
      ctx.fillRect(-2, 14, 5, 12);
    }

    // Boots
    ctx.fillStyle = '#4a2f20';
    ctx.fillRect(2, 26, 5, 4);
    ctx.fillRect(9, 26, 5, 4);

    // Robe / Tunic
    ctx.fillStyle = tier.robeColor;
    ctx.fillRect(2, 14, 12, 13);
    ctx.fillStyle = tier.trimColor;
    ctx.fillRect(2, 19, 12, 2);

    // Head / Face
    ctx.fillStyle = tier.skinColor;
    ctx.fillRect(3, 6, 10, 8);

    // Eye
    ctx.fillStyle = '#2b1d15';
    ctx.fillRect(9, 8, 2, 2);

    // Wizard/Scholar Hat or Crown
    ctx.fillStyle = tier.hatColor;
    ctx.fillRect(1, 4, 14, 4);
    ctx.fillRect(4, -3, 8, 7);
    ctx.fillStyle = tier.trimColor;
    ctx.fillRect(6, -6, 4, 4);

    // Halo (PRO)
    if (tier.hasHalo) {
      ctx.fillStyle = '#ffe066';
      ctx.fillRect(3, -11, 10, 2);
    }

    // Staff or Weapon
    if (tier.staffColor) {
      ctx.fillStyle = tier.staffColor;
      ctx.fillRect(13, 8, 2, 20);
      ctx.fillStyle = tier.trimColor;
      ctx.fillRect(12, 6, 4, 4);
    }

    ctx.restore();
  };

  /* Ambient Particle Simulation */
  AdventureWorldCore.prototype.renderAmbientParticles = function (ctx, w, h, stage) {
    if (this.ambientParticles.length < 24) {
      this.ambientParticles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -0.2 - Math.random() * 0.6,
        size: Math.random() * 2.5 + 1,
        color: stage.ambientParticles === 'petals' ? '#ffccd5' :
               stage.ambientParticles === 'fireflies' ? '#a7ffeb' :
               stage.ambientParticles === 'crystal_sparks' ? '#caf0f8' :
               stage.ambientParticles === 'embers' ? '#f4a261' : '#f72585',
        life: 100 + Math.random() * 80
      });
    }

    for (var i = this.ambientParticles.length - 1; i >= 0; i--) {
      var p = this.ambientParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      if (p.life <= 0 || p.y < -10) {
        this.ambientParticles.splice(i, 1);
      }
    }
  };

  /* Cleanup */
  AdventureWorldCore.prototype.destroy = function () {
    this.stopLoop();
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    if (this.container) {
      this.container.innerHTML = '';
      this.container.classList.remove('adventure-world-root');
    }
    instance = null;
  };

  /* Singleton API Access */
  return {
    getInstance: function () {
      if (!instance) instance = new AdventureWorldCore();
      return instance;
    },
    init: function (targetContainer) {
      var engine = this.getInstance();
      return engine.init(targetContainer);
    },
    updateProgress: function (data) {
      if (instance) instance.updateProgress(data);
    },
    updateFromCozyQuest: function (state, subjects) {
      if (instance) instance.updateFromCozyQuest(state, subjects);
    },
    destroy: function () {
      if (instance) instance.destroy();
    }
  };
}));