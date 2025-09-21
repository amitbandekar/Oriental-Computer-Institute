import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Computer, 
  HardDrive, 
  FileText, 
  Sheet, 
  BarChart3, 
  Keyboard, 
  Calculator, 
  Palette,
  Clock,
  Users,
  Star
} from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Computer Fundamentals",
    icon: Computer,
    description: "Basic computer knowledge and operations",
    duration: "1 Month",
    students: "150+",
    rating: 4.8,
    originalPrice: "₹2500",
    discountedPrice: "₹2000",
  },
  {
    id: 2,
    name: "CCC Course",
    icon: FileText,
    description: "Course on Computer Concepts certification",
    duration: "3 Months",
    students: "200+",
    rating: 4.9,
    originalPrice: "₹7500",
    discountedPrice: "₹6000",
  },
  {
    id: 3,
    name: "M.S Office",
    icon: Sheet,
    description: "Word, Excel, PowerPoint mastery",
    duration: "3 Months",
    students: "300+",
    rating: 4.8,
    originalPrice: "₹5000",
    discountedPrice: "₹4000",
  },
  {
    id: 4,
    name: "Advanced Excel",
    icon: BarChart3,
    description: "Formulas, charts, pivot tables, macros",
    duration: "2 Months",
    students: "180+",
    rating: 4.9,
    originalPrice: "₹6500",
    discountedPrice: "₹5000",
  },
  {
    id: 5,
    name: "Tally Prime with GST",
    icon: Calculator,
    description: "Complete accounting with GST compliance",
    duration: "3 Months",
    students: "160+",
    rating: 4.8,
    originalPrice: "₹9000",
    discountedPrice: "₹7000",
  },
  {
    id: 6,
    name: "Typing Course (English / Hindi / Marathi)",
    icon: Keyboard,
    description: "Typing speed development in English, Hindi & Marathi",
    duration: "3 Months",
    students: "250+",
    rating: 4.6,
    originalPrice: "₹4000",
    discountedPrice: "₹3000",
  },
  {
    id: 7,
    name: "DTP",
    icon: Palette,
    description: "Desktop publishing with design tools",
    duration: "2 Months",
    students: "90+",
    rating: 4.7,
    originalPrice: "₹6000",
    discountedPrice: "₹4500",
  },
  {
    id: 8,
    name: "DTP with AI",
    icon: Palette,
    description: "Desktop publishing & AI design tools",
    duration: "3 Months",
    students: "90+",
    rating: 4.7,
    originalPrice: "₹7000",
    discountedPrice: "₹5500",
  }
];


const CoursesSection = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Available <span className="text-gradient-ganpati">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Master the latest technology skills with our comprehensive course offerings
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-ganpati text-white px-6 py-3 rounded-full font-subheading">
            <Star className="w-5 h-5" />
            30% OFF 
            <Star className="w-5 h-5" />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.id} className="course-card shadow-card hover:shadow-ganpati border-0 bg-gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-ganpati rounded-2xl flex items-center justify-center mb-4 icon-bounce">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-subheading text-lg text-foreground">
                    {course.name}
                  </CardTitle>
                  <CardDescription className="font-body text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  {/* Course Stats */}
                  <div className="flex justify-center items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </div>
                    {/* <div className="text-2xl font-bold text-primary">
                      {course.discountedPrice}
                    </div> */}
                  </div>

                 <Button
                  variant="ganpati"
                  className="w-full"
                  onClick={() => {
                    // Dispatch the custom event for "enroll-course"
                    window.dispatchEvent(new CustomEvent("enroll-course", { detail: course.name }));
                    // Scroll to the ContactSection
                    if (contactRef.current) {
                      contactRef.current.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Enroll Now
                </Button>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;