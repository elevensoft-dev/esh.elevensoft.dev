import type { Route } from "./+types/home";
import { Header } from "~/components/header";
import { Hero } from "./home/components/hero";
import { Access } from "./home/components/access";

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
    </main>
  ) 
}
