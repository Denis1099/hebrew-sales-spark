import { Target, TrendingUp, Users, BarChart, ClipboardList, LineChart, HeartHandshake, Trophy } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import ResultsSection from "@/components/ResultsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              רצים לעבר אחוזי סגירה גבוהים
            </h1>
            <p className="text-xl text-text">
              עזרתי לעשרות בעלי עסקים לשפר את המכירות בעסק שלהם, ועכשיו אני כאן כדי לעזור גם לך!
            </p>
            <h2 className="text-2xl font-bold text-accent">
              רוצה למכור יותר ולשפר אחוזי המרה?
            </h2>
            <p className="text-lg text-text">
              הצטרף עכשיו לאימון מכירות אישי ומקצועי שיעזור לך להגיע לתוצאות
            </p>
            <div className="max-w-md mx-auto">
              <ConsultationForm isCompact={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-primary">חולמים על עסק מצליח אבל חוששים ממכירות?</h2>
              <p className="text-lg">
                בעלי עסקים רבים חוששים ממכירות ומרגישים שזה לא "מתאים" להם. הם חושבים שצריך להיות "נוכל" או אגרסיבי כדי למכור, אבל זה ממש לא נכון!
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-accent">אני אראה לך שאפשר למכור אחרת!</h3>
              <p className="text-lg">
                גם אם אתה ביישן או מופנם, או שקשה לך לדבר עם זרים בטלפון, אני אעזור לך לפתח את שריר המכירות שלך ולהצליח למכור בדרך שלך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">השלבים בפתרון הבעיה</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <FeatureCard
              title="אבחון ראשוני"
              description="אבחון ראשוני של צרכי המכירות שלך"
              Icon={ClipboardList}
            />
            <FeatureCard
              title="תכנית אישית"
              description="בניית תכנית אימון אישית ומותאמת"
              Icon={LineChart}
            />
            <FeatureCard
              title="תרגול מעשי"
              description="תרגול מעשי של טכניקות מכירה"
              Icon={Target}
            />
            <FeatureCard
              title="ליווי ותמיכה"
              description="ליווי ותמיכה אישיים"
              Icon={HeartHandshake}
            />
            <FeatureCard
              title="מעקב ושיפור"
              description="מעקב אחר תוצאות ושיפור מתמיד"
              Icon={Trophy}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">קצת על עצמי</h2>
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
            <p className="text-xl text-accent">צרו קשר עוד היום ונתחיל במסע שלכם להצלחה במכירות!</p>
            <div className="max-w-md mx-auto">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;