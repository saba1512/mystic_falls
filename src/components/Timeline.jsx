import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const eventsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { height: "0%" }, 
        { 
          height: "100%", 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1 
          }
        }
      );

      eventsRef.current.forEach((el, i) => {
        const content = el.querySelector('.content-box');
        const dot = el.querySelector('.dot');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });

        tl.fromTo(dot, 
          { scale: 0, opacity: 0 }, 
          { scale: 1.5, opacity: 1, duration: 0.4, ease: "back.out(2)" }
        )
        .fromTo(content, 
          { x: i % 2 === 0 ? 50 : -50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
          "-=0.2"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    { year: "1864", title: "The Transformation", desc: "Stefan and Damon Salvatore are turned into vampires by Katherine Pierce." },
    { year: "2009", title: "The Return", desc: "The arrival of Elena Gilbert's doppelgänger changes everything in Mystic Falls." },
    { year: "2010", title: "The Sun & Moon Curse", desc: "Klaus Mikaelson arrives to break the hybrid curse through a blood sacrifice." },
    { year: "Eternal", title: "The Hollow", desc: "The oldest evil is reborn, threatening the balance of all supernatural life." }
  ];

  return (
    <section ref={sectionRef} className="bg-black py-40 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-zinc-900">
          <div 
            ref={lineRef}
            className="w-full bg-gradient-to-b from-red-600 to-red-900 shadow-[0_0_15px_rgba(185,28,28,0.8)] origin-top"
          ></div>
        </div>

        <div className="flex flex-col gap-32">
          {events.map((event, i) => (
            <div 
              key={i} 
              ref={el => eventsRef.current[i] = el}
              className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              
              <div className={`content-box w-[42%] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-red-700 font-mono text-sm tracking-[0.5em] font-bold block mb-2">{event.year}</span>
                <h4 className="text-1xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6">{event.title}</h4>
                <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-light">
                  {event.desc}
                </p>
              </div>

              <div className="dot absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-red-700 z-10 shadow-[0_0_10px_rgba(185,28,28,1)]"></div>

              <div className="w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 opacity-5 pointer-events-none select-none">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap">History of Blood</h2>
      </div>
    </section>
  );
};

export default Timeline;