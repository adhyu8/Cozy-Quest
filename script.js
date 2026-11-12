/* ==========================================================================
   1. KTU S3 SYLLABUS DATA (INCLUDING LABS WITH CORRECTED TOPICS)
   ========================================================================== */
const SUBJECTS_DATA = [
  {
    id: "GAMAT301",
    name: "Mathematics for Information Science–3",
    code: "GAMAT301",
    type: "theory",
    icon: "📐",
    topics: [
      "Random variables — discrete and continuous",
      "PMF, PDF and CDF",
      "Finding unknown constants in distributions",
      "Expectation and variance",
      "Bernoulli and Binomial distributions",
      "Poisson distribution",
      "Poisson approximation to Binomial",
      "Uniform distribution",
      "Exponential distribution",
      "Normal distribution and Z-table",
      "Joint distributions",
      "Marginal distributions",
      "Independence of random variables",
      "Stochastic processes — definition and classification",
      "Markov inequality",
      "Chebyshev inequality",
      "Central Limit Theorem (CLT)",
      "Weak Law of Large Numbers",
      "Poisson process and properties",
      "Interarrival and waiting-time problems",
      "Markov chains",
      "Transition probability matrices",
      "State diagrams",
      "n-step transition probabilities",
      "Chapman–Kolmogorov equations",
      "Classification of states",
      "Irreducible Markov chains",
      "Steady-state probabilities",
      "Random walks"
    ]
  },
  {
    id: "PCAIT302",
    name: "Foundations of Artificial Intelligence",
    code: "PCAIT302",
    type: "theory",
    icon: "🤖",
    topics: [
      "Introduction, history and applications of AI",
      "Intelligent agents",
      "Rational agents",
      "PEAS representation",
      "Types of agents",
      "Agent architectures",
      "Problem formulation and state-space search",
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "Uniform-Cost Search",
      "Depth-Limited Search",
      "Iterative Deepening Search",
      "Heuristics and informed search",
      "Greedy Best-First Search",
      "A* algorithm",
      "AO* algorithm",
      "Minimax algorithm",
      "Alpha–Beta pruning",
      "Constraint Satisfaction Problems (CSP)",
      "Knowledge-based agents",
      "Wumpus World",
      "Propositional logic",
      "First-Order Logic (FOL)",
      "Unification",
      "Forward chaining",
      "Backward chaining"
    ]
  },
  {
    id: "PCCST303",
    name: "Data Structures and Algorithms",
    code: "PCCST303",
    type: "theory",
    icon: "🌲",
    topics: [
      "Time and space complexity",
      "Big O, Omega and Theta notations",
      "Arrays and array operations",
      "Polynomial representation and addition",
      "Sparse matrix representation and transpose",
      "Stacks and applications",
      "Infix, postfix and prefix expressions",
      "Queues",
      "Circular queues",
      "Deques",
      "Singly linked lists",
      "Doubly linked lists",
      "Circular linked lists",
      "Dynamic memory allocation",
      "Trees and tree terminology",
      "Binary trees",
      "Tree traversals",
      "Binary Search Trees (BST)",
      "Expression trees",
      "Heaps",
      "Priority queues",
      "Graph representation",
      "Graph BFS and DFS",
      "Linear and binary search",
      "Bubble, selection and insertion sort",
      "Merge sort",
      "Quick sort",
      "Hashing and collision handling"
    ]
  },
  {
    id: "PBADT304",
    name: "Introduction to Data Science",
    code: "PBADT304",
    type: "theory",
    icon: "📊",
    topics: [
      "Data Science lifecycle",
      "Applications of Data Science",
      "Types of data",
      "Data collection",
      "AI vs ML vs Deep Learning",
      "Data ethics and privacy",
      "Matrices and basic linear algebra",
      "Singular Value Decomposition (SVD)",
      "Principal Component Analysis (PCA)",
      "Descriptive statistics",
      "Data visualisation",
      "Sampling techniques",
      "Probability distributions",
      "Data cleaning",
      "Missing-value handling",
      "Data integration",
      "Data reduction",
      "Data transformation",
      "Exploratory Data Analysis (EDA)",
      "Statistical modelling",
      "Hypothesis testing",
      "Correlation and regression",
      "Classification",
      "Confusion matrix",
      "Accuracy, precision, recall and F1-score",
      "ROC curve and AUC",
      "t-test",
      "Decision trees",
      "Random forests",
      "Feature selection"
    ]
  },
  {
    id: "GAEST305",
    name: "Digital Electronics and Logic Design",
    code: "GAEST305",
    type: "theory",
    icon: "⚡",
    topics: [
      "Number systems and conversions",
      "Binary arithmetic",
      "1's and 2's complements",
      "Signed and unsigned numbers",
      "Fixed-point representation",
      "Floating-point representation",
      "Logic gates and truth tables",
      "Boolean algebra",
      "Boolean simplification",
      "SOP and POS forms",
      "Minterms and maxterms",
      "Karnaugh maps (K-maps)",
      "Don't-care conditions",
      "Code converters",
      "Combinational circuit design",
      "Decoders and encoders",
      "Multiplexers and demultiplexers",
      "Adders and subtractors",
      "Comparators",
      "Verilog HDL basics",
      "Verilog modules",
      "Verilog testbenches",
      "Latches and flip-flops",
      "Sequential circuits",
      "Finite State Machines (FSM)",
      "State diagrams and state tables"
    ]
  },
  {
    id: "UCHUT346",
    name: "Economics for Engineers",
    code: "UCHUT346",
    type: "theory",
    icon: "🪙",
    topics: [
      "Introduction to engineering economics",
      "Production Possibility Curve (PPC)",
      "Utility and consumer behaviour",
      "Demand and supply",
      "Market equilibrium",
      "Price elasticity of demand and supply",
      "Production functions",
      "Returns to scale",
      "Cobb–Douglas production function",
      "Fixed and variable costs",
      "Average and marginal costs",
      "Revenue and profit",
      "Opportunity cost",
      "Sunk cost",
      "Break-even analysis",
      "Perfect competition",
      "Monopoly",
      "National income",
      "Inflation",
      "Monetary policy",
      "Fiscal policy",
      "Repo and reverse repo rates",
      "Value analysis",
      "Value engineering"
    ]
  },
  {
    id: "PCCSL307",
    name: "Data Structures Lab",
    code: "PCCSL307",
    type: "lab",
    icon: "🧪",
    topics: [
      "Polynomial addition using arrays",
      "Transpose of a sparse matrix",
      "Addition of a sparse matrix",
      "Infix to postfix conversion and evaluation",
      "Linear queue using arrays",
      "Circular queue using arrays",
      "Circular queue implementation",
      "Binary search in a sorted array using C",
      "Bubble sort",
      "Insertion sort",
      "Radix sort",
      "Quick sort",
      "Merge sort",
      "Merging two sorted lists using a min heap",
      "Implementing find and replace feature in a text editor in C",
      "Heap sort",
      "Hashing",
      "Binary search tree",
      "Expression tree — prefix and postfix to infix conversion"
    ]
  },
  {
    id: "PCCDL308",
    name: "Python and Statistical Modelling Lab",
    code: "PCCDL308",
    type: "lab",
    icon: "🐍",
    topics: [
      "Largest of three numbers",
      "Program to print the multiplication table",
      "Surface area and volume of a cylinder",
      "Replace a word with another word in a sentence",
      "Validate an email ID",
      "Remove every occurrence of a number from a list",
      "Matrix addition",
      "Print even and odd tuple",
      "Dictionary methods",
      "Files and operations",
      "Text file analysis",
      "Plot a graph y = f(x)",
      "Bar chart representation",
      "Draw a histogram",
      "Computation of mean, median and population variance",
      "Standard deviation (SD) and coefficient of variation (CV)",
      "Problems based on Binomial and Poisson distributions",
      "Poisson distribution",
      "Chi-square test",
      "Pearson correlation coefficient",
      "One-sample t-test",
      "One-tailed one-sample t-test",
      "Prediction of systolic blood pressure"
    ]
  }
];

