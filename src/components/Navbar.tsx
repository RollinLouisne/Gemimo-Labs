import { Link } from 'react-router-dom';
import { FlaskConical, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-cyan-600 text-white p-1.5 rounded-lg">
                <FlaskConical className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">GEMIMO <span className="text-cyan-500">LABS</span></span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-600 hover:text-cyan-600 font-medium px-3 py-2 text-sm transition-colors">Home</Link>
            <Link to="/blog" className="text-gray-600 hover:text-cyan-600 font-medium px-3 py-2 text-sm transition-colors">Read</Link>
            <a href="#newsletter" className="bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-cyan-700 transition-colors">Subscribe</a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Read</Link>
            <a href="#newsletter" onClick={() => setIsOpen(false)} className="block mt-4 text-center bg-cyan-600 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-cyan-700 w-full">Subscribe</a>
          </div>
        </div>
      )}
    </nav>
  );
}
