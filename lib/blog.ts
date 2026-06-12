/**
 * Blog — artigos-pilar de SEO (problemas + local + granizo).
 * Comece por estes 4; novos artigos entram neste mesmo array.
 */

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  description: string
  category: "Custos" | "Como funciona" | "Dicas" | "Granizo"
  datePublished: string // ISO (YYYY-MM-DD)
  dateModified: string
  cover: string
  readingMinutes: number
  excerpt: string
  content: { heading: string; paragraphs: string[] }[]
}

export const posts: BlogPost[] = [
  {
    slug: "quanto-custa-martelinho-de-ouro",
    title: "Quanto custa um martelinho de ouro em Presidente Prudente?",
    metaTitle: "Quanto Custa um Martelinho de Ouro? Preços em Presidente Prudente",
    description:
      "Entenda o que define o preço do martelinho de ouro em Presidente Prudente e por que enviar fotos pelo WhatsApp é o jeito mais rápido de saber quanto vai custar.",
    category: "Custos",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    cover: "/porta-malas-amassado.jpg",
    readingMinutes: 4,
    excerpt:
      "O preço do martelinho de ouro varia conforme o tamanho, o local e a quantidade de amassados. Veja o que pesa no orçamento.",
    content: [
      {
        heading: "Por que não existe um preço único",
        paragraphs: [
          "A pergunta mais comum de quem procura martelinho de ouro em Presidente Prudente é: quanto custa? A resposta honesta é que depende. Diferente de um produto de prateleira, cada amassado é único — e o valor justo só sai depois de uma avaliação.",
          "Ainda assim, dá para entender o que pesa no orçamento e ter uma boa ideia antes mesmo de levar o carro à oficina.",
        ],
      },
      {
        heading: "O que define o preço do martelinho de ouro",
        paragraphs: [
          "Três fatores principais determinam o valor: o tamanho do amassado, a localização na lataria e a quantidade de amassados. Um amassado pequeno em uma porta é mais simples (e mais barato) do que um vinco grande no teto ou vários amassados de granizo.",
          "A localização importa porque algumas regiões da carroceria têm acesso mais difícil por dentro do painel, exigindo mais tempo de trabalho. Já a quantidade é decisiva em casos de granizo, onde há dezenas de pequenos amassados.",
          "Na nossa oficina, o reparo sem pintura começa a partir de R$ 200 para casos simples — mas o valor exato sempre vem da avaliação.",
        ],
      },
      {
        heading: "Por que costuma ser mais barato que a funilaria tradicional",
        paragraphs: [
          "O martelinho de ouro não usa massa nem repintura. Isso elimina o custo de material de pintura e o tempo de preparação, lixamento e secagem. Por isso, quando o amassado permite o reparo sem pintura, o valor final tende a ser bem menor do que o de uma funilaria convencional — e o carro fica pronto muito mais rápido.",
        ],
      },
      {
        heading: "Como saber o preço do seu caso",
        paragraphs: [
          "O jeito mais rápido é enviar fotos do amassado pelo WhatsApp. Com as imagens, conseguimos dar uma estimativa inicial e, na avaliação presencial em Presidente Prudente, confirmamos o valor exato antes de qualquer serviço. O orçamento é gratuito e sem compromisso.",
        ],
      },
    ],
  },
  {
    slug: "como-remover-amassado-sem-pintar",
    title: "Como remover amassado sem pintar o carro?",
    metaTitle: "Como Remover Amassado Sem Pintar o Carro | Guia do Martelinho de Ouro",
    description:
      "Entenda como funciona a remoção de amassados sem pintura (martelinho de ouro), quando ela é possível e quais as vantagens de preservar a pintura original.",
    category: "Como funciona",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    cover: "/byd-amassado.jpg",
    readingMinutes: 5,
    excerpt:
      "A técnica do martelinho de ouro recupera amassados sem massa e sem repintura. Veja como funciona e quando é possível.",
    content: [
      {
        heading: "O que é a remoção de amassado sem pintura",
        paragraphs: [
          "Remover um amassado sem pintar significa devolver a peça ao formato original sem aplicar massa plástica nem repintar a área. Essa é a essência do martelinho de ouro, técnica também conhecida como paintless dent repair (PDR).",
          "Em vez de cobrir o dano, o profissional trabalha o próprio metal, pressionando e moldando a peça por dentro até a superfície voltar ao lugar.",
        ],
      },
      {
        heading: "Como o reparo é feito, passo a passo",
        paragraphs: [
          "Primeiro, avaliamos o amassado para confirmar que a pintura está intacta. Em seguida, acessamos a parte interna do painel — por baixo de forrações, frisos ou pela estrutura da peça. Com ferramentas específicas, aplicamos pressão controlada no ponto exato do amassado.",
          "O trabalho é minucioso: o metal volta gradualmente ao formato original, sem deixar marcas. Como não há pintura envolvida, o carro não precisa secar por dias — a maioria dos casos fica pronta em poucas horas.",
        ],
      },
      {
        heading: "Quando dá para tirar sem pintar (e quando não dá)",
        paragraphs: [
          "A técnica funciona quando a pintura continua intacta: marcas de porta, batidas leves, amassados de granizo e pequenos vincos. Nesses casos, o reparo sem pintura é a melhor escolha.",
          "Quando a pintura está trincada, há ferrugem ou o metal foi muito esticado, o reparo sem pintura não é indicado — aí a funilaria com pintura é necessária. Um bom profissional sempre avalia e diz com honestidade qual técnica usar.",
        ],
      },
      {
        heading: "Vantagens de não repintar",
        paragraphs: [
          "Preservar a pintura de fábrica traz três ganhos: mantém o valor de revenda do carro, evita diferença de tonalidade que a repintura pode causar e reduz o custo e o tempo do reparo. Por isso, sempre que o amassado permite, o reparo sem pintura é o caminho recomendado.",
          "Se você tem um amassado e quer saber se dá para resolver sem pintar, envie uma foto pelo WhatsApp para a nossa oficina em Presidente Prudente.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-vale-a-pena",
    title: "Martelinho de ouro vale a pena?",
    metaTitle: "Martelinho de Ouro Vale a Pena? Vantagens e Quando Usar",
    description:
      "Martelinho de ouro vale a pena? Compare com a funilaria tradicional, entenda as vantagens e veja em quais casos a técnica sem pintura é a melhor escolha.",
    category: "Dicas",
    datePublished: "2026-05-28",
    dateModified: "2026-05-28",
    cover: "/Capo-amassado.jpg",
    readingMinutes: 4,
    excerpt:
      "Sem repintura, mais rápido e mais barato: veja quando o martelinho de ouro realmente compensa.",
    content: [
      {
        heading: "A resposta curta",
        paragraphs: [
          "Para amassados com a pintura intacta, sim — o martelinho de ouro quase sempre vale a pena. Ele é mais rápido, mais barato e preserva a pintura original do carro. A resposta longa depende do tipo de dano, e é isso que vamos detalhar.",
        ],
      },
      {
        heading: "Martelinho de ouro x funilaria tradicional",
        paragraphs: [
          "Na funilaria tradicional, o reparo envolve massa, lixamento, primer, pintura e secagem — um processo de dias. Já o martelinho de ouro trabalha o metal por dentro, sem pintura, e costuma terminar em horas.",
          "Em termos de custo, o reparo sem pintura é geralmente mais econômico por não consumir material de pintura nem tantas horas de preparação. E, em termos de resultado, ele mantém a pintura de fábrica, o que a repintura nunca consegue reproduzir 100%.",
        ],
      },
      {
        heading: "Quando vale mais a pena",
        paragraphs: [
          "Vale muito a pena em marcas de porta, batidas leves de estacionamento, amassados de granizo e pequenos vincos onde a tinta não trincou. Nesses casos, é a opção mais inteligente.",
          "Quando há trincos na pintura, ferrugem ou metal muito esticado, a funilaria com pintura passa a ser necessária — e aí o martelinho sozinho não resolve. O segredo é a avaliação correta.",
        ],
      },
      {
        heading: "O fator revenda",
        paragraphs: [
          "Um detalhe que muita gente esquece: carros com a pintura original valem mais na revenda. Repinturas podem ser detectadas e costumam reduzir o valor de avaliação. Ao preservar a pintura de fábrica, o martelinho de ouro protege o seu patrimônio — mais um motivo para ele valer a pena.",
        ],
      },
    ],
  },
  {
    slug: "como-recuperar-carro-apos-granizo",
    title: "Como recuperar o carro após uma chuva de granizo?",
    metaTitle: "Como Recuperar o Carro Após Granizo | Passo a Passo",
    description:
      "Seu carro ficou cheio de amassados após o granizo? Veja o passo a passo para recuperar a lataria sem repintura, como acionar o seguro e o que esperar do reparo.",
    category: "Granizo",
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
    cover: "/Capo-arrumado.jpg",
    readingMinutes: 5,
    excerpt:
      "Granizo deixa dezenas de amassados. Na maioria dos casos, dá para recuperar sem repintar. Veja como.",
    content: [
      {
        heading: "Primeiro: avalie a extensão dos danos",
        paragraphs: [
          "Depois de um temporal de granizo, é comum o carro ficar com dezenas de pequenos amassados no teto, capô, porta-malas e laterais. O primeiro passo é avaliar a extensão: na maioria das vezes, a pintura continua intacta — o que abre caminho para o reparo sem repintura.",
          "Evite tentar 'empurrar' os amassados por conta própria; isso pode esticar o metal e dificultar o reparo profissional.",
        ],
      },
      {
        heading: "Acione o seguro (se houver cobertura)",
        paragraphs: [
          "Danos de granizo costumam ser cobertos por apólices com cobertura compreensiva. Vale registrar fotos logo após o temporal e entrar em contato com a seguradora. Muitas oficinas, como a nossa, trabalham com as principais seguradoras e ajudam no processo do sinistro.",
        ],
      },
      {
        heading: "Por que o reparo sem pintura é o ideal para granizo",
        paragraphs: [
          "Como o granizo geralmente não trinca a pintura, a técnica do martelinho de ouro é a mais indicada: ela remove os amassados um a um, sem repintar o carro. Isso preserva a pintura de fábrica, evita diferença de tonalidade entre painéis e costuma sair bem mais barato que repintar várias peças.",
          "O reparo é minucioso — cada amassado é trabalhado individualmente — mas o resultado devolve a lataria ao estado original.",
        ],
      },
      {
        heading: "O que esperar do prazo e do orçamento",
        paragraphs: [
          "O prazo depende da quantidade de amassados. Após a avaliação, informamos um prazo exato antes de começar. O orçamento de granizo é feito mapeando os danos painel por painel.",
          "Se o seu carro foi atingido por granizo em Presidente Prudente ou região, envie fotos pelo WhatsApp para uma avaliação gratuita. Todo serviço sai com garantia de 90 dias.",
        ],
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
