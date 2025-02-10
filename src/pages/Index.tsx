import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import { MessageCircleMore, ClipboardList, Target, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/10 font-noto" dir="rtl">
      {/* Hero Section */}
      <section className="pt-6 md:pt-8 md:pb-2 relative">
        <div className="container mx-auto px-2 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6 md:space-y-10 text-center">
              <div className="text-accent text-xl font-bold order-1">
                ניר בנימין מציג:
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight order-2">
                רצים אל עבר אחוזי סגירה גבוהים יותר
                </h1>
              
              <div className="md:hidden order-3">
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

              <h2 className="text-2xl font-extrabold order-4">
                בין אם אתם רק מתחילים או בעלי ניסיון רב שנים, שיטה זו תעניק לכם את הכלים לחדד את כישוריכם ולשפר את התוצאות שלכם.
              </h2>
              <p className="text-lg text-text order-5">
              קבלו שיחת ייעוץ אישית חינם איתי – וגלו איך להכפיל את אחוזי הסגירה שלכם.
              </p>
              <div className="max-w-2xl mx-auto order-6">
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

      {/* Results Section */}
      <ResultsSection />

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">אז איך זה נראה?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              title="אבחון העסק"
              description="אבחון ראשוני של צרכי המכירות שלך"
              Icon={ClipboardList}
            />
            <FeatureCard
              title="בניית תוכנית אישית"
              description="בניית תכנית אימון אישית ומותאמת"
              Icon={Target}
            />
            <FeatureCard
              title="ליווי להצלחה"
              description="בעזרת ליווי, הכוונה, והדרכה של טכניקות מכירה"
              Icon={LineChart}
            />
          </div>
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

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
  <Button 
    className="rounded-full w-20 h-20 bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg flex items-center justify-center"
    onClick={() => window.open("https://wa.me/972526622750", "_blank")}
  >
    <MessageCircleMore 
  className="text-white transform scale-150"
/>
  </Button>
</div>
    </div>
  );
};

export default Index;
