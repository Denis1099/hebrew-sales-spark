
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate phone number
      const phoneRegex = /^[\d\-+\s]+$/;
      if (!phoneRegex.test(formData.phone)) {
        toast({
          title: "שגיאה",
          description: "מספר טלפון לא תקין",
          variant: "destructive",
        });
        return;
      }

      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "!תודה על פנייתך",
        description: ".ניצור איתך קשר בהקדם",
      });
      
      // Reset form
      setFormData({ name: "", phone: "", about: "" });
      
    } catch (error) {
      toast({
        title: "שגיאה",
        description: ".אירעה שגיאה בשליחת הטופס. אנא נסה שוב",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" dir="rtl">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="שם מלא"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            minLength={2}
            className="text-right rounded-lg bg-white/90 border-none shadow-sm h-14 text-lg px-6 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
          <Input
            type="tel"
            placeholder="טלפון"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="text-right rounded-lg bg-white/90 border-none shadow-sm h-14 text-lg px-6 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
        </div>
        {!isCompact && (
          <Textarea
            placeholder="ספר לי קצת על העסק שלך..."
            value={formData.about}
            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            className="text-right rounded-lg bg-white/90 border-none shadow-sm min-h-[100px] resize-none text-md px-6 focus:ring-2 focus:ring-primary/50 focus:shadow-lg transition-all"
          />
        )}
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button 
            type="submit" 
            className="h-14 px-10 rounded-lg bg-primary text-white hover:bg-primary/90 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? '...שולח' : 'בואו נדבר! 📥'}
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
