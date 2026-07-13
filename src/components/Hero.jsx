import { useState } from "react";

function Hero() {

  const messages = [
    "Welcome!",
    "Good Luck Srishti ❤️",
    "Keep Practicing 💪",
    "You Will Crack Placements 🚀"
  ];

  const [index, setIndex] = useState(0);

  return (
    <main className="hero">

      <h1>Crack Your Dream Placement 🚀</h1>

      <p>{messages[index]}</p>

      <button onClick={() => setIndex((index + 1) % messages.length)}>
        Get Started
      </button>
      
      <button onClick={() => setIndex(0)}>
        Reset
      </button>

    </main>
  );
}

export default Hero;
