import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import vampireDiaries from '../assets/vampire_diaries.jpg';
import QuizModal from '../components/QuizModal'; // აი აქ შემოგვაქვს ცალკე ფაილი

const Hero = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const badgeRef = useRef(null);
  const sideRef = useRef(null);
  const quoteRef = useRef(null);

  const [isQuizOpen, setIsQuizOpen] = useState(false); // სთეითი მოდალისთვის

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    gsap.fromTo(".hero-bg", 
      { scale: 1.2, opacity: 0 }, 
      { scale: 1, opacity: 0.5, duration: 2.5, ease: "power2.out" }
    );

    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: -20, letterSpacing: "1em" }, 
      { opacity: 1, y: 0, letterSpacing: "0.5em", duration: 1.5, delay: 0.3 }
    )
    .fromTo(".title-word", 
      { opacity: 0, y: 100, rotateX: -45 }, 
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.1, duration: 1.2 }, 
      "-=1"
    )
    .fromTo(textRef.current, 
      { opacity: 0, filter: "blur(10px)" }, 
      { opacity: 1, filter: "blur(0px)", duration: 1.5 }, 
      "-=0.8"
    )
    .fromTo(btnRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=1"
    )
    .fromTo([sideRef.current, quoteRef.current], 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5 }, 
      "-=0.5"
    );

  }, []);

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={vampireDiaries} 
            className="hero-bg w-full h-full object-cover mt-20" 
            alt="Mystic Falls"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>

        <div ref={sideRef} className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-20">
          <span className="w-[1px] h-20 bg-red-700/50 mx-auto"></span>
          <div className="text-[10px] uppercase tracking-[0.5em] vertical-text text-gray-500 rotate-180 hover:text-red-700 transition-colors cursor-pointer">Instagram</div>
          <div className="text-[10px] uppercase tracking-[0.5em] vertical-text text-gray-500 rotate-180 hover:text-red-700 transition-colors cursor-pointer">Twitter</div>
          <span className="w-[1px] h-20 bg-red-700/50 mx-auto"></span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div ref={badgeRef} className="mb-6 inline-block">
            <span className="px-4 py-1 border border-red-700 text-red-700 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold rounded-full bg-red-900/10">
              Season 8 Now Streaming
            </span>
          </div>
          
          <h1 ref={titleRef} className="text-6xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] text-white">
            <span className="title-word inline-block">The</span> <br /> 
            <span className="title-word inline-block text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900 drop-shadow-[0_0_35px_rgba(185,28,28,0.4)]">Vampire</span> <br /> 
            <span className="title-word inline-block">Diaries</span>
          </h1>

          <p ref={textRef} className="mt-10 text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-sm font-light max-w-2xl mx-auto leading-relaxed">
            In a small town full of supernatural secrets, <br className="hidden md:block"/> eternal love comes with a deadly price.
          </p>

          <div ref={btnRef} className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://gemovie.tv/serial/506/the-vampire-diaries-qartulad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-red-700 text-white text-[11px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all hover:bg-red-600 w-full md:w-auto block text-center cursor-pointer"
            >
              <span className="relative z-10">Start Watching</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            
            {/* Explore Quiz ღილაკი */}
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="px-10 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto cursor-pointer"
            >
              Explore Quiz
            </button>
          </div>
        </div>

        <div ref={quoteRef} className="hidden xl:block absolute bottom-20 right-20 z-20 max-w-[200px]">
          <div className="p-6 border-l border-red-700 bg-black/40 backdrop-blur-sm">
            <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mb-2">Quote of the Day</p>
            <p className="text-xs text-gray-400 italic leading-relaxed">
              "I was feeling epic."
            </p>
            <p className="mt-2 text-[9px] text-gray-600 uppercase">— Stefan Salvatore</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.4em] text-gray-600">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-red-700 to-transparent"></div>
        </div>
      </section>

      {/* მოდალი გამოძახებულია აქ */}
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </>
  );
};

export default Hero;