import { CameraIcon, EyeOpenIcon, LockClosedIcon, LockOpen1Icon, SymbolIcon } from "@radix-ui/react-icons";

export function HowTo() {
  return (
    <section className="py-24 relative">
      <div className="mix-blend-color absolute top-[53%] w-full h-px bg-neutral-800"></div>
      <div className="mix-blend-color absolute top-[75%] w-full h-px bg-neutral-800"></div>

      <div className="z-10 text-center md:container mx-auto w-full">
        <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400 w-max mx-auto">Usabilidade</div>
        <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-10">Como o ESH funciona</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-5 text-neutral-200 w-full'>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <LockOpen1Icon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Admistra acessos através de um painel intuitivo</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <CameraIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Monitora e audita todas as conexões, garantindo rastreabilidade</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <LockClosedIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Protege contra acessos não autorizados e vulnerabilidades</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <SymbolIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Automatiza permissões e melhora a eficiência operacional</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <EyeOpenIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Audita todos os comandos executados no servidor para total transparência</p>
          </article>
        </div>
      </div>
    </section>
  )
}
