import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NeighborhoodSection from '@/components/NeighborhoodSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import CTASection from '@/components/CTASection';
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
