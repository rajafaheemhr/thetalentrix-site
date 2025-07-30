import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star, Users, Clock, Shield, Zap, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 15000,
    yearlyPrice: 150000,
    features: [
      "Up to 3 job postings per month",
      "Access to talent pool database",
      "Basic candidate screening",
      "Email support",
      "Standard job posting templates",
      "30-day candidate replacement guarantee"
    ],
    limitations: [
      "Limited to 50 candidate views per month",
      "Basic reporting only"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    description: "Ideal for growing companies with regular hiring needs",
    monthlyPrice: 35000,
    yearlyPrice: 350000,
    features: [
      "Up to 10 job postings per month",
      "Full talent pool access",
      "Advanced candidate screening & interviews",
      "Priority email & phone support",
      "Custom job posting templates",
      "60-day candidate replacement guarantee",
      "Dedicated account manager",
      "Advanced analytics & reporting",
      "Video interview scheduling",
      "Unlimited candidate views"
    ],
    limitations: [],
    popular: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    description: "For large organizations with extensive hiring requirements",
    monthlyPrice: 75000,
    yearlyPrice: 750000,
    features: [
      "Unlimited job postings",
      "Premium talent pool access",
      "Full-service recruitment management",
      "24/7 priority support",
      "Custom branding & templates",
      "90-day candidate replacement guarantee",
      "Dedicated recruitment team",
      "Custom integrations (ATS, HRIS)",
      "On-site interviews & assessments",
      "White-label solutions",
      "Bulk hiring discounts",
      "Custom reporting & analytics"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales"
  }
];

const additionalServices = [
  {
    name: "Executive Search",
    price: "25,000 - 100,000",
    description: "Specialized recruitment for C-level and senior management positions",
    features: ["Confidential search process", "Executive assessment", "Reference checks"]
  },
  {
    name: "Bulk Hiring",
    price: "Custom Quote",
    description: "Large-scale recruitment for multiple positions simultaneously",
    features: ["Volume discounts", "Dedicated team", "Fast turnaround"]
  },
  {
    name: "HR Consulting",
    price: "5,000/day",
    description: "Strategic HR guidance and process optimization",
    features: ["Process audit", "Policy development", "Training programs"]
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your hiring needs. All plans include our quality guarantee and dedicated support.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-gray-500'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-primary' : 'text-gray-500'}`}>
            Yearly
          </span>
          <Badge variant="secondary" className="ml-2">Save 17%</Badge>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">
                  {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                </span>
                <span className="text-gray-500 ml-2">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 font-medium">
                  Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} annually
                </p>
              )}
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <li key={idx} className="flex items-start text-gray-500">
                    <span className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-center">•</span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'btn-talentrix' : 'btn-talentrix-outline'}`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Services */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
          <p className="text-xl text-gray-600">
            Specialized recruitment solutions for unique hiring challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={service.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  PKR {service.price}
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Comparison */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Talentrix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pre-Screened Talent</h3>
            <p className="text-gray-600">All candidates undergo thorough screening and skill assessments</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-gray-600">Reduce your time-to-hire by up to 60% with our streamlined process</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">Replacement guarantee for all permanent placements</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600">Personal account managers and 24/7 support for enterprise clients</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">What's included in the replacement guarantee?</h3>
              <p className="text-gray-600">If a placed candidate leaves within the guarantee period, we'll find a replacement at no additional cost.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">Yes, you can change your plan at any time. Changes take effect at the next billing cycle.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Do you offer custom packages?</h3>
              <p className="text-gray-600">Absolutely! Contact our sales team to discuss custom solutions for your specific needs.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join hundreds of companies that trust Talentrix for their recruitment needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/hire-talent">
            <Button size="lg" className="btn-talentrix">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Demo
            </Button>
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
}
