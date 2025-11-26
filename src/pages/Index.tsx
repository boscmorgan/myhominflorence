import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import RoomsSection from '@/components/RoomsSection';
import HostsSection from '@/components/HostsSection';
import ParkingSection from '@/components/ParkingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NeighborhoodSection />
      <RoomsSection />
      <ParkingSection />
      <HostsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
