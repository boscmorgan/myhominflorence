import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import CTASection from '@/components/CTASection';
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
      <AmenitiesSection />
      <ParkingSection />
      <HostsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
