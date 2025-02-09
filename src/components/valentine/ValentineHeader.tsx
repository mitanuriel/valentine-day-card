import React from "react";

interface ValentineHeaderProps {
  icon: string;
  title: string;
}

export const ValentineHeader: React.FC<ValentineHeaderProps> = ({ icon, title }) => {
  return (
    <header className="flex items-center gap-3 mb-2">
      <img
        src={icon}
        alt="Valentine icon"
        className="w-6 h-6 object-contain"
        loading="lazy"
      />
      <h2 className="text-sm font-medium text-gray-600">{title}</h2>
    </header>
  );
};