const LEVELS_TIERS = [
  { name: "Rookie", minXp: 0 },
  { name: "Learner", minXp: 100 },
  { name: "Explorer", minXp: 250 },
  { name: "Adventurer", minXp: 450 },
  { name: "Scholar", minXp: 700 },
  { name: "Expert", minXp: 1000 },
  { name: "Master", minXp: 1400 },
  { name: "PRO", minXp: 1900 }
];

const ACHIEVEMENTS_LIST = [
  { id: "first_quest", name: "First Quest", desc: "Complete your first topic", icon: "🌱" },
  { id: "getting_started", name: "Getting Started", desc: "Complete 10 topics", icon: "🎒" },
  { id: "consistent", name: "Consistent Explorer", desc: "Study on 3 different days", icon: "🔥" },
  { id: "halfway", name: "Halfway There", desc: "Reach 50% overall completion", icon: "🗺️" },
  { id: "subject_slayer", name: "Subject Slayer", desc: "Complete one entire subject", icon: "⚔️" },
  { id: "lab_apprentice", name: "Lab Apprentice", desc: "Complete 10 lab experiments", icon: "🧪" },
  { id: "master_all", name: "Master of All", desc: "Complete every single subject", icon: "🌟" },
  { id: "pro_player", name: "PRO Player", desc: "Reach 1,900 XP", icon: "👑" }
];

const VERIFIED_KTU_RESOURCES = [
  {
    title: "Official KTU Academic Regulations & Curriculum",
    code: "KTU-REG",
    type: "Regulations",
    source: "APJ Abdul Kalam Technological University",
    url: "https://ktu.edu.in/eu/acd/academicRegulations.htm",
    desc: "Official university academic curriculum and evaluation schemes."
  },
  {
    title: "GAMAT301 — University Question Bank & Syllabus",
    code: "GAMAT301",
    type: "PYQ / Syllabus",
    source: "KTU Student Portal",
    url: "https://app.ktu.edu.in/",
    desc: "Official university question papers and model schemes."
  },
  {
    title: "PCCST303 — Data Structures Curated Question Archive",
    code: "PCCST303",
    type: "PYQ",
    source: "KTUNotes Public Hub",
    url: "https://www.ktunotes.in/",
    desc: "Previous university question collections for Data Structures."
  },
  {
    title: "GAEST305 — Digital Electronics Logic & K-Map Guides",
    code: "GAEST305",
    type: "Notes",
    source: "KTUWeb Educational Archives",
    url: "https://ktuweb.com/",
    desc: "Comprehensive modules on Boolean algebra and combinational circuits."
  }
];

/* ==========================================================================
   2. INDEXEDDB PERSISTENCE LAYER & STORAGE ENGINE
   ========================================================================== */
const DB_NAME = "CozyQuestS3_DB";
const DB_VERSION = 1;
let dbInstance = null;

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (dbInstance) return resolve(dbInstance);
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("keyval")) {
        db.createObjectStore("keyval");
      }
      if (!db.objectStoreNames.contains("resources")) {
        const resStore = db.createObjectStore("resources", { keyPath: "id" });
        resStore.createIndex("subjectId", "subjectId", { unique: false });
      }
    };
    req.onsuccess = (e) => {
      dbInstance = e.target.result;
      resolve(dbInstance);
    };
    req.onerror = (e) => reject(e.target.error);
  });
}

async function idbGet(storeName, key) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbSet(storeName, key, value) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const req = store.put(value, key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function idbGetAll(storeName) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function idbPutResource(resObj) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("resources", "readwrite");
    const store = tx.objectStore("resources");
    const req = store.put(resObj);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function idbDeleteResource(id) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("resources", "readwrite");
    const store = tx.objectStore("resources");
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/* ==========================================================================
   3. APPLICATION STATE & PERSISTENCE
   ========================================================================== */
const STORAGE_KEY = "cozy_quest_ktu_s3_v3";

let state = {
  playerName: "Adventurer",
  avatar: "🧙‍♂️",
  completedTopics: {},
  subjectBonusAwarded: {},
  extraActivitiesXp: 0,
  activeDays: [],
  dailyQuestsDate: "",
  dailyQuests: { topics3: false, solve3: false, revise1: false, labProg: false },
  soundEnabled: true,
  lastLevelReached: "Rookie",
  proModalShown: false,
  lastSaveTimestamp: 0,
  lastBackupTimestamp: 0
};

let sessionTopicCredits = 0;
let undoHistory = [];
const MAX_UNDO_DEPTH = 30;

let backupDirectoryHandle = null;
let isBackupWriting = false;
let backupDebounceTimer = null;

function saveUndoSnapshot(description) {
  undoHistory.push({
    state: JSON.parse(JSON.stringify(state)),
    sessionCredits: sessionTopicCredits,
    desc: description
  });
  if (undoHistory.length > MAX_UNDO_DEPTH) undoHistory.shift();
  updateUndoButtonState();
}

function executeUndo() {
  if (undoHistory.length === 0) {
    showXPToast("Nothing to undo!");
    playSound('error');
    return;
  }
  const prev = undoHistory.pop();
  state = prev.state;
  sessionTopicCredits = prev.sessionCredits;
  
  saveAllData();
  renderApp();
  updateUndoButtonState();
  playSound('undo');
  showXPToast(`↩️ Undone: ${prev.desc}`);
  triggerSpeechBubble(`Reverted: ${prev.desc}`);
}

function updateUndoButtonState() {
  const badge = document.getElementById('undo-count-badge');
  const btn = document.getElementById('nav-undo-btn');
  if (badge && btn) {
    badge.textContent = undoHistory.length;
    btn.disabled = undoHistory.length === 0;
  }
}

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.error("Local storage load error", e);
  }
  checkDailyReset();
}

async function saveAllData() {
  state.lastSaveTimestamp = Date.now();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    await idbSet("keyval", "app_state", state);
  } catch (e) {
    console.error("Persistence error", e);
  }
  updateSaveTimestampUI();
  scheduleAutomaticFolderBackup();
}

function updateSaveTimestampUI() {
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('lbl-last-save').textContent = timeStr;
  document.getElementById('st-last-save-time').textContent = timeStr;
  document.getElementById('dot-local').className = "status-dot green";
}

function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

function checkDailyReset() {
  const today = getTodayString();
  if (state.dailyQuestsDate !== today) {
    state.dailyQuestsDate = today;
    state.dailyQuests = { topics3: false, solve3: false, revise1: false, labProg: false };
  }
}

function registerActivityDay() {
  const today = getTodayString();
  if (!state.activeDays.includes(today)) {
    state.activeDays.push(today);
  }
}

/* ==========================================================================
   4. AUTOMATIC BACKUP TO WINDOWS FOLDER (FILE SYSTEM ACCESS API)
   ========================================================================== */
async function restoreDirectoryHandle() {
  try {
    if (!('showDirectoryPicker' in window)) return;
    const savedHandle = await idbGet("keyval", "backup_folder_handle");
    if (savedHandle) {
      backupDirectoryHandle = savedHandle;
      updateFolderStatusUI(true, savedHandle.name);
    }
  } catch (err) {
    console.warn("Handle restore notice", err);
  }
}

