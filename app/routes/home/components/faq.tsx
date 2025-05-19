export function Faq() {
  return (
    <section className="py-36 container mx-auto">
      <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400 w-max mx-auto">FAQs</div>
      <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-5 text-center">Perguntas frequentes</h1>
      <p className="text-neutral-400 text-lg mb-10 text-center">Conselhos e respostas do nosso time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-7 p-5 md:p-0 md:gap-12">
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">Quais empresas se beneficiam do ESH?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Qualquer empresa com servidores acessados remotamente — incluindo ISPs, telecoms, fintechs, indústrias e software houses.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">O ESH grava as sessões dos usuários?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Sim. Todas as conexões via SSH são gravadas com armazenamento centralizado e replay completo, garantindo rastreabilidade total.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">Posso definir acessos diferentes por colaborador?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base"> Sim. Controle granular por usuário com base em tags e grupos de servidores.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">O ESH ajuda com conformidade e auditoria?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Sim. Logs detalhados, rastreamento de comandos e controle de acessos compatíveis com normas como ISO 27001 e LGPD.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">Que tipos de acesso remoto são suportados?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base"> SSH e Telnet, sem precisar instalar nada nos servidores. O acesso é mediado por um menu interativo da plataforma.</p>
        </div>
      </div>
    </section>
  )
}
