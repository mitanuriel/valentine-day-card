
import { ValentineCard } from "@/components/valentine/ValentineCard";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFDEE2] p-4">
       <img 
          src="https://tenor.com/bVkhJ.gif" 
          alt="Valentine GIF" 
          className="w-64 h-64 object-cover mx-auto mb-4"
        />
      <ValentineCard />
    </main>
  );
};

export default Index;
