import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/images/1st_section.png)',
      }}
    >

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white drop-shadow-lg">
          We make fandom-powered games

          <span className="text-white"> for the next generation</span>
        </h1>
        <p className="mt-6 text-2xl text-white/90 mx-auto">
          Thursday Labs builds for Gen-Z women players, with a focus on fandom, style, and
          community-led engagement.
        </p>
        <div className="mt-10">
          <Button as="a" href="#games" className='py-4 with-stars'>
            Explore Our Games
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
