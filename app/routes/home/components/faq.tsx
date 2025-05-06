export function Faq() {
  return (
    <section className="py-36 container mx-auto">
      <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400 w-max mx-auto">FAQs</div>
      <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-5 text-center">Perguntas frequentes</h1>
      <p className="text-neutral-400 text-lg mb-10 text-center">Conselhos e respostas do nosso time.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-7 p-5 md:p-0 md:gap-12">
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">Quais empresas podem se beneficiar do ESH?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Nossas soluções de segurança se encaixam em diversas indústrias, incluindo ISP's, telecoms, financeiras e manufaturas.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">O ESH grava as sessões dos usuários?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Sim. Todas as conexões via SSH podem ser gravadas com armazenamento centralizado. Além disso, é possível reproduzir as sessões para auditorias, garantindo total rastreabilidade das ações executadas.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">Posso definir diferentes níveis de acesso para cada colaborador?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Sim. O ESH permite controle granular de permissões por meio de tags, horários e grupos de servidores. Isso garante que cada usuário tenha acesso somente ao que for necessário para sua função.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">O ESH ajuda minha empresa a estar em conformidade com normas de segurança?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">Com certeza. O ESH oferece logs detalhados, controle de acessos e rastreamento completo de sessões, atendendo requisitos de conformidade de normas como ISO 27001, LGPD e outras diretrizes de segurança da informação.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-base md:text-lg">5. O ESH funciona com que tipo de acesso remoto?</h2>
          <p className="text-neutral-500 font-normal text-xs md:text-base">O ESH é compatível com conexões SSH e Telnet, que são centralizadas na plataforma para controle e auditoria. Todo o acesso passa por um menu interativo, sem necessidade de instalação nos ativos da rede, permitindo gerenciamento completo sem alterar o ambiente dos servidores.</p>
        </div>
      </div>
    </section>
  )
}
