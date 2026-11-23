/**
 * NEXUS | PAGAMENTO MANUAL
 * Configure estes campos ANTES de publicar assinar.html.
 * Não coloque chaves de API, senhas ou tokens privados neste arquivo público.
 */
export const pagamentoConfig = {
  // Cole o link de cobrança criado em sua conta Mercado Pago (URL https://).
  linkPagamento: "https://link.mercadopago.com.br/rdservicosetecnologi",

  // O endereço acima foi informado pelo proprietário, mas ainda precisa ser validado.
  // É do tipo "Seu link", no qual o comprador pode informar um valor.
  // Para cobrar preço fixo, substitua por um link de pagamento com valor definido.
  linkPermiteValorLivre: true,

  // Número de WhatsApp do atendimento comercial: DDI + DDD + número, só dígitos.
  // Exemplo de formato: "5561999999999". Deixe vazio se não usar WhatsApp.
  whatsappAtendimento: "",

  // Alternativa ao WhatsApp para o comprador informar o Gmail utilizado no login.
  emailAtendimento: "",

  // Oferta NEXUS definida pelo proprietário: R$ 19,90.
  // Este preço exibido no site NÃO altera o valor cobrado no Mercado Pago.
  nomePlano: "Acesso NEXUS AI Atlas",
  precoExibicao: "R$ 19,90",
  duracaoExibicao: "Valor do acesso ao catálogo · liberação manual após confirmação"
};
