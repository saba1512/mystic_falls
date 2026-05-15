import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
        
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-black uppercase tracking-tighter z-[110]"
        >
          Mystic <span className="text-red-700">Falls</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">
            <li className="hover:text-red-600 transition-colors"><Link to="/">Home</Link></li>
            <li className="hover:text-red-600 transition-colors"><Link to="/characters">Characters</Link></li>
            <li className="hover:text-red-600 transition-colors"><Link to="/episodes">Episodes</Link></li>
          </ul>
        </nav>

        <button className="hidden md:block px-6 py-2 border border-red-700 text-red-700 text-[10px] uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all">
          The Diaries
        </button>

        <button 
          className="md:hidden z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
          </div>
        </button>

        <div className={`fixed inset-0 h-screen w-full bg-black z-[100] transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          
          <nav className="w-full">
            <ul className="flex flex-col gap-10 text-center items-center">
              <li onClick={() => setIsOpen(false)} className="text-3xl font-light tracking-[0.3em] uppercase text-white hover:text-red-700 transition">
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="text-3xl font-light tracking-[0.3em] uppercase text-white hover:text-red-700 transition">
                <Link to="/characters">Characters</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="text-3xl font-light tracking-[0.3em] uppercase text-white hover:text-red-700 transition">
                <Link to="/episodes">Episodes</Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-16">
            <button className="px-10 py-4 border border-red-700 text-red-700 text-xs uppercase tracking-[0.3em] hover:bg-red-700 hover:text-white transition-all font-bold">
              The Diaries
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;