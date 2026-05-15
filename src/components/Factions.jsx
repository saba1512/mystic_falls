import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Factions = () => {
  const [selectedFaction, setSelectedFaction] = useState(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9,
          filter: "brightness(0)" 
        }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "brightness(1)",
          stagger: 0.1,
          duration: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const factions = [
    {
      title: "The Vampires",
      lineage: "The Mikaelson Bloodline",
      color: "hover:shadow-[0_0_50px_rgba(153,27,27,0.4)]",
      border: "border-red-900/30",
      bg: "bg-red-950/5",
      history: "Created by Esther Mikaelson in the 10th century, the Originals were the first of their kind. To survive a plague of werewolves, they traded their humanity for eternal life, forever bound by the hunger for blood."
    },
    {
      title: "The Witches",
      lineage: "The Bennett Ancestry",
      color: "hover:shadow-[0_0_50px_rgba(30,58,138,0.4)]",
      border: "border-blue-900/30",
      bg: "bg-blue-950/5",
      history: "The guardians of nature's balance. From Qetsiyah to Bonnie Bennett, these powerful individuals draw energy from the earth, ancestors, and celestial events to cast spells that can create or destroy worlds."
    },
    {
      title: "The Werewolves",
      lineage: "The Labonair Pack",
      color: "hover:shadow-[0_0_50px_rgba(20,83,45,0.4)]",
      border: "border-green-900/30",
      bg: "bg-green-950/5",
      history: "Cursed by the Hollow centuries ago, the seven original packs were forced to turn into beasts every full moon. Their strength is unmatched under the moon, driven by raw instinct and family loyalty."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-700 text-xs uppercase tracking-[0.8em] font-bold mb-4 italic">The Supernatural Hierarchy</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Choose Your <span className="text-gray-500">Legacy</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {factions.map((f, i) => (
            <div 
              key={i} 
              ref={el => cardsRef.current[i] = el}
              onClick={() => setSelectedFaction(f)}
              className={`group relative p-12 h-[400px] border ${f.border} ${f.bg} ${f.color} transition-all duration-700 flex flex-col justify-between overflow-hidden cursor-pointer bg-zinc-900/10`}
            >
              <div className="relative z-10">
                <span className="text-[10px] text-gray-600 font-mono mb-4 block">0{i + 1} / 03</span>
                <h4 className="text-3xl font-bold uppercase tracking-tighter group-hover:text-red-600 transition-colors duration-500 text-white">{f.title}</h4>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mt-2">{f.lineage}</p>
              </div>
              <button className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold text-white border-b border-white/20 pb-2 w-max group-hover:border-red-600 transition-all">
                Read History
              </button>
              
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedFaction && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/95 backdrop-blur-md">
          <div className="relative bg-zinc-950 border border-white/10 p-8 md:p-16 max-w-2xl w-full">
            <button 
              onClick={() => setSelectedFaction(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white uppercase text-[10px] tracking-widest"
            >
              [ Close ]
            </button>
            <h4 className="text-red-700 text-[10px] uppercase tracking-[0.5em] font-bold mb-4 italic">{selectedFaction.lineage}</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">{selectedFaction.title}</h2>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-light">{selectedFaction.history}</p>
            <div className="mt-12 w-20 h-[1px] bg-red-700"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Factions;