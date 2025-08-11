import type { Route } from "./+types/home";
import { Hero } from "./home/components/hero";
import { SocialProof } from "./home/components/socialProof";
import { Problem } from "./home/components/problem";
import { Solution } from "./home/components/solution";
import { Pricing } from "./home/components/pricing";
import { PricingFaq } from "./home/components/pricing-faq";
import { Faq } from "./home/components/faq";
import { Footer } from "~/components/footer";
import AboutPage from "./about";
import { PageSEO } from "~/components/seo";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ESH | Eleven Soft - Acesso Remoto Soberano e Seguro" },
    { name: "description", content: "A plataforma definitiva para controle, auditoria e segurança de acesso a servidores. Construída no Brasil." },
  ];
}

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
        <Hero />
        <AboutPage />
        <SocialProof />
        <Problem />
        <Solution />
        <Pricing />
        <PricingFaq />
        <Faq />
        <Footer />
      </main>
    </PageSEO>
  );
}
