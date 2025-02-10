
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
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="שם מלא"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="text-right rounded-lg bg-white/90 border-none shadow-sm h-14 text-lg px-4 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
          <Input
            type="tel"
            placeholder="טלפון"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="text-right rounded-lg bg-white/90 border-none shadow-sm h-14 text-lg px-4 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
        </div>
        {!isCompact && (
          <Textarea
            placeholder="ספר לי קצת על העסק שלך..."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right rounded-lg bg-white/90 border-none shadow-sm min-h-[100px] resize-none text-md px-4 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
        )}
      </div>
      <div className="mt-6">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            type="submit" 
            className="h-14 px-10 rounded-lg bg-primary text-white hover:bg-primary/90 text-lg"
          >
            בואו נדבר! 📥
          </Button>
          <Button 
            type="button"
            onClick={() => window.open("https://chat.whatsapp.com/LTZJPS8vUqo88VPCBQVeXQ", "_blank")}
            className="h-14 px-10 rounded-lg bg-accent text-white hover:bg-accent/90 text-lg"
          >
            הצטרפו לקבוצת הווצאפ שלנו 💬
          </Button>
        </div>
      </div>
    </form>
  );
};
