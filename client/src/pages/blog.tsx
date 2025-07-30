import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, User, Search, Filter } from "lucide-react";

const categories = [
  { id: "all", name: "All Articles", count: 12 },
  { id: "interview-tips", name: "Interview Tips", count: 4 },
  { id: "job-seekers", name: "For Job Seekers", count: 5 },
  { id: "employers", name: "For Employers", count: 3 }
];

const featuredArticle = {
  id: 1,
  title: "10 Essential Questions to Ask in Every Job Interview",
  excerpt: "Asking thoughtful questions during your interview shows genuine interest and helps you evaluate if the company is the right fit. Here are the top questions that will impress any hiring manager.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
  author: "Sarah Chen",
  publishedDate: "3 days ago",
  readTime: "8 min read",
  category: "interview-tips",
  featured: true
};

const articles = [
  {
    id: 2,
    title: "How to Handle Behavioral Interview Questions",
    excerpt: "Master the STAR method and learn how to structure your responses to behavioral questions effectively.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=200&fit=crop",
    author: "Michael Johnson",
    publishedDate: "1 week ago",
    readTime: "6 min read",
    category: "interview-tips"
  },
  {
    id: 3,
    title: "Virtual Interview Success: Technical Setup & Etiquette",
    excerpt: "With remote work becoming the norm, virtual interviews are here to stay. Learn how to set up your space and make a great impression.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=200&fit=crop",
    author: "Emily Rodriguez",
    publishedDate: "2 weeks ago",
    readTime: "5 min read",
    category: "interview-tips"
  },
  {
    id: 4,
    title: "Salary Negotiation: Getting the Offer You Deserve",
    excerpt: "Don't leave money on the table. Learn proven strategies for negotiating your salary and benefits package.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=200&fit=crop",
    author: "David Park",
    publishedDate: "3 weeks ago",
    readTime: "7 min read",
    category: "job-seekers"
  },
  {
    id: 5,
    title: "Building Your Personal Brand as a Professional",
    excerpt: "Stand out in today's competitive job market by developing a strong personal brand that showcases your unique value.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=200&fit=crop",
    author: "Lisa Wang",
    publishedDate: "1 month ago",
    readTime: "9 min read",
    category: "job-seekers"
  },
  {
    id: 6,
    title: "Top 5 Hiring Mistakes Companies Make",
    excerpt: "Avoid these common pitfalls that can cost your company great talent and damage your employer brand.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=200&fit=crop",
    author: "Robert Chen",
    publishedDate: "2 weeks ago",
    readTime: "6 min read",
    category: "employers"
  },
  {
    id: 7,
    title: "Creating an Inclusive Hiring Process",
    excerpt: "Build a diverse and inclusive workplace by implementing fair and unbiased recruitment practices.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=200&fit=crop",
    author: "Maria Garcia",
    publishedDate: "3 weeks ago",
    readTime: "8 min read",
    category: "employers"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'interview-tips':
        return 'bg-blue-100 text-blue-800';
      case 'job-seekers':
        return 'bg-green-100 text-green-800';
      case 'employers':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'interview-tips':
        return 'Interview Tips';
      case 'job-seekers':
        return 'Job Seekers';
      case 'employers':
        return 'Employers';
      default:
        return 'General';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Talentrix Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights, career advice, and industry trends to help you succeed in your professional journey
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>

      {/* Featured Article */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Article</h2>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${getCategoryColor(featuredArticle.category)}`}>
                {getCategoryName(featuredArticle.category)}
              </Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredArticle.author}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredArticle.readTime}</span>
                <span>{featuredArticle.publishedDate}</span>
              </div>
              <Button className="btn-talentrix w-fit">Read Full Article</Button>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Latest Articles</h2>
          <p className="text-gray-600">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
          </p>
        </div>

        {filteredArticles.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p>Try adjusting your search criteria or browse all categories.</p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(article.category)}`}>
                    {getCategoryName(article.category)}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.publishedDate}</span>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
