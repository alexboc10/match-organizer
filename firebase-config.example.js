// Copy this file to "firebase-config.js" (same folder) for local testing.
// "firebase-config.js" is listed in .gitignore, so it is never committed —
// on GitHub, that file is generated automatically at deploy time from the
// repository secrets (see .github/workflows/deploy.yml).

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
