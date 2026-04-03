import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Tổng quan', href: '#tong-quan' },
  { name: 'Vị trí', href: '#vi-tri' },
  { name: 'Tiện ích', href: '#tien-ich' },
  { name: 'Mặt bằng', href: '#mat-bang' },
  { name: 'Liên hệ', href: '#lien-he' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
              VINHOMES <span className="text-gold-500">CẦN GIỜ</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#lien-he"
              className={`px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider font-medium`}
            >
              Nhận báo giá
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-emerald-900' : 'text-white'} hover:text-gold-500 focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-gold-500 hover:bg-gray-50 uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
