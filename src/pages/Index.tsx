import { ConsultationForm } from "@/components/ConsultationForm";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/10 font-noto" dir="rtl">
      {/* Hero Section */}
      <section className="min-h-screen flex items-start pt-6 md:pt-12 relative bg-secondary/10">
        <div className="container mx-auto px-2 md:px-14">
          <div className="flex flex-col md:flex-row items-center gap-0">
            <div className="flex-1 space-y-6 md:space-y-12 text-center">
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Results Section - Reduced spacing and matched bg color */}
      <section className="py-0 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">התוצאות מדברות בעד עצמן</h2>
          <ResultsSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-10 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">קצת על עצמי</h2>
            <div className="space-y-6 text-lg">
              <p className="opacity-0 animate-fade-in [animation-delay:200ms] [animation-play-state:paused] [.visible>&]:animate-running">
                הרבה בעלי עסקים פותחים עסק מתוך תשוקה אמיתית לעזור לאנשים, אבל מהר מאוד מגלים שמכירות הן חלק בלתי נפרד מהמשוואה. בלי מכירות, אין עסק. ואם אתם מרגישים שאתם נרתעים ממכירות, חוששים משיחות טלפון, או פשוט לא מצליחים לסגור עסקאות – <strong>אתם לא לבד</strong> 🎯
              </p>

              <p className="opacity-0 animate-fade-in [animation-delay:400ms] [animation-play-state:paused] [.visible>&]:animate-running">
                שמי ניר בנימין, ואני עוזר לבעלי עסקים לפתח את "שריר המכירות" שלהם, כדי שיוכלו למכור יותר, לשפר את אחוזי ההמרה, וליהנות מהעסק שבנו 👋
              </p>

              <p className="opacity-0 animate-fade-in [animation-delay:600ms] [animation-play-state:paused] [.visible>&]:animate-running">
                גם אני הייתי פעם במקום הזה. בתור ילד ביישן ומופנם, חשבתי שמכירות זה תחום ששמור רק ל"אנשי מכירות" מוחצנים וכריזמטיים. אבל החלטתי לאתגר את עצמי. עברתי מסע של 5 שנים במוקדי מכירות שונים – למדתי את כל טכניקות המכירה, התנסיתי בשיחות עם מאות לקוחות, והוכחתי לעצמי שאפשר למכור גם בלי להיות "נוכל" או אגרסיבי. <strong>למדתי שאפשר למכור מתוך מקום של עזרה אמיתית</strong> 🌱
              </p>

              <p className="opacity-0 animate-fade-in [animation-delay:800ms] [animation-play-state:paused] [.visible>&]:animate-running">
                במהלך השנים, ראיתי שאני מצליח למכור, אבל תמיד הרגשתי שיש לי תקרת זכוכית. ידעתי שאני יכול יותר. האימונים שלי למרתון ריגה, וההתמדה שנדרשה כדי לסיים אותו, חיזקו אצלי את ההבנה הזו. הבנתי שאני חייב לצאת לדרך עצמאית ולעזור לאחרים לממש את הפוטנציאל המלא שלהם במכירות 🎯
              </p>

              <p className="opacity-0 animate-fade-in [animation-delay:1000ms] [animation-play-state:paused] [.visible>&]:animate-running">
                הריצה לימדה אותי על הצבת מטרות, נחישות, סבלנות, והתמקדות בתהליך – ולא רק בתוצאה. את המנטליות הזו, של התמדה ושיפור מתמיד, אני מביא גם לאימון המכירות שלי 🏃‍♂️
              </p>

              <p className="opacity-0 animate-fade-in [animation-delay:1200ms] [animation-play-state:paused] [.visible>&]:animate-running">
                יצאתי לדרך עצמאית מתוך תשוקה אמיתית לעזור לבעלי עסקים להתגבר על הפחד ממכירות, ללמוד למכור בדרך שמרגישה להם נכונה, ולהפוך את העסק שלהם להצלחה. <strong>אני מאמין שכל אחד יכול למכור</strong>, גם אם הוא ביישן או מופנם, ושהמפתח הוא בגישה הנכונה ובכלים הנכונים! 💪
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
      <section className="py-10 md:py-20 bg-secondary/10">
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
