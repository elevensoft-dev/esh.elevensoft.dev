// TODO: Substituir por fotos reais do time e do escritório/ambiente
const founderPhotoUrl = "/socios.webp";
const teamPhotoUrl = "/socios.webp";

export default function AboutPage() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">

        {/* 1. A HISTÓRIA DE ORIGEM */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-orange-400 tracking-wider uppercase">Nossa História</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
              Nascemos da frustração. Crescemos na obsessão.
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              A Elevensoft não começou com um plano de negócios. Começou com um problema real, vivido por nós mesmos como engenheiros: a bagunça insegura e ineficiente de gerenciar acessos a servidores.
            </p>
            <p className="mt-4 text-lg text-neutral-300">
              Cansados de soluções estrangeiras caras e complexas, e de gambiarras com open-source que mais criavam problemas do que resolviam, decidimos fazer o impensável: <strong>construir a nossa própria solução, do zero.</strong> O ESH nasceu dessa necessidade. É a ferramenta que sempre quisemos usar.
            </p>
          </div>
          <div>
            <img src={founderPhotoUrl} alt="Foto do Fundador" className="rounded-full shadow-2xl shadow-orange-500/20 mx-auto" />
          </div>
        </div>

        {/* 2. A MISSÃO E A VISÃO */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Nossa Missão: Empoderar Times de Tecnologia com Controle e Tranquilidade.</h2>
          <p className="mt-6 text-xl text-neutral-300">
            Acreditamos que a segurança não deve ser um obstáculo. Ela deve ser um facilitador invisível que permite que equipes brilhantes façam seu melhor trabalho. Nossa missão é criar ferramentas poderosas, ridiculamente fáceis de usar, que devolvam o controle e a paz de espírito para quem constrói o futuro digital.
          </p>
        </div>

        {/* 3. O TIME */}
        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center">Construído por Engenheiros, para Engenheiros.</h2>
          <p className="mt-4 text-lg text-neutral-400 text-center">Não somos um conglomerado. Somos um time unido pela paixão por resolver problemas difíceis.</p>
          <div className="mt-12">
            <img src={teamPhotoUrl} alt="Time da Elevensoft" className="rounded-2xl w-full h-auto" />
            {/* Opcional: Adicionar cards com fotos e nomes dos membros chave do time abaixo */}
          </div>
        </div>

        {/* 4. JUNTE-SE À NOSSA JORNADA */}
        <div className="mt-28 text-center p-12 bg-neutral-900 rounded-2xl border border-neutral-800">
          <h2 className="text-3xl font-bold">Estamos apenas começando.</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            O ESH é o primeiro passo de uma longa jornada para criar o melhor ecossistema de ferramentas de segurança e DevOps. Se você compartilha da nossa paixão por tecnologia robusta e sem rodeios, venha fazer parte da nossa história.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/pricing" className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] hover:scale-105 text-white font-semibold transition-all duration-300">
              Seja nosso Cliente
            </a>
            {/* TODO: Adicionar um link para uma página de carreiras ou e-mail de contato */}
            <a href="mailto:ola@elevensoft.dev" className="px-8 py-3 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors">
              Trabalhe Conosco
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
