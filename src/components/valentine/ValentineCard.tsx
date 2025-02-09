import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ValentineCard: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const { toast } = useToast();
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const flashBackgroundColors = () => {
    const colors = ["#ff9999", "#ff66b2", "#ff5050", "#ffb366", "#ffcc99"];
    let i = 0;

    const interval = setInterval(() => {
      document.body.style.backgroundColor = colors[i];
      i = (i + 1) % colors.length;
    }, 300); // Change color every 300ms

    setTimeout(() => {
      clearInterval(interval);
      document.body.style.backgroundColor = "#ffe6e6"; // Set final color
    }, 3000); // Stop flashing after 3 seconds
  };

  const createFallingHearts = () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.top = "-50px";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.fontSize = `${Math.random() * 30 + 10}px`;
      heart.style.opacity = Math.random().toString();
      heart.style.animation = `falling-heart ${Math.random() * 2 + 3}s linear infinite`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  };

  const handleAnswer = (answer: "yes" | "no") => {
    setAnswered(true);

    if (answer === "yes") {
      toast({
        title: "Yay! 💖",
        description: "Thank you for being my Valentine!",
      });

      flashBackgroundColors();
      createFallingHearts();
    } else {
      toast({
        title: "Oh no! 💔",
        description: "Maybe next time...",
      });
    }
  };

  const moveNoButton = () => {
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    setNoButtonStyle({
      transform: `translate(${x}px, ${y}px)`,
      transition: "transform 0.3s ease",
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes falling-heart {
            0% { transform: translateY(0px); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}
      </style>

      <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto">
        <img
          src="https://media.tenor.com/Il6feLFTHyIAAAAj/cat-discord.gif"
          alt="Valentine Cat GIF"
          className="w-64 h-64 object-cover rounded-lg"
        />

        <h1 className="text-5xl text-valentine-red text-center font-[Sacramento]">
          Will you be my Valentine?
        </h1>

        <div className="flex justify-center gap-6">
          {/* Yes Button - Flashes background & falling hearts */}
          <Button
            onClick={() => handleAnswer("yes")}
            disabled={answered}
            className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-12 py-3 rounded-md transform hover:scale-110 transition-all duration-300 animate-pulse font-[Sacramento] text-xl"
          >
            Yes
          </Button>

          {/* No Button - Moves when hovered */}
          <Button
            onClick={() => handleAnswer("no")}
            onMouseEnter={moveNoButton}
            style={noButtonStyle}
            disabled={answered}
            className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-12 py-3 rounded-md font-[Sacramento] text-xl relative"
          >
            No
          </Button>
        </div>
      </div>
    </>
  );
};
