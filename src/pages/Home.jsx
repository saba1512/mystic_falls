import Hero from "../components/Hero";
import Artifacts from "../components/Artifacts"; // დაამატე ეს იმპორტი
import Factions from "../components/Factions";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <main>
      <Hero />
      <Artifacts /> 
      <Factions />
      <Timeline />
      
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[1em] text-gray-700">
          Created for the fans of the night
        </p>
      </footer>
    </main>
  );
};

export default Home;