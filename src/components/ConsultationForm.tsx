import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
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
    <form onSubmit={handleSubmit} className="w-full space-y-4" dir="rtl">
      <div className={`space-y-3 ${isCompact ? 'md:space-y-0 md:flex md:gap-3' : ''}`}>
        <Input
          type="text"
          placeholder="שם מלא"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="text-right rounded-full shadow-sm"
        />
        <Input
          type="tel"
          placeholder="טלפון"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="text-right rounded-full shadow-sm"
        />
        {!isCompact && (
          <Textarea
            placeholder="קצת על עצמך.."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right min-h-[100px]"
          />
        )}
      </div>
      <div className="flex gap-3">
        <Button type="submit" className="w-full bg-[#C41B7E] hover:bg-[#A01568] text-white font-bold rounded-full">
          בוא נדבר!
        </Button>
        <Button type="button" className="w-full bg-[#5AADE5] hover:bg-[#4089B8] text-white font-bold rounded-full">
          אני רוצה פרטים נוספים
        </Button>
      </div>
    </form>
  );
};