async function requestBackupFolderPicker() {
  if (!('showDirectoryPicker' in window)) {
    alert("The File System Access API is supported in Chrome or Edge on Windows (over localhost or HTTPS). Use manual export below in other browsers.");
    return;
  }
  try {
    const handle = await window.showDirectoryPicker({ mode: "readwrite" });
    if (handle) {
      backupDirectoryHandle = handle;
      await idbSet("keyval", "backup_folder_handle", handle);
      updateFolderStatusUI(true, handle.name);
      playSound('quest_done');
      showXPToast("Backup folder connected!");
      triggerSpeechBubble("Backup folder linked! Auto-saving enabled.");
      performAutomaticBackup(true);
    }
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error("Folder picker error", err);
      showXPToast("Could not connect folder.");
    }
  }
}

async function verifyOrReconnectFolder() {
  if (!backupDirectoryHandle) {
    return requestBackupFolderPicker();
  }
  try {
    const query = await backupDirectoryHandle.queryPermission({ mode: "readwrite" });
    if (query === 'granted') {
      updateFolderStatusUI(true, backupDirectoryHandle.name);
      performAutomaticBackup(true);
    } else {
      const req = await backupDirectoryHandle.requestPermission({ mode: "readwrite" });
      if (req === 'granted') {
        updateFolderStatusUI(true, backupDirectoryHandle.name);
        performAutomaticBackup(true);
      } else {
        updateFolderStatusUI(false);
      }
    }
  } catch (e) {
    requestBackupFolderPicker();
  }
}

function updateFolderStatusUI(connected, folderName = "") {
  const dot = document.getElementById('dot-external');
  const lbl = document.getElementById('lbl-external-status');
  const stFolder = document.getElementById('st-folder-name');
  const recBtn = document.getElementById('btn-reconnect-folder');

  if (connected) {
    dot.className = "status-dot green";
    lbl.textContent = `Folder: ${folderName}`;
    stFolder.textContent = folderName;
    stFolder.style.color = "#3b7436";
    if (recBtn) recBtn.style.display = "none";
  } else {
    dot.className = "status-dot orange";
    lbl.textContent = "Folder: Permission Needed";
    stFolder.textContent = "Permission Needed";
    stFolder.style.color = "#d4a347";
    if (recBtn) recBtn.style.display = "inline-flex";
  }
}

function scheduleAutomaticFolderBackup() {
  if (!backupDirectoryHandle) return;
  if (backupDebounceTimer) clearTimeout(backupDebounceTimer);
  backupDebounceTimer = setTimeout(() => {
    performAutomaticBackup(false);
  }, 1500);
}

