import { Loader2Icon } from "lucide-react";
import ReactPlayer from "react-player";

function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto text-center z-50">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Monitorar. Analisar.{" "}
          <span className="text-orange-600">Melhorar.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          O <strong>ESH</strong> é a solução definitiva para empresas que buscam
          monitoramento eficiente e controle absoluto de acessos. Conecte-se a
          qualquer tecnologia baseada em terminal com praticidade, segurança e escalabilidade.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a
            target="_blank"
            href="https://wa.me/message/X2DMDA457ASDN1"
            className="cursor-pointer bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center"
          >
            Solicitar Demonstração
          </a>
          <a
            href="#features"
            className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors"
          >
            Descubra Mais
          </a>
        </div>
        <div className="relative max-w-4xl mx-auto h-full">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-8 border-white">
            <div className="relative max-w-4xl mx-auto h-full">
              <ReactPlayer
                controls
                pip
                url="https://vimeo.com/1029769804"
                playing={true}
                config={{
                  vimeo: {
                    title: "ESH",
                    playerOptions: {
                      url: "1029769804",
                    },
                  },
                }}
                light="/assets/esh_thumb.png"
                width={"100%"}
                height={500}
                fallback={
                  <div className="w-full h-full absolute mx-auto inset-0 bg-muted flex items-center justify-center">
                    <Loader2Icon className="animate animate-spin text-orange-600 w-32 h-32" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6">
          ⚡ <b>Destaques do ESH:</b> Monitoramento em tempo real, controle granular de acessos,
          relatórios detalhados, e total escalabilidade. Transforme a forma como sua equipe
          gerencia e acessa servidores.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          🚀 Empresas líderes já confiam no ESH para garantir eficiência e segurança
          em suas operações. Você está pronto para se juntar a elas?
        </p>
      </div>
    </section>
  );
}

export default Hero;
