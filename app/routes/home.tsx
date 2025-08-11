import type { Route } from "./+types/home";
import { Hero } from "./home/components/hero";
import { SocialProof } from "./home/components/socialProof";
import { Problem } from "./home/components/problem";
import { Solution } from "./home/components/solution";
import { Pricing } from "./home/components/pricing";
import { Faq } from "./home/components/faq";
import { Footer } from "~/components/footer";
import AboutPage from "./about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ESH | Eleven Soft - Acesso Remoto Soberano e Seguro" },
    { name: "description", content: "A plataforma definitiva para controle, auditoria e segurança de acesso a servidores. Construída no Brasil." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPage />
      <SocialProof />
      <Problem />
      <Solution />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
