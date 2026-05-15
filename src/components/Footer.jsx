import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black uppercase tracking-tighter italic">
              Mystic <span className="text-red-700">Falls</span>
            </Link>
            <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-sm uppercase tracking-wider font-light">
              For over a century, I have lived in secret. Hiding in the shadows, alone in the world. Until now.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              <li className="hover:text-red-700 transition-colors"><Link to="/">Home</Link></li>
              <li className="hover:text-red-700 transition-colors"><Link to="/characters">Characters</Link></li>
              <li className="hover:text-red-700 transition-colors"><Link to="/episodes">Episodes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Socials</h4>
            <ul className="flex flex-col gap-4 text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-white transition-colors cursor-pointer">X (Twitter)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Letterboxd</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-gray-600">
            © 2026 Mystic Falls. All rights reserved.
          </p>
          <p className="text-[9px] uppercase tracking-[0.5em] text-gray-600 italic">
            "I was feeling epic"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;