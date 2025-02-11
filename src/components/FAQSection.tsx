
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "מה קורה בשיחת ההיכרות?",
      answer: "אלמד להכיר את העסק שלך, אבין האם אתה מבצע את המכירות בעצמך או שיש לך צוות, ואנתח את אחוזי ההמרה הנוכחיים שלך. לאחר השיחה, תקבל תכנית אסטרטגית שתעזור לך לשפר את אחוזי ההמרה באופן עצמאי."
    },
    {
      question: "כמה זמן נמשכת שיחת ההיכרות?",
      answer: "השיחה נמשכת בין 10 ל-30 דקות, תלוי בקצב השיחה. זוהי שיחה קלילה שמטרתה להבין את צרכי העסק שלך."
    },
    {
      question: "האם עליי להתכונן לשיחה?",
      answer: "למרות שזה יכול לעזור אם יש לך נתונים טכניים על המכירות (כמות לידים, אחוזי המרה, כמות שיחות מכירה), זה לא הכרחי. נוכל לעבוד יחד גם אם אין לך את המידע הזה עדיין."
    },
    {
      question: "מה אם אני רק מתחיל ואין לי בכלל לידים?",
      answer: "השיחה מתאימה לעסקים בכל השלבים. אם אתה רק מתחיל, אספק לך אסטרטגיות המתאימות לשלב העסקי שלך ואלמד אותך טכניקות לפנייה קרה."
    },
    {
      question: "מה ההבדל בין זה לבין 'פגישת הפיצוח'?",
      answer: "שיחת ההיכרות היא שיחה ראשונית וקלילה יותר שמטרתה להבין את הצרכים והאתגרים שלך. פגישת הפיצוח היא התייעצות מעמיקה יותר שבה נצלול לפרטים הספציפיים של העסק שלך ואסטרטגיות המכירה."
    }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">שאלות נפוצות</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-lg px-4 md:px-6 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-base md:text-lg font-bold text-right hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base md:text-lg text-gray-600 leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
