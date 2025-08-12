import { CheckIcon, StarFilledIcon } from '@radix-ui/react-icons';

export default function ComparePage() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* 1. O TÍTULO DA LUTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            A Escolha Inteligente para Acesso Seguro.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Entendemos que a decisão é crítica. Veja uma comparação honesta de como o ESH se posiciona contra as alternativas mais comuns do mercado.
          </p>
        </div>

        {/* 2. A TABELA DE COMPARAÇÃO */}
        <div className="mt-20 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="py-6 pr-4 font-semibold text-xl w-1/4">Critério de Decisão</th>
                <th className="w-1/4 py-6 px-4 font-semibold text-center">
                  <p className="text-lg">Soluções Open Source</p>
                  <p className="text-sm text-neutral-400">(Jumpserver, Guacamole, etc.)</p>
                </th>
                <th className="w-1/4 py-6 px-4 font-semibold text-center">
                  <p className="text-lg">Gigantes Internacionais</p>
                  <p className="text-sm text-neutral-400">(Teleport, CyberArk, etc.)</p>
                </th>
                <th className="w-1/4 py-6 px-4 font-bold text-center bg-orange-500/10 rounded-t-lg">
                  <div className="flex items-center justify-center gap-2">
                    <StarFilledIcon className="text-orange-400" />
                    <p className="text-xl text-white">ESH by Elevensoft</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              
              <CompareRow
                category="Custo e Valor"
                feature="Modelo de Preço"
                openSource="Gratuito (Custo de implementação e manutenção oculto)"
                giants="Alto Custo (USD), Licenças complexas"
                esh={{ text: "Previsível (Reais), Transparente", highlight: true }}
              />
              <CompareRow
                feature="Custo Total de Propriedade (TCO)"
                openSource="Alto (Horas de engenharia, infra, manutenção)"
                giants="Muito Alto (Licenças, consultoria, treinamento)"
                esh={{ text: "Controlado e Otimizado", highlight: true }}
              />

              <CompareRow
                category="Implementação e Suporte"
                feature="Tempo de Setup"
                openSource="Dias / Semanas"
                giants="Semanas / Meses"
                esh={{ text: "Horas", highlight: true }}
              />
              <CompareRow
                feature="Suporte Técnico"
                openSource="Comunitário (Fóruns, GitHub)"
                giants="Impessoal (Tickets, Fuso Horário Estrangeiro)"
                esh={{ text: "Especialista Dedicado (Português, Fuso Horário Local)", highlight: true }}
              />

              <CompareRow
                category="Funcionalidades Chave"
                feature="Controle Preventivo de Comandos"
                openSource="Possível (Plugins, configuração complexa)"
                giants="Sim (Módulos caros e complexos)"
                esh={{ text: "Nativo, Simples e Integrado", highlight: true }}
              />
              <CompareRow
                feature="Facilidade de Uso"
                openSource="Variavel, focado no técnico"
                giants="Complexo, requer treinamento extensivo"
                esh={{ text: "Intuitivo, focado no resultado", highlight: true }}
              />
              <CompareRow
                feature="Soberania Tecnológica"
                openSource="Dependente da comunidade e múltiplos projetos"
                giants="Caixa Preta (Falta de controle sobre o roadmap)"
                esh={{ text: "Verticalizado (Construído e controlado por nós)", highlight: true }}
              />

            </tbody>
          </table>
        </div>

        {/* 3. A CONCLUSÃO DA LUTA */}
        <div className="mt-20 max-w-4xl mx-auto text-center p-8 bg-neutral-900 rounded-2xl border-2 border-orange-500">
            <h2 className="text-3xl font-bold text-white">O ESH é a escolha certa se você valoriza:</h2>
            <ul className="mt-6 text-lg text-left space-y-4 inline-block">
                <li className="flex gap-3 items-center"><CheckIcon className="w-6 h-6 text-orange-400" /><span><strong>Agilidade e Simplicidade</strong> sem sacrificar a segurança.</span></li>
                <li className="flex gap-3 items-center"><CheckIcon className="w-6 h-6 text-orange-400" /><span><strong>Previsibilidade de Custos</strong> com preços em Reais e sem surpresas.</span></li>
                <li className="flex gap-3 items-center"><CheckIcon className="w-6 h-6 text-orange-400" /><span><strong>Suporte Real</strong> de especialistas que entendem seu negócio e falam sua língua.</span></li>
                <li className="flex gap-3 items-center"><CheckIcon className="w-6 h-6 text-orange-400" /><span><strong>Poder de Nível Enterprise</strong> com a facilidade de uso que seu time precisa.</span></li>
            </ul>
            <a href="/pricing" className="mt-8 inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 text-white font-semibold transition-all duration-300">
                Veja Nossos Planos e Comece Agora
            </a>
        </div>

      </div>
    </div>
  );
}


// Passo 1: Definir os tipos para as propriedades (props) do componente.
interface CompareRowProps {
  category?: string; // O '?' torna a propriedade opcional, corrigindo o erro.
  feature: string;
  openSource: string;
  giants: string;
  esh: {
    text: string;
    highlight: boolean;
  };
}

// Passo 2: Aplicar a interface aos argumentos do componente.
const CompareRow = ({ category, feature, openSource, giants, esh }: CompareRowProps) => (
  <>
    {/* A lógica de renderização condicional já estava correta */}
    {category && (
      <tr className="bg-neutral-800/50">
        <td colSpan={4} className="pt-6 pb-2 px-2">
          <h4 className="text-lg font-semibold text-orange-400">{category}</h4>
        </td>
      </tr>
    )}
    <tr className="hover:bg-neutral-900">
      <td className="py-4 pr-4 font-semibold">{feature}</td>
      <td className="py-4 px-4 text-center text-neutral-300">{openSource}</td>
      <td className="py-4 px-4 text-center text-neutral-300">{giants}</td>
      <td className={`py-4 px-4 text-center font-semibold ${esh.highlight ? 'text-orange-300' : 'text-white'}`}>
        {esh.text}
      </td>
    </tr>
  </>
);