import React from "react";
import { ValentineHeader } from "./ValentineHeader";

export const ValentineCard: React.FC = () => {
  return (
    <article className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-4">
          <ValentineHeader
            icon="https://cdn.builder.io/api/v1/image/assets/139103812b5a4a2380993cde243e76c0/399fa2993c34cd114ad48706d77b311d518c37b984add3a6314992862213bb28"
            title="Valentine Icons set"
          />
          <h1 className="text-2xl font-bold text-gray-900">Be My valentine?</h1>
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