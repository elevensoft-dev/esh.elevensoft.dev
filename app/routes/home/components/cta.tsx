export function CallToAction() {
  return (
    <section className="container mx-auto py-14 px-5 md:px-0">
      <article className="rounded-2xl bg-orange-950/40 mx-auto py-5 px-10 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-5 md:gap-0">
          <h1 className="text-white text-xl md:text-3xl font-semibold">Aumente a produtividade do seu time com o ESH</h1>
          <button className="text-white bg-orange-600 rounded-full px-6 py-2 text-sm">Começar</button>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5 md:gap-0">
          <p className="text-lg text-neutral-300">Tudo que você precisa sobre segurança, controle e rastreabilidade</p>
          <button className="ring-1 ring-neutral-800 text-sm text-white bg-neutral-900 mr-2.5 rounded-full px-6 py-1.5">Sobre</button>
        </div>
      </article>
    </section>

  )
}
