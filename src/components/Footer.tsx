import { Link } from 'react-router-dom';
import { FlaskConical, Facebook, Linkedin, Youtube } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-cyan-600 text-white p-1.5 rounded-lg">
                <FlaskConical className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">GEMIMO <span className="text-cyan-400">LABS</span></span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              An independent media content creation engine. Transforming complex topics into clear, high-density explanations that respect your audience's intelligence and time.
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/gemimolabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">X (formerly Twitter)</span>
                <XIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@gemimolabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/gemimolabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/gemimolabs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
               </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Content Pillars</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/blog?category=technology" className="text-base text-gray-400 hover:text-white transition-colors">Technology</Link></li>
                  <li><Link to="/blog?category=science" className="text-base text-gray-400 hover:text-white transition-colors">Science</Link></li>
                  <li><Link to="/blog?category=history" className="text-base text-gray-400 hover:text-white transition-colors">History</Link></li>
                  <li><Link to="/blog?category=society" className="text-base text-gray-400 hover:text-white transition-colors">Society</Link></li>
                  <li><Link to="/blog?category=business-finance" className="text-base text-gray-400 hover:text-white transition-colors">Business & Finance</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Organization</h3>
                <ul className="mt-4 space-y-4">
                  <li><span className="text-base text-gray-400">A subproject of Gemimo</span></li>
                  <li><span className="text-base text-gray-400">Developed by Qwestmak</span></li>
                  <li><Link to="/blog" className="text-base text-gray-400 hover:text-white transition-colors">Read Articles</Link></li>
                  <li><a href="#newsletter" className="text-base text-gray-400 hover:text-white transition-colors">Subscribe</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 xl:text-center shrink-0">
            &copy; {new Date().getFullYear()} Qwestmak | Gemimo Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
            <span className="text-gray-500 italic">From facts to people. From business to news. Explained.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
