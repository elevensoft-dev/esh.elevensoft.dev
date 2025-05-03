import type { Route } from "./+types/home";
import { Hero } from "./home/components/hero";
import { Access } from "./home/components/access";
import { HowTo } from "./home/components/how-to";
import { CallToAction } from "./home/components/cta";
import { Audition } from "./home/components/audition";
import { Pricing } from "./home/components/pricing";
import { Faq } from "./home/components/faq";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ESH | Eleven Soft" },
    { name: "description", content: "Welcome to Eleven Shell HUB!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Access />
      <HowTo />
      <CallToAction />
      <Audition />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  )
}
