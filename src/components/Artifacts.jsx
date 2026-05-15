import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ring from '../assets/ring.png'
import stake from '../assets/stake.png'
import blade from '../assets/blade.webp'

gsap.registerPlugin(ScrollTrigger);

const Artifacts = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        const img = card.querySelector('img');
        const content = card.querySelector('.artifact-content');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none" 
          }
        });

        tl.fromTo(card, 
          { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }, 
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.2, ease: "power4.inOut" }
        )
        .fromTo(img, 
          { scale: 1.5, filter: 'grayscale(100%)' }, 
          { scale: 1, filter: 'grayscale(0%)', duration: 2, ease: "power2.out" }, 
          "-=1"
        )
        .fromTo(content, 
          { x: -20, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8 }, 
          "-=0.5"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const artifacts = [
    { name: "The Daylight Ring", power: "Protection from Sun", desc: "An ancient witch's spell to walk in the light.", img: ring },
    { name: "The Papa Tunde Blade", power: "Ancient Magic Source", desc: "Papa Tunde's Blade was a weapon-turned-dark object.", img: blade },
    { name: "The White Oak Stake", power: "True Death to Originals", desc: "The only weapon that can end the undying.", img: stake }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-xs md:text-sm uppercase tracking-[1em] text-red-700 font-bold mb-3">Mystic Artifacts</h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Lore of <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900">Power & Darkness</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {artifacts.map((p, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="group relative h-[500px] md:h-[600px] overflow-hidden border border-white/5 bg-zinc-950"
          >
            {p.img && (
              <img 
                src={p.img} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700" 
                alt={p.name}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="artifact-content absolute inset-0 p-8 flex flex-col justify-end">
              <div className="border-l-2 border-red-700 pl-6">
                <p className="text-red-600 text-[10px] uppercase tracking-[0.4em] font-bold mb-2">{p.power}</p>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">{p.name}</h4>
                <p className="text-gray-500 text-xs font-light uppercase tracking-widest leading-relaxed line-clamp-2">{p.desc}</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-700 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artifacts;