import { BarChart, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-orange-600" />,
    title: "Agregador Centralizado de Conexões",
    description:
      "ESH reúne diferentes protocolos de conexão, como SSH e Telnet, em uma única plataforma para simplificar o gerenciamento de acessos remotos.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-orange-600" />,
    title: "Controle de Acesso por Tags",
    description:
      "Sistema avançado de permissão com tags que define quais servidores cada usuário pode acessar, garantindo segurança e segmentação.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Menu Interativo e Personalizável",
    description:
      "Interface amigável que permite navegação intuitiva por servidores, grupos de servidores e logs de sessão.",
  },

  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Facilidade de Configuração",
    description:
      "Integrado como shell padrão para determinados usuários, possibilitando o acesso direto ao ambiente ESH logo após o login.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Gerenciamento de Grupos de Servidores",
    description:
      "Organização de servidores em grupos customizáveis para facilitar o acesso e o controle das conexões.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Registro Centralizado de Logs",
    description:
      "Todos os comandos e saídas de sessões são registrados, criando um histórico de atividades completo para auditoria.",
  },
];

function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para visibilidade completa
          </h2>
          <p className="text-xl text-gray-600">
            Ferramentas de monitoramento abrangentes projetadas para locais de
            trabalho modernos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
