import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ValentineCard: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answer: "yes" | "no") => {
    setAnswered(true);
    toast({
      title: answer === "yes" ? "Yay! 💖" : "Oh no! 💔",
      description:
        answer === "yes"
          ? "Thank you for being my Valentine!"
          : "Maybe next time...",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto">
      {/* Replacing the "Cat GIF needed" div with the actual GIF */}
      <img
        src="https://media.tenor.com/Il6feLFTHyIAAAAj/cat-discord.gif"
        alt="Valentine Cat GIF"
        className="w-64 h-64 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-sugar text-valentine-red text-center">
        Will you be my Valentine?
      </h1>

      <div className="flex justify-center gap-6">
        <Button
          onClick={() => handleAnswer("yes")}
          disabled={answered}
          className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-12 py-3 rounded-md transform hover:scale-110 transition-all duration-300 hover:animate-heart-beat font-sugar text-xl"
        >
          Yes
        </Button>
        <Button
          onClick={() => handleAnswer("no")}
          disabled={answered}
          className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white px-12 py-3 rounded-md transform hover:scale-110 transition-all duration-300 hover:animate-heart-jump font-sugar text-xl"
        >
          No
        </Button>
      </div>
    </div>
  );
};
