import { useEffect, useState } from 'react';

const AnimatedNumber = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="animate-number-flip">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">שיפור באחוזי סגירה</h3>
            <p className="text-4xl font-bold text-accent">
            <div className="flex flex-row-reverse items-center justify-center">
  <span dir="ltr">
    <AnimatedNumber end={30} prefix="+" suffix="%" />
  </span>
</div>
            </p>
            <p className="mt-2 text-gray-600">בממוצע אצל הלקוחות שלנו</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">הכנסות נוספות ללקוחות</h3>
            <p className="text-4xl font-bold text-accent">
            <div className="flex flex-row-reverse items-center justify-center">
  <span dir="ltr">
    <AnimatedNumber end={100} prefix="+" suffix="%" />
  </span>
</div>
            </p>
            <p className="mt-2 text-gray-600">בממוצע בהכנסות העסק</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;