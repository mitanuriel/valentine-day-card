import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ValentineCard: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const { toast } = useToast();
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleAnswer = (answer: "yes" | "no") => {
    setAnswered(true);

    if (answer === "yes") {
      toast({
        title: "Yay! 💖",
        description: "Thank you for being my Valentine!",
      });

      // Celebrate - Change background color or show a GIF
      document.body.style.backgroundColor = "#ffcccb"; // Light pink background
      setTimeout(() => {
        document.body.style.backgroundColor = ""; // Reset after 3 sec
      }, 3000);
    } else {
      toast({
        title: "Oh no! 💔",
        description: "Maybe next time...",
      });
    }
  };

  const moveNoButton = () => {
    // Random position
    const x = Math.random() * 100 - 50; // Range from -50% to 50%
    const y = Math.random() * 100 - 50;

    setNoButtonStyle({
      transform: `translate(${x}px, ${y}px)`,
      transition: "transform 0.3s ease",
    });
  };

  return (
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
        {/* Yes Button - Heartbeat Animation */}
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
  );
};
