import { useState } from "react";

const QuizModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ Vampire: 0, Witch: 0, Werewolf: 0, Hybrid: 0 });
  const [quizResult, setQuizResult] = useState(null);

  const questions = [
    {
      q: "Choose your primary instinct in a dangerous situation:",
      options: [
        { text: "Protect my loved ones at any cost, using raw speed.", type: "Vampire" },
        { text: "Analyze the situation and look for a hidden spell or solution.", type: "Witch" },
        { text: "Embrace the anger and fight back with pure, aggressive strength.", type: "Werewolf" },
        { text: "Control the room, manipulate the enemies, and dominate.", type: "Hybrid" }
      ]
    },
    {
      q: "Which artifact template would you carry for protection?",
      options: [
        { text: "A Lapis Lazuli ring.", type: "Vampire" },
        { text: "An ancient Bennett talisman.", type: "Witch" },
        { text: "A moonstone relic.", type: "Werewolf" },
        { text: "The White Oak stake (to keep it safe from others).", type: "Hybrid" }
      ]
    },
    {
      q: "What matters most to you in this life?",
      options: [
        { text: "Eternal devotion and loyalty to a partner.", type: "Vampire" },
        { text: "Maintaining the balance of nature and order.", type: "Witch" },
        { text: "The pack, family, and brotherhood.", type: "Werewolf" },
        { text: "Absolute power and freedom without rules.", type: "Hybrid" }
      ]
    }
  ];

  const handleAnswer = (type) => {
    const updatedScores = { ...scores, [type]: scores[type] + 1 };
    setScores(updatedScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const highestResult = Object.keys(updatedScores).reduce((a, b) => updatedScores[a] > updatedScores[b] ? a : b);
      setQuizResult(highestResult);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ Vampire: 0, Witch: 0, Werewolf: 0, Hybrid: 0 });
    setQuizResult(null);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
      {/* ფონის დაბნელება */}
      <div onClick={handleClose} className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
      
      {/* ქვიზის კონტენტი */}
      <div className="relative bg-zinc-950 border border-zinc-900 p-8 md:p-12 max-w-xl w-full text-white shadow-[0_0_50px_rgba(185,28,28,0.15)]">
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 text-zinc-600 hover:text-white uppercase text-[10px] tracking-widest transition-colors cursor-pointer"
        >
          [ Close ]
        </button>

        {!quizResult ? (
          <div>
            <span className="text-red-700 text-[9px] uppercase tracking-[0.4em] font-bold block mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-8">
              {questions[currentQuestion].q}
            </h3>
            <div className="flex flex-col gap-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full text-left p-4 border border-zinc-900 bg-zinc-900/20 hover:border-red-900/50 hover:bg-red-950/5 text-xs md:text-sm transition-all duration-300 text-zinc-400 hover:text-white cursor-pointer"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <span className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] block mb-2">Your Bloodline Result</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800 tracking-tighter mb-4 drop-shadow-[0_0_25px_rgba(185,28,28,0.3)]">
              You are a {quizResult}!
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light mb-8 max-w-xs mx-auto leading-relaxed">
              {quizResult === "Vampire" && "Speed, obsession, and loyalty run in your cold veins. Lapis Lazuli is your protection."}
              {quizResult === "Witch" && "You connect deeply with nature, channeling ancient ancestral energy to maintain order."}
              {quizResult === "Werewolf" && "Aggressive, fiercely loyal to your pack, and deeply tied to the cosmic cycles of the full moon."}
              {quizResult === "Hybrid" && "A rare, dangerous blend of bloodlines. You refuse to submit to anyone; the ultimate predator."}
            </p>
            <button 
              onClick={resetQuiz}
              className="px-8 py-3 border border-red-700 text-red-500 hover:bg-red-700 hover:text-white uppercase text-[10px] tracking-widest font-bold transition-all cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;