async function performAutomaticBackup(isManual = false) {
  if (!backupDirectoryHandle) {
    if (isManual) requestBackupFolderPicker();
    return;
  }
  if (isBackupWriting) return;

  try {
    isBackupWriting = true;
    const perm = await backupDirectoryHandle.queryPermission({ mode: "readwrite" });
    if (perm !== 'granted') {
      updateFolderStatusUI(false);
      isBackupWriting = false;
      return;
    }

    const resources = await idbGetAll("resources");
    const backupPayload = {
      version: 3,
      exportedAt: new Date().toISOString(),
      state: state,
      resourcesMeta: resources.map(r => ({
        id: r.id,
        subjectId: r.subjectId,
        title: r.title,
        category: r.category,
        module: r.module,
        type: r.type,
        url: r.url || "",
        fileName: r.fileName || "",
        fileSize: r.fileSize || 0,
        desc: r.desc || "",
        isFavorite: r.isFavorite || false,
        isRevised: r.isRevised || false
      }))
    };

    const jsonString = JSON.stringify(backupPayload, null, 2);

    const fileHandle = await backupDirectoryHandle.getFileHandle("cozy-quest-backup.json", { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(jsonString);
    await writable.close();

    try {
      const snapDir = await backupDirectoryHandle.getDirectoryHandle("snapshots", { create: true });
      const snapName = `backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const snapHandle = await snapDir.getFileHandle(snapName, { create: true });
      const snapWritable = await snapHandle.createWritable();
      await snapWritable.write(jsonString);
      await snapWritable.close();
    } catch (snapErr) {
      console.warn("Snapshot notice", snapErr);
    }

    state.lastBackupTimestamp = Date.now();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('st-last-backup-time').textContent = timeStr;
    document.getElementById('dot-external').className = "status-dot green";

    if (isManual) {
      playSound('quest_done');
      showXPToast("External folder backup updated!");
    }
  } catch (err) {
    console.error("Backup write failed", err);
    document.getElementById('dot-external').className = "status-dot orange";
  } finally {
    isBackupWriting = false;
  }
}

function triggerManualFullBackup() {
  if (backupDirectoryHandle) {
    performAutomaticBackup(true);
  } else {
    requestBackupFolderPicker();
  }
}

/* ==========================================================================
   5. 8-BIT AUDIO SYNTHESIZER
   ========================================================================== */
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'check') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'uncheck') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.11);
    } else if (type === 'undo') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.exponentialRampToValueAtTime(329.63, now + 0.18);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.21);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.setValueAtTime(110, now + 0.08);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.24);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'levelup') {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.type = 'square';
        noteOsc.frequency.value = freq;
        noteGain.gain.setValueAtTime(0.1, now + idx * 0.08);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);
        noteOsc.start(now + idx * 0.08);
        noteOsc.stop(now + idx * 0.08 + 0.22);
      });
    } else if (type === 'quest_done') {
      [523.25, 659.25, 783.99].forEach(freq => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.type = 'triangle';
        noteOsc.frequency.value = freq;
        noteGain.gain.setValueAtTime(0.12, now);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);
        noteOsc.start(now);
        noteOsc.stop(now + 0.36);
      });
    }
  } catch (err) {
    console.warn("Audio err", err);
  }
}

/* ==========================================================================
   6. XP & LEVELING CALCULATIONS
   ========================================================================== */
function calculateTotalXP() {
  let xp = state.extraActivitiesXp || 0;
  SUBJECTS_DATA.forEach(sub => {
    const itemXp = sub.type === "lab" ? 15 : 10;
    let subDoneCount = 0;
    sub.topics.forEach((_, idx) => {
      if (state.completedTopics[`${sub.id}:${idx}`]) {
        xp += itemXp;
        subDoneCount++;
      }
    });

    if (subDoneCount === sub.topics.length && sub.topics.length > 0) {
      xp += 100;
      state.subjectBonusAwarded[sub.id] = true;
    } else {
      delete state.subjectBonusAwarded[sub.id];
    }
  });
  return xp;
}

function getCurrentLevel(totalXp) {
  let currentTier = LEVELS_TIERS[0];
  for (let i = 0; i < LEVELS_TIERS.length; i++) {
    if (totalXp >= LEVELS_TIERS[i].minXp) currentTier = LEVELS_TIERS[i];
  }
  return currentTier;
}

function getNextLevel(currentLevelName) {
  const idx = LEVELS_TIERS.findIndex(l => l.name === currentLevelName);
  if (idx !== -1 && idx < LEVELS_TIERS.length - 1) return LEVELS_TIERS[idx + 1];
  return null;
}

function showXPToast(text) {
  const toast = document.getElementById('xp-toast');
  const toastText = document.getElementById('xp-toast-text');
  toastText.textContent = text;
  toast.classList.add('show');
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ==========================================================================
   7. 2D PIXEL-ART SCENE
   ========================================================================== */
const canvas = document.getElementById('world-canvas');
const ctx = canvas.getContext('2d');
let hero = { x: 140, y: 0, targetX: 140, dir: 1, animStep: 0, state: 'idle', bobTimer: 0 };
let clouds = [
  { x: 30, y: 30, speed: 0.22, w: 70, h: 22 },
  { x: 220, y: 55, speed: 0.15, w: 90, h: 26 },
  { x: 480, y: 20, speed: 0.28, w: 60, h: 20 },
  { x: 700, y: 45, speed: 0.18, w: 100, h: 28 }
];
let chimneySmoke = [];

function resizeCanvas() {
  const container = document.getElementById('world-container');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  hero.y = canvas.height - 52;
}
window.addEventListener('resize', resizeCanvas);

function drawPixelArtScene() {
  const w = canvas.width;
  const h = canvas.height;

  const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
  skyGrad.addColorStop(0, '#5c7bb5');
  skyGrad.addColorStop(0.35, '#8da7cf');
  skyGrad.addColorStop(0.7, '#f7b070');
  skyGrad.addColorStop(1, '#fad794');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#fffae0';
  ctx.beginPath();
  ctx.arc(w * 0.72, h * 0.45, 26, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 245, 235, 0.85)';
  clouds.forEach(c => {
    c.x += c.speed;
    if (c.x > w + 60) c.x = -120;
    ctx.fillRect(c.x, c.y, c.w, c.h);
    ctx.fillRect(c.x + 10, c.y - 8, c.w - 20, 8);
    ctx.fillRect(c.x + 15, c.y + c.h, c.w - 30, 6);
  });

  ctx.fillStyle = '#6d8a77';
  ctx.beginPath();
  ctx.moveTo(0, h * 0.65);
  for (let x = 0; x <= w; x += 60) {
    ctx.lineTo(x, h * 0.62 + Math.sin(x * 0.008) * 22);
  }
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.fill();

  const groundY = h - 45;
  ctx.fillStyle = '#7ca86b';
  ctx.fillRect(0, groundY, w, 45);

  ctx.fillStyle = '#94c27f';
  for (let gx = 0; gx < w; gx += 8) {
    const gh = (gx % 16 === 0) ? 5 : 3;
    ctx.fillRect(gx, groundY - gh, 6, gh);
  }

  const pondX = Math.max(w - 240, 360);
  ctx.fillStyle = '#4c8aa6';
  ctx.beginPath();
  ctx.ellipse(pondX + 90, groundY + 22, 80, 16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#89c8e2';
  ctx.fillRect(pondX + 50, groundY + 16, 24, 3);
  ctx.fillRect(pondX + 90, groundY + 24, 35, 3);

  drawCottage(40, groundY - 76);

  if (Math.random() < 0.06) {
    chimneySmoke.push({ x: 89, y: groundY - 96, size: 4, alpha: 0.8 });
  }
  for (let i = chimneySmoke.length - 1; i >= 0; i--) {
    const s = chimneySmoke[i];
    s.y -= 0.6;
    s.size += 0.05;
    s.alpha -= 0.008;
    ctx.fillStyle = `rgba(240, 240, 245, ${Math.max(0, s.alpha)})`;
    ctx.fillRect(s.x, s.y, s.size, s.size);
    if (s.alpha <= 0) chimneySmoke.splice(i, 1);
  }

  drawPixelTree(pondX - 45, groundY - 70);
  drawPixelTree(pondX + 180, groundY - 80);
  updateAndDrawHero(groundY);

  requestAnimationFrame(drawPixelArtScene);
}

function drawCottage(x, y) {
  ctx.fillStyle = '#6b4632';
  ctx.fillRect(x + 44, y - 22, 14, 26);
  ctx.fillStyle = '#4a2f20';
  ctx.fillRect(x + 42, y - 24, 18, 5);

  ctx.fillStyle = '#b85437';
  ctx.beginPath();
  ctx.moveTo(x - 12, y + 24);
  ctx.lineTo(x + 50, y - 28);
  ctx.lineTo(x + 112, y + 24);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#faeed7';
  ctx.fillRect(x, y + 28, 100, 48);
  ctx.fillStyle = '#694833';
  ctx.fillRect(x, y + 28, 6, 48);
  ctx.fillRect(x + 94, y + 28, 6, 48);

  ctx.fillStyle = '#543622';
  ctx.fillRect(x + 16, y + 42, 20, 34);
  ctx.fillStyle = '#ffdf78';
  ctx.fillRect(x + 62, y + 40, 22, 22);
}

function drawPixelTree(x, y) {
  ctx.fillStyle = '#5c3e2e';
  ctx.fillRect(x + 14, y + 36, 12, 34);
  ctx.fillStyle = '#3a6642';
  ctx.fillRect(x - 6, y + 20, 52, 22);
  ctx.fillRect(x, y + 4, 40, 20);
  ctx.fillRect(x + 6, y - 10, 28, 18);
}

function updateAndDrawHero(groundY) {
  hero.bobTimer += 0.05;
  if (Math.random() < 0.015 && hero.state === 'idle') {
    hero.targetX = 140 + Math.random() * (canvas.width - 320);
    hero.state = 'walk';
  }
  if (hero.state === 'walk') {
    const dx = hero.targetX - hero.x;
    if (Math.abs(dx) > 2) {
      hero.dir = dx > 0 ? 1 : -1;
      hero.x += hero.dir * 1.2;
      hero.animStep += 0.2;
    } else {
      hero.state = 'idle';
    }
  }

  const hx = hero.x;
  const hy = groundY - 32 + (hero.state === 'walk' ? Math.sin(hero.animStep * 3) * 2 : Math.sin(hero.bobTimer) * 1);

  ctx.save();
  if (hero.dir === -1) {
    ctx.translate(hx + 16, hy);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(hx, hy);
  }

  ctx.fillStyle = '#4a2f20';
  ctx.fillRect(2, 26, 5, 4);
  ctx.fillRect(9, 26, 5, 4);

  ctx.fillStyle = '#4361ee';
  ctx.fillRect(2, 14, 12, 13);
  ctx.fillStyle = '#e5a93c';
  ctx.fillRect(2, 19, 12, 2);

  ctx.fillStyle = '#ffd1a4';
  ctx.fillRect(3, 6, 10, 8);
  ctx.fillStyle = '#2b1d15';
  ctx.fillRect(9, 9, 2, 2);

  ctx.fillStyle = '#3042a6';
  ctx.fillRect(1, 4, 14, 4);
  ctx.fillRect(4, -3, 8, 7);

  ctx.restore();

  const bubble = document.getElementById('hero-bubble');
  if (bubble.style.display !== 'none') {
    bubble.style.left = `${Math.min(Math.max(20, hx - 40), canvas.width - 250)}px`;
    bubble.style.top = `${Math.max(10, hy - 45)}px`;
  }
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  hero.targetX = Math.max(80, Math.min(e.clientX - rect.left, canvas.width - 80));
  hero.state = 'walk';
  triggerSpeechBubble(getRandomHeroQuote());
  playSound('check');
});

const HERO_QUOTES = [
  "Let's conquer this semester!",
  "A completed topic gives you +1 Guild Pass! ⚡",
  "Backups keep your hard work safe forever!",
  "Visit The Library to revise notes & questions! 🏛️",
  "Stardew Valley vibes, KTU S3 grinds! ✨"
];

function getRandomHeroQuote() {
  return HERO_QUOTES[Math.floor(Math.random() * HERO_QUOTES.length)];
}

function triggerSpeechBubble(text) {
  const bubble = document.getElementById('hero-bubble');
  bubble.textContent = text;
  bubble.style.display = 'block';
  if (window.speechBubbleTimeout) clearTimeout(window.speechBubbleTimeout);
  window.speechBubbleTimeout = setTimeout(() => bubble.style.display = 'none', 4500);
}

/* ==========================================================================
   8. APP RENDERING & NAVIGATION TABS
   ========================================================================== */
let currentView = 'village';

function switchView(viewName) {
  currentView = viewName;
  document.querySelectorAll('.view-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.view-content-section').forEach(s => s.classList.remove('active-view'));

  document.getElementById(`tab-btn-${viewName}`).classList.add('active');
  document.getElementById(`view-${viewName}`).classList.add('active-view');

  const locCaption = document.getElementById('game-location-caption');
  if (viewName === 'village') locCaption.textContent = "Dusk in Cozyville";
  if (viewName === 'library') {
    locCaption.textContent = "The Grand Library Archives";
    renderLibraryView();
  }
  if (viewName === 'settings') {
    locCaption.textContent = "Scholar's Workshop & Backup Hub";
    renderSettingsView();
  }
  playSound('check');
}

function renderApp() {
  renderHUD();
  renderSessionPassIndicator();
  renderDailyQuests();
  renderAchievements();
  renderSubjectCards();
  updateUndoButtonState();
  updateStorageStatistics();

  // ONE-LINE WORLD ENGINE HOOK:
  if (window.AdventureWorld) AdventureWorld.updateFromCozyQuest(state, SUBJECTS_DATA);
}

function renderHUD() {
  const totalXp = calculateTotalXP();
  const currentLevel = getCurrentLevel(totalXp);
  const nextLevel = getNextLevel(currentLevel.name);

  document.getElementById('hud-player-name').textContent = `${state.playerName || "Adventurer"} ✏️`;
  document.getElementById('hud-avatar-icon').textContent = state.avatar || "🧙‍♂️";
  document.getElementById('hud-level-name').textContent = currentLevel.name.toUpperCase();
  document.getElementById('hud-current-xp').textContent = totalXp;

  if (currentLevel.name !== state.lastLevelReached) {
    triggerLevelUpCelebration(currentLevel.name);
    state.lastLevelReached = currentLevel.name;
    saveAllData();
  }

  if (totalXp >= 1900 && !state.proModalShown) {
    state.proModalShown = true;
    saveAllData();
    triggerProCelebration();
  }

  let pct = 100;
  let remainingText = "MAX LEVEL REACHED! You are PRO!";
  if (nextLevel) {
    const range = nextLevel.minXp - currentLevel.minXp;
    const progressIntoTier = totalXp - currentLevel.minXp;
    pct = Math.min(100, Math.max(0, Math.round((progressIntoTier / range) * 100)));
    document.getElementById('hud-next-xp').textContent = nextLevel.minXp;
    remainingText = `${nextLevel.minXp - totalXp} XP to ${nextLevel.name}`;
  } else {
    document.getElementById('hud-next-xp').textContent = "MAX";
  }

  document.getElementById('hud-level-bar').style.width = `${pct}%`;
  document.getElementById('hud-xp-remaining').textContent = remainingText;

  let totalTopicsCount = 0;
  let completedTopicsCount = 0;
  SUBJECTS_DATA.forEach(sub => {
    totalTopicsCount += sub.topics.length;
    sub.topics.forEach((_, idx) => {
      if (state.completedTopics[`${sub.id}:${idx}`]) completedTopicsCount++;
    });
  });

  const overallPct = totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;
  document.getElementById('hud-total-topics').textContent = `${completedTopicsCount}/${totalTopicsCount}`;
  document.getElementById('hud-overall-pct').textContent = `${overallPct}%`;
  document.getElementById('hud-streak-count').textContent = Math.max(1, state.activeDays.length);
}

function renderSessionPassIndicator() {
  const banner = document.getElementById('session-pass-container');
  const text = document.getElementById('session-pass-status-text');
  const tag = document.getElementById('session-pass-tag');
  const buttons = [
    document.getElementById('guild-btn-1'),
    document.getElementById('guild-btn-2'),
    document.getElementById('guild-btn-3'),
    document.getElementById('guild-btn-4')
  ];

  if (sessionTopicCredits > 0) {
    text.innerHTML = `⚡ Session Passes: <strong>${sessionTopicCredits} Available</strong>`;
    tag.textContent = "READY";
    tag.style.background = "#4a6c47";
    banner.style.borderColor = "#60c558";
    banner.style.background = "#eef7ec";
    buttons.forEach(b => { if (b) b.classList.remove('locked'); });
  } else {
    text.innerHTML = `⚡ Session Passes: <strong>0 Available</strong>`;
    tag.textContent = "LOCKED";
    tag.style.background = "#5b3e31";
    banner.style.borderColor = "#d4a347";
    banner.style.background = "#fdf3d8";
    buttons.forEach(b => { if (b) b.classList.add('locked'); });
  }
}

function attemptAdventureLog(title, xpReward) {
  if (sessionTopicCredits <= 0) {
    playSound('error');
    showXPToast("⛔ Not level reached! Complete a study topic first.");
    triggerSpeechBubble("Not level reached! Complete a syllabus topic in this session before accepting Guild tasks!");
    return;
  }
  saveUndoSnapshot(`Logged ${title}`);
  sessionTopicCredits--;
  state.extraActivitiesXp = (state.extraActivitiesXp || 0) + xpReward;
  registerActivityDay();
  saveAllData();
  renderApp();
  playSound('quest_done');
  showXPToast(`+${xpReward} XP — ${title}! (Pass used: ${sessionTopicCredits} left)`);
}

function renderDailyQuests() {
  const container = document.getElementById('daily-tasks-wrap');
  container.innerHTML = '';
  const tasks = [
    { key: 'topics3', title: 'Complete 3 topics today', xp: 15 },
    { key: 'solve3', title: 'Solve 3 questions independently', xp: 15 },
    { key: 'revise1', title: 'Revise 1 completed topic', xp: 15 },
    { key: 'labProg', title: 'Practice 1 lab program', xp: 20 }
  ];

  tasks.forEach(t => {
    const isDone = state.dailyQuests[t.key] === true;
    const item = document.createElement('div');
    item.className = `daily-task-item ${isDone ? 'completed' : ''}`;
    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span>${isDone ? '✅' : '⏳'}</span>
        <span>${t.title}</span>
      </div>
      <span class="xp-pill-tiny">+${t.xp} XP</span>
    `;
    item.onclick = () => toggleDailyTask(t.key, t.xp);
    container.appendChild(item);
  });
}

function toggleDailyTask(key, xp) {
  saveUndoSnapshot(`Daily Quest: ${key}`);
  state.dailyQuests[key] = !state.dailyQuests[key];
  if (state.dailyQuests[key]) {
    state.extraActivitiesXp = (state.extraActivitiesXp || 0) + xp;
    showXPToast(`+${xp} XP — Daily Quest Completed!`);
    playSound('quest_done');
    registerActivityDay();
  } else {
    state.extraActivitiesXp = Math.max(0, (state.extraActivitiesXp || 0) - xp);
    showXPToast(`-${xp} XP — Daily Quest Undone`);
    playSound('uncheck');
  }
  saveAllData();
  renderApp();
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  container.innerHTML = '';
  const totalXp = calculateTotalXP();
  let completedTopicsCount = 0;
  let labCompletedCount = 0;
  let completedSubjectsCount = 0;

  SUBJECTS_DATA.forEach(sub => {
    let subDone = 0;
    sub.topics.forEach((_, idx) => {
      if (state.completedTopics[`${sub.id}:${idx}`]) {
        completedTopicsCount++;
        if (sub.type === 'lab') labCompletedCount++;
        subDone++;
      }
    });
    if (subDone === sub.topics.length && sub.topics.length > 0) completedSubjectsCount++;
  });

  const totalTopics = 205;
  const unlockedMap = {
    first_quest: completedTopicsCount >= 1,
    getting_started: completedTopicsCount >= 10,
    consistent: state.activeDays.length >= 3,
    halfway: (completedTopicsCount / totalTopics) >= 0.5,
    subject_slayer: completedSubjectsCount >= 1,
    lab_apprentice: labCompletedCount >= 10,
    master_all: completedSubjectsCount === SUBJECTS_DATA.length,
    pro_player: totalXp >= 1900
  };

  let unlockedCount = 0;
  ACHIEVEMENTS_LIST.forEach(ach => {
    const isUnlocked = unlockedMap[ach.id];
    if (isUnlocked) unlockedCount++;
    const slot = document.createElement('div');
    slot.className = `achievement-slot ${isUnlocked ? 'unlocked' : ''}`;
    slot.title = `${ach.name}: ${ach.desc} ${isUnlocked ? '(Unlocked)' : '(Locked)'}`;
    slot.innerHTML = `<span>${ach.icon}</span>`;
    container.appendChild(slot);
  });
  document.getElementById('achievement-count').textContent = unlockedCount;
}

/* ==========================================================================
   CHECKLIST LOGIC
   ========================================================================== */
let currentFilter = 'all';
let searchQuery = '';

function renderSubjectCards() {
  const container = document.getElementById('subject-cards-list');
  container.innerHTML = '';

  SUBJECTS_DATA.forEach((sub) => {
    if (currentFilter === 'theory' && sub.type !== 'theory') return;
    if (currentFilter === 'lab' && sub.type !== 'lab') return;

    let completedCount = 0;
    sub.topics.forEach((_, idx) => {
      if (state.completedTopics[`${sub.id}:${idx}`]) completedCount++;
    });

    const isFullyDone = completedCount === sub.topics.length;
    if (currentFilter === 'incomplete' && isFullyDone) return;

    const matchingTopics = [];
    sub.topics.forEach((topicText, idx) => {
      const match = searchQuery === '' || 
                    topicText.toLowerCase().includes(searchQuery) ||
                    sub.name.toLowerCase().includes(searchQuery) ||
                    sub.code.toLowerCase().includes(searchQuery);
      if (match) matchingTopics.push({ text: topicText, index: idx });
    });

    if (searchQuery !== '' && matchingTopics.length === 0) return;

    const pct = sub.topics.length > 0 ? Math.round((completedCount / sub.topics.length) * 100) : 0;
    const topicItemXp = sub.type === 'lab' ? 15 : 10;

    const card = document.createElement('div');
    card.className = `subject-card ${searchQuery !== '' ? 'open' : ''}`;
    card.id = `subject-card-${sub.id}`;

    card.innerHTML = `
      <div class="subject-header" onclick="toggleSubjectAccordion('${sub.id}')">
        <div class="subject-title-area">
          <div class="subject-icon">${sub.icon}</div>
          <div class="subject-details">
            <h3>${sub.name}</h3>
            <span class="subject-code-tag">${sub.code} • ${sub.type.toUpperCase()}</span>
            ${isFullyDone ? '<span style="font-size: 11px; margin-left: 6px; font-weight:700; color: #3b7436;">🏆 +100 XP REWARD CLAIMED</span>' : ''}
          </div>
        </div>
        <div class="subject-progress-area">
          <div class="subject-bar-wrap">
            <div class="subject-stats-text">
              <span>Progress</span>
              <span>${completedCount}/${sub.topics.length} (${pct}%)</span>
            </div>
            <div class="subject-mini-bar">
              <div class="subject-mini-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
          <span class="toggle-arrow">▼</span>
        </div>
      </div>

      <div class="topic-list-body">
        <div class="topics-grid">
          ${matchingTopics.map(t => {
            const isChecked = state.completedTopics[`${sub.id}:${t.index}`] === true;
            return `
              <div class="topic-row ${isChecked ? 'checked' : ''}" onclick="toggleTopic('${sub.id}', ${t.index}, ${topicItemXp}, event)">
                <div class="custom-checkbox"></div>
                <span class="topic-name">${t.text}</span>
                <span class="topic-xp-tag">+${topicItemXp} XP</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function toggleSubjectAccordion(subId) {
  const card = document.getElementById(`subject-card-${subId}`);
  if (card) card.classList.toggle('open');
}

function toggleTopic(subId, topicIdx, xpValue, event) {
  if (event) event.stopPropagation();
  const sub = SUBJECTS_DATA.find(s => s.id === subId);
  const topicName = sub ? sub.topics[topicIdx] : 'Topic';

  saveUndoSnapshot(`Checked ${topicName.substring(0, 18)}...`);

  const key = `${subId}:${topicIdx}`;
  const isCurrentlyDone = state.completedTopics[key] === true;

  if (!isCurrentlyDone) {
    state.completedTopics[key] = true;
    sessionTopicCredits++;
    registerActivityDay();
    playSound('check');
    showXPToast(`+${xpValue} XP — Quest Completed! (⚡ +1 Guild Pass)`);

    let doneCount = 0;
    sub.topics.forEach((_, i) => {
      if (state.completedTopics[`${sub.id}:${i}`]) doneCount++;
    });

    if (doneCount === sub.topics.length) {
      showXPToast(`🌟 +100 XP BONUS — ${sub.code} Fully Mastered!`);
      playSound('quest_done');
      triggerSpeechBubble(`Incredible! You completed ${sub.code}!`);
    }
  } else {
    delete state.completedTopics[key];
    sessionTopicCredits = Math.max(0, sessionTopicCredits - 1);
    playSound('uncheck');
    showXPToast(`-${xpValue} XP — Topic unchecked`);
  }

  saveAllData();
  renderApp();
}

/* ==========================================================================
   9. THE LIBRARY (PDF STORE, SEARCH & VIEWER)
   ========================================================================== */
let selectedLibrarySubjectId = "GAMAT301";

async function renderLibraryView() {
  const subContainer = document.getElementById('lib-subject-buttons-list');
  subContainer.innerHTML = '';
  SUBJECTS_DATA.forEach(sub => {
    const btn = document.createElement('button');
    btn.className = `lib-sub-btn ${sub.id === selectedLibrarySubjectId ? 'active' : ''}`;
    btn.innerHTML = `<span>${sub.icon}</span> <span>${sub.code}</span>`;
    btn.onclick = () => {
      selectedLibrarySubjectId = sub.id;
      renderLibraryView();
    };
    subContainer.appendChild(btn);
  });

  const currentSub = SUBJECTS_DATA.find(s => s.id === selectedLibrarySubjectId);
  if (currentSub) {
    document.getElementById('lib-current-icon').textContent = currentSub.icon;
    document.getElementById('lib-current-sub-title').textContent = currentSub.name;
    document.getElementById('lib-current-sub-code').textContent = `${currentSub.code} • ${currentSub.type.toUpperCase()}`;
  }

  const grid = document.getElementById('library-resources-grid');
  grid.innerHTML = '<div style="color: #7d6b62; font-size:12px;">Loading resources...</div>';

  const allResources = await idbGetAll("resources");
  const subResources = allResources.filter(r => r.subjectId === selectedLibrarySubjectId);

  const filterCat = document.getElementById('lib-category-filter').value;
  const searchTxt = document.getElementById('lib-search-input').value.trim().toLowerCase();

  const filtered = subResources.filter(r => {
    const matchCat = filterCat === 'all' || r.category === filterCat;
    const matchSearch = searchTxt === '' || r.title.toLowerCase().includes(searchTxt) || (r.desc && r.desc.toLowerCase().includes(searchTxt));
    return matchCat && matchSearch;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="pixel-box" style="padding: 24px; text-align: center; color: #7d6b62; grid-column: 1/-1;">
        <p style="font-size: 20px;">📭</p>
        <p style="font-size: 11px; margin-top: 6px;">No resources found for this category.</p>
        <button class="pixel-btn pixel-btn-sky" style="margin-top: 10px; font-size: 8px;" onclick="openAddResourceModal()">
          ➕ Add First PDF or Link
        </button>
      </div>
    `;
    return;
  }

  filtered.forEach(res => {
    const card = document.createElement('div');
    card.className = `resource-card ${res.isRevised ? 'revised' : ''}`;
    card.innerHTML = `
      <div>
        <div class="res-top">
          <span class="res-type-badge">${res.category}</span>
          <div>
            <button class="icon-btn" style="width:24px; height:24px; font-size:11px;" onclick="toggleFavoriteResource('${res.id}')">
              ${res.isFavorite ? '⭐' : '☆'}
            </button>
          </div>
        </div>
        <div class="res-title">${res.title}</div>
        <div class="res-desc">${res.desc || "No description provided."}</div>
        <div class="res-meta-tags">
          ${res.module ? `<span class="res-tag">📌 ${res.module}</span>` : ''}
          <span class="res-tag">${res.type === 'file' ? '📄 PDF Document' : '🔗 Web Link'}</span>
          ${res.fileSize ? `<span class="res-tag">${(res.fileSize / (1024*1024)).toFixed(1)} MB</span>` : ''}
          ${res.isRevised ? '<span class="res-tag" style="background:#dbeed8; color:#3b7436;">✓ Revised</span>' : ''}
        </div>
      </div>
      <div class="res-actions-row">
        ${res.type === 'file' ? `
          <button class="pixel-btn pixel-btn-sage" style="font-size:8px; padding:4px 8px;" onclick="openPDFViewer('${res.id}')">
            📖 Open PDF
          </button>
        ` : `
          <a href="${res.url}" target="_blank" rel="noopener" class="pixel-btn pixel-btn-sky" style="font-size:8px; padding:4px 8px; text-decoration:none;">
            🌐 Visit Link
          </a>
        `}
        <button class="pixel-btn pixel-btn-secondary" style="font-size:8px; padding:4px 8px;" onclick="toggleRevisedResource('${res.id}')">
          ${res.isRevised ? 'Mark Unrevised' : 'Mark Revised'}
        </button>
        <button class="pixel-btn pixel-btn-danger" style="font-size:8px; padding:4px 8px; margin-left:auto;" onclick="deleteResource('${res.id}')">
          🗑️
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.getElementById('lib-category-filter').addEventListener('change', renderLibraryView);
document.getElementById('lib-search-input').addEventListener('input', renderLibraryView);

function toggleDiscoveryPanel() {
  const panel = document.getElementById('discovery-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  if (panel.style.display === 'block') renderDiscoveryLinks();
}

function renderDiscoveryLinks() {
  const list = document.getElementById('discovery-links-list');
  list.innerHTML = '';
  VERIFIED_KTU_RESOURCES.forEach(item => {
    const row = document.createElement('div');
    row.className = 'discovery-item';
    row.innerHTML = `
      <div>
        <strong style="font-size: 13px;">${item.title}</strong>
        <div style="font-size: 11px; color:#634f45;">${item.desc}</div>
        <div style="font-size: 10px; color:#855738; margin-top:2px;">Source: ${item.source} • [${item.code}]</div>
      </div>
      <div style="display:flex; gap:6px;">
        <a href="${item.url}" target="_blank" rel="noopener" class="pixel-btn pixel-btn-secondary" style="font-size:8px; padding:4px 8px; text-decoration:none;">
          🔗 Open
        </a>
        <button class="pixel-btn pixel-btn-sage" style="font-size:8px; padding:4px 8px;" onclick="addDiscoveredResource('${item.title}', '${item.code}', '${item.url}')">
          ➕ Add to Library
        </button>
      </div>
    `;
    list.appendChild(row);
  });
}

async function addDiscoveredResource(title, code, url) {
  const targetSub = SUBJECTS_DATA.find(s => s.code === code) || SUBJECTS_DATA[0];
  const newRes = {
    id: `res_${Date.now()}`,
    subjectId: targetSub.id,
    category: "PYQ",
    title: title,
    module: "University Repository",
    type: "link",
    url: url,
    desc: "Added from KTU Resource Hub",
    isFavorite: true,
    isRevised: false,
    createdAt: new Date().toISOString()
  };
  await idbPutResource(newRes);
  playSound('quest_done');
  showXPToast("Resource bookmarked into Library!");
  renderLibraryView();
  updateStorageStatistics();
}

function openAddResourceModal() {
  const subSelect = document.getElementById('modal-res-subject');
  subSelect.innerHTML = '';
  SUBJECTS_DATA.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.code} — ${s.name}`;
    if (s.id === selectedLibrarySubjectId) opt.selected = true;
    subSelect.appendChild(opt);
  });
  document.getElementById('modal-res-title').value = '';
  document.getElementById('modal-res-module').value = '';
  document.getElementById('modal-res-url').value = '';
  document.getElementById('modal-res-desc').value = '';
  document.getElementById('modal-res-file').value = '';
  document.getElementById('add-resource-modal').classList.add('open');
}

function closeAddResourceModal() {
  document.getElementById('add-resource-modal').classList.remove('open');
}

function toggleModalSourceMode(mode) {
  document.getElementById('modal-file-input-group').style.display = mode === 'file' ? 'block' : 'none';
  document.getElementById('modal-link-input-group').style.display = mode === 'link' ? 'block' : 'none';
}

async function saveNewResource() {
  const subId = document.getElementById('modal-res-subject').value;
  const category = document.getElementById('modal-res-category').value;
  const title = document.getElementById('modal-res-title').value.trim();
  const moduleName = document.getElementById('modal-res-module').value.trim();
  const desc = document.getElementById('modal-res-desc').value.trim();
  const sourceType = document.querySelector('input[name="res-source-type"]:checked').value;

  if (!title) {
    alert("Please enter a title for this resource.");
    return;
  }

  const resId = `res_${Date.now()}`;
  const record = {
    id: resId,
    subjectId: subId,
    category: category,
    title: title,
    module: moduleName,
    desc: desc,
    type: sourceType,
    isFavorite: false,
    isRevised: false,
    createdAt: new Date().toISOString()
  };

  if (sourceType === 'file') {
    const fileInput = document.getElementById('modal-res-file');
    const file = fileInput.files[0];
    if (!file) {
      alert("Please select a PDF document from your computer.");
      return;
    }
    record.fileName = file.name;
    record.fileSize = file.size;
    record.fileBlob = file;
  } else {
    const url = document.getElementById('modal-res-url').value.trim();
    if (!url) {
      alert("Please enter a valid URL.");
      return;
    }
    record.url = url;
  }

  await idbPutResource(record);
  closeAddResourceModal();
  playSound('quest_done');
  showXPToast("Resource saved to Library!");
  renderLibraryView();
  updateStorageStatistics();
  scheduleAutomaticFolderBackup();
}

async function openPDFViewer(resId) {
  const res = await idbGet("resources", resId);
  if (!res || !res.fileBlob) {
    alert("Could not load PDF document.");
    return;
  }
  const blobUrl = URL.createObjectURL(res.fileBlob);
  document.getElementById('pdf-viewer-title').textContent = `📖 ${res.title}`;
  document.getElementById('pdf-frame').src = blobUrl;
  document.getElementById('pdf-reader-modal').classList.add('open');
}

function closePDFViewer() {
  document.getElementById('pdf-reader-modal').classList.remove('open');
  document.getElementById('pdf-frame').src = '';
}

async function toggleFavoriteResource(resId) {
  const res = await idbGet("resources", resId);
  if (res) {
    res.isFavorite = !res.isFavorite;
    await idbPutResource(res);
    playSound('check');
    renderLibraryView();
  }
}

async function toggleRevisedResource(resId) {
  const res = await idbGet("resources", resId);
  if (res) {
    res.isRevised = !res.isRevised;
    await idbPutResource(res);
    playSound('check');
    renderLibraryView();
  }
}

async function deleteResource(resId) {
  if (confirm("Remove this document from your library?")) {
    await idbDeleteResource(resId);
    playSound('uncheck');
    showXPToast("Resource deleted.");
    renderLibraryView();
    updateStorageStatistics();
  }
}

/* ==========================================================================
   10. COMPLETE ZIP ARCHIVE BACKUP & RESTORE
   ========================================================================== */
function exportProgressJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `cozy-quest-progress-${getTodayString()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showXPToast("Progress JSON downloaded!");
}

async function exportFullZipBackup() {
  if (typeof JSZip === 'undefined') {
    alert("ZIP component not loaded. Please ensure you have internet access on first load.");
    return;
  }
  showXPToast("Packaging complete ZIP archive...");
  const zip = new JSZip();

  zip.file("progress.json", JSON.stringify(state, null, 2));

  const resources = await idbGetAll("resources");
  const meta = [];
  const pdfFolder = zip.folder("documents");

  resources.forEach((r) => {
    meta.push({
      id: r.id,
      subjectId: r.subjectId,
      category: r.category,
      title: r.title,
      module: r.module,
      desc: r.desc,
      type: r.type,
      url: r.url || "",
      fileName: r.fileName || "",
      isFavorite: r.isFavorite || false,
      isRevised: r.isRevised || false
    });
    if (r.type === 'file' && r.fileBlob) {
      const safeName = `${r.id}_${r.fileName || 'doc.pdf'}`;
      pdfFolder.file(safeName, r.fileBlob);
    }
  });

  zip.file("resources_metadata.json", JSON.stringify(meta, null, 2));

  const blob = await zip.generateAsync({ type: "blob" });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `cozy-quest-complete-backup-${getTodayString()}.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showXPToast("Complete ZIP archive downloaded!");
  playSound('quest_done');
}

function importProgressJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && (imported.completedTopics || imported.state)) {
        saveUndoSnapshot("Pre-JSON Restore");
        state = imported.state ? imported.state : imported;
        saveAllData();
        renderApp();
        showXPToast("Progress restored successfully!");
        playSound('levelup');
      } else {
        alert("Invalid JSON save structure.");
      }
    } catch (err) {
      alert("Error parsing backup JSON file.");
    }
  };
  reader.readAsText(file);
}

async function importFullZipBackup(event) {
  const file = event.target.files[0];
  if (!file || typeof JSZip === 'undefined') return;

  try {
    showXPToast("Unpacking ZIP archive...");
    const zip = await JSZip.loadAsync(file);

    const progFile = zip.file("progress.json");
    if (!progFile) {
      alert("Invalid backup archive: missing progress.json.");
      return;
    }

    saveUndoSnapshot("Pre-ZIP Restore");

    const progJson = await progFile.async("string");
    state = JSON.parse(progJson);

    const metaFile = zip.file("resources_metadata.json");
    if (metaFile) {
      const metaJson = await metaFile.async("string");
      const metaList = JSON.parse(metaJson);

      for (const item of metaList) {
        if (item.type === 'file') {
          const safeName = `${item.id}_${item.fileName || 'doc.pdf'}`;
          const docZipFile = zip.file(`documents/${safeName}`);
          if (docZipFile) {
            const blob = await docZipFile.async("blob");
            item.fileBlob = blob;
          }
        }
        await idbPutResource(item);
      }
    }

    saveAllData();
    renderApp();
    showXPToast("Complete backup restored!");
    playSound('levelup');
  } catch (err) {
    console.error("ZIP restore error", err);
    alert("Failed to unpack backup archive.");
  }
}

function confirmResetProgress() {
  if (confirm("⚠️ Are you sure you want to completely reset your adventure progress? All XP and checkboxes will be cleared!")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

/* ==========================================================================
   11. SETTINGS & STORAGE STATS
   ========================================================================== */
async function updateStorageStatistics() {
  const resources = await idbGetAll("resources");
  const pdfCount = resources.filter(r => r.type === 'file').length;
  const linkCount = resources.filter(r => r.type === 'link').length;

  document.getElementById('st-pdf-count').textContent = `${pdfCount} files`;
  document.getElementById('st-link-count').textContent = `${linkCount} links`;

  if (navigator.storage && navigator.storage.estimate) {
    const est = await navigator.storage.estimate();
    const mbUsed = ((est.usage || 0) / (1024 * 1024)).toFixed(2);
    document.getElementById('st-db-size').textContent = `~${mbUsed} MB used`;
  } else {
    document.getElementById('st-db-size').textContent = "Supported";
  }
}

function renderSettingsView() {
  updateStorageStatistics();
  if (backupDirectoryHandle) {
    updateFolderStatusUI(true, backupDirectoryHandle.name);
  }
}

/* ==========================================================================
   12. CELEBRATIONS & INITIALIZATION
   ========================================================================== */
function triggerLevelUpCelebration(levelName) {
  playSound('levelup');
  const modal = document.getElementById('celebration-modal');
  document.getElementById('modal-celebration-title').textContent = `RANK UP: ${levelName.toUpperCase()}!`;
  document.getElementById('modal-celebration-desc').textContent = `Congratulations! You have ascended to ${levelName}!`;
  modal.classList.add('open');
  startConfetti();
}

function closeCelebrationModal() {
  document.getElementById('celebration-modal').classList.remove('open');
  stopConfetti();
}

function triggerProCelebration() {
  playSound('levelup');
  document.getElementById('pro-modal').classList.add('open');
  startConfetti();
}

const confCanvas = document.getElementById('celebration-canvas');
const confCtx = confCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimId = null;

function startConfetti() {
  confCanvas.style.display = 'block';
  confCanvas.width = window.innerWidth;
  confCanvas.height = window.innerHeight;
  confettiParticles = [];
  const colors = ['#f4a261', '#e76f51', '#2a9d8f', '#e9c46a', '#4361ee', '#ffbe0b'];
  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * confCanvas.width,
      y: Math.random() * -confCanvas.height,
      w: Math.random() * 8 + 6,
      h: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 6
    });
  }
  renderConfetti();
}

function renderConfetti() {
  confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.rotSpeed;
    if (p.y > confCanvas.height) p.y = -20;
    confCtx.save();
    confCtx.translate(p.x, p.y);
    confCtx.rotate((p.rot * Math.PI) / 180);
    confCtx.fillStyle = p.color;
    confCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confCtx.restore();
  });
  confettiAnimId = requestAnimationFrame(renderConfetti);
}

function stopConfetti() {
  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
  confCanvas.style.display = 'none';
  confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
}

function openProfileModal() {
  document.getElementById('player-name-input').value = state.playerName || "Adventurer";
  document.getElementById('profile-modal').classList.add('open');
}

function selectAvatar(emoji) {
  state.avatar = emoji;
  playSound('check');
}

function saveProfileSettings() {
  const val = document.getElementById('player-name-input').value.trim();
  if (val) state.playerName = val;
  saveAllData();
  renderHUD();
  document.getElementById('profile-modal').classList.remove('open');
  showXPToast('Profile updated!');
}

const soundBtn = document.getElementById('sound-toggle-btn');
soundBtn.addEventListener('click', () => {
  state.soundEnabled = !state.soundEnabled;
  soundBtn.textContent = state.soundEnabled ? '🔊' : '🔇';
  showXPToast(state.soundEnabled ? 'Sound: ON' : 'Sound: MUTED');
  saveAllData();
});

document.getElementById('topic-search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderSubjectCards();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderSubjectCards();
  });
});

window.addEventListener('DOMContentLoaded', async () => {
  loadStateFromStorage();
  await openDatabase();
  await restoreDirectoryHandle();
  resizeCanvas();
  drawPixelArtScene();

  // ONE-LINE WORLD ENGINE INITIALIZATION:
  if (window.AdventureWorld) AdventureWorld.init('#world-container');

  renderApp();
  // ...
});