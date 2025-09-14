import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const Header = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+919167602808';
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='bg-white shadow-card border-b sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3'>
        {/* Main Header */}
        <div className='flex items-center justify-between'>
          {/* Logo and Institute Name */}
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-full flex items-center justify-center transition-smooth hover:scale-105 overflow-hidden'>
              <img src={logo} alt='OCI Logo' className='w-full h-full object-cover rounded-full' />
            </div>
            <div className='hidden sm:block'>
              <h1 className='font-heading text-lg md:text-2xl text-foreground leading-tight'>IT - Oriental Computer Institute</h1>
              <p className='text-xs md:text-sm text-muted-foreground font-body'>Transform Your Career Today!</p>
            </div>
            {/* Mobile Institute Name */}
            <div className='block sm:hidden'>
              <h1 className='font-heading text-lg text-foreground leading-tight'>OCI</h1>
              <p className='text-xs text-muted-foreground font-body'>Transform Your Career Today</p>
            </div>
          </div>

          {/* Desktop Contact & CTA */}
          <div className='hidden md:flex items-center gap-4'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <Phone className='w-4 h-4 text-primary' />
              <span className='font-body'>8828539765 / 8108378214</span>
            </div>
            <Button
              variant='ganpati'
              size='sm'
              className='whitespace-nowrap shadow-card hover:shadow-ganpati'
              onClick={scrollToContact} // Scroll to ContactSection
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex md:hidden items-center gap-2'>
            <Button variant='ganpati' size='sm' className='px-3' onClick={handleCall}>
              Call
            </Button>
            <Button variant='outline' size='sm' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='p-2 border-primary/20 hover:bg-primary/5'>
              {isMobileMenuOpen ? <X className='w-4 h-4 text-primary' /> : <Menu className='w-4 h-4 text-primary' />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2 duration-200'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground justify-center'>
                <Phone className='w-4 h-4 text-primary' />
                <span className='font-body'>
                  <a href='tel:8108378214'>8108378214</a> /<a href='tel:8828539765'>8828539765</a>{' '}
                </span>
              </div>
              <Button
                variant='ganpati'
                size='sm'
                className='w-full shadow-card hover:shadow-ganpati'
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleCall();
                }}>
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
