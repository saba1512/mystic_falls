import { useState } from "react";

const Episodes = () => {
  const [activeSeason, setActiveSeason] = useState(1);

  const episodesData = {
    1: [
      { id: "S01E01", title: "Pilot", rating: "8.1", desc: "Four months after the tragic car accident that killed their parents, Elena Gilbert and her brother Jeremy are still trying to cope with their grief when a mysterious new student, Stefan Salvatore, arrives." },
      { id: "S01E06", title: "Lost Girls", desc: "In flashbacks, Stefan and Damon recall the long-ago night when Katherine turned them into vampires. Meanwhile, Elena demands answers from Stefan about the town's history." },
      { id: "S01E10", title: "The Turning Point", desc: "After reading Stefan's journal, Elena discovers the terrifying truth about his identity. Damon uses Caroline to get his ring back, leading to a dangerous confrontation." },
      { id: "S01E22", title: "Founder's Day", desc: "The Founder's Day celebration arrives, and John Gilbert sets his plan to destroy the tomb vampires into motion, leading to a chaotic night of betrayal, fire, and blood." }
    ],
    2: [
      { id: "S02E01", title: "The Return", desc: "On the same night as the previous season's finale, Elena arrives home to a nightmare. Damon realizes Katherine has returned, and Tyler's uncle Mason Lockwood arrives in town." },
      { id: "S02E07", title: "Masquerade", desc: "Stefan and Damon decide on a new plan to deal with Katherine at the Lockwood masquerade ball. Katherine calls on an old friend, Lucy, to cast a powerful spell." },
      { id: "S02E12", title: "The Descent", desc: "Stefan tries to reach out to Isobel, while Elena questions John Gilbert. Caroline's relationship with Tyler becomes more complicated after his first transformation." },
      { id: "S02E21", title: "The Sun Also Rises", desc: "With the full moon arriving, Klaus moves forward with his sacrifice to break the curse. Elena, John, and Jenna find themselves in ultimate danger." }
    ],
    3: [
      { id: "S03E01", title: "The Birthday", desc: "On Elena's 18th birthday, Klaus and Stefan are on the hunt for more werewolves to create hybrids, while Damon tries to keep Elena from tracking Stefan down." },
      { id: "S03E05", title: "The Reckoning", desc: "Klaus returns to Mystic Falls and discovers that Elena is still alive. He uses Stefan to terrorize the high school seniors during Senior Prank Night." },
      { id: "S03E14", title: "Dangerous Liaisons", desc: "Elena is shocked to receive an invitation to a formal ball at Klaus's newly renovated mansion. Stefan and Damon both attend to protect her from the Originals." },
      { id: "S03E22", title: "The Departed", desc: "Jeremy makes a desperate decision to protect his sister. In the face of danger, Stefan and Damon leave Mystic Falls on a mission, while Alaric reveals a dark truth." }
    ],
    4: [
      { id: "S04E01", title: "Growing Pains", desc: "Elena awakens the morning after the accident to find her worst nightmare coming true: she must go through the terrifying transition to become a vampire." },
      { id: "S04E15", title: "Stand by Me", desc: "When Stefan returns to Mystic Falls with Elena and Jeremy, Caroline immediately worries about Elena's mental state. Damon tries to help Elena accept her new reality." },
      { id: "S04E23", title: "Graduation", desc: "On Graduation Day, Mystic Falls is overrun with ghosts from the past intent on settling old scores and fulfilling their supernatural destinies." }
    ],
    5: [
      { id: "S05E01", title: "I Know What You Did Last Summer", desc: "Elena is thrilled to move into a dorm room at nearby Whitmore College with Caroline, unaware that Silas has assumed Stefan's identity." },
      { id: "S05E11", title: "500 Years of Solitude", desc: "As Katherine faces a new crisis, Stefan reminds her of her long history. Meanwhile, Damon, Elena, and Caroline gather to share memories of Katherine's worst deeds." },
      { id: "S05E22", title: "Home", desc: "Heartbroken by an unexpected tragedy, Damon is pushed to the brink. An unexpected ally offers a dangerous plan to tear down the Other Side completely." }
    ],
    6: [
      { id: "S06E01", title: "I'll Remember", desc: "After spending the summer coping with the loss of Damon and Bonnie, Elena returns to Whitmore College. Meanwhile, Stefan tries to live a normal human life." },
      { id: "S06E14", title: "Stay", desc: "It's Jeremy's last day in Mystic Falls, and Elena tries to put on a brave face. Stefan and Caroline grow closer while helping Sheriff Forbes." },
      { id: "S06E22", title: "I'm Thinking of You All the While", desc: "In the aftermath of Alaric and Jo's wedding disaster, an uninvited guest leaves Elena in a state of deep, magical sleep to protect her friends." }
    ],
    7: [
      { id: "S07E01", title: "Day One of Twenty-Two Thousand, Give or Take", desc: "Damon is forced to navigate his new reality without Elena. Lily Mikaelson and her Heretics seize control of Mystic Falls, forcing the residents to evacuate." },
      { id: "S07E10", title: "Hell Is Other People", desc: "After finding himself trapped inside the Phoenix Stone, Stefan is forced to confront his darkest inner demons and repeat his worst mistakes." },
      { id: "S07E22", title: "Gods and Monsters", desc: "Despite their best efforts to save Bonnie from her dark hunter curse, Damon and Enzo must make the ultimate sacrifice inside the Armory's vault." }
    ],
    8: [
      { id: "S08E01", title: "Hello, Brother", desc: "Months after Damon and Enzo vanished from the Armory vault, Stefan spearheads a desperate search, while a mysterious siren entity controls their minds." },
      { id: "S08E11", title: "You Chosen to Be Good", desc: "Cade returns to Mystic Falls and presents Damon and Stefan with additional assignments, leading to a tragic choice that changes Bonnie's life forever." },
      { id: "S08E16", title: "I Was Feeling Epic", desc: "The ultimate finale. With the fate of Mystic Falls at stake, Stefan and Damon fight their greatest enemy, Katherine Pierce, in one final, unforgettable sacrifice." }
    ]
  };

  return (
    <section className="py-32 px-4 md:px-12 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-red-700 text-[10px] uppercase tracking-[1em] font-bold mb-3">Archive of Mystic Falls</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            The <span className="text-zinc-700">Episodes</span>
          </h3>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex flex-wrap gap-4 border-b border-zinc-900 pb-6 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((season) => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`px-6 py-3 uppercase tracking-widest text-xs font-bold border transition-all duration-300 ${
                activeSeason === season
                  ? "bg-red-950/20 border-red-700 text-red-500 shadow-[0_0_20px_rgba(185,28,28,0.2)]"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white"
              }`}
            >
              Season 0{season}
            </button>
          ))}
        </div>

        {/* Episodes List */}
        <div className="flex flex-col gap-6">
          {episodesData[activeSeason]?.map((ep, i) => (
            <div 
              key={i}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-zinc-950 border border-zinc-900/50 hover:border-red-900/30 transition-all duration-500 gap-6"
            >
              {/* Blur Back Decor */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/0 via-red-900/0 to-red-900/0 group-hover:to-red-950/5 transition-all duration-700 pointer-events-none"></div>

              {/* Episode Main Info */}
              <div className="flex items-start gap-6 max-w-3xl">
                {/* Number/Code */}
                <span className="font-mono text-red-600 text-xs md:text-sm tracking-wider bg-red-950/20 px-3 py-1 border border-red-900/30">
                  {ep.id}
                </span>
                
                {/* Text Content */}
                <div>
                  <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {ep.title}
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                    {ep.desc}
                  </p>
                </div>
              </div>

              {/* Rating & Action Button */}
              <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-t-0 border-zinc-900 pt-4 md:pt-0 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase text-zinc-600 tracking-wider">IMDb</span>
                  <span className="font-black text-white tracking-tighter bg-zinc-900 px-3 py-1 text-sm border border-zinc-800">
                    ★ {ep.rating}
                  </span>
                </div>
                
                <button className="text-[9px] uppercase tracking-[0.3em] font-mono font-bold text-zinc-400 hover:text-red-500 transition-colors border-b border-zinc-800 hover:border-red-700 pb-1">
                  [ Watch Recap ]
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Episodes;