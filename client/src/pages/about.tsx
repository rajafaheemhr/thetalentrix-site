import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, CheckCircle, TrendingUp, Globe, Shield, MapPin, Phone, Mail, Clock, Star, Building, Briefcase } from "lucide-react";
import { Link } from "wouter";

const stats = [
  { number: "50+", label: "Companies Served", icon: Users },
  { number: "200+", label: "Successful Placements", icon: CheckCircle },
  { number: "95%", label: "Client Satisfaction", icon: Award },
  { number: "40%", label: "Faster Hiring Process", icon: TrendingUp }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every placement, ensuring the perfect match between talent and opportunity."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty guide all our interactions with clients and candidates."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build long-term relationships, becoming a trusted extension of your HR team."
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to revolutionize the recruitment experience."
  }
];

const team = [
  {
    name: "Raja Faheem Shoukat",
    role: "Founder & CEO",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEWkbu5xaUABQ/profile-displayphoto-shrink_800_800/B4DZYHBtkoH4Ak-/0/1743874613611?e=1756944000&v=beta&t=jDk5iC8XYMOILejiACjjp-WO2GkfzpAvz0hHwQ2LzpE",
    bio: "Visionary leader with extensive experience in HR technology and talent acquisition. Passionate about transforming the recruitment landscape in Pakistan through innovative solutions."
  },
  {
    name: "Zahwa Nadeem",
    role: "Marketing Head",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFCSfswLjuR6w/profile-displayphoto-crop_800_800/B4DZhbND21GsAI-/0/1753876811872?e=1756944000&v=beta&t=t4nXUC8ijWpctoYiXSRyNnkTBTXR_RQfI2JxQwq40BA",
    bio: "Strategic marketing professional with expertise in digital marketing, brand development, and growth strategies. Drives Talentrix's market presence and client acquisition initiatives."
  },
  {
    name: "Anum Zafar",
    role: "Head of Finance & Accounting",
    image: "https://media.licdn.com/dms/image/v2/D5635AQHQn5-roaO0uA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1736926551807?e=1754499600&v=beta&t=V1eSdcsf-gQSpvm0vhon2-5YSsN9xUPyVP40ENNqBFA",
    bio: "Financial expert ensuring robust financial management and strategic planning. Oversees all financial operations, budgeting, and compliance for sustainable business growth."
  }
];

const milestones = [
  { year: "2022", title: "Company Founded", description: "Talentrix was established with a vision to transform recruitment in Pakistan" },
  { year: "2023", title: "First 50 Placements", description: "Achieved our first major milestone with successful placements across various industries" },
  { year: "2024", title: "Technology Platform Launch", description: "Launched our modern recruitment platform and resume builder tools" },
  { year: "2024", title: "Growing Client Base", description: "Expanded to serve 50+ companies with 200+ successful placements" },
  { year: "2025", title: "Continued Growth", description: "Focusing on scaling operations and enhancing our technology platform" }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4">About Talentrix</Badge>
        <h1 className="text-4xl font-bold mb-6">Transforming Careers, Building Futures</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're Pakistan's leading recruitment platform, connecting exceptional talent with outstanding opportunities. 
          Our mission is to revolutionize how companies hire and how professionals advance their careers.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2022, Talentrix emerged from a simple observation: the traditional recruitment process
                was broken. Job seekers struggled to find opportunities that matched their skills, while companies
                spent months searching for the right talent.
              </p>
              <p>
                We set out to bridge this gap by creating a platform that leverages technology, human expertise,
                and deep market insights to make hiring faster, more accurate, and more satisfying for everyone involved.
              </p>
              <p>
                Today, we're proud to be a growing recruitment platform in Pakistan, trusted by 50+ companies
                and hundreds of professionals who have found their career opportunities through our services.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-sm">Trusted by 50+ Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to career opportunities by connecting talented individuals with companies 
              that value their skills, while providing employers with efficient, reliable recruitment solutions 
              that drive business growth.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading recruitment ecosystem in South Asia, where every professional finds 
              meaningful work and every company builds exceptional teams that drive innovation and success.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600">
            Key milestones in our growth story
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <Badge variant="outline" className="mb-2">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The passionate professionals behind Talentrix
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">
            Comprehensive recruitment solutions for every hiring need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Talent Acquisition</h3>
              <p className="text-gray-600 text-sm">End-to-end recruitment services from job posting to final placement with quality guarantee.</p>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Executive Search</h3>
              <p className="text-gray-600 text-sm">Specialized recruitment for senior management and C-level positions with confidential processes.</p>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">HR Consulting</h3>
              <p className="text-gray-600 text-sm">Strategic HR guidance, process optimization, and organizational development solutions.</p>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Bulk Hiring</h3>
              <p className="text-gray-600 text-sm">Large-scale recruitment solutions for multiple positions with dedicated project teams.</p>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Career Services</h3>
              <p className="text-gray-600 text-sm">Resume building, interview preparation, and career guidance for job seekers.</p>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Temporary Staffing</h3>
              <p className="text-gray-600 text-sm">Flexible staffing solutions for short-term projects and seasonal requirements.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600">
            Specialized recruitment across diverse sectors
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Information Technology",
            "Banking & Finance",
            "Healthcare",
            "Telecommunications",
            "Education",
            "Retail & E-commerce",
            "Media & Advertising"
          ].map((industry, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <p className="font-medium text-gray-700">{industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Talentrix?</h2>
          <p className="text-xl text-gray-600">
            What sets us apart in the recruitment industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600 text-sm">We offer replacement guarantee for all permanent placements within the specified period.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600 text-sm">Reduce your time-to-hire by up to 60% with our streamlined recruitment process.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Pre-Screened Talent</h3>
                <p className="text-gray-600 text-sm">All candidates undergo thorough screening, skill assessments, and background verification.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">Personal account managers and 24/7 support for all our enterprise clients.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technology-Driven</h3>
                <p className="text-gray-600 text-sm">AI-powered matching algorithms and modern recruitment technology for better results.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600 text-sm">Deep understanding of various industries and their specific talent requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Ready to start your recruitment journey with us?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
              <p className="text-gray-600">+92 42 1234567</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@talentrix.com</p>
              <p className="text-gray-600">careers@talentrix.com</p>
            </CardContent>
          </Card>
          <Card className="p-6 text-center">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-gray-600">Islamabad, Pakistan</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of professionals who have found their dream jobs through Talentrix
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/talent-pool">
            <Button size="lg" className="btn-talentrix">
              Join Our Talent Pool
            </Button>
          </Link>
          <Link href="/jobs">
            <Button size="lg" variant="outline">
              Browse Job Opportunities
            </Button>
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          For employers: <Link href="/hire-talent" className="text-primary hover:underline">Partner with us</Link> to find exceptional talent
        </p>
      </div>
    </div>
  );
}
