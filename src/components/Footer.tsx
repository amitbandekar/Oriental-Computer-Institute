import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Star,
  Award,
  Users,
  BookOpen
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-tech text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-ganpati rounded-full flex items-center justify-center text-white font-bold text-xl">
                OCI
              </div>
              <div>
                <h3 className="font-heading text-xl">IT - Oriental Computer Institute</h3>
                <p className="text-sm opacity-80">Excellence in IT Education</p>
              </div>
            </div>
            
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Empowering students with cutting-edge computer education and practical skills 
              for successful careers in the IT industry.
            </p>

            {/* <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <Users className="w-6 h-6 mx-auto mb-1 text-yellow-300" />
                <div className="text-lg font-bold">500+</div>
                <div className="text-xs opacity-80">Students</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <Award className="w-6 h-6 mx-auto mb-1 text-yellow-300" />
                <div className="text-lg font-bold">8+</div>
                <div className="text-xs opacity-80">Courses</div>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subheading text-lg mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-300" />
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#courses" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  Course Packages
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  Placements
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-yellow-300 transition-smooth opacity-80 hover:opacity-100">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-subheading text-lg mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300" />
              Popular Courses
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="opacity-80">Computer Fundamentals</li>
              <li className="opacity-80">M.S Office Suite</li>
              <li className="opacity-80">Tally Prime with GST</li>
              <li className="opacity-80">Advanced Excel</li>
              <li className="opacity-80">CCC Course</li>
              <li className="opacity-80">DTP with AI</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-subheading text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-300" />
              Contact Info
            </h4>
            <div className="space-y-4 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-yellow-300 flex-shrink-0" />
                <div className="opacity-80">
                  Bal Krishna Apt., Near Low Price,<br />
                  Bedekar Nagar, Diva (E)
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <div className="opacity-80">
                  <a href="tel:8828539765" className="hover:text-yellow-300 transition-smooth">
                    8828539765
                  </a>
                  {" / "}
                  <a href="tel:8108378214" className="hover:text-yellow-300 transition-smooth">
                    8108378214
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                <a href="mailto:info@orientalcomputer.com" className="opacity-80 hover:text-yellow-300 transition-smooth">
                  info@orientalcomputer.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-subheading text-sm mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="font-body text-sm opacity-60">
            © 2024 IT - Oriental Computer Institute. All rights reserved. | 
            <span className="mx-2">Made with ❤️ for quality education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;