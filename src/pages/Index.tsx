import { Target, TrendingUp, Users, BarChart } from "lucide-react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import ResultsSection from "@/components/ResultsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10 font-heebo" dir="rtl">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-secondary/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-textDark">
              הגדל את המכירות שלך
              <br />
              <span className="text-primary">עם אימון מכירות מקצועי</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              למד טכניקות מכירה מוכחות ושפר את הביצועים שלך עם תוכנית אימון אישית
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Business Meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <ResultsSection />

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
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
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-secondary/60 backdrop-blur-lg" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
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
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-xl" />
        <div className="container mx-auto px-4 max-w-2xl relative">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-primary">
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