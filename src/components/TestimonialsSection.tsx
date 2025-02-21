import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCallback, useState, useEffect } from "react";

const testimonials = [
  {
    name: "דניאל שעובי",
    role: "מנהל סושיאל",
    content: '"סגרתי תהליך עם לקוח ל3 חודשים, כל חודש 3,500 שקלים.. בלי השיחה עם ניר לפני לא הייתי מצליחה לסגור אותו.."',
    imageUrl: "/lovable-uploads/danielshaubi.webp"
  },
  {
    name: "גיל מאיר",
    role: "מאמן אנגלית מקצועית",
    content: '"אחרי תקופה ארוכה שחשבתי שמכירות זה נוכלות ושצריך לחרטט כדי למכור, ניר עזר לי לשנות את האמונה המגבילה הזאת, לפתח את הביטחון והתוצאות לא איחרו להגיע והתחלתי כבר לסגור עסקאות"',
    imageUrl: "/lovable-uploads/gilmaeir.webp"
  },
  {
    name: "עידו עובדיה",
    role: "מאמן מנטלי",
    content: '"אחרי שהעלתי את הקמפיין הגעתי לסדנה של ניר ולמדתי איך למנוע את ההתנגדויות מראש במקום שיבואו לי בסוף ופתאום אני סוגר יותר עסקאות"',
    imageUrl: "/lovable-uploads/idoovadya.webp"
  }
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);
  
  // Update current slide whenever carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      const slideCount = testimonials.length;
      setCurrentSlide(((selectedIndex % slideCount) + slideCount) % slideCount);
    };
    
    api.on('select', onSelect);
    api.on('settle', onSelect);
    
    // Initial selection
    onSelect();
    
    return () => {
      api.off('select', onSelect);
      api.off('settle', onSelect);
    };
  }, [api]);

  // Fixed navigation handlers for RTL mode
  const goToNext = useCallback(() => {
    if (!api) return;
    // In RTL mode, "next" means moving visually right but programmatically left
    api.scrollPrev();
  }, [api]);
  
  const goToPrev = useCallback(() => {
    if (!api) return;
    // In RTL mode, "prev" means moving visually left but programmatically right
    api.scrollNext();
  }, [api]);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto max-w-6xl px-4 relative">
        <h2 className="text-center text-3xl font-bold mb-12 text-primary">מה הם אומרים:</h2>
        
        {/* Left arrow - outward facing */}
        <div className="absolute left-0 lg:-left-6 top-1/2 mt-6 transform -translate-y-1/2 hidden md:block z-10">
          <button 
            onClick={goToPrev}
            className="h-10 w-10 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-md hover:bg-slate-50 hover:border-primary/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="הקודם"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
        </div>
        
        {/* Right arrow - outward facing */}
        <div className="absolute right-0 lg:-right-6 top-1/2 mt-6 transform -translate-y-1/2 hidden md:block z-10">
          <button 
            onClick={goToNext}
            className="h-10 w-10 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-md hover:bg-slate-50 hover:border-primary/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="הבא"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        
        <div className="overflow-hidden px-2 md:px-8">
          <Carousel
            dir="rtl"
            opts={{
              align: "center",
              loop: true,
              direction: "rtl",
              skipSnaps: false,
              dragFree: false,
              containScroll: "keepSnaps"
            }}
            className="w-full touch-pan-y"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-1">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`עבור לדף ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;