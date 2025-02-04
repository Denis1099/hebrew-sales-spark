import { useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationFormProps {
  isCompact?: boolean;
}

export const ConsultationForm = ({ isCompact = false }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    about: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <Input
          placeholder="שם מלא"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="text-right rounded-full bg-white/90 border-none shadow-sm"
        />
        <Input
          placeholder="טלפון"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="text-right rounded-full bg-white/90 border-none shadow-sm"
        />
        <Input
          placeholder='דוא"ל'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="text-right rounded-full bg-white/90 border-none shadow-sm"
        />
        {!isCompact && (
          <Textarea
            placeholder="קצת על עצמך.."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right rounded-full bg-white/90 border-none shadow-sm min-h-[100px]"
          />
        )}
      </div>
      <div className="mt-4">
        <Button 
          type="submit" 
          className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
        >
          בוא נדבר!
        </Button>
      </div>
    </form>
  );
};