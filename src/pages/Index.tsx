import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import RoomsSection from '@/components/RoomsSection';
import HostsSection from '@/components/HostsSection';
import ParkingSection from '@/components/ParkingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <NeighborhoodSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <RoomsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ParkingSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <HostsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
