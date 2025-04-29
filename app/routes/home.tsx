import type { Route } from "./+types/home";
import { Header } from "~/components/header";
import { Hero } from "./home/components/hero";
import { Access } from "./home/components/access";
import { HowTo } from "./home/components/how-to";
import { CallToAction } from "./home/components/cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ESH | Eleven Soft" },
    { name: "description", content: "Welcome to Eleven Shell HUB!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Access />
      <HowTo />
      <CallToAction />
    </main>
  )
}
