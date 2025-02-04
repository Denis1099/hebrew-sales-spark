import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import { Target, LineChart, ClipboardList, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-noto" dir="rtl">
      {/* Hero Section */}
      <section className="h-screen relative bg-background flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-[-73px]">
            {/* Left Side - Floating Cards */}
            <div className="flex-1 min-w-[240px] mt-auto mb-auto pl-20 flex flex-col text-right w-[549px] relative md:pl-0">
              <div className="bg-white rounded-xl shadow-[0px_100px_80px_rgba(0,0,0,0.07)] self-end w-[275px] max-w-full px-7 py-6 text-base">
                30% שיפור באחוזי הסגירה
              </div>
              <div className="bg-white rounded-xl shadow-[0px_100px_80px_rgba(0,0,0,0.07)] self-center mt-[398px] ml-[61px] w-[217px] max-w-full px-1 py-7 text-sm md:mt-10 md:ml-0">
                הגדלת רווחי העסק במאות אחוזים
              </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="flex-1 min-w-[240px] mt-auto mb-auto flex flex-col items-center justify-start w-[653px] max-w-full">
              <div className="w-full max-w-[653px] px-9 pb-10 flex flex-col items-end text-[22px] text-black text-right md:px-5">
                <div className="leading-[1.3]">
                  ניר בינימין מציג:
                </div>
                <h1 className="text-[#0B1B35] text-[70px] font-extrabold leading-[81px] mt-3.5 md:text-[40px] md:leading-[51px]">
                  רצים לעבר אחוזי סגירה גבוהים יותר
                </h1>
                <p className="leading-[29px] mt-[73px] md:mt-10">
                  שיטת אימון מוכחת שתעזור לכם להתגבר על הפחד משיחות מכירה, בין אם אתם רק מתחילים או בעלי ניסיון רב שנים, שיטה זו תעניק לכם את הכלים לחדד את כישוריכם ולשפר את התוצאות שלכם.
                </p>
              </div>
              <div className="mt-4 w-[170px] max-w-full text-lg text-white">
                <Button 
                  className="w-full rounded-[10px] bg-[#FF6600] hover:bg-[#FF6600]/90 px-3 py-3 text-center"
                >
                  לשיחת ייעוץ בחינם
                </Button>
              </div>
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
            <p className="text-xl text-accent">צרו קשר עוד היום ונתחיל במסע שלכם להצלחה במכירות!</p>
            <div className="max-w-md mx-auto">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] shadow-lg flex items-center justify-center"
          onClick={() => {/* WhatsApp link will be added later */}}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
