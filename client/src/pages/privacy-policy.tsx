import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Legal</Badge>
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how Talentrix collects, uses, and protects your personal information.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Last updated: January 2025
        </p>
      </div>

      {/* Quick Overview */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Privacy at a Glance</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Eye className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">What We Collect</h3>
                  <p className="text-sm text-gray-600">Personal info, resumes, job preferences, and usage data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">How We Use It</h3>
                  <p className="text-sm text-gray-600">Job matching, communication, and service improvement</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">How We Protect It</h3>
                  <p className="text-sm text-gray-600">Encryption, secure servers, and limited access controls</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Name, email address, phone number</li>
                <li>Professional experience and qualifications</li>
                <li>Resume/CV and portfolio documents</li>
                <li>Job preferences and career goals</li>
                <li>Educational background and certifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Usage Information</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Website usage patterns and preferences</li>
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our platform</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communication Data</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Messages sent through our platform</li>
                <li>Customer support interactions</li>
                <li>Feedback and survey responses</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Provision</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Match you with relevant job opportunities</li>
                <li>Facilitate communication between candidates and employers</li>
                <li>Provide resume building and career guidance services</li>
                <li>Process job applications and hiring requests</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communication</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Send job alerts and recommendations</li>
                <li>Provide customer support and assistance</li>
                <li>Share important updates about our services</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Improvement and Analytics</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Analyze usage patterns to improve our platform</li>
                <li>Develop new features and services</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">3. Information Sharing</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">With Employers</h3>
              <p className="text-gray-600 mb-2">We share your profile information with potential employers when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>You apply for a specific job position</li>
                <li>You opt-in to be discoverable by employers</li>
                <li>You give explicit consent for profile sharing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Providers</h3>
              <p className="text-gray-600 mb-2">We may share information with trusted third parties who help us operate our platform:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Cloud hosting and data storage providers</li>
                <li>Email and communication service providers</li>
                <li>Analytics and performance monitoring tools</li>
                <li>Payment processing services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal Requirements</h3>
              <p className="text-gray-600">We may disclose information when required by law, court order, or to protect our rights and safety.</p>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">4. Data Security</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">We implement comprehensive security measures to protect your information:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong>Access Controls:</strong> Limited access on a need-to-know basis</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
              <li><strong>Secure Infrastructure:</strong> Industry-standard hosting and backup systems</li>
              <li><strong>Employee Training:</strong> Regular privacy and security training for our team</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">5. Your Rights and Choices</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Access and Control</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Access and update your personal information</li>
                <li>Download a copy of your data</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control your profile visibility to employers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Manage email notification settings</li>
                <li>Choose frequency of job alerts</li>
                <li>Unsubscribe from marketing emails</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">6. Data Retention</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">We retain your information for as long as necessary to provide our services:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Active Accounts:</strong> While your account remains active</li>
              <li><strong>Inactive Accounts:</strong> Up to 2 years after last activity</li>
              <li><strong>Legal Requirements:</strong> As required by applicable laws</li>
              <li><strong>Legitimate Interests:</strong> For fraud prevention and security</li>
            </ul>
            <p className="text-gray-600 mt-4">You can request deletion of your data at any time by contacting us.</p>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">7. Cookies and Tracking</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure platform security and prevent fraud</li>
            </ul>
            <p className="text-gray-600 mt-4">You can control cookie settings through your browser preferences.</p>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">8. Policy Updates</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through our platform. 
              Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <h2 className="text-2xl font-bold">9. Contact Us</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">privacy@talentrix.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Address: Islamabad, Pakistan
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
