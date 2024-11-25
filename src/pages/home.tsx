import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import ReactGA from "react-ga4";

function Home() {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Acessou a home page - ESH",
  });
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
