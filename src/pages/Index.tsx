import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import ResultsSection from "@/components/ResultsSection";
import { MessageCircle, ClipboardList, Target, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-noto" dir="rtl">
      {/* Hero Section */}
      <section className="pt-10 pb-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Content Side */}
            <div className="flex-1 space-y-6 text-center">
              <div className="text-accent text-xl font-bold">
                 ניר בינימין מציג:
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                רצים אל עבר אחוזי סגירה גבוהים יותר
              </h1>
              <h2 className="text-2xl font-extrabold">
                בין אם אתם רק מתחילים או בעלי ניסיון רב שנים, שיטה זו תעניק לכם את הכלים לחדד את כישוריכם ולשפר את התוצאות שלכם.
              </h2>
              <p className="text-lg text-text">
                אימון מכירות אישי ומקצועי ברמה הגבוהה ביותר: הצטרפו עכשיו והתחילו למכור יותר.
              </p>
              <div className="max-w-2xl mx-auto">
                <ConsultationForm isCompact={true} />
              </div>
            </div>
            
            {/* Image Side */}
            <div className="flex-1 md:w-1/3 relative">
              <div className="relative w-96 h-96 mx-auto">
                <img 
                  srcSet="/lovable-uploads/55cc536e-3a1e-440c-af10-52c5caea543d-800x800.png 800w,
                         /lovable-uploads/55cc536e-3a1e-440c-af10-52c5caea543d-600x600.png 600w,
                         /lovable-uploads/55cc536e-3a1e-440c-af10-52c5caea543d-400x400.png 400w"
                  sizes="(min-width: 1024px) 800px,
                         (min-width: 768px) 600px,
                         400px"
                  src="/lovable-uploads/55cc536e-3a1e-440c-af10-52c5caea543d.png"
                  alt="Professional mentor"
                  className="w-full h-full object-cover border-4 border-primary/30 rounded-2xl transition-all duration-300 hover:border-primary hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Moved up */}
      <ResultsSection />

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
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
      <section id="about-section" className="py-20 bg-white/50">
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

      {/* Closing Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-primary">הגיע הזמן להפסיק לפחד ממכירות ולהתחיל למכור יותר!</h2>
            <p className="text-xl text-accent font-bold">צרו קשר עוד היום ונתחיל במסע שלכם להצלחה במכירות!</p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90 shadow-lg flex items-center justify-center"
          onClick={() => {/* WhatsApp link will be added later */}}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;