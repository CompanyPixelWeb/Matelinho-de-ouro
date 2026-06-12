import { MapPin } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site-config"

export function RegionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F6F7F9]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 text-balance">
            Atendemos Presidente Prudente e Região
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto text-pretty">
            Nossa oficina fica em Presidente Prudente e recebe clientes de toda a região do Oeste Paulista.
          </p>
        </div>

        {/* Chips de cidades */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteConfig.cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 bg-white text-[#111827] px-4 py-2 rounded-full shadow-sm text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-[#C99B3B]" />
              {city}
            </span>
          ))}
        </div>

        {/* Conteúdo local */}
        <div className="prose-local space-y-6 text-[#374151] leading-relaxed text-base md:text-lg">
          <p>
            O <strong>Martelinho de Ouro</strong> é uma oficina de funilaria especializada em{" "}
            <strong>remoção de amassados sem pintura</strong> localizada na{" "}
            {siteConfig.address.street}, no bairro {siteConfig.address.neighborhood}, em{" "}
            <strong>Presidente Prudente – SP</strong>. Estamos no coração do Oeste Paulista e, por isso, atendemos
            motoristas de toda a região que precisam recuperar a aparência do carro com qualidade, rapidez e preço
            justo — sem comprometer a pintura original de fábrica.
          </p>

          <h3 className="text-2xl font-bold text-[#111827]">Martelinho de ouro em Presidente Prudente</h3>
          <p>
            Em <strong>Presidente Prudente</strong>, somos referência em desamassamento sem pintura, funilaria,
            polimento e reparos de granizo. Atendemos clientes de bairros como Vila Aristarcho, Vila Marcondes,
            Jardim Bongiovani, Parque Alvorada, Jardim Paulista, Vila Furquim, Brasil Novo e região central. Seja um
            amassado de porta no estacionamento do shopping, uma batida leve no trânsito ou marcas de granizo após um
            temporal, o reparo é feito por profissionais experientes, com avaliação gratuita pelo WhatsApp e prazo
            combinado antes de começar o serviço.
          </p>

          <h3 className="text-2xl font-bold text-[#111827]">Cidades vizinhas que atendemos</h3>
          <p>
            Muitos clientes vêm de cidades próximas porque o reparo sem pintura compensa o deslocamento: o carro
            mantém a pintura original e o valor de revenda. Atendemos com frequência motoristas de{" "}
            <strong>Álvares Machado</strong>, que fica a poucos minutos da nossa oficina, e de{" "}
            <strong>Pirapozinho</strong>, cidade vizinha onde recebemos diversos carros para remoção de amassados e
            polimento. Também atendemos <strong>Regente Feijó</strong>, na entrada da região metropolitana de
            Presidente Prudente, com agilidade no orçamento e na entrega.
          </p>
          <p>
            De <strong>Martinópolis</strong> e <strong>Presidente Bernardes</strong> recebemos clientes que buscam
            funilaria e pintura de qualidade sem precisar ir até a capital. Já moradores de{" "}
            <strong>Santo Anastácio</strong> e <strong>Rancharia</strong> contam com a gente para reparos de granizo,
            retoques de pintura e recuperação de para-choques, para-lamas e portas amassadas. Em todas essas cidades,
            o atendimento começa do mesmo jeito: você manda fotos do dano pelo WhatsApp e recebe uma estimativa antes
            mesmo de sair de casa.
          </p>

          <h3 className="text-2xl font-bold text-[#111827]">Por que reparar sem pintura faz diferença</h3>
          <p>
            A técnica do martelinho de ouro (em inglês, <em>paintless dent repair</em>) trabalha o metal por dentro
            do painel, devolvendo a peça ao formato original sem aplicar massa nem repintar. Isso traz três
            vantagens diretas para quem mora em Presidente Prudente e região: o carro fica pronto muito mais rápido,
            o custo é menor do que uma funilaria tradicional e — o mais importante — a pintura de fábrica é
            preservada. Manter a pintura original conta pontos na hora de vender o veículo e evita que diferenças de
            tonalidade apareçam com o tempo.
          </p>
          <p>
            Quando o dano atinge a pintura, há trincos ou o metal foi muito esticado, indicamos a funilaria com
            pintura, sempre com igualação de cor computadorizada para que o reparo fique imperceptível. Em casos de{" "}
            <strong>chuva de granizo</strong> — comuns nos temporais do Oeste Paulista — avaliamos amassado por
            amassado e priorizamos a recuperação sem repintura, o que costuma reduzir bastante o valor final em
            comparação com uma oficina convencional.
          </p>

          <h3 className="text-2xl font-bold text-[#111827]">Como agendar</h3>
          <p>
            Agendar é simples e não tem compromisso. Você fala com a gente pelo WhatsApp, envia fotos do amassado ou
            risco e recebe um orçamento estimado. Se aprovar, marcamos o melhor horário para você levar o carro até
            nossa oficina em Presidente Prudente. A maioria dos serviços de desamassamento é concluída em poucas
            horas, e todos saem com garantia de 90 dias. Esteja você em Presidente Prudente, Álvares Machado,
            Pirapozinho, Regente Feijó, Martinópolis, Presidente Bernardes, Santo Anastácio ou Rancharia, é só
            chamar — o atendimento pelo WhatsApp funciona 24 horas.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink("Olá! Sou da região de Presidente Prudente e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all hover:-translate-y-1"
          >
            Pedir orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
