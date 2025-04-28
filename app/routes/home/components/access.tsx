import { CheckIcon } from '@radix-ui/react-icons'

export function Access() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center">
        <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400  w-max mx-auto">Acceso</div>
        <h1 className="text-3xl font-semibold mt-10 mb-3">Gerencie acessos de forma unificada</h1>
        <p className="text-neutral-400 text-lg mb-10">Simplifique o acesso e controle dos servidores com controle total dos usários.</p>
        <div className='space-y-7'>
          <article className="bg-neutral-900 p-3 rounded-xl ring-1 ring-neutral-800 flex gap-x-5 w-full">
            <div className='text-start space-y-5 w-1/2 p-6'>
              <h1 className='text-3xl font-medium'>Usuários e servidores</h1>
              <p className='text-neutral-400 text-lg'>Servidores organizados, tags que agilizam, usuários sob controle. Tudo para sua operação fluir melhor.</p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Crie e gerencie servidores com facilidade</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Controle o acesso de usuários com segurança</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Visualize e administre de forma centralizada</p>
                </li>

              </ul>
            </div>
            <div className='min-w-1/2 h-80 ring-1 ring-neutral-800 rounded-xl bg-neutral-950'></div>
          </article>

          <article className="bg-neutral-900 p-3 rounded-xl ring-1 ring-neutral-800 flex gap-x-5 w-full">
            <div className='min-w-1/2 h-80 ring-1 ring-neutral-800 rounded-xl bg-neutral-950'></div>
            <div className='text-start space-y-5 w-1/2 p-6'>
              <h1 className='text-3xl font-medium'>Grupos de servidores</h1>
              <p className='text-neutral-400 text-lg'>Organize, gerencie e potencialize seus servidores em grupos inteligentes.</p>
              <ul className='flex flex-col gap-y-5'>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Crie grupos personalizados para servidores</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Vincule servidores, tags e usuários facilmente</p>
                </li>
                <li className="w-full flex items-center gap-x-3">
                  <div className='rounded-full w-6 h-6 bg-neutral-800 flex items-center justify-center'>
                    <CheckIcon className='w-4 h-4 text-neutral-400' />
                  </div>
                  <p className='text-neutral-400'>Tenha visibilidade e controle centralizado</p>
                </li>

              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
