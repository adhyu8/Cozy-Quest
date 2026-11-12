/**
 * COZY QUEST — WORLD ENGINE CONFIGURATION
 * Independent configuration module for stages, tiers, loot, and checkpoints.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AdventureWorldConfig = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return {
    storageKey: 'cozyQuest.world.state',

    // Academic completion percentage thresholds (0 to 100%)
    stages: [
      {
        id: 1,
        code: 'STAGE_1_MEADOW',
        name: 'The Forgotten Meadow',
        subtitle: 'A peaceful starting haven with whispering winds',
        range: [0, 19],
        sky: { top: '#5c7bb5', mid: '#8da7cf', bottom: '#fad794' },
        sun: { color: '#fffae0', glow: 'rgba(255, 250, 224, 0.3)', radius: 24, yRatio: 0.45 },
        groundColor: '#7ca86b',
        groundFringe: '#94c27f',
        pathColor: '#c8ad8d',
        parallaxHills: [
          { color: '#6d8a77', speed: 0.1, yRatio: 0.62, amplitude: 20 },
          { color: '#4c6c54', speed: 0.25, yRatio: 0.72, amplitude: 14 }
        ],
        elements: ['cottage', 'oak_trees', 'field_flowers', 'butterflies'],
        ambientParticles: 'petals',
        checkpointName: 'Meadow Hearth',
        checkpointIcon: '🏡'
      },
      {
        id: 2,
        code: 'STAGE_2_WOODS',
        name: 'The Whispering Woods',
        subtitle: 'Dense twilight grove illuminated by magical spores',
        range: [20, 39],
        sky: { top: '#1e2440', mid: '#363d6b', bottom: '#7d618d' },
        sun: { color: '#e8dcff', glow: 'rgba(200, 180, 255, 0.25)', radius: 20, yRatio: 0.35, isMoon: true },
        groundColor: '#3a523b',
        groundFringe: '#4c6e4e',
        pathColor: '#5c4d3c',
        parallaxHills: [
          { color: '#27382e', speed: 0.1, yRatio: 0.60, amplitude: 24 },
          { color: '#1a261f', speed: 0.25, yRatio: 0.70, amplitude: 18 }
        ],
        elements: ['glowing_mushrooms', 'ancient_willows', 'hollow_stump', 'fireflies'],
        ambientParticles: 'fireflies',
        checkpointName: 'Moonlit Grove',
        checkpointIcon: '🍄'
      },
      {
        id: 3,
        code: 'STAGE_3_HIGHLANDS',
        name: 'The Crystal Highlands',
        subtitle: 'Breathtaking peaks carved with glowing azure geodes',
        range: [40, 59],
        sky: { top: '#1c3144', mid: '#2b5974', bottom: '#e09f67' },
        sun: { color: '#fff3db', glow: 'rgba(255, 230, 180, 0.35)', radius: 26, yRatio: 0.40 },
        groundColor: '#5b6b66',
        groundFringe: '#778a84',
        pathColor: '#8a7968',
        parallaxHills: [
          { color: '#3d4b4a', speed: 0.1, yRatio: 0.55, amplitude: 35, sharp: true },
          { color: '#2b3635', speed: 0.25, yRatio: 0.68, amplitude: 22, sharp: true }
        ],
        elements: ['crystal_clusters', 'waterfalls', 'stone_cairns', 'crystal_sparkles'],
        ambientParticles: 'crystal_sparks',
        checkpointName: 'Azure Spire',
        checkpointIcon: '💎'
      },
      {
        id: 4,
        code: 'STAGE_4_KINGDOM',
        name: 'The Ancient Kingdom',
        subtitle: 'Stately medieval bridges, stone towers, and forgotten banners',
        range: [60, 79],
        sky: { top: '#3b234a', mid: '#7a3e5c', bottom: '#e08352' },
        sun: { color: '#ffe4b5', glow: 'rgba(255, 210, 140, 0.3)', radius: 28, yRatio: 0.42 },
        groundColor: '#635343',
        groundFringe: '#786653',
        pathColor: '#a8947f',
        cobblestone: true,
        parallaxHills: [
          { color: '#4a333d', speed: 0.1, yRatio: 0.58, amplitude: 18 },
          { color: '#33212a', speed: 0.25, yRatio: 0.70, amplitude: 12 }
        ],
        elements: ['castle_towers', 'stone_archways', 'heraldic_banners', 'wall_torches'],
        ambientParticles: 'embers',
        checkpointName: 'Citadel Gate',
        checkpointIcon: '🏰'
      },
      {
        id: 5,
        code: 'STAGE_5_SANCTUARY',
        name: 'The Celestial Sanctuary',
        subtitle: 'Floating cosmic islands adorned with celestial shrines',
        range: [80, 100],
        sky: { top: '#0b0c2a', mid: '#251b4e', bottom: '#834c89' },
        sun: { color: '#ffffff', glow: 'rgba(240, 220, 255, 0.45)', radius: 32, yRatio: 0.30, isSupernova: true },
        groundColor: '#43346b',
        groundFringe: '#654f9c',
        pathColor: '#e0c9ff',
        isFloatingIslands: true,
        parallaxHills: [
          { color: '#20163b', speed: 0.1, yRatio: 0.54, amplitude: 28, floating: true },
          { color: '#130c24', speed: 0.25, yRatio: 0.66, amplitude: 20, floating: true }
        ],
        elements: ['floating_monoliths', 'astral_temple', 'cosmic_rifts', 'shooting_stars'],
        ambientParticles: 'stardust',
        checkpointName: 'Cosmic Throne',
        checkpointIcon: '👑'
      }
    ],

    // Character evolution models
    characterTiers: [
      {
        id: 'rookie',
        title: 'Rookie Adventurer',
        minPct: 0,
        robeColor: '#4361ee',
        trimColor: '#e5a93c',
        hatColor: '#3042a6',
        skinColor: '#ffd1a4',
        capeColor: null,
        auraColor: null,
        staffColor: null,
        accessory: 'small_backpack'
      },
      {
        id: 'explorer',
        title: 'Grove Explorer',
        minPct: 20,
        robeColor: '#2a9d8f',
        trimColor: '#e76f51',
        hatColor: '#264653',
        skinColor: '#ffd1a4',
        capeColor: '#e76f51',
        auraColor: null,
        staffColor: '#8b5a2b',
        accessory: 'lantern'
      },
      {
        id: 'highlander',
        title: 'Highland Spellblade',
        minPct: 40,
        robeColor: '#3a86ff',
        trimColor: '#00f5d4',
        hatColor: '#1d3557',
        skinColor: '#ffd1a4',
        capeColor: '#457b9d',
        auraColor: 'rgba(0, 245, 212, 0.35)',
        staffColor: '#00f5d4',
        accessory: 'crystal_blade'
      },
      {
        id: 'knight',
        title: 'Citadel Master Scholar',
        minPct: 60,
        robeColor: '#9d0208',
        trimColor: '#ffba08',
        hatColor: '#370617',
        skinColor: '#ffd1a4',
        capeColor: '#d00000',
        auraColor: 'rgba(255, 186, 8, 0.45)',
        staffColor: '#ffd166',
        accessory: 'royal_crest'
      },
      {
        id: 'celestial_pro',
        title: 'Celestial Archon (PRO)',
        minPct: 80,
        robeColor: '#7209b7',
        trimColor: '#f72585',
        hatColor: '#3a0ca3',
        skinColor: '#ffd1a4',
        capeColor: '#4cc9f0',
        auraColor: 'rgba(247, 37, 133, 0.65)',
        staffColor: '#4cc9f0',
        accessory: 'celestial_crown',
        hasHalo: true,
        hasWings: true
      }
    ],

    // Companions unlocked via milestone achievements
    companions: [
      {
        id: 'robin',
        name: 'Pip the Robin',
        stageRequired: 1,
        color: '#e76f51',
        accentColor: '#264653',
        type: 'flying',
        offset: { x: -28, y: -26 },
        dialogue: 'Chirp! A cozy day to study!'
      },
      {
        id: 'fox',
        name: 'Rusty the Forest Fox',
        stageRequired: 2,
        color: '#f4a261',
        accentColor: '#ffffff',
        type: 'ground',
        offset: { x: -32, y: 4 },
        dialogue: 'Yip! Knowledge is sharper than claws.'
      },
      {
        id: 'golem',
        name: 'Quartz the Crystal Golem',
        stageRequired: 3,
        color: '#00b4d8',
        accentColor: '#caf0f8',
        type: 'ground',
        offset: { x: -36, y: 2 },
        dialogue: '*Huuuum!* Solid minds break hard problems.'
      },
      {
        id: 'griffin',
        name: 'Aurelius the Griffin Cub',
        stageRequired: 4,
        color: '#e0a96d',
        accentColor: '#774936',
        type: 'ground',
        offset: { x: -34, y: 0 },
        dialogue: 'Screeech! Honor to the Citadel Scholar!'
      },
      {
        id: 'phoenix',
        name: 'Cosmo the Astral Phoenix',
        stageRequired: 5,
        color: '#f72585',
        accentColor: '#4cc9f0',
        type: 'flying',
        offset: { x: -32, y: -30 },
        dialogue: 'Praise the Celestial Archon! The exam is conquered!'
      }
    ],

    // Milestone treasure chests spawned along the path
    milestoneChests: [
      {
        id: 'chest_stage_1',
        pct: 10,
        title: 'Explorer Supplies',
        icon: '🧰',
        stage: 1,
        rewardText: 'Bronze Scholar Pin & Pip the Robin companion unlocked!',
        companionId: 'robin'
      },
      {
        id: 'chest_stage_2',
        pct: 25,
        title: 'Druid Sylvan Chest',
        icon: '🍄',
        stage: 2,
        rewardText: 'Lantern of Clarity & Rusty the Fox companion unlocked!',
        companionId: 'fox'
      },
      {
        id: 'chest_stage_3',
        pct: 50,
        title: 'Midpoint Crystal Cache',
        icon: '💎',
        stage: 3,
        rewardText: 'Crystal Blade & Quartz the Golem unlocked (Semester Midpoint Achieved)!',
        companionId: 'golem'
      },
      {
        id: 'chest_stage_4',
        pct: 75,
        title: 'Citadel Royal Reliquary',
        icon: '🛡️',
        stage: 4,
        rewardText: 'Royal Citadel Crest & Aurelius the Griffin companion unlocked!',
        companionId: 'griffin'
      },
      {
        id: 'chest_stage_5',
        pct: 100,
        title: 'Celestial Grand Monolith',
        icon: '👑',
        stage: 5,
        rewardText: 'Celestial Crown, Astral Phoenix & PRO Archon Aura unlocked!',
        companionId: 'phoenix'
      }
    ]
  };
}));