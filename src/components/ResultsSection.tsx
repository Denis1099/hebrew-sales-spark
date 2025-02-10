
import { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ end, duration = 2000, prefix = '', suffix = '', shouldAnimate = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

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
  }, [end, duration, shouldAnimate]);

  return (
    <span className="animate-number-flip">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const ResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            observer.disconnect(); // Ensure animation only happens once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-10 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">שביעות רצון<br />לקוחות</h3>
            <p className="text-4xl font-bold text-accent">
              <div className="flex flex-row-reverse items-center justify-center">
                <span dir="ltr">
                  <AnimatedNumber end={100} suffix="%" shouldAnimate={isVisible} />
                </span>
              </div>
            </p>
            <p className="mt-4 text-gray-600">שביעות רצון מלאה</p>
          </div>

          <div className="text-center p-10 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">שיפור באחוזי<br />סגירה</h3>
            <p className="text-4xl font-bold text-accent">
              <div className="flex flex-row-reverse items-center justify-center">
                <span dir="ltr">
                  <AnimatedNumber end={30} prefix="+" suffix="%" shouldAnimate={isVisible} />
                </span>
              </div>
            </p>
            <p className="mt-4 text-gray-600">בממוצע אצל הלקוחות שלנו</p>
          </div>
          
          <div className="text-center p-10 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">הכנסות נוספות<br />ללקוחות</h3>
            <p className="text-4xl font-bold text-accent">
              <div className="flex flex-row-reverse items-center justify-center">
                <span dir="ltr">
                  <AnimatedNumber end={150} prefix="+" suffix="%" shouldAnimate={isVisible} />
                </span>
              </div>
            </p>
            <p className="mt-4 text-gray-600">בממוצע בהכנסות העסק</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
