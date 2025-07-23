import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, CheckCircle } from "lucide-react";

const featuredArticle = {
  id: 1,
  title: "10 Essential Questions to Ask in Every Job Interview",
  excerpt: "Asking thoughtful questions during your interview shows genuine interest and helps you evaluate if the company is the right fit. Here are the top questions that will impress any hiring manager and give you valuable insights into the role and company culture.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
  author: "Sarah Chen",
  publishedDate: "3 days ago",
  readTime: "8 min read",
  featured: true,
  keyPoints: [
    "What does a typical day look like in this role?",
    "What are the biggest challenges facing the team right now?",
    "How do you measure success in this position?",
    "What opportunities are there for professional development?"
  ]
};

const articles = [
  {
    id: 2,
    title: "How to Handle Behavioral Interview Questions",
    excerpt: "Master the STAR method and learn how to structure your responses to behavioral questions effectively. We'll cover the most common scenarios and provide example answers.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=200&fit=crop",
    author: "Michael Johnson",
    publishedDate: "1 week ago",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Virtual Interview Success: Technical Setup & Etiquette",
    excerpt: "With remote work becoming the norm, virtual interviews are here to stay. Learn how to set up your space, test your technology, and make a great impression on video calls.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=200&fit=crop",
    author: "Emily Rodriguez",
    publishedDate: "2 weeks ago",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Salary Negotiation: Getting the Offer You Deserve",
    excerpt: "Don't leave money on the table. Learn proven strategies for negotiating your salary, benefits, and total compensation package with confidence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=200&fit=crop",
    author: "David Park",
    publishedDate: "3 weeks ago",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Dressing for Success: Interview Attire Guide",
    excerpt: "First impressions matter. Learn how to dress appropriately for different types of interviews and company cultures, from corporate to startup environments.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=200&fit=crop",
    author: "Lisa Chang",
    publishedDate: "1 month ago",
    readTime: "4 min read"
  }
];

const quickTips = {
  beforeInterview: [
    "Research the company thoroughly",
    "Practice common interview questions",
    "Prepare specific examples (STAR method)",
    "Plan your outfit and route"
  ],
  duringInterview: [
    "Arrive 10-15 minutes early",
    "Maintain good eye contact",
    "Listen actively and ask questions",
    "Show enthusiasm and interest"
  ],
  afterInterview: [
    "Send a thank-you email within 24 hours",
    "Follow up if no response in a week",
    "Reflect on the experience"
  ]
};

export default function InterviewTips() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Interview Tips & Guides</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert advice to help you ace your next interview and land your dream job
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Featured Article */}
        <div className="lg:col-span-3">
          <Card className="blog-card mb-8">
            <div 
              className="blog-image"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            />
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  {featuredArticle.author}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredArticle.publishedDate}
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Key Questions to Ask:</h3>
                <ul className="space-y-2">
                  {featuredArticle.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="btn-talentrix-outline">Read Full Article</Button>
            </CardContent>
          </Card>

          {/* Additional Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="blog-card">
                <div 
                  className="blog-image h-48"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {article.publishedDate}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar with Quick Tips */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader className="bg-primary text-primary-foreground">
              <h3 className="text-lg font-semibold">Quick Tips</h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Before the Interview</h4>
                  <ul className="space-y-1 text-sm">
                    {quickTips.beforeInterview.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">During the Interview</h4>
                  <ul className="space-y-1 text-sm">
                    {quickTips.duringInterview.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">After the Interview</h4>
                  <ul className="space-y-1 text-sm">
                    {quickTips.afterInterview.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
