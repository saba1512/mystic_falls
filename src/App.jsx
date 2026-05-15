import Header from "./components/Header";
import Footer from "./components/Footer"; // დაამატე ეს
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import { Routes, Route } from 'react-router-dom';
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Cursor /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;