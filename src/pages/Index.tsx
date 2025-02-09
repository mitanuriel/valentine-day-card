import { ValentineCard } from "@/components/valentine/ValentineCard";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="w-full max-w-4xl mx-auto">
        <ValentineCard />
      </div>
    </main>
  );
};

export default Index;