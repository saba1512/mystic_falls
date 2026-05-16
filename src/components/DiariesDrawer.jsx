import { useEffect } from "react";

const DiariesDrawer = ({ isOpen, onClose }) => {
  // ESC კლავიშზე დაჭერით რომ დაიხუროს
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const journalEntries = [
    {
      author: "Stefan Salvatore",
      date: "September 7, 2009",
      text: "For over a century, I have lived in secret. Hiding in the shadows, alone in the world. Until now. I am a vampire. And this is my story."
    },
    {
      author: "Damon Salvatore",
      date: "May 10, 2010",
      text: "I met a girl. We talked, it was epic. Then the sun came up and reality set in. Well, reality is a bitch, and I'm the one who bites."
    },
    {
      author: "Elena Gilbert",
      date: "September 11, 2009",
      text: "Dear diary, today will be different. It has to be. I will smile, and it will be believable. My teeth will say 'I'm fine, thank you.' ... I will no longer be the sad girl whose parents died."
    },
    {
      author: "Katherine Pierce",
      date: "June 22, 1864",
      text: "Better you die than I. Love is real, Damon, but survival is absolute. I will see you again, in another century."
    },
    {
      author: "Klaus Mikaelson",
      date: "The New Orleans Era",
      text: "In the end, we're all left with the same question: who will stand by us when the darkness comes? Family above all."
    }
  ];

  return (
    <div className={`fixed inset-0 z-[300] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* მუქი ფონი (Backdrop) */}
      <div 
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* დღიურის პანელი */}
      <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-red-900/20 p-8 md:p-12 flex flex-col justify-between transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div>
          {/* ზედა ნაწილი (Header) */}
          <div className="flex justify-between items-center border-b border-zinc-900 pb-6 mb-8">
            <div>
              <span className="text-red-700 text-[9px] uppercase tracking-[0.5em] font-bold block mb-1">Confessions</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white">The Diaries</h4>
            </div>
            <button 
              onClick={onClose} 
              className="text-zinc-600 hover:text-white uppercase text-[10px] tracking-widest transition-colors cursor-pointer"
            >
              [ Close ]
            </button>
          </div>

          {/* ჩანაწერების სია (Scrollable ტერიტორია) */}
          <div className="flex flex-col gap-8 overflow-y-auto max-h-[70vh] pr-2 scrollbar-none">
            {journalEntries.map((entry, i) => (
              <div key={i} className="border-b border-zinc-900/50 pb-6 last:border-0 group">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="text-red-600 font-bold uppercase text-xs tracking-wider group-hover:text-red-500 transition-colors duration-300">
                    {entry.author}
                  </h5>
                  <span className="text-[9px] font-mono text-zinc-600">{entry.date}</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-sm italic font-light leading-relaxed pl-2 border-l border-zinc-900 group-hover:border-red-900/40 transition-colors duration-500">
                  "{entry.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ქვედა წარწერა (Footer) */}
        <div className="text-center text-[9px] text-zinc-700 uppercase tracking-[0.3em] font-mono border-t border-zinc-900 pt-4">
          Property of Salvatore Estate
        </div>

      </div>
    </div>
  );
};

export default DiariesDrawer;