// Este objeto de configuração pública é obtido em Firebase Console → Configurações do projeto → Seus apps → Web.
// A apiKey do Firebase Web NÃO é uma senha de administrador. Proteja os dados nas Security Rules.
export const firebaseConfig = {
  apiKey: 'COLE_AQUI_API_KEY',
  authDomain: 'SEU_PROJETO.firebaseapp.com',
  projectId: 'SEU_PROJETO',
  appId: 'COLE_AQUI_APP_ID',
};
export const firebaseConfigured = !Object.values(firebaseConfig).some(v =>
  !v || v.includes('COLE_AQUI') || v.includes('SEU_PROJETO')
);
