import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileTextIcon, 
  CalendarIcon,
  CheckIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  EnvelopeOpenIcon
} from '@radix-ui/react-icons';

export default function TermosUso() {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* Header da Página */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FileTextIcon className="w-16 h-16 mx-auto text-orange-400" />
          <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tighter">
            Termos de Uso
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Condições e regras para utilização da plataforma ESH
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              Última atualização: {currentDate}
            </span>
            <span className="flex items-center gap-2">
              <FileTextIcon className="w-4 h-4" />
              Versão 1.0
            </span>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introdução */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">1. Aceitação dos Termos</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Ao acessar e utilizar a plataforma ESH ("Serviço"), você concorda em cumprir e estar 
                vinculado a estes Termos de Uso ("Termos"). Se você não concordar com qualquer parte 
                destes termos, não poderá acessar o Serviço.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Estes Termos constituem um acordo legal entre você e a Eleven Soft ("Empresa", "nós", 
                "nossa", "nosso") em relação ao uso do Serviço.
              </p>
            </div>
          </section>

          {/* Descrição do Serviço */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">2. Descrição do Serviço</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Plataforma ESH</h3>
              <p className="text-neutral-300 mb-4">
                O ESH é uma plataforma de controle, auditoria e segurança de acesso a servidores que oferece:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  Controle de acesso seguro a servidores
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  Auditoria completa de ações e comandos
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  Gerenciamento de usuários e permissões
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-green-400" />
                  Relatórios de segurança e compliance
                </li>
              </ul>
            </div>
          </section>

          {/* Conta e Registro */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">3. Conta e Registro</h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Responsabilidades da Conta</h4>
                <p className="text-neutral-400 text-sm">
                  Você é responsável por manter a confidencialidade de sua conta e senha, 
                  bem como por todas as atividades que ocorrem em sua conta.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Informações Verdadeiras</h4>
                <p className="text-neutral-400 text-sm">
                  Você deve fornecer informações verdadeiras, precisas e completas durante 
                  o processo de registro e manter essas informações atualizadas.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Segurança da Conta</h4>
                <p className="text-neutral-400 text-sm">
                  Você deve notificar imediatamente a Eleven Soft sobre qualquer uso não autorizado 
                  de sua conta ou qualquer outra violação de segurança.
                </p>
              </div>
            </div>
          </section>

          {/* Uso Aceitável */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">4. Uso Aceitável</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-400">Permitido</h3>
                <ul className="text-sm text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    Acesso legítimo a servidores
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    Auditoria de segurança
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    Gerenciamento de infraestrutura
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                    Compliance e relatórios
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-400">Proibido</h3>
                <ul className="text-sm text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <Cross1Icon className="w-4 h-4 text-red-400" />
                    Acesso não autorizado
                  </li>
                  <li className="flex items-center gap-2">
                    <Cross1Icon className="w-4 h-4 text-red-400" />
                    Violação de segurança
                  </li>
                  <li className="flex items-center gap-2">
                    <Cross1Icon className="w-4 h-4 text-red-400" />
                    Uso para atividades ilegais
                  </li>
                  <li className="flex items-center gap-2">
                    <Cross1Icon className="w-4 h-4 text-red-400" />
                    Compartilhamento de credenciais
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">5. Propriedade Intelectual</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão 
                propriedade exclusiva da Eleven Soft e seus licenciadores. O Serviço é protegido 
                por direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, 
                exibir publicamente, executar publicamente, republicar, baixar, armazenar ou 
                transmitir qualquer conteúdo do Serviço sem nossa permissão expressa.
              </p>
            </div>
          </section>

          {/* Limitação de Responsabilidade */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Limitação de Responsabilidade</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg">
              <ExclamationTriangleIcon className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Exclusão de Garantias</h3>
              <p className="text-neutral-300 mb-4">
                O Serviço é fornecido "como está" e "conforme disponível" sem garantias de qualquer tipo, 
                expressas ou implícitas, incluindo, mas não se limitando a, garantias de comercialização, 
                adequação a um propósito específico e não violação.
              </p>
              <p className="text-neutral-300">
                Em nenhuma circunstância a Eleven Soft será responsável por danos indiretos, incidentais, 
                especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso.
              </p>
            </div>
          </section>

          {/* Pagamentos e Cobrança */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Pagamentos e Cobrança</h2>
            <div className="space-y-4">
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Planos e Preços</h4>
                <p className="text-neutral-400 text-sm">
                  Os preços dos planos estão sujeitos a alterações com aviso prévio de 30 dias. 
                  Todas as cobranças são feitas em Reais (BRL) e incluem impostos aplicáveis.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Renovação Automática</h4>
                <p className="text-neutral-400 text-sm">
                  Os planos são renovados automaticamente no final de cada período de cobrança, 
                  a menos que você cancele antes da data de renovação.
                </p>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Reembolsos</h4>
                <p className="text-neutral-400 text-sm">
                  Reembolsos são avaliados caso a caso. Não há reembolso automático para 
                  cancelamentos no meio do período de cobrança.
                </p>
              </div>
            </div>
          </section>

          {/* Rescisão */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">8. Rescisão</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Você pode cancelar sua conta a qualquer momento através das configurações da conta 
                ou entrando em contato com nosso suporte. A Eleven Soft pode suspender ou encerrar 
                sua conta imediatamente, sem aviso prévio, por violação destes Termos.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Após a rescisão, seu direito de usar o Serviço cessará imediatamente. 
                Todas as disposições dos Termos que por sua natureza devem sobreviver à rescisão 
                continuarão em vigor.
              </p>
            </div>
          </section>

          {/* Alterações dos Termos */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">9. Alterações dos Termos</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. 
                Se uma revisão for material, forneceremos pelo menos 30 dias de aviso prévio antes 
                de qualquer novo termo entrar em vigor.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                O que constitui uma mudança material será determinado a nosso critério. 
                O uso continuado do Serviço após a entrada em vigor de quaisquer alterações 
                constitui aceitação dos novos Termos.
              </p>
            </div>
          </section>

          {/* Lei Aplicável */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">10. Lei Aplicável</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                Estes Termos serão regidos e interpretados de acordo com as leis da República 
                Federativa do Brasil, sem considerar seus conflitos de disposições legais.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Qualquer disputa decorrente destes Termos será submetida à jurisdição exclusiva 
                dos tribunais da comarca de São Paulo, Estado de São Paulo, Brasil.
              </p>
            </div>
          </section>

          {/* Contato */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-4">11. Entre em Contato</h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Dúvidas sobre os Termos?</h3>
              <p className="text-neutral-400 mb-4">
                Nossa equipe jurídica está disponível para esclarecer qualquer dúvida 
                sobre estes Termos de Uso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:legal@elevensoft.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <EnvelopeOpenIcon className="w-4 h-4" />
                  legal@elevensoft.dev
                </a>
                <a
                  href="https://api.whatsapp.com/message/X2DMDA457ASDN1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Footer da Página */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-4">
            Estes termos são atualizados regularmente para refletir mudanças em nossos serviços.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:bg-neutral-800 transition-colors rounded-lg"
          >
            Voltar para Home
          </Link>
        </div>

      </div>
    </div>
  );
} 