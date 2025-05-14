export function CallToAction() {
  return (
    <section className="container mx-auto py-14 px-5 md:px-0">
      <article className="rounded-2xl bg-orange-950/40 mx-auto py-5 px-10 space-y-10 md:space-y-3 text-center">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-5 md:gap-0">
          <h1 className="text-white text-xl md:text-3xl font-semibold">🚀 Mais controle, mais segurança, mais produtividade</h1>
          <h2 className="text-white text-xl md:text-1xl font-semibold">O ESH entrega visibilidade total do que acontece nos seus servidores — em tempo real ou no replay.</h2>
          <button className="text-white bg-orange-600 rounded-full px-6 py-2 text-sm">Começar Agora</button>
        </div>
        <div className="flex justify-center md:justify-between items-center flex-wrap gap-5 md:gap-0">
          <p className="text-lg text-neutral-300">Reduza falhas, acelere auditorias e tome decisões com base em dados concretos.</p>
          <button className="ring-1 ring-neutral-800 text-sm text-white bg-neutral-900 mr-2.5 rounded-full px-6 py-1.5">Ver como Funciona!</button>
        </div>
      </article>
    </section>

  )
}
