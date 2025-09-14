import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import PackagesSection from '@/components/PackagesSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Create a ref for the ContactSection
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className='min-h-screen bg-background'>
      {/* Pass the ref to the Header */}
      <Header contactRef={contactRef} />
      {/* Pass the ref to the HeroSection */}
      <HeroSection contactRef={contactRef} />
      <CoursesSection contactRef={contactRef} />
      <PackagesSection />
      <GallerySection />

      {/* Attach the ref to the ContactSection */}
      <ContactSection ref={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;
