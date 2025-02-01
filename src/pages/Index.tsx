import { Target, TrendingUp, Users, BarChart } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10 font-heebo" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-textDark">
              הגדל את המכירות שלך
              <br />
              <span className="text-primary">עם אימון מכירות מקצועי</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              למד טכניקות מכירה מוכחות ושפר את הביצועים שלך עם תוכנית אימון אישית
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">
              קבע שיחת ייעוץ חינם
            </h2>
            <ConsultationForm isCompact />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            איך נעזור לך להצליח
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="שיפור ביצועים"
              description="טכניקות מוכחות להגדלת אחוזי סגירה ומכירות"
              Icon={TrendingUp}
            />
            <FeatureCard
              title="אסטרטגיית מכירות"
              description="בניית תהליך מכירה אפקטיבי ומותאם אישית"
              Icon={Target}
            />
            <FeatureCard
              title="פיתוח צוות"
              description="הכשרת צוות המכירות שלך לביצועים מקסימליים"
              Icon={Users}
            />
            <FeatureCard
              title="מדידה ובקרה"
              description="כלים למעקב והערכת ביצועים"
              Icon={BarChart}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            מה הלקוחות אומרים
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="דני כהן"
              role="מנהל מכירות"
              company="טכנולוגיות ABC"
              content="האימון שינה לחלוטין את הגישה שלי למכירות. תוך 3 חודשים הכפלנו את המכירות החודשיות."
            />
            <TestimonialCard
              name="מיכל לוי"
              role="סמנכ״לית מכירות"
              company="חברת XYZ"
              content="הכלים והטכניקות שלמדתי עזרו לי לבנות צוות מכירות חזק ומקצועי."
            />
            <TestimonialCard
              name="יוסי אברהם"
              role="יזם"
              company="סטארט-אפ חדשני"
              content="ההשקעה באימון החזירה את עצמה תוך חודשיים. ממליץ בחום!"
            />
          </div>
        </div>
      </section>

      {/* Full Consultation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            מוכן להתחיל? צור קשר עכשיו
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;