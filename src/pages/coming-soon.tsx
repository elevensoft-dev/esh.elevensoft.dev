export function ComingSoon() {
  return (
    <section className="relative bg-neutral-800 h-dvh w-dvw flex flex-col items-center justify-center text-center gap-y-14 px-5 sm:px-10">
      <img
        src="assets/12.png"
        alt="Letter E"
        className="fixed inset-0 w-full h-full opacity-50 z-10"
      />
      <img
        src="assets/logo-light.png"
        alt="logo"
        className="z-20 text-white"
        width={250}
        height={100}
      />
      <h1 className="text-xl sm:text-5xl font-bold text-white z-20">
        Estamos chegando muito em breve
      </h1>
      <p className="text-base text-slate-50 max-w-lg z-20">
        Transparência em cada comando. <br></br>{" "}
        <span className="font-bold text-orange-500">ESH:</span> Segurança
        inteligente para suas equipes.
      </p>
      <a
        aria-label="contact via whatsapp button"
        href="https://wa.me/message/X2DMDA457ASDN1"
        target="_blank"
        className="text-white bg-orange-600 hover:bg-orange-700 py-3 w-full sm:w-60 rounded z-20 font-semibold"
      >
        Entrar em contato
      </a>
    </section>
  );
}
