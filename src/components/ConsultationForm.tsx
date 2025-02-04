import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  isCompact?: boolean;
}

export const ConsultationForm = ({ isCompact = false }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    about: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "!תודה על פנייתך",
      description: ".ניצור איתך קשר בהקדם",
    });
    setFormData({ name: "", phone: "", about: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" dir="rtl">
      <div className={`space-y-4 ${isCompact ? 'md:space-y-0 md:flex md:gap-4' : ''}`}>
        <Input
          type="text"
          placeholder="שם מלא"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="text-right rounded-full bg-white/90 border-none shadow-sm"
        />
        <Input
          type="tel"
          placeholder="טלפון"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="text-right rounded-full bg-white/90 border-none shadow-sm"
        />
        {!isCompact && (
          <textarea
            placeholder="קצת על עצמך.."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right min-h-[100px] rounded-xl"
          />
        )}
      </div>
      <div className="flex gap-4 mt-4">
        <Button 
          type="button" 
          onClick={() => {}} 
          className="flex-1 rounded-full bg-accent text-white hover:bg-accent/90"
        >
          אני רוצה פרטים נוספים
        </Button>
        <Button 
          type="submit" 
          className="flex-1 rounded-full bg-primary text-white hover:bg-primary/90"
        >
          בוא נדבר!
        </Button>
      </div>
    </form>
  );
};