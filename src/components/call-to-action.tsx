function CallToAction() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pronto para transformar a gestão de acessos da sua empresa?
        </h2>
        <p className="text-xl text-orange-100 mb-8">
          Garanta mais segurança e eficiência para sua equipe com o ESH.
          Fale conosco agora e descubra o plano ideal para sua empresa.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            href="https://wa.me/message/X2DMDA457ASDN1"
            target="_blank"
          >
            Solicitar Demonstração
          </a>
          <a
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            href="https://wa.me/message/X2DMDA457ASDN1"
            target="_blank"
          >
            Falar com vendedor
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

