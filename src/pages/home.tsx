import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";

function Home() {
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
