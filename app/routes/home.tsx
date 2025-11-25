import { Helmet } from "@dr.pogodin/react-helmet"

import { PageSEO } from "~/components/seo"

import { Hero } from "./home/components/hero"
import { FAQSection } from "./home/components/faq-accordion.tsx"
import { TestimonialsSection } from "./home/components/testimonials/testimonials.tsx"
import { Solution } from "./home/components/solution"
import Pricing from "./home/components/pricing"

export default function Home() {
  return (
    <PageSEO
      title="ESH | Eleven Soft - Acesso Remoto Soberano e Seguro"
      description="A plataforma definitiva para controle, auditoria e segurança de acesso a servidores. Construída no Brasil. Controle total de acesso SSH, gravação de sessões e auditoria em tempo real."
      keywords="acesso remoto, segurança SSH, auditoria servidores, controle acesso, gravação sessões, infraestrutura segura, DevOps, SRE, Brasil"
      image="/og-image.jpg"
      url="https://esh.elevensoft.dev"
      type="website"
    >
      <main>
        <Helmet>
          <title>ESH | Eleven Soft - Acesso Remoto Soberano e Seguro</title>
          <meta
            name="description"
            content="A plataforma definitiva para controle, auditoria e segurança de acessos remotos."
          />
        </Helmet>
        <Hero />
        <Solution />
        <TestimonialsSection />
        {/* <Pricing /> */}
        {/* <Faq /> */}
        <FAQSection />
      </main>
    </PageSEO>
  )
}
