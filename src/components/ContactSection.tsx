import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  Navigation,
  CheckCircle
} from "lucide-react";
import { useState,useRef, useEffect  } from "react";

const ContactSection = () => {
    const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
  const handler = (e) => setSelectedCourse(e.detail);
  window.addEventListener("enroll-course", handler);
  return () => window.removeEventListener("enroll-course", handler);
}, []);

    const openWhatsApp = () => {
    const message = encodeURIComponent("hello");
    const phoneNumber = "9167602808"; // optional: add phone number in international format, e.g., "919876543210"
    const url = phoneNumber
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://wa.me/?text=${message}`;
    window.open(url, "_blank");
  };
  const openMap = () => {
    const lat = 18.922, lng = 72.834; // Gateway of India coordinates
    const label = encodeURIComponent("Gateway of India");
    const url = `https://www.google.com/maps?q=${lat},${lng}(${label})`;
    window.open(url, "_blank");
  };
const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
const courseSelectRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const message = `📩 *New Inquiry*\n\n` +
      `👤 Name: ${formData.get("firstName")} ${formData.get("lastName")}\n` +
      `📞 Phone: ${formData.get("phone")}\n` +
      `📧 Email: ${formData.get("email")}\n` +
      `🎯 Course Interest: ${formData.get("course")}\n` +
      `💬 Message: ${formData.get("message")}\n\n` +
      `— Sent from Website Contact Form`;

    try {
      const res = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.get("firstName"), message })
      });

      if (res.ok) {
        setFlipped(true);
        form.reset();
        // Auto-flip back after 5 seconds
        setTimeout(() => setFlipped(false), 5000);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFlipped(false);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Get in <span className="text-gradient-ganpati">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to start your learning journey? Contact us today for more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card hover:shadow-ganpati transition-smooth border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-foreground flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  Oriental Computer Institute
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-ganpati rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground mb-2">Visit Us</h3>
                    <p className="font-body text-muted-foreground">
                      Bal Krishna Apt., Near Low Price,<br />
                      Bedekar Nagar, Diva (E)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-ganpati rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground mb-2">Call Us</h3>
                    <p className="font-body text-muted-foreground">
                      <a href="tel:8826853976" className="hover:text-primary transition-smooth">
                        8826853976
                      </a>
                      {" / "}
                      <a href="tel:8108378214" className="hover:text-primary transition-smooth">
                        8108378214
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-ganpati rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground mb-2">Email Us</h3>
                    <p className="font-body text-muted-foreground">
                      <a href="mailto:info@orientalcomputer.com" className="hover:text-primary transition-smooth">
                        info@orientalcomputer.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-ganpati rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-subheading text-lg text-foreground mb-2">Timing</h3>
                    <p className="font-body text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="ganpati" size="lg" className="h-16" onClick={openWhatsApp}>
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
              <Button variant="cta" size="lg" className="h-16" onClick={openMap}>
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative w-full h-[700px] [perspective:1000px]">
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
              {/* Front Side (Form) */}
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <Card className="h-full shadow-card hover:shadow-ganpati transition-smooth border-0 bg-gradient-card flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="font-heading text-2xl text-foreground flex items-center gap-3">
                      <Send className="w-6 h-6 text-primary" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <form className="flex-1 flex flex-col space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <Input name="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <Input name="lastName" placeholder="Enter your last name" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input name="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input name="email" type="email" placeholder="Enter your email address" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Course Interest
                        </label>
                        <select
                          value={selectedCourse}
                          onChange={e => setSelectedCourse(e.target.value)}
                          name="course"
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-smooth focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select a course</option>
                            <option value="Computer Fundamentals">Computer Fundamentals</option>
                            <option value="Operating System">Operating System</option>
                            <option value="CCC Course">CCC Course</option>
                            <option value="M.S Office">M.S Office</option>
                            <option value="Advanced Excel">Advanced Excel</option>
                            <option value="Typing Course">Typing Course</option>
                            <option value="Tally Prime with GST">Tally Prime with GST</option>
                            <option value="DTP / DTP with AI">DTP / DTP with AI</option>
                        </select>
                      </div>

                      <div className="flex-1">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          rows={4}
                          defaultValue="Hi, I'm interested in knowing more about your courses. Please share the details."
                          className="h-full min-h-[100px]"
                          required
                        />
                      </div>

                      <Button variant="ganpati" size="lg" className="w-full mt-4" type="submit" disabled={loading}>
                        <Send className="w-5 h-5 mr-2" />
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Back Side (Thank You) */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Card className="h-full shadow-card bg-gradient-to-br from-green-400 to-green-600 text-white flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">🎉 Thank You!</h2>
                  <p className="text-xl mb-6 max-w-md">
                    We've received your message successfully. We'll get back to you soon with all the details!
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={resetForm}
                  >
                    Send Another Message
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;