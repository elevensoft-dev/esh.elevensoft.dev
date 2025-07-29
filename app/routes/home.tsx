import { useEffect } from "react";

import { Footer } from "~/components/footer";

import { Hero } from "./home/components/hero";
import { Access } from "./home/components/access";
import { HowTo } from "./home/components/how-to";
import { CallToAction } from "./home/components/cta";
import { Audition } from "./home/components/audition";
import { Pricing } from "./home/components/pricing";
import { Faq } from "./home/components/faq";


export default function Home() {

  useEffect(() => {
    document.title = 'ESH | Eleven Soft'
  }, [])

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
