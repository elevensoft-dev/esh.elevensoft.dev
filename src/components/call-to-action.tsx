function CallToAction() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pronto para transformar seu local de trabalho?
        </h2>
        <p className="text-xl text-orange-100 mb-8">
          Comece seu teste gratuito de 14 dias hoje. Não é necessário cartão de
          crédito.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            href="https://wa.me/message/X2DMDA457ASDN1"
            target="_blank"
          >
            Começar
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
