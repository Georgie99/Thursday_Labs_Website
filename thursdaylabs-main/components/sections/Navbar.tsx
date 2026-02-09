'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#games' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/logo.png"
            alt="Thursday Labs"
            className="h-16 sm:h-24 w-auto drop-shadow-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-brand-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button as="a" href="#games" className='py-3 with-stars mt-0!'>
            Explore Games
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-2xl p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-white m3-label-medium font-medium hover:text-brand-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            as="a"
            href="#games"
            className="mt-4 with-stars"
            onClick={() => setIsOpen(false)}
          >
            Explore Games
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
