import { CheckIcon } from '@radix-ui/react-icons';

export function Solution() {
  return (
    // MUDANÇA 1: Adicionamos o id="solution" para que o link do Hero funcione.
    <section id="solution" className="container mx-auto py-24 px-5 md:px-0">
      <div className="text-center">
        <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400 w-max mx-auto">Funcionalidades</div>
        <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-3">
          Você tem a prova do que foi feito no seu servidor?
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-3xl mx-auto">
          Palavra não basta. Você precisa de <b>registro</b>, <b>replay</b> e, mais importante, <b>controle preventivo</b> para proteger sua operação e passar por qualquer auditoria sem susto.
        </p>

        {/* MUDANÇA 2: Reorganizamos a ordem para contar uma história melhor. */}
        <div className='space-y-12 flex flex-col items-center w-full'>

          {/* ARTIGO 1: Acesso e Replay (O Básico Essencial) */}
          <article className="bg-neutral-900 p-3 flex-col md:flex-row rounded-xl ring-1 ring-neutral-800 flex gap-x-5 w-full">
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h2 className='text-xl md:text-3xl font-medium text-white'>Acesso Unificado com Auditoria Total</h2>
              <p className='text-neutral-400 text-lg'><b>Saiba quem acessou, quando e o que fez.</b> Revise tudo com replay visual, linha por linha.</p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>Centralize o acesso a todos os servidores em um único painel.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>Grave e reproduza sessões passadas em alta precisão.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-neutral-400' /></div>
                  <p className='text-neutral-400'>Acompanhe atividades em tempo real, como se estivesse ao lado.</p>
                </li>
              </ul>
            </div>
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="/dashboard-notebook.webp" alt="Dashboard do ESH" />
            </div>
          </article>

          {/* ARTIGO 2: O GRANDE DIFERENCIAL (Tecnologia ESUT) */}
          <article className="bg-orange-950/20 p-3 rounded-xl ring-2 ring-orange-500/50 flex flex-col md:flex-row gap-x-5 w-full">
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="/tags-notebook.webp" alt="Tela de permissões por tags no ESH" />
            </div>
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h2 className='text-xl md:text-3xl font-medium text-orange-300'>Vá Além do Acesso. Controle a Ação.</h2>
              <p className='text-neutral-300 text-lg'>Auditoria reativa é bom. <b>Controle preventivo é poder.</b> Bloqueie comandos perigosos antes que eles sejam executados.</p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'><strong>Bloqueie comandos perigosos</strong> como `rm -rf` ou `reboot`.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'>Crie <strong>listas de permissão</strong> de comandos por usuário ou grupo.</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-orange-400/20 flex items-center justify-center'><CheckIcon className='w-4 h-4 text-orange-300' /></div>
                  <p className='text-neutral-300'>Implemente o <strong>Princípio do Menor Privilégio</strong> de forma simples.</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
