import damonImg from '../assets/damon.jpg'
import elenaImg from '../assets/elena.jpg'
import stefanImg from '../assets/stefan.png'
import klausImg from '../assets/klaus.jpeg'
import carolineImg from '../assets/caroline.webp'
import bonnieImg from '../assets/bonnie.webp'
import katherineImg from '../assets/katherine.jpg'
import rebekahImg from '../assets/rebekah.jpg'
import elijahImg from '../assets/elijah.webp'
import tylerImg from '../assets/tyler.webp'
import alaricImg from '../assets/alaric.webp'
import jeremyImg from '../assets/jeremy.webp'
import enzoImg from '../assets/enzo.jpg'
import kaiImg from '../assets/kai.jpg'
import hayleyImg from '../assets/hayley.webp'
import kolImg from '../assets/kol.webp'
import vickiImg from '../assets/vicki.jpg'
import mattImg from '../assets/matt.webp'
import lexiImg from '../assets/lexi.jpg'
import estherImg from '../assets/esther.jpg'

const Characters = () => {
  const characters = [
    { name: "Damon Salvatore", role: "The Anti-Hero", img: damonImg },
    { name: "Elena Gilbert", role: "The Doppelgänger", img: elenaImg },
    { name: "Stefan Salvatore", role: "The Ripper", img: stefanImg },
    { name: "Klaus Mikaelson", role: "The Hybrid Original", img: klausImg },
    { name: "Caroline Forbes", role: "The Vampire Journalist", img: carolineImg },
    { name: "Bonnie Bennett", role: "The Anchor", img: bonnieImg },
    { name: "Katherine Pierce", role: "The Survivor", img: katherineImg },
    { name: "Rebekah Mikaelson", role: "The Original Sister", img: rebekahImg },
    { name: "Elijah Mikaelson", role: "The Noble Brother", img: elijahImg },
    { name: "Tyler Lockwood", role: "The First Hybrid", img: tylerImg },
    { name: "Alaric Saltzman", role: "The Hunter", img: alaricImg },
    { name: "Jeremy Gilbert", role: "The Medium", img: jeremyImg },
    { name: "Enzo St. John", role: "The Loyal Friend", img: enzoImg },
    { name: "Kai Parker", role: "The Siphoner", img: kaiImg },
    { name: "Hayley Marshall", role: "The Alpha Crescent", img: hayleyImg },
    { name: "Kol Mikaelson", role: "The Wild Card", img: kolImg },
    { name: "Vicki Donovan", role: "The First Turned", img: vickiImg },
    { name: "Matt Donovan", role: "The Survivor Human", img: mattImg },
    { name: "Lexi Branson", role: "The Best Friend", img: lexiImg },
    { name: "Esther Mikaelson", role: "The Creator Of Vampires", img: estherImg },
  ];

  return (
    <section className="py-40 px-4 bg-black">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-red-700 text-[10px] uppercase tracking-[1em] font-bold mb-2">The Complete Cast</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Immortal <span className="text-zinc-700">Souls</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {characters.map((char, i) => (
            <div 
              key={i}
              className="group relative h-[350px] md:h-[450px] bg-zinc-950 overflow-hidden border border-white/5 cursor-pointer"
            >
              <img 
                src={char.img} 
                alt={char.name}
                className="w-full h-full object-cover opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-red-600 text-[8px] uppercase tracking-[0.3em] font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {char.role}
                </span>
                <h4 className="text-lg md:text-xl font-bold uppercase tracking-tighter text-white leading-tight">
                  {char.name}
                </h4>
                
                <div className="mt-3 w-0 group-hover:w-full h-[1px] bg-red-700 transition-all duration-500"></div>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-red-700/0 group-hover:border-red-700/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;