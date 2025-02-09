
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ValentineCard: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswered(true);
    toast({
      title: answer === 'yes' ? "Yay! 💖" : "Oh no! 💔",
      description: answer === 'yes' 
        ? "Thank you for being my Valentine!" 
        : "Maybe next time...",
    });
  };

  return (
    <article className="bg-valentine-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-sugar text-valentine-red text-center">
            Will you be my Valentine?
          </h1>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/139103812b5a4a2380993cde243e76c0/b2d667d11d05af97a9fb78683d3a2291194b60f681c6e7bf9dfb361106270763"
              alt="Valentine decoration"
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
          </div>
          
          <img
            src="https://cdn.builder.io/api/v1/image/assets/139103812b5a4a2380993cde243e76c0/eb1d25092b1031301ecd5436a4b6d9b5df10c8819bf456eefec2550f947c5da0"
            alt="Valentine illustration"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => handleAnswer('yes')}
            disabled={answered}
            className="bg-valentine-red hover:bg-valentine-red/90 text-valentine-white rounded-full px-8 py-4 transform hover:scale-110 transition-all duration-300 hover:animate-heart-beat font-sugar text-xl"
          >
            Yes 💖
          </Button>
          <Button
            onClick={() => handleAnswer('no')}
            disabled={answered}
            className="bg-valentine-blue-light hover:bg-valentine-blue-light/90 text-valentine-white rounded-full px-8 py-4 transform hover:scale-110 transition-all duration-300 hover:animate-heart-jump font-sugar text-xl"
          >
            No 💔
          </Button>
        </div>
      </div>
      
      <footer className="mt-6 text-center">
        <a 
          href="https://www.nickelfox.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          www.nickelfox.com
        </a>
      </footer>
    </article>
  );
};
