
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

interface TimelineStep {
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    title: "השארת פרטים",
    description: "מלא את הטופס עם פרטי ההתקשרות שלך ואחזור אליך בהקדם האפשרי",
  },
  {
    title: "שיחת אבחון",
    description: "נבין יחד את האתגרים העסקיים שלך ונגדיר יעדים ברורים",
  },
  {
    title: "תכנית פעולה",
    description: "תקבל תובנות מעשיות ואסטרטגיה מותאמת אישית להגדלת המכירות",
  },
  {
    title: "יישום והצלחה",
    description: "התחל ליישם את הכלים החדשים ותראה תוצאות מיידיות בעסק",
  },
];

const TimelineSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          ?אז איך זה עובד
        </h2>
        <div
          ref={timelineRef}
          className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:mr-7 before:w-0.5 before:bg-primary/30"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="timeline-item opacity-0 translate-y-4 transition-all duration-700 mb-12 relative flex gap-8 items-start"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
