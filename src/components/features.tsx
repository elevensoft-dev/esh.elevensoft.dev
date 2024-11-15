import { BarChart, Clock, Shield, Layers, Users, FileText } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-orange-600" />,
    title: "Agregador Centralizado de Conexões",
    description:
      "Reúna protocolos como SSH e Telnet em uma única plataforma, simplificando o gerenciamento de acessos remotos e reduzindo complexidades.",
  },
  {
    icon: <Layers className="h-8 w-8 text-orange-600" />,
    title: "Controle de Acesso por Tags",
    description:
      "Defina permissões precisas com o sistema de tags, garantindo que cada usuário tenha acesso apenas ao que precisa.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-600" />,
    title: "Menu Interativo e Personalizável",
    description:
      "Navegue facilmente por servidores, grupos e logs com uma interface intuitiva e otimizada.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Facilidade de Configuração",
    description:
      "Configuração simples como shell padrão para usuários, permitindo acesso imediato ao ESH após o login.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-orange-600" />,
    title: "Gerenciamento de Grupos de Servidores",
    description:
      "Organize servidores em grupos customizáveis para melhorar o controle e a eficiência no acesso.",
  },
  {
    icon: <FileText className="h-8 w-8 text-orange-600" />,
    title: "Registro Centralizado de Logs",
    description:
      "Registre todos os comandos e saídas de sessões em um único lugar, criando um histórico completo para auditoria.",
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
            Ferramentas abrangentes projetadas para ambientes modernos de trabalho.
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
