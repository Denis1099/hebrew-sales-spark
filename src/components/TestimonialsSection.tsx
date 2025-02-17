
import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "דן כהן",
    role: "מנכ״ל",
    company: "טכנולוגיות עתיד",
    content: "ההדרכה של ניר שינתה לחלוטין את הגישה שלי למכירות. תוך חודשיים הצלחנו להגדיל את המכירות שלנו ב-40%. הגישה המקצועית והליווי הצמוד עשו את כל ההבדל.",
    imageUrl: "/lovable-uploads/testimonial1.webp"
  },
  {
    name: "מיכל לוי",
    role: "סמנכ״לית מכירות",
    company: "פתרונות עסקיים",
    content: "אחרי שנים של התמודדות עם אתגרי מכירות, ניר עזר לי לפתח את הביטחון והכלים הנכונים. התוצאות לא איחרו להגיע - שיפור משמעותי באחוזי הסגירה ובאיכות השיחות.",
    imageUrl: "/lovable-uploads/testimonial2.webp"
  },
  {
    name: "יוסי אברהם",
    role: "בעלים",
    company: "שירותי ייעוץ",
    content: "הליווי של ניר הוא השקעה שמחזירה את עצמה במהירות. קיבלתי כלים פרקטיים שעזרו לי להתמודד עם התנגדויות ולסגור יותר עסקאות. ממליץ בחום!",
    imageUrl: "/lovable-uploads/testimonial3.webp"
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

        {/* YouTube Videos Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            צפו בסרטונים שלי
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="aspect-w-9 aspect-h-16 relative rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
