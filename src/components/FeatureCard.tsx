
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-center">
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-extrabold mb-2 text-center text-primary">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};
