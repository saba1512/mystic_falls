import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll("button, a, .cursor-pointer");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", handleHover);
      t.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovered ? 2.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-red-600/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovered ? 1.5 : 1})`,
          opacity: isHovered ? 0.3 : 1,
        }}
      />
    </>
  );
};

export default Cursor;