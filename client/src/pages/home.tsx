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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const services = [
  {
    icon: Handshake,
    title: "Browse Jobs",
    description: "Discover amazing career opportunities from top companies",
    href: "/jobs"
  },
  {
    icon: Users,
    title: "Join Talent Pool",
    description: "Get matched with exclusive opportunities that align with your skills",
    href: "/talent-pool"
  },
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
    icon: Building,
    title: "Hire Talent",
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
    name: "Nishan Singh",
    role: "CEO, Analytico.",
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight float-animation">
                Find Your Dream Job with <span className="pulse-glow">Talentrix</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Connect talented professionals with leading companies. We're your trusted partner in career growth and recruitment excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/jobs">
                  <Button size="lg" className="btn-gradient text-white font-semibold px-8 py-3 rounded-full">
                    Explore Jobs 
                  </Button>
                </Link>
                <Link href="/talent-pool">
                  <Button size="lg" className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 rounded-full px-8 py-3 font-semibold neon-accent">
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
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
            <h2 className="text-4xl font-bold mb-6">Our Services </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions designed to accelerate your career journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="modern-card group neon-accent">
                <CardContent className="p-8">
                  <div className="service-icon group-hover:scale-110 transition-transform duration-300 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button className="btn-gradient text-white rounded-full px-6 py-2 text-sm font-semibold">
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
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say 💬</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="modern-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gradient-primary"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs">⭐</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic text-center">"{testimonial.content}"</p>
                  <div className="text-center">
                    <h4 className="font-semibold mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partner Company Logos */}
          <h2 className="text-4xl font-bold mb-6 text-center mt-16">Trusted By our Partners</h2>
          <div className="my-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={3000}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              style={{ padding: "20px 0" }}
            >
              <SwiperSlide>
                <img
                  src="https://cdn-cliej.nitrocdn.com/wgZiPBuapcaGENrRxsBuGekXzvRJGrBF/assets/images/optimized/rev-d940329/apimio.com/wp-content/uploads/2021/05/cropped-frompsdapimio-e1621591394673.png"
                  alt="Apimio"
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://ringoffice.com/wp-content/uploads/2025/03/Asset-3@4x-1-1024x296.webp"
                  alt="Ring Office"
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://cdn-edepf.nitrocdn.com/tPDQwwltJkKRVcYDAvZvZUoJoKSDAwlD/assets/images/optimized/rev-17d0dd8/siffar.com/wp-content/uploads/2024/11/siffar-logo-png-e1606198668642.png"
                  alt="Siffar"
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://www.analyticodigital.com/wp-content/uploads/2024/07/analytico-logo-300x56.webp"
                  alt="Analytico"
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://brisc.ai/hubfs/White%20brisc%20wordmark.svg"
                  alt="Brisc AI"
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
              {/* Add more SwiperSlide components for additional logos if needed */}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
