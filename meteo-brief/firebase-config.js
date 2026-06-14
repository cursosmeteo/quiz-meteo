/**
 * METEO BRIEF v2 — firebase-config.js
 * Shared Firebase initialisation.
 * Load AFTER the Firebase compat SDK scripts, BEFORE any app script.
 */

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAEfZ0FsSFhy1GhKh1jT3BJXrWDd-MwJ68",
  authDomain:        "meteorology-quiz-2b061.firebaseapp.com",
  databaseURL:       "https://meteorology-quiz-2b061-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "meteorology-quiz-2b061",
  storageBucket:     "meteorology-quiz-2b061.firebasestorage.app",
  messagingSenderId: "595212568307",
  appId:             "1:595212568307:web:e51bc42c187f13a6359986"
};

const DB_ROOT = 'meteo-brief';

if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
const DB = firebase.database();

function dbRef(path) {
  return path ? DB.ref(`${DB_ROOT}/${path}`) : DB.ref(DB_ROOT);
}
function dbSet(path, value)   { return dbRef(path).set(value); }
function dbGet(path)          { return dbRef(path).once('value').then(s => s.val()); }
function dbPush(path, value)  { return dbRef(path).push(value); }
function dbRemove(path)       { return dbRef(path).remove(); }
function dbOn(path, cb) {
  const r = dbRef(path);
  r.on('value', s => cb(s.val()));
  return () => r.off('value');
}
function dbOnChild(path, cb) {
  const r = dbRef(path);
  r.on('child_added', s => cb(s.key, s.val()));
  return () => r.off('child_added');
}
function onConnectionChange(cb) {
  DB.ref('.info/connected').on('value', s => cb(s.val() === true));
}
function now() { return Date.now(); }
function formatTime(s) {
  s = Math.abs(Math.round(s));
  return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
}
function tsToTime(ms) {
  return new Date(ms).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
}

// ── KSA scoring constants ─────────────────────────────────────────────────
const KSA = {
  maxK:  40,   // Knowledge
  maxS:  35,   // Skills
  maxA:  25,   // Attitudes
  maxOral: 9,  // per student (jury)
  // Group scoring weights
  decisionTableK:   10,  // knowledge: hazard identification quality (jury)
  decisionTableS:   15,  // skills: decision quality (auto + jury)
  keyMCQ:            5,  // knowledge: key questions
  challengeS:        8,  // skills: challenge response quality
  challengeA:        5,  // attitudes: speed + coherence
  participationA:   10,  // attitudes: completeness of decision table
  // Individual
  preTestK:         20,  // knowledge: MCQ score (auto)
};

// ── QR code generator (using qrcode.js CDN) ──────────────────────────────
function generateQR(url, containerEl, size = 160) {
  containerEl.innerHTML = '';
  if (typeof QRCode === 'undefined') {
    containerEl.innerHTML = `<div style="font-size:.75rem;color:#94a3b8;word-break:break-all">${url}</div>`;
    return;
  }
  new QRCode(containerEl, { text: url, width: size, height: size, colorDark:'#000', colorLight:'#fff', correctLevel: QRCode.CorrectLevel.M });
}

// ── Event log helper ──────────────────────────────────────────────────────
function logEvent(groupId, type, data) {
  return dbPush(`groups/${groupId}/history`, { type, data, ts: now() });
}
