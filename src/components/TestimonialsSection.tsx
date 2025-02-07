
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "דן כהן",
    role: "מנכ״ל",
    company: "טכנולוגיות עתיד",
    content: "ההדרכה של ניר שינתה לחלוטין את הגישה שלי למכירות. תוך חודשיים הצלחנו להגדיל את המכירות שלנו ב-40%. הגישה המקצועית והליווי הצמוד עשו את כל ההבדל.",
    imageUrl: "/lovable-uploads/testimonial1.webp"
  },
  {
    name: "מיכל לוי",
    role: "סמנכ״לית מכירות",
    company: "פתרונות עסקיים",
    content: "אחרי שנים של התמודדות עם אתגרי מכירות, ניר עזר לי לפתח את הביטחון והכלים הנכונים. התוצאות לא איחרו להגיע - שיפור משמעותי באחוזי הסגירה ובאיכות השיחות.",
    imageUrl: "/lovable-uploads/testimonial2.webp"
  },
  {
    name: "יוסי אברהם",
    role: "בעלים",
    company: "שירותי ייעוץ",
    content: "הליווי של ניר הוא השקעה שמחזירה את עצמה במהירות. קיבלתי כלים פרקטיים שעזרו לי להתמודד עם התנגדויות ולסגור יותר עסקאות. ממליץ בחום!",
    imageUrl: "/lovable-uploads/testimonial3.webp"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">מה אומרים עליי?</h2>
        <div className="grid gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
