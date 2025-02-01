import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-right">{title}</h3>
      <p className="text-gray-600 text-right">{description}</p>
    </div>
  );
};