import type { Route } from "./+types/home";
import { Header } from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative min-h-[calc(630px-64px))] overflow-hidden pb-10">
        <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-neutral-800">
          {/* Decorations */}
          <div className="col-span-1 flex h-full items-center justify-center" />
          <div className="col-span-1 flex h-full items-center justify-center border-x border-neutral-800" />
          <div className="col-span-1 flex h-full items-center justify-center" />
        </div>
        {/* --- */}
        <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-accent-500/40 blur-[200px]" />
        <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block" />
        <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block" />
        {/* --- */}
        <div className="relative z-10 flex flex-col divide-y divide-neutral-800 pt-[35px]"> <div className="flex flex-col items-center justify-end">
          <div className="border! border-b-0! flex items-center gap-10 border-neutral-800 px-4 py-2 relative h-12">
            <div className="w-7 h-7 rounded-full border z-10 p-1 border-neutral-700 bg-neutral-900">
              <img className="max-w-full h-auto" src="https://cdn2.cardume.digital/public/sites/saperx/images/layout/backgrounds/footer.svg" alt="Logo SaperX" />
            </div>
            <div className="absolute left-8 w-7 overflow-clip h-7 p-1 object-contain rounded-full border border-neutral-700 bg-neutral-900 z-20">
              <img className="max-w-full h-full" src="https://elevensoft.dev/icon.png?0542a25d6bd16a09" alt="Eleven Soft logo" />
            </div>
            <div className="absolute left-12 w-7 h-7 p-1 object-contain rounded-full bg-neutral-900 border border-neutral-700 z-30">
              <img className="max-w-full h-auto" src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png" alt="Pixxey logo" />
            </div>
            <p className="text-sm tracking-tight text-neutral-500">14 clientes satisfeitos</p>
          </div>
        </div>
          <div>
            <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
              <h1 className="max-w-(--breakpoint-lg) text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px]">
                Acesso, controle e monitoramento dos seus servidores
              </h1>
              <h2 className="text-md max-w-2xl text-pretty text-center text-neutral-500 md:text-lg"> ESH permite que você visualize e controle as atividades dos seus funcionários, com replay inteiro de sessões, granularização de acessos e mais </h2> </div> </div>
          <div className="flex items-start justify-center px-8 sm:px-24">
            <div className="relative md:max-w-[392px]! flex w-full max-w-[80vw] flex-col items-center justify-start ">
              <button className="cursor-pointer hover:bg-neutral-800 w-full p-4 duration-200">Solicitar demo</button>
              <button className="cursor-pointer bg-linear-to-r/hsl from-orange-500 to-amber-400 hover:to-orange-500 p-4 w-full duration-200">Quero começar agora</button>
            </div>
          </div>
        </div>
        <figure className="pointer-events-none bg-orange-500 absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-96 -translate-x-1/2 rounded-full bg-accent-500/40 blur-[200px]"></figure>
        <figure className="pointer-events-none bg-orange-900/5 absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block"></figure>
        <figure className="pointer-events-none bg-orange-900/5 absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block"></figure>
      </section>
      <section className="container mx-auto py-24">
        <div className="text-center">
          <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400  w-max mx-auto">Acceso</div>
          <h1 className="text-3xl font-semibold mt-10 mb-3">Gerencie acessos de forma unificada</h1>
          <p className="text-neutral-500 text-lg mb-5">Simplifique o acesso e controle dos servidores com controle total dos usários.</p>
          <div className="border border-neutral-800 w-full h-96"></div>
        </div>
      </section>
    </main>
  ) 
}
