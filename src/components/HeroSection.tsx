import { Button } from '@/components/ui/button';
import { Star, Sparkles, Award, Users } from 'lucide-react';
import ganpatiHero from '@/assets/ganpati-hero.jpg';

const HeroSection = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-[600px] bg-gradient-hero overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <img src={ganpatiHero} alt='Ganpati Festival Special Offer' className='w-full h-full object-cover' />
      </div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-8 h-8 bg-white/20 rounded-full float'></div>
      <div className='absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full float' style={{ animationDelay: '1s' }}></div>
      <div className='absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full float' style={{ animationDelay: '2s' }}></div>

      <div className='relative container mx-auto px-4 py-20'>
        <div className='max-w-4xl mx-auto text-center text-white'>
          {/* Special Offer Badge */}
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 pulse-glow'>
            <Sparkles className='w-5 h-5 text-yellow-300' />
            <span className='font-subheading text-sm'>Ganpati Special Offer</span>
            <Star className='w-5 h-5 text-yellow-300' />
          </div>

          {/* Main Headline */}
          <h1 className='font-heading text-5xl md:text-7xl mb-6 leading-tight'>
            Learn More,
            <span className='text-gradient-ganpati block'> Pay Less</span>
            <span className='text-2xl md:text-3xl font-normal block mt-4'>Limited Time!</span>
          </h1>

          {/* Marathi Tagline */}
          <p className='text-xl md:text-2xl mb-8 font-body opacity-90'>या मासूमध्ये ज्ञानाची खरी खास सवलतींचा वर्षाव!</p>

          {/* Discount Banner */}
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 pulse-glow'>
            <div className='text-6xl font-heading mb-2'>30%</div>
            <div className='text-xl font-subheading'>Festival Sale Discount</div>
          </div>

          {/* CTA Buttons - FIXED VERSION */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            {/* Method 1: Override with explicit styling */}
            <Button variant='hero' size='lg' className='text-xl px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'>
              View Courses
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-xl px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-300'
              onClick={scrollToContact} // Scroll to ContactSection
            >
              Contact Us
            </Button>
          </div>

          {/* Alternative CTA Buttons - Using standard variants */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-xl px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              View Courses
            </button>
            <button className="text-xl px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div> */}

          {/* Quick Stats
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Students Trained</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm opacity-80">Courses Available</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-sm opacity-80">Student Rating</div>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-80">Job Assistance</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
