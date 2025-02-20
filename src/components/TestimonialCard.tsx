
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export const TestimonialCard = ({
  name,
  role,
  content,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <article dir="rtl" className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex items-start w-full md:block">
          <div className="shrink-0 md:ml-6">
            <img
              src={imageUrl}
              alt={`תמונה של ${name}`}
              className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
            />
          </div>
          <div className="mr-4 md:hidden">
            <div className="font-bold text-primary">{name}</div>
            <div className="text-sm text-accent">
              {role}
            </div>
          </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <div className="text-lg text-gray-700 mb-4 md:mb-0">{content}</div>
          <div className="hidden md:block">
            <div className="font-bold text-primary">{name}</div>
            <div className="text-sm text-accent">
              {role}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
