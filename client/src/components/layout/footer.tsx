import { Link } from "wouter";
import { Users } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Talentrix</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting exceptional talent with leading companies. Your trusted partner in career growth and recruitment excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/thetalentrix/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
  <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h5 className="text-primary font-semibold mb-4">For Job Seekers</h5>
            <ul className="space-y-2">
              <li><Link href="/jobs" className="text-gray-300 hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link href="/talent-pool" className="text-gray-300 hover:text-primary transition-colors">Join Talent Pool</Link></li>
              <li><Link href="/resume-builder" className="text-gray-300 hover:text-primary transition-colors">Resume Builder</Link></li>
              <li><Link href="/interview-tips" className="text-gray-300 hover:text-primary transition-colors">Interview Tips</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h5 className="text-primary font-semibold mb-4">For Employers</h5>
            <ul className="space-y-2">
              <li><Link href="/hire-talent" className="text-gray-300 hover:text-primary transition-colors">Hire Talent</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Post Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-primary font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Talentrix. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for career success
          </p>
        </div>
      </div>
    </footer>
  );
}
