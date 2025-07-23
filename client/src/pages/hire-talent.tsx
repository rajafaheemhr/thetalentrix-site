import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertHiringRequestSchema, type InsertHiringRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Users, Clock, Shield, Send } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Pre-Screened Candidates",
    description: "All candidates undergo thorough screening and skill assessments"
  },
  {
    icon: Clock,
    title: "Faster Hiring Process",
    description: "Reduce your time-to-hire by up to 60% with our streamlined process"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "90-day replacement guarantee for all permanent placements"
  }
];

export default function HireTalent() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertHiringRequest & { serviceAgree: boolean }>({
    resolver: zodResolver(insertHiringRequestSchema.extend({
      serviceAgree: z.boolean().refine(val => val === true, "You must agree to the service terms")
    })),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      roleNeeded: "",
      urgency: "standard",
      positions: 1,
      jobDescription: "",
      additionalNotes: "",
      serviceAgree: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertHiringRequest) => {
      return apiRequest('POST', '/api/hiring-requests', data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted Successfully!",
        description: "Thank you for your interest. Our team will contact you within 24 hours to discuss your hiring needs.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/hiring-requests'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertHiringRequest) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits & Testimonial */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Hire Top Talent</h1>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Talentrix to find exceptional candidates who will drive your business forward. Our comprehensive recruitment solutions save you time and ensure quality matches.
          </p>

          {/* Benefits */}
          <div className="space-y-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="service-icon !w-12 !h-12 !text-base flex-shrink-0">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Testimonial */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face" 
                  alt="David Chen" 
                  className="w-16 h-16 rounded-full border-4 border-primary"
                />
                <div>
                  <h4 className="font-semibold">David Chen</h4>
                  <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Talentrix helped us scale our engineering team from 5 to 25 developers in just 6 months. Their candidates are consistently high-quality and well-matched to our culture."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Form */}
        <div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Request Candidates</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="roleNeeded"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="software-engineer">Software Engineer</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="designer">UX/UI Designer</SelectItem>
                              <SelectItem value="marketing">Marketing Specialist</SelectItem>
                              <SelectItem value="sales">Sales Representative</SelectItem>
                              <SelectItem value="data-scientist">Data Scientist</SelectItem>
                              <SelectItem value="project-manager">Project Manager</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hiring Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Standard (4-6 weeks)</SelectItem>
                              <SelectItem value="urgent">Urgent (2-3 weeks)</SelectItem>
                              <SelectItem value="immediate">Immediate (1 week)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="positions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Positions</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="1" 
                              placeholder="1"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description & Requirements *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the role, required skills, experience level, and any specific requirements..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes or Special Requirements</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional information about company culture, benefits, or special requirements..."
                            className="min-h-[80px]"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceAgree"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            I agree to the{" "}
                            <a href="#" className="text-primary underline">Service Terms</a>
                            {" "}and understand that fees apply for successful placements
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-talentrix" 
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
