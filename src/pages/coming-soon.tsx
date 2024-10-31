export function ComingSoon() {
  return (
    <section className="relative bg-neutral-800 h-dvh w-dvw flex flex-col items-center justify-center text-center gap-y-14 px-5 sm:px-10">
      <img
        src="assets/12.png"
        alt="Letter E"
        className="fixed inset-0 w-full h-full opacity-20 z-10 object-cover"
      />

      <h1 className="flex flex-col text-xl sm:text-5xl font-bold text-white z-20 gap-y-5">
        <span className="text-orange-600 text-6xl">ESH</span>
        <span className="leading-tight">
          A maneira mais simples e segura de acessar e proteger sua
          infraestrutura
        </span>
      </h1>
      <p className="text-base text-slate-50 max-w-lg z-20">
        Transparência em cada comando. <br></br> Segurança inteligente para suas
        equipes. <br></br>
        Disponível muito em breve.
      </p>
      <a
        aria-label="contact via whatsapp button"
        href="https://wa.me/message/X2DMDA457ASDN1"
        target="_blank"
        className="text-white bg-orange-600 hover:bg-orange-700 py-3 w-full sm:w-60 rounded z-20 font-semibold"
      >
        Entrar em contato
      </a>
      <footer className="fixed bottom-0 py-5 bg-neutral-900 inset-x-0 flex items-center justify-center gap-x-3 z-20">
        <span className="text-white text-sm opacity-50">Um produto </span>
        <img
          src="assets/logo-light.png"
          alt="logo"
          className="z-20 text-white"
          width={100}
          height={100}
        />
      </footer>
    </section>
  );
}
