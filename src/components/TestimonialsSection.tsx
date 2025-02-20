
import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <section dir="rtl" className="py-14 md:py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          מה אומרים עליי?
        </h2>
        <div className="max-w-4xl mx-auto relative mb-16">
          {/* Mobile swipe indicator */}
          <div className="md:hidden flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none px-4 z-10">
            <div className="bg-white/80 p-2 rounded-full shadow-md backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <div className="bg-white/80 p-2 rounded-full shadow-md backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
          
          <Carousel
            dir="rtl"
            opts={{
              align: "center",
              loop: true,
              direction: "rtl",
              skipSnaps: false,
              dragFree: false
            }}
            className="w-full"
          >
            <CarouselContent className="-mr-4 ml-0">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pr-4 pl-0 basis-full">
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
