
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
    <form onSubmit={handleSubmit} className="w-full" dir="rtl">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
        {!isCompact && (
          <Textarea
            placeholder="ספר לי קצת על העסק שלך..."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right rounded-lg bg-white/90 border-none shadow-sm min-h-[100px] resize-none"
          />
        )}
      </div>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            type="submit" 
            className="h-12 px-8 rounded-full bg-primary text-white hover:bg-primary/90"
          >
            בואו נדבר! 📥
          </Button>
          <Button 
            type="button"
            onClick={() => window.open("#", "_blank")}
            className="h-12 px-8 rounded-full bg-accent text-white hover:bg-accent/90"
          >
            הצטרפו לקבוצת הווצאפ שלנו 💬
          </Button>
        </div>
      </div>
    </form>
  );
};
