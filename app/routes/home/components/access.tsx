import { CheckIcon } from '@radix-ui/react-icons'

export function Access() {
  return (
    <section className="container mx-auto py-24 px-5 md:px-0">
      <div className="text-center">
        <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400  w-max mx-auto">Acceso</div>
        <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-3">Você confia no que o técnico diz que fez no terminal?</h1>
        <p className="text-neutral-400 text-lg mb-10">Palavra não basta. Você precisa de <b>prova</b>, <b>registro</b> e <b>controle em tempo real</b> para proteger sua operação e passar por qualquer auditoria sem susto.</p>
        <div className='space-y-7 flex flex-col gap-7 items-center md:items-stretch justify-center w-full'>
          <article className="bg-neutral-900 p-3 flex-col md:flex-row rounded-xl ring-1 ring-neutral-800 flex gap-x-5 w-full">
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h1 className='text-xl md:text-3xl font-medium text-white'>Acesso Unificado e Seguro</h1>
              <p className='text-neutral-400 text-lg'><b>Tenha controle absoluto sobre quem acessa seus servidores — e quando.</b></p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Gerencie permissões com poucos cliques</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Controle horários, comandos e escopo de cada usuário</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Centralize tudo em um único painel</p>
                </li>
              </ul>
            </div>
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="dashboard-notebook.webp" alt="Notebook com a tela da aplicação ESH rodando" />
            </div>
          </article>

          <article className="bg-neutral-900 p-3 rounded-xl ring-1 ring-neutral-800 flex flex-col md:flex-row gap-x-5">
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-center w-full h-full" src="tags-notebook.webp" alt="Notebook com a tela da aplicação ESH rodando" />
            </div>
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h1 className='text-xl md:text-3xl font-medium text-white'>Organização Inteligente de Servidores</h1>
              <p className='text-neutral-400 text-lg'><b>Grupos, tags e usuários organizados para máxima eficiência.</b></p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Crie grupos de servidores por equipe, função ou projeto</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Aplique tags que facilitam o rastreio e o controle</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Veja tudo em tempo real, com clareza total</p>
                </li>

              </ul>
            </div>
          </article>

          <article className="bg-neutral-900 p-3 rounded-xl ring-1 ring-neutral-800 flex flex-col md:flex-row gap-x-5 w-full">
            <div className='text-start space-y-5 md:w-1/2 p-6'>
              <h1 className='text-xl md:text-3xl font-medium text-white'>Monitoramento com Replay Visual</h1>
              <p className='text-neutral-400 text-lg'><b>Revise tudo que foi feito no terminal — com vídeo, linha por linha.</b></p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Acompanhe sessões em tempo real</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Reproduza sessões passadas em alta precisão</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Decida com base em evidências, não achismos</p>
                </li>
              </ul>
            </div>
            <div className='md:w-1/2 h-80 overflow-hidden ring-1 ring-neutral-800 rounded-xl bg-neutral-950'>
              <img className="object-cover object-left w-full h-full" src="replay-small-size.png" alt="Notebook com a tela da aplicação ESH rodando" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
