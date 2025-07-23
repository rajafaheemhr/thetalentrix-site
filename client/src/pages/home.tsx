import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  FileText, 
  MessageSquare, 
  Handshake, 
  Building,
  Users,
  Clock,
  Shield
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional, ATS-friendly resumes with our intuitive builder tool",
    href: "/resume-builder"
  },
  {
    icon: MessageSquare,
    title: "Interview Tips",
    description: "Expert guidance and proven strategies to ace your next interview",
    href: "/interview-tips"
  },
  {
    icon: Handshake,
    title: "Job Matching",
    description: "AI-powered matching system connecting you with perfect opportunities",
    href: "/jobs"
  },
  {
    icon: Building,
    title: "Hiring Services",
    description: "End-to-end recruitment solutions for companies of all sizes",
    href: "/hire-talent"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=150&h=150&fit=crop&crop=face",
    content: "Talentrix helped me land my dream job at a Fortune 500 company. Their personalized approach and expert guidance made all the difference."
  },
  {
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Outstanding service! They found the perfect candidates for our startup. The quality of talent and speed of delivery exceeded our expectations."
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    content: "The resume builder tool is fantastic! It helped me create a professional resume that got me interviews at top companies within weeks."
  }
];

const companyLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tesla/tesla-original.svg"
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-32 relative overflow-hidden hero-overlay">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Your Dream Job with Talentrix
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Connect talented professionals with leading companies. We're your trusted partner in career growth and recruitment excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/jobs">
                  <Button size="lg" className="btn-talentrix">
                    Explore Jobs
                  </Button>
                </Link>
                <Link href="/talent-pool">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Join Talent Pool
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                alt="Modern office workspace" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-left">About Talentrix</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Talentrix, we bridge the gap between exceptional talent and forward-thinking companies. With over a decade of experience in recruitment and career development, we've helped thousands of professionals find their ideal roles while assisting companies in building their dream teams.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach combines cutting-edge technology with personalized service, ensuring every placement is a perfect match for both candidate and employer.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">5000+</h3>
                  <p className="text-gray-600">Jobs Placed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-gray-600">Partner Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions designed to accelerate your career journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card group">
                <CardContent className="p-8">
                  <div className="service-icon group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="outline" className="btn-talentrix-outline">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partner Company Logos */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-lg text-gray-600">Trusted by Leading Companies</h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {companyLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo} 
                  alt={`Company logo ${index + 1}`}
                  className="company-logo h-12 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
