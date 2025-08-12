export function CallToAction() {
  return (
    <section className="container mx-auto py-14 px-5 md:px-0">
      <article className="rounded-2xl bg-orange-950/40 mx-auto py-10 px-10 space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            🚀 Mais controle, mais segurança, mais produtividade
          </h1>
          <h2 className="text-white text-lg md:text-xl font-medium">
            O ESH entrega <b>visibilidade total</b> do que acontece nos seus servidores — em tempo real ou no replay.
          </h2>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 text-white font-semibold transition-all duration-300">
            Começar Agora
          </button>
        </div>

        <div className="space-y-3">
          <p className="text-lg text-neutral-300">
            Reduza falhas, acelere auditorias e tome decisões com base em dados concretos.
          </p>
          <button className="ring-1 ring-neutral-800 text-sm text-white bg-neutral-900 rounded-full px-6 py-1.5">
            Ver como Funciona!
          </button>
        </div>
      </article>
    </section>
  );
}
