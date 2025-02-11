import { ConsultationForm } from "@/components/ConsultationForm";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/10 font-noto" dir="rtl">
      {/* Hero Section */}
      <section className="min-h-screen flex items-start pt-16 relative bg-secondary/10">
        <div className="container mx-auto px-2 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-12 text-center">
              <div className="text-accent text-xl font-bold order-1 mb-4">
                ניר בנימין מציג:
              </div>
              <h1 className="text-3xl md:text-[3.5rem] font-extrabold text-primary leading-[1.2] order-2 mb-8 px-4">
                רצים אל עבר אחוזי סגירה גבוהים יותר
              </h1>
              
              <div className="md:hidden order-3 mb-12">
                <div className="relative w-72 h-72 mx-auto">
                  <picture>
                    <source media="(min-width: 768px)" srcSet="/lovable-uploads/sales-hero-tablet.webp" />
                    <img 
                      src="/lovable-uploads/sales-hero-mobile.webp"
                      alt="תמונה של ניר בנימין"
                      className="w-full h-full object-cover border-4 border-primary/30 rounded-2xl transition-all duration-300 hover:border-primary hover:scale-105"
                    />
                  </picture>
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-extrabold order-4 mb-12 max-w-4xl mx-auto px-4">
                בין אם אתם רק מתחילים או בעלי ניסיון רב שנים, שיטה זו תעניק לכם את הכלים לחדד את כישוריכם ולשפר את התוצאות שלכם.
              </h2>
              <p className="text-base md:text-lg text-text order-5 mb-14 max-w-3xl mx-auto px-6">
                קבלו שיחת ייעוץ אישית חינם איתי – וגלו איך להכפיל את אחוזי הסגירה שלכם.
              </p>
              <div className="max-w-2xl mx-auto order-6 mb-12 px-4">
                <ConsultationForm isCompact={true} />
              </div>
            </div>
            
            <div className="hidden md:block flex-1 md:w-1/3 relative">
              <div className="relative w-[400px] h-[400px] mx-auto">
                <picture>
                  <source media="(min-width: 1024px)" srcSet="/lovable-uploads/sales-hero-desktop.webp" />
                  <source media="(min-width: 768px)" srcSet="/lovable-uploads/sales-hero-tablet.webp" />
                  <img 
                    src="/lovable-uploads/sales-hero-mobile.webp"
                    alt="תמונה של ניר בנימין"
                    className="w-full h-full object-cover border-4 border-primary/30 rounded-2xl transition-all duration-300 hover:border-primary hover:scale-105"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Results Section - Reduced spacing and matched bg color */}
      <section className="py-4 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">התוצאות מדברות בעד עצמן</h2>
          <ResultsSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">קצת על עצמי</h2>
            <div className="space-y-6 text-lg">
              <p>
                אני ניר בנימין, ואני עוזר לבעלי עסקים לפתח את שריר המכירות בעסק שלהם.
              </p>
              <p>
                גם אני הייתי פעם ביישן ומופנם, וחשבתי שמכירות זה לא בשבילי. אבל החלטתי לאתגר את עצמי, ועברתי 5 שנים של עבודה במוקדי מכירות שונים, שם למדתי את כל רזי המכירה.
              </p>
              <p>
                ראיתי שאני מצליח למכור להרבה אנשים, אבל עדיין הרגשתי שאני יכול יותר. החלטתי לצאת לדרך עצמאית, והיום אני עוזר לבעלי עסקים למכור יותר ולשפר את אחוזי ההמרה שלהם.
              </p>
              <p>
                אני גם רץ מרתונים! הריצה עוזרת לי בעסק במספר דרכים: הצבת מטרות, נחישות, סבלנות, הסתכלות על הדרך ולא על התוצאה ותמיד לחפש דרכים להשתפר. את המנטליות הזו אני משריש גם ללקוחות שלי.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Closing Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-primary">הגיע הזמן להפסיק לפחד ממכירות ולהתחיל למכור יותר!</h2>
            <p className="text-xl text-accent font-bold">צרו קשר עוד היום ונתחיל במסע שלכם להצלחה במכירות!</p>
            <div className="max-w-md mx-auto">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button - Made more mobile friendly */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          className="rounded-full w-16 h-16 md:w-20 md:h-20 bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg flex items-center justify-center"
          onClick={() => window.open("https://wa.me/972526622750", "_blank")}
        >
          <MessageCircleMore 
            className="text-white transform scale-125 md:scale-150"
          />
        </Button>
      </div>
    </div>
  );
};

export default Index;
