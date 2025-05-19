import { LaptopIcon, ExclamationTriangleIcon, GearIcon, BarChartIcon, CameraIcon, EyeOpenIcon, LockClosedIcon, LockOpen1Icon, SymbolIcon } from "@radix-ui/react-icons";

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
              <LaptopIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Painel unificado para gerenciar todos os acessos e usuários</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <LockClosedIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Proteção contra acessos indevidos com regras e bloqueios automatizados</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <CameraIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Replay completo de sessões para auditoria e rastreabilidade</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <ExclamationTriangleIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Alertas por comando digitado e interrupção remota de sessões suspeitas</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <GearIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Automação de permissões reduz erros e aumenta eficiência</p>
          </article>
          <article className="text-start bg-neutral-800 p-5 rounded flex">
            <div className="w-8">
              <BarChartIcon className="w-5 h-5 text-orange-500"/>
            </div>
            <p className="flex-1 text-xs md:text-base">Logs e evidências para conformidade com ISO 27001 e LGPD</p>
          </article>
        </div>
      </div>
    </section>
  )
}
