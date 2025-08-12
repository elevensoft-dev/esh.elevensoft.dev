import { 
  IdCardIcon, 
  CalendarIcon, 
  UpdateIcon,
  LockClosedIcon,
  PersonIcon,
  ArrowUpIcon
} from '@radix-ui/react-icons';

export function PricingFaq() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="py-1 px-6 rounded-full bg-orange-500/10 text-orange-400 w-max mx-auto text-sm font-medium">
            <IdCardIcon className="w-4 h-4 inline mr-2" />
            Planos e Preços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            Dúvidas Frequentes sobre Planos
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos planos, preços e condições de contratação
          </p>
        </div>

        {/* Grid de Perguntas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Coluna 1 */}
          <div className="space-y-6">
            
            {/* Pergunta 1 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
                              <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IdCardIcon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Como funciona a cobrança dos planos?
                    </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Todos os planos são cobrados mensalmente em Reais (BRL), incluindo impostos. 
                    A cobrança é automática e você pode cancelar a qualquer momento sem multas.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 2 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Posso mudar de plano durante o mês?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Sim! Você pode fazer upgrade ou downgrade a qualquer momento. 
                    O valor será recalculado proporcionalmente ao período restante do mês.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 3 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UpdateIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Há período de teste gratuito?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Sim! Oferecemos 14 dias de teste gratuito para todos os planos. 
                    Sem compromisso e com acesso completo a todas as funcionalidades.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 4 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LockClosedIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Os planos incluem suporte técnico?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Todos os planos incluem suporte por e-mail. Os planos Pro e Enterprise 
                    incluem suporte prioritário e WhatsApp dedicado.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna 2 */}
          <div className="space-y-6">
            
            {/* Pergunta 5 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PersonIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Quantos usuários posso ter por plano?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    O plano Start permite até 5 usuários, o Pro até 25 usuários, 
                    e o Enterprise usuários ilimitados. Todos com controle granular de permissões.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 6 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowUpIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Posso cancelar a qualquer momento?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Sim! Não há fidelidade ou multas por cancelamento. 
                    Você pode cancelar através da plataforma ou entrando em contato conosco.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 7 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
                              <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IdCardIcon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Aceitam PIX e boleto?
                    </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Sim! Aceitamos PIX, boleto bancário e cartão de crédito. 
                    Para empresas, também oferecemos faturamento com prazo de 30 dias.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 8 */}
            <div className="p-6 bg-neutral-800 border border-neutral-700 rounded-xl hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LockClosedIcon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Os dados ficam seguros ao cancelar?
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Sim! Seus dados ficam disponíveis por 30 dias após o cancelamento. 
                    Após esse período, são excluídos permanentemente seguindo padrões de segurança.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-white font-semibold text-xl mb-3">
              Ainda tem dúvidas sobre planos?
            </h3>
            <p className="text-neutral-400 mb-6">
              Nossa equipe comercial está pronta para ajudar você a escolher o plano ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 text-white font-semibold transition-all duration-300"
              >
                Falar com Vendas
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg text-white"
              >
                Ver Todos os Planos
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
} 