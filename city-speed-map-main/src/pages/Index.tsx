import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";

const Index = () => (
  <div className="relative min-h-screen bg-background font-sans">
    <CyberBackground />
    <div className="relative z-10">
      <Header />
      <main>
        <HeroSection />
        <MapSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
