export function SocialProof() {
  return (
    <section className="py-12 bg-neutral-900">
      <div className="container mx-auto">
        <h3 className="text-center text-sm font-semibold text-neutral-500 tracking-wider uppercase">
          Aqui carrossel das marcas
        </h3>
        <div className="mt-8 flex justify-center items-center gap-12 opacity-60">
          <div className="flex flex-col items-center justify-end">
          <div className="border! border-b-0! flex items-center gap-10 border-neutral-800 px-4 py-2 relative h-12">
            {/* Seus ícones de clientes estão ótimos */}
            <div className="w-7 h-7 rounded-full border z-10 p-1 border-neutral-700 bg-neutral-900">
              <img className="max-w-full h-auto" src="https://cdn2.cardume.digital/public/sites/saperx/images/layout/backgrounds/footer.svg" alt="Logo SaperX" />
            </div>
            <div className="absolute left-8 w-7 overflow-clip h-7 p-1 object-contain rounded-full border border-neutral-700 bg-neutral-900 z-20">
              <img className="max-w-full h-full" src="https://elevensoft.dev/icon.png?0542a25d6bd16a09" alt="Eleven Soft logo" />
            </div>
            <div className="absolute left-12 w-7 h-7 p-1 object-contain rounded-full bg-neutral-900 border border-neutral-700 z-30">
              <img className="max-w-full h-auto" src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" alt="Pixxey logo" />
            </div>
            <p className="text-sm tracking-tight text-neutral-400">A confiança de empresas que levam segurança a sério</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
