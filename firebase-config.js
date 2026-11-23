// Configuracao publica do aplicativo Web "hub-nexus" no Firebase.
// A seguranca dos dados depende das regras do Firestore e do Firebase Authentication.
export const firebaseConfig = {
  apiKey: "AIzaSyCa6w4AuXvSBvKizyLGnP-QSQFH29DMaME",
  authDomain: "hub-nexus.firebaseapp.com",
  projectId: "hub-nexus",
  storageBucket: "hub-nexus.firebasestorage.app",
  messagingSenderId: "479191373089",
  appId: "1:479191373089:web:e54f08cf68903710221a60",
  measurementId: "G-2ENVBQFLW2"
};

export const firebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain &&
  firebaseConfig.projectId && firebaseConfig.appId
);
