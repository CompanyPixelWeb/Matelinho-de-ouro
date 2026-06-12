/**
 * Blog — artigos-pilar de SEO (problemas + local + granizo).
 * Comece por estes 4; novos artigos entram neste mesmo array.
 */

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  description: string
  category: "Custos" | "Como funciona" | "Dicas" | "Granizo" | "Região"
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
  {
    slug: "quanto-tempo-demora-martelinho-de-ouro",
    title: "Quanto tempo demora um martelinho de ouro?",
    metaTitle: "Quanto Tempo Demora um Martelinho de Ouro? | Prazos Reais",
    description:
      "Quanto tempo demora um martelinho de ouro? Veja os prazos por tipo de amassado e por que o reparo sem pintura é tão mais rápido que a funilaria tradicional.",
    category: "Como funciona",
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    cover: "/byd-amassado.jpg",
    readingMinutes: 3,
    excerpt: "A maioria dos amassados fica pronta em poucas horas. Entenda o que muda o prazo.",
    content: [
      {
        heading: "Por que o reparo é rápido",
        paragraphs: [
          "O martelinho de ouro não usa massa nem repintura. Como não há etapas de lixamento, aplicação de tinta e secagem, o reparo é concluído muito mais rápido do que uma funilaria convencional — na maioria das vezes, no mesmo dia.",
        ],
      },
      {
        heading: "Prazos por tipo de amassado",
        paragraphs: [
          "Um amassado pequeno, como marca de porta, costuma levar de 1 a 2 horas. Amassados médios ou em locais de acesso mais difícil podem levar de 2 a 4 horas. Já casos de granizo, com muitos amassados, são avaliados individualmente e o prazo é informado antes de começar.",
          "Quando o dano exige funilaria com pintura, o prazo sobe para 3 a 5 dias úteis por causa da preparação e da secagem da tinta.",
        ],
      },
      {
        heading: "Como ter um prazo exato",
        paragraphs: [
          "O prazo depende do tamanho, da quantidade e da localização do amassado. Envie fotos pelo WhatsApp para a nossa oficina em Presidente Prudente e, após a avaliação, informamos o prazo certo antes de iniciar o serviço.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-estraga-pintura",
    title: "Martelinho de ouro estraga a pintura do carro?",
    metaTitle: "Martelinho de Ouro Estraga a Pintura? | Mito x Verdade",
    description:
      "Martelinho de ouro estraga a pintura? Entenda por que a técnica preserva a pintura original de fábrica e quando ela realmente pode ser usada com segurança.",
    category: "Como funciona",
    datePublished: "2026-01-28",
    dateModified: "2026-01-28",
    cover: "/Capo-arrumado.jpg",
    readingMinutes: 3,
    excerpt: "Ao contrário do que muitos pensam, a técnica preserva a pintura original. Veja por quê.",
    content: [
      {
        heading: "A resposta direta",
        paragraphs: [
          "Não. Quando é bem indicado e feito por um profissional, o martelinho de ouro não estraga a pintura — pelo contrário, ele existe justamente para preservar a pintura original de fábrica.",
        ],
      },
      {
        heading: "Por que a pintura é preservada",
        paragraphs: [
          "A técnica trabalha o metal por dentro do painel, sem lixar e sem repintar. Como nada é aplicado por cima da pintura, a tinta original permanece intacta. Isso evita a diferença de tonalidade que a repintura pode causar e mantém o valor de revenda do carro.",
        ],
      },
      {
        heading: "Quando a técnica NÃO é indicada",
        paragraphs: [
          "Se a pintura já está trincada, há ferrugem ou o metal foi muito esticado, o reparo sem pintura não é o ideal — nesses casos, a funilaria com pintura é necessária. Um bom profissional avalia antes e diz com honestidade o que fazer.",
        ],
      },
    ],
  },
  {
    slug: "diferenca-martelinho-de-ouro-e-funilaria",
    title: "Martelinho de ouro ou funilaria tradicional: qual a diferença?",
    metaTitle: "Diferença entre Martelinho de Ouro e Funilaria Tradicional",
    description:
      "Entenda a diferença entre martelinho de ouro e funilaria tradicional: quando usar cada um, prazos, custos e impacto na pintura original do carro.",
    category: "Como funciona",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    cover: "/amassado-lateral.jpg",
    readingMinutes: 4,
    excerpt: "Um preserva a pintura e é mais rápido; o outro repinta. Veja qual serve para cada caso.",
    content: [
      {
        heading: "Martelinho de ouro (sem pintura)",
        paragraphs: [
          "O martelinho de ouro recupera o amassado trabalhando o metal por dentro, sem massa e sem repintura. É mais rápido, mais barato e preserva a pintura de fábrica. Indicado para amassados em que a tinta está intacta.",
        ],
      },
      {
        heading: "Funilaria tradicional (com pintura)",
        paragraphs: [
          "A funilaria tradicional usa massa, lixamento, primer e repintura. É necessária quando há trincos na tinta, ferrugem, peças muito deformadas ou troca de peça. Leva mais tempo (3 a 5 dias) e tem custo maior, mas resolve danos que o reparo sem pintura não alcança.",
        ],
      },
      {
        heading: "Qual escolher",
        paragraphs: [
          "A regra é simples: pintura intacta, prefira o martelinho de ouro; pintura comprometida, funilaria com pintura. Na avaliação, indicamos a melhor opção para o seu caso — e, sempre que possível, a mais econômica.",
        ],
      },
    ],
  },
  {
    slug: "como-tirar-marca-de-porta-no-carro",
    title: "Como tirar marca de porta no carro?",
    metaTitle: "Como Tirar Marca de Porta no Carro | Amassado de Estacionamento",
    description:
      "Marca de porta no carro tem solução sem pintar. Veja como o martelinho de ouro remove amassados de estacionamento preservando a pintura original.",
    category: "Dicas",
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
    cover: "/pequeno-amassado-portamala.jpg",
    readingMinutes: 3,
    excerpt: "O amassado de porta de estacionamento é o caso ideal para o reparo sem pintura.",
    content: [
      {
        heading: "O problema mais comum dos estacionamentos",
        paragraphs: [
          "A marca de porta — aquele amassado que o carro do lado deixa ao abrir a porta — é um dos danos mais comuns e irritantes. A boa notícia é que, como a pintura quase sempre fica intacta, é o caso perfeito para o martelinho de ouro.",
        ],
      },
      {
        heading: "Como é feito o reparo",
        paragraphs: [
          "Acessamos a parte interna da porta e, com ferramentas específicas, trabalhamos o metal até a superfície voltar ao lugar. Sem massa, sem tinta e, na maioria das vezes, pronto em 1 a 2 horas.",
        ],
      },
      {
        heading: "Evite soluções caseiras",
        paragraphs: [
          "Ventosa, água quente e secador raramente resolvem e podem piorar o amassado ou marcar a pintura. O reparo profissional é mais seguro e garante o acabamento. Mande uma foto pelo WhatsApp para avaliar o seu caso.",
        ],
      },
    ],
  },
  {
    slug: "amassado-com-tinta-trincada-o-que-fazer",
    title: "Amassado com a tinta trincada: o que fazer?",
    metaTitle: "Amassado com Tinta Trincada: O Que Fazer | Funilaria",
    description:
      "Amassado com a tinta trincada precisa de mais que martelinho de ouro. Entenda quando o reparo exige funilaria com pintura e como fica o acabamento.",
    category: "Como funciona",
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
    cover: "/Capo-amassado.jpg",
    readingMinutes: 3,
    excerpt: "Quando a tinta trinca, o reparo sem pintura não basta. Veja o caminho certo.",
    content: [
      {
        heading: "Por que a tinta trincada muda o reparo",
        paragraphs: [
          "O martelinho de ouro funciona quando a pintura está intacta. Se a tinta trincou, lascou ou descascou no impacto, recuperar só o metal deixaria a falha na pintura à mostra — e exposta à ferrugem. Nesses casos, é preciso funilaria com pintura.",
        ],
      },
      {
        heading: "Como é feito",
        paragraphs: [
          "Recuperamos a forma da peça, preparamos a superfície (lixamento e primer) e repintamos com igualação de cor computadorizada, para a tonalidade ficar idêntica ao restante do carro. Finalizamos com polimento de acabamento.",
        ],
      },
      {
        heading: "Não deixe a ferrugem avançar",
        paragraphs: [
          "Tinta trincada expõe o metal e pode começar a enferrujar com o tempo. Quanto antes o reparo, menor o problema. Envie fotos pelo WhatsApp para uma avaliação gratuita em Presidente Prudente.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-funciona-em-qualquer-carro",
    title: "Martelinho de ouro funciona em qualquer carro?",
    metaTitle: "Martelinho de Ouro Funciona em Qualquer Carro? | Tire a Dúvida",
    description:
      "Martelinho de ouro funciona em qualquer carro? Saiba o que define se o reparo sem pintura é possível — o que importa é o tipo de amassado, não a marca.",
    category: "Como funciona",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    cover: "/byd-arrumado.jpg",
    readingMinutes: 3,
    excerpt: "O que decide não é a marca do carro, e sim o tipo de amassado. Entenda.",
    content: [
      {
        heading: "Marca não é o que importa",
        paragraphs: [
          "O martelinho de ouro funciona em praticamente qualquer veículo de passeio — nacional ou importado, popular ou premium. Já reparamos de carros populares a modelos como BYD. O que define se dá para fazer não é a marca, e sim as características do amassado.",
        ],
      },
      {
        heading: "O que realmente conta",
        paragraphs: [
          "Três fatores decidem: se a pintura está intacta, o quanto o metal foi esticado e o acesso à parte interna do painel. Amassados com pintura preservada e acesso possível são os candidatos ideais.",
        ],
      },
      {
        heading: "Como saber no seu caso",
        paragraphs: [
          "A forma mais rápida é enviar fotos do amassado pelo WhatsApp. Avaliamos e dizemos se o reparo sem pintura é possível ou se o melhor caminho é a funilaria com pintura.",
        ],
      },
    ],
  },
  {
    slug: "como-escolher-uma-boa-funilaria",
    title: "Como escolher uma boa funilaria?",
    metaTitle: "Como Escolher uma Boa Funilaria | 6 Pontos para Avaliar",
    description:
      "Como escolher uma boa funilaria em Presidente Prudente? Veja 6 pontos para avaliar: garantia, orçamento transparente, igualação de cor e mais.",
    category: "Dicas",
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
    cover: "/parachoque.jpg",
    readingMinutes: 4,
    excerpt: "Garantia, orçamento claro e igualação de cor: o que olhar antes de deixar seu carro.",
    content: [
      {
        heading: "Garantia por escrito",
        paragraphs: [
          "Uma boa funilaria oferece garantia por escrito sobre o serviço. Na nossa oficina, todo reparo tem garantia de 90 dias. Desconfie de quem não dá nenhuma garantia.",
        ],
      },
      {
        heading: "Orçamento transparente e avaliação",
        paragraphs: [
          "Você deve saber o que será feito e quanto vai custar antes de começar. Avaliação gratuita, orçamento claro e sem surpresas no fim são sinais de uma oficina séria.",
        ],
      },
      {
        heading: "Igualação de cor e honestidade técnica",
        paragraphs: [
          "Para pintura, a igualação de cor computadorizada garante acabamento idêntico ao original. E uma boa funilaria indica o martelinho de ouro quando ele resolve — em vez de empurrar uma repintura mais cara sem necessidade.",
        ],
      },
    ],
  },
  {
    slug: "polimento-ou-cristalizacao-qual-escolher",
    title: "Polimento ou cristalização: qual escolher?",
    metaTitle: "Polimento ou Cristalização: Qual Escolher? | Guia Rápido",
    description:
      "Polimento ou cristalização? Entenda a diferença, o que cada um faz pela pintura do carro e como combiná-los para um resultado que dura mais.",
    category: "Dicas",
    datePublished: "2026-04-12",
    dateModified: "2026-04-12",
    cover: "/Polimento-arranhado.jpg",
    readingMinutes: 3,
    excerpt: "Um corrige, o outro protege. O ideal costuma ser os dois juntos. Entenda.",
    content: [
      {
        heading: "O que faz o polimento",
        paragraphs: [
          "O polimento corrige: remove riscos superficiais, marcas de lavagem (swirls) e opacidade, devolvendo o brilho da pintura. É um trabalho de correção da superfície.",
        ],
      },
      {
        heading: "O que faz a cristalização",
        paragraphs: [
          "A cristalização protege: aplica uma camada que repele água e sujeira, facilita a lavagem e ajuda a manter o brilho por mais tempo. Não corrige riscos — ela preserva o resultado.",
        ],
      },
      {
        heading: "Qual escolher",
        paragraphs: [
          "Se a pintura está riscada e opaca, comece pelo polimento. Para manter o resultado, finalize com cristalização (ou vitrificação, mais duradoura). O combo é o que entrega o melhor acabamento. Avaliamos sua pintura e indicamos o ideal.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-tem-garantia",
    title: "Martelinho de ouro tem garantia?",
    metaTitle: "Martelinho de Ouro Tem Garantia? | Saiba Como Funciona",
    description:
      "Martelinho de ouro tem garantia? Sim. Veja o que a garantia cobre e por que um serviço bem feito não volta a amassar sozinho.",
    category: "Dicas",
    datePublished: "2026-04-25",
    dateModified: "2026-04-25",
    cover: "/porta-malas.jpg",
    readingMinutes: 2,
    excerpt: "Sim, tem. Na nossa oficina, todo serviço sai com 90 dias de garantia por escrito.",
    content: [
      {
        heading: "Sim, e por escrito",
        paragraphs: [
          "Todo serviço de martelinho de ouro, funilaria e polimento na nossa oficina em Presidente Prudente sai com garantia de 90 dias por escrito. Você fica protegido caso algo não fique como combinado.",
        ],
      },
      {
        heading: "O que a garantia significa",
        paragraphs: [
          "Um amassado bem reparado não volta sozinho: o metal foi devolvido ao formato original. A garantia cobre a qualidade do serviço executado. Ela não cobre, claro, um novo dano causado por uma batida futura.",
        ],
      },
    ],
  },
  {
    slug: "seguro-cobre-granizo-no-carro",
    title: "O seguro cobre granizo no carro?",
    metaTitle: "Seguro Cobre Granizo no Carro? | Como Acionar",
    description:
      "O seguro cobre granizo no carro? Na maioria das apólices com cobertura compreensiva, sim. Veja como acionar e como funciona o reparo sem repintura.",
    category: "Granizo",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
    cover: "/Capo-amassado.jpg",
    readingMinutes: 3,
    excerpt: "Apólices compreensivas costumam cobrir granizo. Veja como acionar e o que esperar.",
    content: [
      {
        heading: "Depende da cobertura da apólice",
        paragraphs: [
          "Danos de granizo costumam ser cobertos por seguros com cobertura compreensiva (que inclui fenômenos da natureza). Apólices só de colisão ou roubo/furto podem não cobrir. Verifique a sua apólice ou pergunte ao corretor.",
        ],
      },
      {
        heading: "Como acionar",
        paragraphs: [
          "Registre fotos do carro logo após o temporal e abra o sinistro com a seguradora. Em seguida, leve o veículo a uma oficina que trabalhe com a sua seguradora. Nós atendemos as principais seguradoras e ajudamos com a documentação.",
        ],
      },
      {
        heading: "O reparo de granizo costuma ser sem pintura",
        paragraphs: [
          "Como o granizo geralmente não trinca a tinta, o reparo é feito com martelinho de ouro, sem repintura. Isso preserva a pintura de fábrica e costuma reduzir bastante o custo total do sinistro.",
        ],
      },
    ],
  },
  {
    slug: "quanto-custa-reparar-carro-de-granizo",
    title: "Quanto custa reparar um carro de granizo?",
    metaTitle: "Quanto Custa Reparar um Carro de Granizo? | Entenda o Orçamento",
    description:
      "Quanto custa reparar um carro de granizo? O valor depende da quantidade de amassados. Veja por que o reparo sem pintura sai mais barato que repintar.",
    category: "Granizo",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
    cover: "/Capo-arrumado.jpg",
    readingMinutes: 3,
    excerpt: "O preço depende da quantidade de amassados. Sem repintura, costuma ser bem mais barato.",
    content: [
      {
        heading: "O que define o valor",
        paragraphs: [
          "No granizo, o que mais pesa é a quantidade de amassados e o tamanho de cada um. O orçamento é feito mapeando painel por painel — teto, capô, porta-malas e laterais — porque cada região recebe um número diferente de marcas.",
        ],
      },
      {
        heading: "Por que sem repintura sai mais barato",
        paragraphs: [
          "Repintar vários painéis é caro e demorado. Como o granizo costuma não trincar a tinta, o reparo com martelinho de ouro remove os amassados sem repintura — o que reduz muito o custo em comparação a uma funilaria completa.",
        ],
      },
      {
        heading: "Use o seguro a seu favor",
        paragraphs: [
          "Se a sua apólice cobre granizo, boa parte do custo pode ser do seguro. Avaliamos o carro, fazemos o orçamento e ajudamos no processo do sinistro. Envie fotos pelo WhatsApp para começar.",
        ],
      },
    ],
  },
  {
    slug: "quanto-tempo-demora-reparo-de-granizo",
    title: "Quanto tempo demora o reparo de um carro de granizo?",
    metaTitle: "Quanto Tempo Demora o Reparo de Granizo? | Prazos",
    description:
      "Quanto tempo demora o reparo de um carro de granizo? O prazo depende da quantidade de amassados. Entenda como funciona a avaliação e a execução.",
    category: "Granizo",
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
    cover: "/byd-amassado.jpg",
    readingMinutes: 2,
    excerpt: "Depende da quantidade de amassados. Após a avaliação, o prazo é informado antes de começar.",
    content: [
      {
        heading: "O prazo depende da quantidade",
        paragraphs: [
          "Como o granizo deixa vários amassados, o tempo de reparo varia bastante de carro para carro. Cada amassado é trabalhado individualmente com a técnica do martelinho de ouro, o que exige cuidado e atenção.",
        ],
      },
      {
        heading: "Avaliação antes da execução",
        paragraphs: [
          "Primeiro mapeamos todos os amassados para dimensionar o serviço. Com isso, conseguimos informar um prazo realista antes de iniciar — sem surpresas. Mesmo com vários amassados, o reparo sem pintura costuma ser mais rápido que repintar painéis inteiros.",
        ],
      },
    ],
  },
  {
    slug: "como-proteger-o-carro-do-granizo",
    title: "Como proteger o carro do granizo?",
    metaTitle: "Como Proteger o Carro do Granizo | Dicas Práticas",
    description:
      "Como proteger o carro do granizo? Veja dicas práticas para reduzir danos em temporais e o que fazer se o seu carro for atingido em Presidente Prudente.",
    category: "Granizo",
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    cover: "/Capo-arrumado.jpg",
    readingMinutes: 3,
    excerpt: "Garagem coberta é a melhor proteção. Veja outras dicas e o que fazer se já aconteceu.",
    content: [
      {
        heading: "Prevenção: onde guardar o carro",
        paragraphs: [
          "A melhor proteção é manter o carro em garagem ou local coberto durante temporais. Se estiver na rua e houver previsão de granizo, procure um estacionamento coberto, posto ou marquise. Capas e cobertores grossos ajudam em emergências, mas não substituem um teto.",
        ],
      },
      {
        heading: "Fique atento à previsão",
        paragraphs: [
          "No Oeste Paulista, temporais com granizo são mais comuns em certas épocas do ano. Acompanhar a previsão e agir antes do temporal evita a maior parte dos danos.",
        ],
      },
      {
        heading: "Se o carro já foi atingido",
        paragraphs: [
          "Não tente empurrar os amassados por conta própria — isso pode esticar o metal. Registre fotos, acione o seguro (se houver cobertura) e procure uma oficina especializada em reparo de granizo. Atendemos Presidente Prudente e região.",
        ],
      },
    ],
  },
  {
    slug: "como-tirar-riscos-do-carro",
    title: "Como tirar riscos do carro?",
    metaTitle: "Como Tirar Riscos do Carro | Polimento e Retoque",
    description:
      "Como tirar riscos do carro? Depende da profundidade. Veja quando o polimento resolve e quando é preciso retoque de pintura para um acabamento perfeito.",
    category: "Dicas",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
    cover: "/Polimento-arranhado.jpg",
    readingMinutes: 3,
    excerpt: "Risco superficial sai no polimento; risco fundo precisa de retoque. Saiba diferenciar.",
    content: [
      {
        heading: "Risco superficial: polimento resolve",
        paragraphs: [
          "Riscos superficiais e marcas de lavagem (swirls) ficam só no verniz e costumam sair com polimento técnico, sem necessidade de pintura. O polimento remove a camada danificada e devolve o brilho.",
        ],
      },
      {
        heading: "Risco profundo: precisa de retoque",
        paragraphs: [
          "Se o risco atinge a tinta ou o primer (você sente a unha 'travar' nele), o polimento sozinho não resolve. Aí é preciso retoque de pintura com igualação de cor para o acabamento ficar imperceptível.",
        ],
      },
      {
        heading: "O teste da unha",
        paragraphs: [
          "Passe a unha sobre o risco: se ela não engata, provavelmente é superficial (polimento). Se engata, é mais fundo (retoque). Na dúvida, mande uma foto pelo WhatsApp e avaliamos.",
        ],
      },
    ],
  },
  {
    slug: "vale-a-pena-fazer-polimento-no-carro",
    title: "Vale a pena fazer polimento no carro?",
    metaTitle: "Vale a Pena Fazer Polimento no Carro? | Benefícios",
    description:
      "Vale a pena fazer polimento no carro? Veja os benefícios do polimento para o brilho, a proteção e o valor de revenda do seu veículo.",
    category: "Dicas",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    cover: "/Polimento.jpg",
    readingMinutes: 3,
    excerpt: "Brilho de novo, pintura protegida e melhor revenda. Quase sempre, vale a pena.",
    content: [
      {
        heading: "O que o polimento entrega",
        paragraphs: [
          "Um bom polimento remove riscos superficiais, manchas e opacidade, devolvendo o brilho de fábrica. Em muitos carros, o resultado parece uma pintura nova — sem o custo de repintar.",
        ],
      },
      {
        heading: "Benefício além da estética",
        paragraphs: [
          "Com proteção (cristalização ou vitrificação) após o polimento, a pintura fica mais fácil de limpar e protegida contra sujeira e sol, o que ajuda a conservar a tinta por mais tempo.",
        ],
      },
      {
        heading: "E na hora de vender",
        paragraphs: [
          "Um carro com pintura brilhante e bem cuidada causa melhor impressão e tende a valorizar na revenda. Por isso, o polimento costuma valer a pena — tanto para uso quanto para venda.",
        ],
      },
    ],
  },
  {
    slug: "funilaria-pelo-seguro-como-funciona",
    title: "Funilaria pelo seguro: como funciona?",
    metaTitle: "Funilaria pelo Seguro: Como Funciona | Passo a Passo",
    description:
      "Funilaria pelo seguro: entenda o passo a passo do sinistro, o que é franquia e como escolher a oficina. Trabalhamos com as principais seguradoras.",
    category: "Dicas",
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    cover: "/parachoque-pronto.jpg",
    readingMinutes: 3,
    excerpt: "Sinistro, franquia e escolha da oficina: entenda como funciona o reparo pelo seguro.",
    content: [
      {
        heading: "Abrindo o sinistro",
        paragraphs: [
          "Após o dano, você comunica a seguradora e abre o sinistro. Ela orienta sobre a vistoria e indica (ou aprova) a oficina. Em muitos casos, você pode escolher uma oficina de sua confiança que trabalhe com a seguradora.",
        ],
      },
      {
        heading: "O que é a franquia",
        paragraphs: [
          "Na maioria dos sinistros de funilaria, você paga a franquia (um valor fixo previsto na apólice) e a seguradora cobre o restante do reparo. Vale conferir o valor da franquia antes de decidir acionar o seguro para danos pequenos.",
        ],
      },
      {
        heading: "Como ajudamos",
        paragraphs: [
          "Trabalhamos com as principais seguradoras e ajudamos com a documentação e o andamento do reparo. Atendemos Presidente Prudente e região — envie fotos pelo WhatsApp para começar.",
        ],
      },
    ],
  },
  {
    slug: "quanto-custa-pintar-uma-porta-de-carro",
    title: "Quanto custa pintar uma porta de carro?",
    metaTitle: "Quanto Custa Pintar uma Porta de Carro? | Preço e Fatores",
    description:
      "Quanto custa pintar uma porta de carro? Veja o que influencia o preço da pintura automotiva e quando dá para resolver sem pintar com martelinho de ouro.",
    category: "Custos",
    datePublished: "2026-05-25",
    dateModified: "2026-05-25",
    cover: "/amassado-lateral.jpg",
    readingMinutes: 3,
    excerpt: "O preço varia com a cor, o estado da peça e o tipo de tinta. Às vezes, nem precisa pintar.",
    content: [
      {
        heading: "O que influencia o preço",
        paragraphs: [
          "O valor de pintar uma porta depende da cor do veículo (cores especiais e perolizadas são mais trabalhosas), do estado da peça, da necessidade de funilaria antes e do tipo de tinta. Por isso, o orçamento exato sai após a avaliação.",
        ],
      },
      {
        heading: "Será que precisa pintar?",
        paragraphs: [
          "Se o dano na porta é só um amassado com a pintura intacta, talvez nem seja preciso pintar: o martelinho de ouro resolve sem repintura, mais rápido e mais barato. A repintura entra quando a tinta está trincada ou riscada fundo.",
        ],
      },
      {
        heading: "Acabamento que não aparece",
        paragraphs: [
          "Quando a pintura é necessária, usamos igualação de cor computadorizada para a porta ficar idêntica ao resto do carro. Envie fotos pelo WhatsApp para um orçamento sem compromisso.",
        ],
      },
    ],
  },
  {
    slug: "retoque-de-pintura-vale-a-pena",
    title: "Retoque de pintura vale a pena?",
    metaTitle: "Retoque de Pintura Vale a Pena? | Quando Fazer",
    description:
      "Retoque de pintura vale a pena? Para riscos, lascas e pequenos danos, sim. Veja quando o retoque resolve sem precisar repintar a peça inteira.",
    category: "Dicas",
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
    cover: "/car-paint-scratch-before.jpg",
    readingMinutes: 3,
    excerpt: "Para riscos e lascas localizadas, o retoque resolve sem repintar a peça toda.",
    content: [
      {
        heading: "O que é o retoque de pintura",
        paragraphs: [
          "O retoque é a correção localizada de riscos, lascas e pequenos danos na pintura, sem repintar a peça inteira. É indicado quando o dano é pontual e a maior parte da pintura está boa.",
        ],
      },
      {
        heading: "Quando vale a pena",
        paragraphs: [
          "Vale a pena em pequenas lascas (de pedrisco, por exemplo), riscos localizados e pontos de ferrugem inicial. Resolver cedo evita que o problema cresça e fica mais barato que repintar toda a peça depois.",
        ],
      },
      {
        heading: "Fica visível?",
        paragraphs: [
          "Com igualação de cor e técnica adequada, o retoque fica imperceptível. Para danos maiores, porém, a repintura da peça pode dar um resultado mais uniforme — e nós indicamos a melhor opção na avaliação.",
        ],
      },
    ],
  },
  {
    slug: "como-cuidar-da-pintura-do-carro",
    title: "Como cuidar da pintura do carro e mantê-la nova",
    metaTitle: "Como Cuidar da Pintura do Carro | 5 Dicas para Conservar",
    description:
      "Como cuidar da pintura do carro? Veja 5 dicas simples para conservar o brilho, evitar riscos e manter a pintura nova por mais tempo.",
    category: "Dicas",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    cover: "/Polimento.jpg",
    readingMinutes: 3,
    excerpt: "Lavagem correta, sombra e proteção: hábitos simples que conservam a pintura.",
    content: [
      {
        heading: "Lave do jeito certo",
        paragraphs: [
          "Lave o carro com produtos automotivos (não use detergente de cozinha, que resseca a pintura) e luvas/panos limpos. Lavar 'a seco' com pano sujo é uma das maiores causas de riscos finos (swirls).",
        ],
      },
      {
        heading: "Evite sol forte e sujeira agressiva",
        paragraphs: [
          "Sempre que possível, estacione na sombra: o sol forte desgasta o verniz com o tempo. Remova logo fezes de pássaro, seiva e respingos de obra, que podem manchar a pintura se ficarem horas.",
        ],
      },
      {
        heading: "Proteja com polimento e cristalização",
        paragraphs: [
          "Um polimento periódico com proteção (cristalização ou vitrificação) mantém o brilho e cria uma barreira contra sujeira e sol. É o melhor investimento para conservar a pintura por mais tempo.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-alvares-machado",
    title: "Martelinho de ouro em Álvares Machado",
    metaTitle: "Martelinho de Ouro em Álvares Machado | Sem Pintura",
    description:
      "Martelinho de ouro para quem é de Álvares Machado: remoção de amassados sem pintura na nossa oficina em Presidente Prudente, a poucos minutos da cidade.",
    category: "Região",
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    cover: "/byd-arrumado.jpg",
    readingMinutes: 2,
    excerpt: "Álvares Machado fica a poucos minutos da nossa oficina em Presidente Prudente. Veja como atendemos.",
    content: [
      {
        heading: "Pertinho da nossa oficina",
        paragraphs: [
          "Álvares Machado é uma das cidades mais próximas de Presidente Prudente — a poucos minutos de carro da nossa oficina, na Vila Aristarcho. Por isso, é comum recebermos clientes de lá para remoção de amassados, funilaria e polimento.",
        ],
      },
      {
        heading: "Reparo sem pintura compensa o trajeto",
        paragraphs: [
          "O martelinho de ouro remove amassados sem repintura, preservando a pintura original e o valor de revenda do carro. Como o deslocamento de Álvares Machado é curto, vale muito a pena trazer o veículo para um reparo de qualidade.",
        ],
      },
      {
        heading: "Como agendar",
        paragraphs: [
          "Mande fotos do amassado pelo WhatsApp e receba uma estimativa antes de sair de casa. Depois é só agendar o melhor horário. Todo serviço sai com garantia de 90 dias.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-pirapozinho",
    title: "Martelinho de ouro em Pirapozinho",
    metaTitle: "Martelinho de Ouro em Pirapozinho | Remoção de Amassados",
    description:
      "É de Pirapozinho? Fazemos martelinho de ouro, funilaria e polimento na nossa oficina em Presidente Prudente, com orçamento pelo WhatsApp e garantia de 90 dias.",
    category: "Região",
    datePublished: "2026-06-05",
    dateModified: "2026-06-05",
    cover: "/porta-malas.jpg",
    readingMinutes: 2,
    excerpt: "Pirapozinho é cidade vizinha de Prudente. Atendemos com orçamento prático pelo WhatsApp.",
    content: [
      {
        heading: "Atendimento para Pirapozinho",
        paragraphs: [
          "Pirapozinho fica ao sul de Presidente Prudente, a uma curta distância da nossa oficina. Recebemos com frequência motoristas da cidade para remoção de amassados sem pintura, funilaria e polimento automotivo.",
        ],
      },
      {
        heading: "Por que sem pintura",
        paragraphs: [
          "Quando a pintura está intacta, o reparo com martelinho de ouro é mais rápido, mais barato e preserva a tinta de fábrica. É a melhor escolha para marcas de porta, batidas leves e amassados de granizo.",
        ],
      },
      {
        heading: "Orçamento pelo WhatsApp",
        paragraphs: [
          "Envie fotos do dano pelo WhatsApp para uma avaliação gratuita. Combinamos o horário e você retira o carro pronto, com garantia de 90 dias.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-regente-feijo",
    title: "Martelinho de ouro em Regente Feijó",
    metaTitle: "Martelinho de Ouro em Regente Feijó | Sem Pintura",
    description:
      "Martelinho de ouro para Regente Feijó: remoção de amassados sem pintura e funilaria na nossa oficina em Presidente Prudente, na região metropolitana.",
    category: "Região",
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    cover: "/amssado-lateral-pronto.jpg",
    readingMinutes: 2,
    excerpt: "Regente Feijó faz parte da região metropolitana de Prudente. Veja como atendemos sua cidade.",
    content: [
      {
        heading: "Na região metropolitana de Prudente",
        paragraphs: [
          "Regente Feijó integra a região metropolitana de Presidente Prudente, a leste, bem perto da nossa oficina. O acesso rápido facilita trazer o carro para um reparo profissional sem complicação.",
        ],
      },
      {
        heading: "Serviços que fazemos",
        paragraphs: [
          "Atendemos remoção de amassados sem pintura (martelinho de ouro), funilaria e pintura com igualação de cor, polimento e reparo de granizo. Avaliamos cada caso e indicamos a melhor técnica.",
        ],
      },
      {
        heading: "Comece pelo WhatsApp",
        paragraphs: [
          "Mande fotos do amassado ou risco pelo WhatsApp e receba uma estimativa. Todo serviço tem garantia de 90 dias por escrito.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-martinopolis",
    title: "Martelinho de ouro em Martinópolis",
    metaTitle: "Martelinho de Ouro em Martinópolis | Funilaria e Amassados",
    description:
      "É de Martinópolis? Fazemos martelinho de ouro, funilaria e polimento na nossa oficina em Presidente Prudente, com qualidade sem precisar ir à capital.",
    category: "Região",
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    cover: "/Capo-arrumado.jpg",
    readingMinutes: 2,
    excerpt: "Martinópolis conta com a gente para reparo de qualidade sem ir até a capital.",
    content: [
      {
        heading: "Qualidade perto de casa",
        paragraphs: [
          "Moradores de Martinópolis não precisam ir até São Paulo ou outra cidade grande para um reparo bem feito. Na nossa oficina em Presidente Prudente, fazemos martelinho de ouro, funilaria e polimento com acabamento profissional.",
        ],
      },
      {
        heading: "Sem pintura sempre que possível",
        paragraphs: [
          "Quando o amassado permite, usamos o reparo sem pintura, que preserva a tinta de fábrica e custa menos. Para danos com a pintura comprometida, fazemos a funilaria com pintura igualada à cor original.",
        ],
      },
      {
        heading: "Avaliação gratuita",
        paragraphs: [
          "Envie fotos pelo WhatsApp para um orçamento sem compromisso e agende o melhor dia para trazer o carro. Garantia de 90 dias em todos os serviços.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-presidente-bernardes",
    title: "Martelinho de ouro em Presidente Bernardes",
    metaTitle: "Martelinho de Ouro em Presidente Bernardes | Sem Pintura",
    description:
      "Martelinho de ouro para Presidente Bernardes: remoção de amassados sem pintura, funilaria e polimento na nossa oficina em Presidente Prudente.",
    category: "Região",
    datePublished: "2026-06-08",
    dateModified: "2026-06-08",
    cover: "/parachoque-pronto.jpg",
    readingMinutes: 2,
    excerpt: "Presidente Bernardes está na nossa área de atendimento. Reparo sem pintura com garantia.",
    content: [
      {
        heading: "Atendemos Presidente Bernardes",
        paragraphs: [
          "Presidente Bernardes faz parte da nossa região de atendimento. Recebemos clientes da cidade para remoção de amassados, funilaria e polimento, sempre com avaliação honesta sobre a melhor técnica.",
        ],
      },
      {
        heading: "A vantagem de não repintar",
        paragraphs: [
          "O martelinho de ouro mantém a pintura original do carro, evita diferença de tom e reduz o custo. É o caminho ideal para amassados em que a tinta não trincou.",
        ],
      },
      {
        heading: "Como começar",
        paragraphs: [
          "Mande fotos do dano pelo WhatsApp, receba uma estimativa e agende. Todo serviço sai com garantia de 90 dias.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-santo-anastacio",
    title: "Martelinho de ouro em Santo Anastácio",
    metaTitle: "Martelinho de Ouro em Santo Anastácio | Amassados e Funilaria",
    description:
      "Martelinho de ouro para Santo Anastácio: reparo de amassados sem pintura, funilaria e granizo na nossa oficina em Presidente Prudente.",
    category: "Região",
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    cover: "/byd-amassado.jpg",
    readingMinutes: 2,
    excerpt: "Santo Anastácio conta com a gente para reparo sem pintura e funilaria de qualidade.",
    content: [
      {
        heading: "Reparo para Santo Anastácio",
        paragraphs: [
          "Atendemos motoristas de Santo Anastácio que buscam um reparo bem feito sem abrir mão da qualidade. Na nossa oficina em Presidente Prudente, fazemos martelinho de ouro, funilaria, polimento e reparo de granizo.",
        ],
      },
      {
        heading: "Granizo? Costuma ser sem pintura",
        paragraphs: [
          "Carros atingidos por granizo geralmente podem ser recuperados sem repintura, o que preserva a pintura e reduz o custo. Trabalhamos com as principais seguradoras nesses casos.",
        ],
      },
      {
        heading: "Fale pelo WhatsApp",
        paragraphs: [
          "Envie fotos do dano e receba uma avaliação gratuita. Combinamos o horário e você retira o carro com garantia de 90 dias.",
        ],
      },
    ],
  },
  {
    slug: "martelinho-de-ouro-em-rancharia",
    title: "Martelinho de ouro em Rancharia",
    metaTitle: "Martelinho de Ouro em Rancharia | Reparo Sem Pintura",
    description:
      "É de Rancharia? Fazemos martelinho de ouro, funilaria e polimento na nossa oficina em Presidente Prudente, com orçamento pelo WhatsApp e garantia.",
    category: "Região",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
    cover: "/Polimento.jpg",
    readingMinutes: 2,
    excerpt: "Rancharia faz parte da nossa região. Reparo de qualidade com orçamento pelo WhatsApp.",
    content: [
      {
        heading: "Atendimento para Rancharia",
        paragraphs: [
          "Rancharia integra a nossa região de atendimento no Oeste Paulista. Recebemos clientes da cidade para remoção de amassados sem pintura, funilaria e polimento automotivo.",
        ],
      },
      {
        heading: "Vale a pena pela qualidade",
        paragraphs: [
          "Um reparo bem feito preserva a pintura e o valor do carro. Como o martelinho de ouro dispensa repintura, o resultado é rápido, econômico e mantém a tinta de fábrica.",
        ],
      },
      {
        heading: "Orçamento sem compromisso",
        paragraphs: [
          "Mande fotos do amassado pelo WhatsApp para receber uma estimativa e agendar. Todo serviço tem garantia de 90 dias por escrito.",
        ],
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
