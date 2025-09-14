import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Calculator, 
  Database, 
  GraduationCap, 
  Award,
  Check,
  Star,
  Sparkles
} from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Job Starter Pack",
    icon: Briefcase,
    price: "₹7,999",
    originalPrice: "₹9,999",
    popular: false,
    description: "Perfect for freshers entering the job market",
    courses: [
      "Computer Fundamental",
      "Typing Course",
      "Operating System (OS)",
      "M.S Office"
    ],
    features: [
      "Job Placement Assistance",
      "Certificate on Completion",
      "Interview Preparation",
      "Resume Building Support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Data Mastery Pack",
    icon: Database,
    price: "₹13,999",
    originalPrice: "₹17,999",
    popular: true,
    description: "Master data analysis and management",
    courses: [
      "M.S Office",
      "Tally with GST",
      "Tally Prime",
      "Advance Excel",
      "Free Typing Course"
    ],
    features: [
      "Advanced Excel Mastery",
      "Data Analytics Training",
      "Business Intelligence",
      "Free Bonus Course"
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    name: "Smart Accountant Pack",
    icon: Calculator,
    price: "₹11,999",
    originalPrice: "₹14,999",
    popular: false,
    description: "Complete accounting solution for professionals",
    courses: [
      "M.S Office",
      "Tally with GST",
      "Tally Prime",
      "Typing Course"
    ],
    features: [
      "Real-world Projects",
      "GST Compliance Training",
      "Industry Certification",
      "Expert Mentorship"
    ],
    color: "from-emerald-500 to-teal-500"
  },
  
  {
    id: 4,
    name: "Government Exam Pack",
    icon: GraduationCap,
    price: "₹9,999",
    originalPrice: "₹12,999",
    popular: false,
    description: "Specially designed for government job aspirants",
    courses: [
      "CCC Course",
      "Typing Course",
      "M.S Office"
    ],
    features: [
      "Exam Pattern Training",
      "Mock Tests Included",
      "Speed Development",
      "Success Guarantee"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Diploma in IT",
    icon: Award,
    price: "₹12,999",
    originalPrice: "₹15,999",
    popular: false,
    description: "Complete IT foundation course",
    courses: [
      "Computer Fundamental",
      "CCC Course",
      "Operating System",
      "M.S Office",
      "Adv. Excel"
    ],
    features: [
      "Comprehensive IT Knowledge",
      "Industry Recognition",
      "Career Counseling",
      "Lifetime Support"
    ],
    color: "from-pink-500 to-rose-500"
  }
];

const PackagesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Course <span className="text-gradient-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Choose the perfect combination of courses that matches your career goals
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.id} 
                className={`course-card shadow-card hover:shadow-primary border-0 relative ring-2 ring-primary `}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-6 py-2 font-subheading">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${pkg.color} rounded-3xl flex items-center justify-center mb-4 icon-bounce`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <CardTitle className="font-heading text-2xl text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  
                  <CardDescription className="font-body text-sm mb-4">
                    {pkg.description}
                  </CardDescription>

                  {/* Pricing */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground line-through mb-1">
                      {pkg.originalPrice}
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Best Value
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Included Courses */}
                  <div className="mb-6">
                    <h4 className="font-subheading text-sm text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Included Courses
                    </h4>
                    <ul className="space-y-2">
                      {pkg.courses.map((course, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="font-body">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-subheading text-sm text-foreground mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      Package Benefits
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="font-body text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={pkg.popular ? "default" : "cta"} 
                    className="w-full"
                  >
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="font-heading text-3xl mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 font-body">
              Join hundreds of successful students who transformed their careers
            </p>
            <Button variant="outline" size="lg" className="text-xl px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-300">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;