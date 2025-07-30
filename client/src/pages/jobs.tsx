import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, MapPin, DollarSign, Clock } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  description: string;
}

function formatPostedDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const { data: jobs, isLoading, error } = useQuery<Job[]>({
    queryKey: ['/api/jobs'],
    queryFn: async () =>
      [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Talentrix",
          location: "Islamabad",
          salary: "Rs. 150,000",
          type: "Full-Time",
          postedDate: new Date().toISOString(),
          description: "Build modern web apps with React and TypeScript."
        },
        {
          id: 2,
          title: "Backend Engineer",
          company: "Brisc AI",
          location: "Karachi",
          salary: "Rs. 200,000",
          type: "Remote",
          postedDate: new Date(Date.now() - 86400000).toISOString(),
          description: "Design scalable APIs and work with cloud infrastructure."
        },
        {
          id: 3,
          title: "UI/UX Designer",
          company: "Analytico",
          location: "Lahore",
          salary: "Rs. 120,000",
          type: "Contract",
          postedDate: new Date(Date.now() - 2 * 86400000).toISOString(),
          description: "Create beautiful and user-friendly interfaces for web and mobile."
        },
        {
          id: 4,
          title: "Project Manager",
          company: "Siffar",
          location: "Rawalpindi",
          salary: "Rs. 180,000",
          type: "Full-Time",
          postedDate: new Date(Date.now() - 3 * 86400000).toISOString(),
          description: "Lead teams and manage software projects."
        },
        {
          id: 5,
          title: "QA Engineer",
          company: "Ring Office",
          location: "Faisalabad",
          salary: "Rs. 110,000",
          type: "Contract",
          postedDate: new Date(Date.now() - 4 * 86400000).toISOString(),
          description: "Test and ensure software quality."
        },
        {
          id: 6,
          title: "DevOps Engineer",
          company: "Brisc AI",
          location: "Multan",
          salary: "Rs. 170,000",
          type: "Full-Time",
          postedDate: new Date(Date.now() - 5 * 86400000).toISOString(),
          description: "Automate deployments and manage cloud infrastructure."
        },
        {
          id: 7,
          title: "Support Specialist",
          company: "Talentrix",
          location: "Peshawar",
          salary: "Rs. 90,000",
          type: "Full-Time",
          postedDate: new Date(Date.now() - 6 * 86400000).toISOString(),
          description: "Provide technical support to clients."
        },
        {
          id: 8,
          title: "Network Engineer",
          company: "Analytico",
          location: "Quetta",
          salary: "Rs. 130,000",
          type: "Contract",
          postedDate: new Date(Date.now() - 7 * 86400000).toISOString(),
          description: "Manage and troubleshoot network infrastructure."
        },
        {
          id: 9,
          title: "Sales Executive",
          company: "Siffar",
          location: "Sialkot",
          salary: "Rs. 100,000",
          type: "Full-Time",
          postedDate: new Date(Date.now() - 8 * 86400000).toISOString(),
          description: "Drive sales and build client relationships."
        },
        {
          id: 10,
          title: "Content Writer",
          company: "Ring Office",
          location: "Gujranwala",
          salary: "Rs. 80,000",
          type: "Remote",
          postedDate: new Date(Date.now() - 9 * 86400000).toISOString(),
          description: "Write engaging content for web and social media."
        }
      ],
  });

  // Get unique locations for filter dropdown
  const locationOptions = jobs
    ? Array.from(new Set(jobs.map(job => job.location.toLowerCase())))
    : [];

  const filteredJobs = jobs?.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || locationFilter === "all" ||
      job.location.toLowerCase() === locationFilter.toLowerCase();
    return matchesSearch && matchesLocation;
  }) || [];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-blue-100 text-blue-800';
      case 'remote':
        return 'bg-green-100 text-green-800';
      case 'contract':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Jobs</h2>
              <p className="text-gray-600">Unable to fetch job listings. Please try again later.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Current Job Opportunities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover your next career opportunity from our curated job listings
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                aria-label="Search jobs or companies"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locationOptions.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc.charAt(0).toUpperCase() + loc.slice(1)}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="btn-talentrix" aria-label="Search Jobs">
              <Search className="h-4 w-4 mr-2" />
              Search Jobs
            </Button>
          </div>
        </Card>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Positions</h2>
          {!isLoading && (
            <p className="text-gray-600">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-64" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                  <Skeleton className="h-16 w-full" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
              <p>Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="job-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <Badge className={getTypeColor(job.type)}>
                      {job.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Posted {formatPostedDate(job.postedDate)}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 line-clamp-3">{job.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Posted {formatPostedDate(job.postedDate)}</span>
                    <Button className="btn-talentrix-outline" aria-label={`Apply for ${job.title}`}>
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* External Job Feeds */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">More Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-blue-600 text-white">
                <h3 className="text-lg font-semibold">Indeed Jobs</h3>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading latest opportunities from Indeed...</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-green-600 text-white">
                <h3 className="text-lg font-semibold">Glassdoor Jobs</h3>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading latest opportunities from Glassdoor...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
