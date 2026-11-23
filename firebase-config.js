export const firebaseConfig = {
  apiKey: "COLE_SUA_API_KEY",
  authDomain: "hub-nexus.firebaseapp.com",
  projectId: "hub-nexus",
  appId: "COLE_SEU_APP_ID"
};

export const firebaseConfigured = !Object.values(firebaseConfig).some(v =>
  !v || v.includes('COLE_AQUI') || v.includes('SEU_PROJETO')
);
