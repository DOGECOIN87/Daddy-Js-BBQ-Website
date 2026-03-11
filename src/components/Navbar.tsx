import { Menu, X, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-bbq-dark/95 backdrop-blur-sm text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="font-display font-bold text-2xl tracking-wider text-bbq-red">
              DADDY J'S BBQ
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="hover:text-bbq-red transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#menu" className="hover:text-bbq-red transition-colors px-3 py-2 rounded-md text-sm font-medium">Menu</a>
              <a href="#catering" className="hover:text-bbq-red transition-colors px-3 py-2 rounded-md text-sm font-medium">Catering</a>
              <a href="#reviews" className="hover:text-bbq-red transition-colors px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
              <a href="#location" className="bg-bbq-red hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <MapPin size={16} /> Find Us
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bbq-dark border-b border-white/10">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-bbq-red block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-bbq-red block px-3 py-2 rounded-md text-base font-medium">Menu</a>
            <a href="#catering" onClick={() => setIsOpen(false)} className="hover:text-bbq-red block px-3 py-2 rounded-md text-base font-medium">Catering</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-bbq-red block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="text-bbq-red block px-3 py-2 rounded-md text-base font-medium">Location & Hours</a>
          </div>
        </div>
      )}
    </nav>
  );
}
