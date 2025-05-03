import { CheckIcon } from "@radix-ui/react-icons";
import { GlareCard } from "~/components/ui/glare-card";

export function Pricing() {
  return (
    <section className="py-14 container mx-auto">
      <div className="py-1 px-10 rounded-full bg-neutral-800 text-neutral-400  w-max mx-auto">Preços</div>
      <h1 className="text-3xl font-semibold my-10 text-center">Simples, preço justo para suas equipes</h1>
      <p className="text-neutral-400 text-lg mb-10 text-center">Escolha a melhor opção para você.</p>
      <div className="flex gap-7">
        <GlareCard className="flex flex-col items-center justify-center">
          <h1>R$300/mês</h1>

          <p className="text-white font-bold text-xl mt-4">plano básico</p>
          <span className="text-neutral-500">cobrança anula</span>
          <ul>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="text-neutral-500" />
              <span>Lorem ipsum dolor</span>
            </li>
            <li className="flex items-center gap-x-2">
              <CheckIcon className="text-neutral-500" />
              <span>Lorem ipsum dolor</span>
            </li>

            <li className="flex items-center gap-x-2">
              <CheckIcon className="text-neutral-500" />
              <span>Lorem ipsum dolor</span>
            </li>
          </ul>
          <a href="https://elevensoft.dev">Quero conhecer</a>
        </GlareCard>
      </div>
    </section>
  )
}
