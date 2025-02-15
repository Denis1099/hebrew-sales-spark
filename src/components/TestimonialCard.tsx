import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <article dir="rtl" className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row items-start">
        <div className="shrink-0 md:ml-6">
          <img
            src={imageUrl}
            alt={`תמונה של ${name}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
          />
        </div>
        <div className="flex-1 space-y-4 mt-6 md:mt-0">
          <div className="text-lg text-gray-700">{content}</div>
          <div>
            <div className="font-bold text-primary">{name}</div>
            <div className="text-sm text-accent">
              {role}, {company}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};