/**
 * Casos reais (antes/depois) — usam fotos verdadeiras de /public.
 * Cada caso vira uma página em /casos/[slug] com conteúdo próprio para SEO local.
 *
 * ✏️ Bairro/cidade e detalhes podem ser ajustados pelo dono conforme o atendimento real.
 */

export type CaseStudy = {
  slug: string
  title: string
  metaTitle: string
  description: string
  car: string
  service: string
  neighborhood: string
  city: string
  duration: string
  before: string
  after: string
  summary: string
  content: { heading: string; paragraphs: string[] }[]
}

export const cases: CaseStudy[] = [
  {
    slug: "remocao-amassado-byd-presidente-prudente",
    title: "Remoção de amassado em BYD sem pintura",
    metaTitle: "Caso: Remoção de Amassado em BYD em Presidente Prudente",
    description:
      "Caso real de remoção de amassado em um BYD em Presidente Prudente usando martelinho de ouro, sem pintura e preservando a lataria original.",
    car: "BYD",
    service: "Martelinho de ouro (sem pintura)",
    neighborhood: "Vila Aristarcho",
    city: "Presidente Prudente",
    duration: "Algumas horas",
    before: "/byd-amassado.jpg",
    after: "/byd-arrumado.jpg",
    summary:
      "Amassado na lataria de um BYD removido com a técnica do martelinho de ouro, sem repintura e com a pintura de fábrica preservada.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "O cliente chegou à nossa oficina em Presidente Prudente com um amassado visível na lataria do seu BYD. A pintura, porém, estava intacta — sem trincos nem riscos profundos. Esse é exatamente o tipo de dano em que o martelinho de ouro entrega o melhor resultado.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Avaliamos o amassado e confirmamos que o reparo poderia ser feito sem pintura. Acessando a parte interna do painel, trabalhamos o metal de dentro para fora com ferramentas específicas, devolvendo a superfície ao formato original de fábrica.",
          "Por não envolver massa nem repintura, o serviço foi concluído em poucas horas, sem o carro precisar ficar dias parado.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "O BYD saiu da oficina com a lataria recuperada e a pintura original preservada — sem diferença de tonalidade e mantendo o valor de revenda. O serviço saiu com garantia de 90 dias. Veja o antes e depois acima.",
        ],
      },
    ],
  },
  {
    slug: "reparo-capo-amassado-presidente-prudente",
    title: "Reparo de capô amassado",
    metaTitle: "Caso: Reparo de Capô Amassado em Presidente Prudente",
    description:
      "Caso real de reparo de capô amassado em Presidente Prudente, com funilaria e acabamento profissional.",
    car: "Veículo de passeio",
    service: "Funilaria e pintura",
    neighborhood: "Vila Aristarcho",
    city: "Presidente Prudente",
    duration: "Poucos dias",
    before: "/Capo-amassado.jpg",
    after: "/Capo-arrumado.jpg",
    summary: "Capô amassado recuperado com funilaria e acabamento igualado à pintura original do veículo.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "O capô do veículo apresentava um amassado mais extenso, com a pintura afetada na região do impacto. Nesses casos, o reparo combinado de funilaria com pintura é o caminho para um acabamento perfeito.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Recuperamos a forma do capô, preparamos a superfície (lixamento e primer) e aplicamos a pintura com igualação de cor computadorizada, garantindo que a tonalidade ficasse idêntica ao restante do carro.",
          "Por fim, fizemos o polimento de acabamento para uniformizar o brilho da peça reparada com o resto da lataria.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "O capô ficou sem marcas e com a cor perfeitamente igualada. O cliente retirou o carro com aparência de novo e garantia de 90 dias sobre o serviço.",
        ],
      },
    ],
  },
  {
    slug: "amassado-porta-malas-presidente-prudente",
    title: "Amassado no porta-malas removido sem pintura",
    metaTitle: "Caso: Amassado no Porta-malas em Presidente Prudente",
    description:
      "Caso real de remoção de amassado no porta-malas em Presidente Prudente, sem repintura, com a técnica do martelinho de ouro.",
    car: "Veículo de passeio",
    service: "Martelinho de ouro (sem pintura)",
    neighborhood: "Vila Marcondes",
    city: "Presidente Prudente",
    duration: "Algumas horas",
    before: "/porta-malas-amassado.jpg",
    after: "/porta-malas.jpg",
    summary: "Amassado no porta-malas recuperado sem pintura, preservando a lataria e a pintura original.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "O cliente trouxe o carro com um amassado na tampa do porta-malas, com a pintura preservada. Um caso ideal para o reparo sem pintura.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Acessamos a parte interna da tampa e aplicamos a técnica do martelinho de ouro, devolvendo a peça ao formato original sem massa e sem repintura.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "A tampa do porta-malas voltou ao estado original em poucas horas, com a pintura de fábrica intacta e garantia de 90 dias. Confira o antes e depois acima.",
        ],
      },
    ],
  },
  {
    slug: "funilaria-lateral-presidente-prudente",
    title: "Funilaria de lateral amassada",
    metaTitle: "Caso: Funilaria de Lateral Amassada em Presidente Prudente",
    description:
      "Caso real de funilaria de lateral amassada em Presidente Prudente, com reparo e pintura de acabamento profissional.",
    car: "Veículo de passeio",
    service: "Funilaria e pintura",
    neighborhood: "Jardim Bongiovani",
    city: "Presidente Prudente",
    duration: "Poucos dias",
    before: "/amassado-lateral.jpg",
    after: "/amssado-lateral-pronto.jpg",
    summary: "Lateral amassada recuperada com funilaria completa e pintura igualada à cor original.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "A lateral do veículo sofreu um impacto que deformou a peça e afetou a pintura. O reparo exigiu funilaria com repintura para um acabamento perfeito.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Recuperamos a forma da lateral, preparamos a superfície e aplicamos a pintura com igualação de cor. O cuidado na preparação é o que garante um acabamento sem ondulações e sem diferença de tom.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "A lateral ficou reta e com a cor perfeitamente igualada ao restante do carro. Serviço entregue com garantia de 90 dias.",
        ],
      },
    ],
  },
  {
    slug: "reparo-parachoque-presidente-prudente",
    title: "Reparo de para-choque danificado",
    metaTitle: "Caso: Reparo de Para-choque em Presidente Prudente",
    description:
      "Caso real de reparo de para-choque em Presidente Prudente, com recuperação e pintura de acabamento.",
    car: "Veículo de passeio",
    service: "Funilaria e troca de peça",
    neighborhood: "Parque Alvorada",
    city: "Presidente Prudente",
    duration: "Poucos dias",
    before: "/parachoque.jpg",
    after: "/parachoque-pronto.jpg",
    summary: "Para-choque danificado recuperado com acabamento e pintura igualada à cor do veículo.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "O para-choque apresentava danos na pintura e na estrutura após uma batida. Peças de para-choque exigem cuidado especial no acabamento por causa do material e das curvas.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Avaliamos se o reparo da peça era viável ou se a troca seria mais indicada. Após o reparo, preparamos e pintamos o para-choque com igualação de cor para combinar com o restante do carro.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "O para-choque ficou com acabamento uniforme e cor igualada. O cliente saiu satisfeito e com garantia de 90 dias sobre o serviço.",
        ],
      },
    ],
  },
  {
    slug: "polimento-pintura-presidente-prudente",
    title: "Polimento de pintura arranhada",
    metaTitle: "Caso: Polimento de Pintura em Presidente Prudente",
    description:
      "Caso real de polimento automotivo em Presidente Prudente, com remoção de riscos e restauração do brilho.",
    car: "Veículo de passeio",
    service: "Polimento automotivo",
    neighborhood: "Jardim Paulista",
    city: "Presidente Prudente",
    duration: "1 a 2 dias",
    before: "/Polimento-arranhado.jpg",
    after: "/Polimento.jpg",
    summary: "Pintura arranhada e opaca recuperada com polimento técnico, devolvendo o brilho de fábrica.",
    content: [
      {
        heading: "O problema",
        paragraphs: [
          "A pintura estava opaca e com diversos riscos superficiais e marcas de lavagem (swirls), comuns com o tempo de uso.",
        ],
      },
      {
        heading: "A solução",
        paragraphs: [
          "Fizemos lavagem e descontaminação, seguidas da correção com politriz e produtos técnicos para remover os riscos. Finalizamos com proteção para prolongar o brilho.",
        ],
      },
      {
        heading: "O resultado",
        paragraphs: [
          "A pintura voltou a brilhar, com aspecto espelhado e protegido. Um polimento bem feito devolve a aparência de novo sem custo de repintura.",
        ],
      },
    ],
  },
]

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
