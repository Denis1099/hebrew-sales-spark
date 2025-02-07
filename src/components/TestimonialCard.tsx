
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
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
        <div className="shrink-0">
          <img
            src={imageUrl}
            alt={`תמונה של ${name}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-lg text-gray-700">{content}</p>
          <div>
            <p className="font-bold text-primary">{name}</p>
            <p className="text-sm text-accent">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
