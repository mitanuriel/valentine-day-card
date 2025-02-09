import { ValentineCard } from "@/components/valentine/ValentineCard";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="w-full flex flex-col items-center justify-center space-y-6">
        {/* GIF */}
        <img 
          src="https://tenor.com/bVkhJ.gif" 
      
          className="w-64 h-64 object-cover rounded-lg"
        />

        {/* Valentine Card */}
        <ValentineCard />
      </div>
    </main>
  );
};

export default Index;
