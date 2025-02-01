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
    email: "",
    company: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "!תודה על פנייתך",
      description: ".ניצור איתך קשר בהקדם",
    });
    setFormData({ name: "", phone: "", email: "", company: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4" dir="rtl">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="שם מלא"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="text-right"
        />
        <Input
          type="tel"
          placeholder="טלפון"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="text-right"
        />
        {!isCompact && (
          <>
            <Input
              type="email"
              placeholder="אימייל"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="text-right"
            />
            <Input
              type="text"
              placeholder="שם החברה"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="text-right"
            />
          </>
        )}
      </div>
      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
        קבע שיחת ייעוץ
      </Button>
    </form>
  );
};