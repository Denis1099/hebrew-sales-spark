interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-right">
      <p className="text-gray-700 mb-4">{content}</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};