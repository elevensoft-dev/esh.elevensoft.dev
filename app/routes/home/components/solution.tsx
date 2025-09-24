import { CheckIcon, IdCardIcon } from '@radix-ui/react-icons';

export function Solution() {
  return (
    <section id="solution" className="container mx-auto py-24 px-5 md:px-0">
      <div className="text-center">
        <div className="text-center mb-16">
          <div className="py-1 px-6 rounded-full bg-orange-500/10 text-orange-400 w-max mx-auto text-sm font-medium">
            <IdCardIcon className="w-4 h-4 inline mr-2" />
            Sua Central de Comando e Auditoria
          </div>
        </div>

        <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-3">
          Chega de "torcer para não dar errado.
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-3xl mx-auto">
          Tenha a prova irrefutável de cada ação e previna incidentes antes que eles aconteçam.
        </p>

        <div className='space-y-12 flex flex-col items-center w-full'>

          <article className="bg-neutral-900 p-3 flex-col md:flex-row rounded-xl ring-1 ring-neutral-800 flex gap-x-5 w-full">
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h2 className='text-xl md:text-3xl font-medium text-white'>Responda a Qualquer Auditoria em Minutos</h2>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>
                  Saiba exatamente <b>quem</b> acessou, <b>quando</b> e <b>o que</b> fez.
                  </p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>Com o <b>replay visual completo</b> de cada sessão privilegiada.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>Responda a <b>qualquer auditoria</b> em minutos, não em dias, e atenda a normas como <b>LGPD</b> e <b>ISO 27001</b>. sem estresse.</p>
                </li>
              </ul>
            </div>
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="/dashboard-notebook.webp" alt="Dashboard do ESH" />
            </div>
          </article>

          <article className="bg-orange-950/20 p-3 rounded-xl ring-2 ring-orange-500/50 flex flex-col md:flex-row gap-x-5 w-full">
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="/tags-notebook.webp" alt="Tela de permissões por tags no ESH" />
            </div>
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h2 className='text-xl md:text-3xl font-medium text-orange-300'>Vá Além da Auditoria. Impeça o Risco.</h2>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'>Auditoria reativa é olhar o passado. <b>Controle preventivo é proteger o futuro.</b></p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'>Bloqueie comandos <b>perigosos</b> como <code>rm -rf</code>.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'>Implemente o <strong>Princípio do Menor Privilégio</strong> de forma intuitiva.</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
