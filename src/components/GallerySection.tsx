import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera, GraduationCap, Users, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import a1 from '@/assets/1.jpeg';
import a2 from '@/assets/2.jpeg';
import a3 from '@/assets/3.jpeg';
import a4 from '@/assets/4.jpeg';


const GallerySection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Dummy gallery images - replace these with actual classroom images
  const galleryImages = [
    {
      id: 1,
      src: a1,
      alt: "Computer Lab",
      title: "Modern Computer Lab",
      description: "State-of-the-art computer lab with latest systems"
    },
    
    {
      id: 2,
      src: a2,
      alt: "Students Learning",
      title: "Students in Action",
      description: "Engaged students during practical sessions"
    },
    {
      id: 3,
      src: a3,
      alt: "Head of Department",
      title: "Vipul Sir",
      description: "Head of Department addressing students"
    },
    {
      id: 4,
      src: a4,
      alt: "Certificates",
      title: "Class Certificates",
      description: "Course certificates achieved by our class"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Our Campus Gallery
            </h2>
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our modern facilities and see our students in action
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto mb-8">
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-smooth">
                      <div className="aspect-[4/3] relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="font-heading text-lg font-semibold mb-1">
                              {image.title}
                            </h3>
                            <p className="font-body text-sm opacity-90">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === current - 1 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12">
          <Card className="p-6 text-center border-0 bg-gradient-card shadow-card">
            <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-foreground">500+</div>
            <div className="font-body text-sm text-muted-foreground">Students Trained</div>
          </Card>
          <Card className="p-6 text-center border-0 bg-gradient-card shadow-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-foreground">15+</div>
            <div className="font-body text-sm text-muted-foreground">Expert Trainers</div>
          </Card>
          <Card className="p-6 text-center border-0 bg-gradient-card shadow-card">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-foreground">25+</div>
            <div className="font-body text-sm text-muted-foreground">Courses Offered</div>
          </Card>
          <Card className="p-6 text-center border-0 bg-gradient-card shadow-card">
            <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-foreground">3</div>
            <div className="font-body text-sm text-muted-foreground">Modern Labs</div>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;