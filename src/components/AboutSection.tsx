import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, options);

    const paragraphs = document.querySelectorAll('.fade-in-p');
    paragraphs.forEach((p, index) => {
      (p as HTMLElement).style.transitionDelay = `${index * 200}ms`;
      observer.observe(p);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="about-section" className="py-10 md:py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-center" id="about-content">
          <h2 className="text-3xl font-bold text-primary mb-12">קצת על עצמי</h2>
          <div className="space-y-6 text-lg">
            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
              הרבה בעלי עסקים פותחים עסק מתוך תשוקה אמיתית לעזור לאנשים, אבל מהר מאוד מגלים שמכירות הן חלק בלתי נפרד מהמשוואה. בלי מכירות, אין עסק. ואם אתם מרגישים שאתם נרתעים ממכירות, חוששים משיחות טלפון, או פשוט לא מצליחים לסגור עסקאות – <strong>אתם לא לבד.</strong> 
            </p>

            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
              שמי ניר בנימין, ואני עוזר לבעלי עסקים לפתח את "שריר המכירות" שלהם, כדי שיוכלו למכור יותר, לשפר את אחוזי ההמרה, וליהנות מהעסק שבנו 📈
            </p>

            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
  גם אני הייתי פעם במקום הזה. בתור ילד ביישן ומופנם, חשבתי שמכירות זה תחום ששמור רק ל"אנשי מכירות" מוחצנים וכריזמטיים. אבל החלטתי לאתגר את עצמי. עברתי מסע של 5 שנים במוקדי מכירות שונים – למדתי את כל טכניקות המכירה, התנסיתי בשיחות עם מאות לקוחות, והוכחתי לעצמי שאפשר למכור גם בלי להיות "נוכל" או אגרסיבי.
  <br />
  <strong>למדתי שאפשר למכור מתוך מקום של עזרה אמיתית</strong> 
</p>

            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
              במהלך השנים, ראיתי שאני מצליח למכור, אבל תמיד הרגשתי שיש לי תקרת זכוכית. ידעתי שאני יכול יותר. האימונים שלי למרתון ריגה, וההתמדה שנדרשה כדי לסיים אותו, חיזקו אצלי את ההבנה הזו. הבנתי שאני חייב לצאת לדרך עצמאית ולעזור לאחרים לממש את הפוטנציאל המלא שלהם במכירות 🎯
            </p>

            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
              הריצה לימדה אותי על הצבת מטרות, נחישות, סבלנות, והתמקדות בתהליך – ולא רק בתוצאה. את המנטליות הזו, של התמדה ושיפור מתמיד, אני מביא גם לאימון המכירות שלי 
            </p>

            <p className="fade-in-p opacity-0 translate-y-10 transition-all duration-700 ease-out">
              יצאתי לדרך עצמאית מתוך תשוקה אמיתית לעזור לבעלי עסקים להתגבר על הפחד ממכירות, ללמוד למכור בדרך שמרגישה להם נכונה, ולהפוך את העסק שלהם להצלחה. <strong>אני מאמין שכל אחד יכול למכור</strong>, גם אם הוא ביישן או מופנם, ושהמפתח הוא בגישה הנכונה ובכלים הנכונים! 💪🏼
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;