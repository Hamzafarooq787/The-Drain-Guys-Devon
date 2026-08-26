import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencyStrip from "@/components/EmergencyStrip";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Areas from "@/components/Areas";
import Faqs from "@/components/Faqs";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmergencyStrip />
        <Intro />
        <Services />
        <WhyUs />
        <Areas />
        <Faqs />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}
