import { CardSpotlight } from "~/components/ui/card-spotlight"

export const projects = [
  {
    title: "R$ 500/mês",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "R$ 750/mês",
    description:
    "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "R$ 1000/Mês",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
]

const startPlan = 'https://www.asaas.com/c/khwwp9tuv0fztx2k'
const proPlan = 'https://www.asaas.com/c/5lwcu96mlzr95dcf'
const maxPlan = 'https://www.asaas.com/c/kdstk9lzzagz7ww4'

function openLink(link: string) {
  const aTag = document.createElement('a');
  aTag.href = link;
  aTag.target = '_blank';
  aTag.click();
}

export function Pricing() {
  return (
    <section id="prices" className="py-14 md:container md:mx-auto">
      <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400 w-max mx-auto">Planos</div>
      <h1 className="text-white text-xl md:text-3xl font-semibold mt-10 mb-5 text-center px-5">Preços Justos, Benefícios Reais</h1>
      <p className="text-neutral-400 text-lg mb-10 text-center">Escolha o plano ideal para o seu time e aumente a segurança e produtividade.</p>
      <div className="flex justify-center gap-5 p-5 flex-col items-center md:flex-row">
        <CardSpotlight className="w-full md:w-96 cursor-pointer bg-transparent" onClick={() => openLink(startPlan)}>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">R$ 500/mês</p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <span className="text-orange-500">Plano START</span>
            . Para empresas pequenas que precisam de controle básico.
            <ul className="list-none  mt-2">
              <Step title="2 servidores" />
              <Step title="10 usuários" />
              <Step title="10 tags" />
              <Step title="10 grupos de servidores" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Garantir que seu servidor esteja devidamente protegida ajuda a proteger suas informações e dados pessoais
          </p>
        </CardSpotlight>
        <CardSpotlight className="relative w-full md:w-96 cursor-pointer" onClick={() => openLink(proPlan)}>
          <p className="absolute top-4 inset-x-5 mx-auto text-center text-blue-400 font-semibold">Mais popular</p>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">R$ 1000/mês</p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <span className="text-orange-500">Plano PRO</span>
            . Ideal para empresas pequenas e micro empresas.
            <ul className="list-none  mt-2">
              <Step title="2 servidores" />
              <Step title="10 usuários" />
              <Step title="10 tags" />
              <Step title="10 grupos de servidores" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Garantir que seu servidor esteja devidamente protegida ajuda a proteger suas informações e dados pessoais
          </p>
          <figure className="pointer-events-none bg-orange-500 absolute -bottom-[50%] left-1/2 z-0 block aspect-square w-96 -translate-x-1/2 rounded-full bg-accent-500/5 blur-[150px]"></figure>
          <figure className="pointer-events-none bg-orange-900/5 absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 dark:bg-dark-surface-primary md:block"></figure>
          <figure className="pointer-events-none bg-orange-900/5 absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] dark:bg-dark-surface-primary md:block"></figure>

        </CardSpotlight>
        <CardSpotlight className="md:w-96 cursor-pointer bg-transparent" onClick={() => openLink(maxPlan)}>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">R$ 2000/mês</p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <span className="text-orange-500">Plano MAX</span>
            . Para empresas que precisam de controle total e visibilidade.
            <ul className="list-none  mt-2">
              <Step title="2 servidores" />
              <Step title="10 usuários" />
              <Step title="10 tags" />
              <Step title="10 grupos de servidores" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Garantir que seu servidor esteja devidamente protegida ajuda a proteger suas informações e dados pessoais
          </p>
        </CardSpotlight>
      </div>
    </section>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

