/** Perguntas frequentes reutilizadas na home e nas landing pages (também viram FAQPage Schema). */

export type Faq = { question: string; answer: string }

export const homeFaqs: Faq[] = [
  {
    question: "Quanto custa um martelinho de ouro em Presidente Prudente?",
    answer:
      "O valor começa a partir de R$ 200 e varia conforme o tamanho, a localização e a quantidade de amassados. Como cada caso é diferente, o melhor é enviar fotos pelo WhatsApp e receber um orçamento gratuito e sem compromisso antes de fechar.",
  },
  {
    question: "Quanto tempo demora o reparo?",
    answer:
      "A maioria dos amassados removidos pela técnica do martelinho de ouro fica pronta em 2 a 4 horas. Serviços de funilaria com pintura levam de 3 a 5 dias úteis, dependendo da extensão do dano.",
  },
  {
    question: "O martelinho de ouro precisa pintar o carro?",
    answer:
      "Não. Quando o dano não atinge a pintura, a técnica recupera o painel por dentro, sem massa e sem repintura, preservando a pintura original de fábrica. A pintura só é necessária quando há trincos na tinta ou o metal foi muito esticado.",
  },
  {
    question: "Vocês atendem seguro?",
    answer:
      "Sim, trabalhamos com as principais seguradoras do mercado. Se o reparo for coberto pelo seu seguro, ajudamos com o processo e a documentação.",
  },
  {
    question: "Quais cidades vocês atendem?",
    answer:
      "Atendemos Presidente Prudente e toda a região: Álvares Machado, Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio e Rancharia. Nossa oficina fica na R. Ângelo Calabreta, 299, Vila Aristarcho.",
  },
  {
    question: "O reparo tem garantia?",
    answer:
      "Sim. Todos os serviços de funilaria, polimento e remoção de amassados têm garantia de 90 dias por escrito.",
  },
]
