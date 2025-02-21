
import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCallback, useState } from "react";

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

const youtubeVideos = [
  {
    id: "f6qwLgjYohs",
    title: "סרטון ראשון"
  },
  {
    id: "vrclJHA2Iak",
    title: "סרטון שני"
  },
  {
    id: "Tm4A0GkPH0A",
    title: "סרטון שלישי"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelect = useCallback((api: any) => {
    if (!api) return;
    
    // Get the normalized index considering the loop
    const selectedIndex = api.selectedScrollSnap();
    const count = api.scrollSnapList().length;
    
    // Normalize the index to match our testimonials array length
    const normalizedIndex = ((selectedIndex % count) + count) % count;
    setCurrentSlide(normalizedIndex);
  }, []);

  return (
    <section dir="rtl" className="py-14 md:py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          מה אומרים עליי?
        </h2>
        <div className="max-w-4xl mx-auto relative mb-16">
          {/* Mobile swipe indicator dots */}
          <div className="md:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full shadow-sm transition-colors duration-300 ${
                  currentSlide === index ? 'bg-primary' : 'bg-primary/30'
                }`}
              ></div>
            ))}
          </div>
          
          <Carousel
            dir="rtl"
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
              duration: 500,
              startIndex: 0
            }}
            className="w-full touch-pan-y"
            onSelect={handleSelect}
          >
            <CarouselContent className="-mr-4 ml-0">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pr-4 pl-0 basis-full transition-all duration-500 ease-in-out"
                >
                  <div className="p-1">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="hidden md:flex rotate-180" />
            </div>
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="hidden md:flex rotate-180" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {youtubeVideos.map((video) => (
            <div key={video.id} className="mx-auto w-[252px]">
              <AspectRatio ratio={9/16} className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
