import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useLocation } from "wouter";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Website knowledge base - extracted from your actual website content
const websiteKnowledge = {
  company: {
    name: "Talentrix",
    founded: "2022",
    founder: "Raja Faheem Shoukat",
    ceo: "Raja Faheem Shoukat",
    location: "Islamabad, Pakistan",
    description: "Pakistan's leading recruitment platform, connecting exceptional talent with outstanding opportunities"
  },
  team: {
    "Raja Faheem Shoukat": "Founder & CEO - Visionary leader with extensive experience in HR technology and talent acquisition",
    "Zahwa Nadeem": "Marketing Head - Strategic marketing professional with expertise in digital marketing and brand development",
    "Anum Zafar": "Head of Finance & Accounting - Financial expert ensuring robust financial management and strategic planning"
  },
  services: [
    "Talent Acquisition - End-to-end recruitment services from job posting to final placement",
    "Executive Search - Specialized recruitment for senior management and C-level positions",
    "HR Consulting - Strategic HR guidance, process optimization, and organizational development",
    "Bulk Hiring - Large-scale recruitment solutions for multiple positions",
    "Career Services - Resume building, interview preparation, and career guidance",
    "Temporary Staffing - Flexible staffing solutions for short-term projects"
  ],
  industries: [
    "Information Technology",
    "Banking & Finance",
    "Healthcare",
    "Telecommunications",
    "Education",
    "Retail & E-commerce",
    "Media & Advertising"
  ],
  pricing: {
    starter: "PKR 15,000/month - Perfect for small businesses, up to 3 job postings, basic features",
    professional: "PKR 35,000/month - Ideal for growing companies, up to 10 job postings, advanced features, dedicated manager",
    enterprise: "PKR 75,000/month - For large organizations, unlimited postings, full-service recruitment"
  },
  contact: {
    email: "info@talentrix.com",
    phone: "+92 300 1234567",
    office: "Islamabad, Pakistan",
    privacyEmail: "privacy@talentrix.com"
  },
  stats: {
    companies: "50+",
    placements: "200+",
    satisfaction: "95%",
    faster: "40%"
  },
  mission: "To democratize access to career opportunities by connecting talented individuals with companies that value their skills",
  vision: "To become the leading recruitment ecosystem in South Asia, where every professional finds meaningful work"
};

const getIntelligentResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
    return "Hello! Welcome to Talentrix! I'm your AI assistant and I know everything about our company. Feel free to ask me anything - about our team, services, pricing, or company information. How can I help you today?";
  }

  // Company and team queries
  if (message.includes('owner') || message.includes('founder') || message.includes('ceo') || message.includes('who owns') || message.includes('who founded')) {
    return `Talentrix was founded by ${websiteKnowledge.company.founder} in ${websiteKnowledge.company.founded}. He is also our CEO and leads the company with extensive experience in HR technology and talent acquisition. Would you like to know more about our leadership team?`;
  }

  if (message.includes('raja faheem') || message.includes('ceo') || message.includes('founder')) {
    return `${websiteKnowledge.team["Raja Faheem Shoukat"]}. He founded Talentrix in ${websiteKnowledge.company.founded} and continues to lead our mission of transforming recruitment in Pakistan.`;
  }

  if (message.includes('team') || message.includes('staff') || message.includes('employees') || message.includes('who works')) {
    return `Our core team includes:\n\n• ${websiteKnowledge.company.founder} - Founder & CEO\n• ${Object.keys(websiteKnowledge.team)[1]} - Marketing Head\n• ${Object.keys(websiteKnowledge.team)[2]} - Head of Finance & Accounting\n\nWould you like to know more about any specific team member?`;
  }

  if (message.includes('zahwa') || message.includes('marketing')) {
    return websiteKnowledge.team["Zahwa Nadeem"];
  }

  if (message.includes('anum') || message.includes('finance') || message.includes('accounting')) {
    return websiteKnowledge.team["Anum Zafar"];
  }

  // Company information
  if (message.includes('about') || message.includes('company') || message.includes('talentrix') || message.includes('what is')) {
    return `Talentrix is ${websiteKnowledge.company.description}. Founded in ${websiteKnowledge.company.founded} by ${websiteKnowledge.company.founder}, we're based in ${websiteKnowledge.company.location}. We've successfully served ${websiteKnowledge.stats.companies} companies with ${websiteKnowledge.stats.placements} successful placements and maintain ${websiteKnowledge.stats.satisfaction} client satisfaction.`;
  }

  if (message.includes('when') && (message.includes('founded') || message.includes('started') || message.includes('established'))) {
    return `Talentrix was founded in ${websiteKnowledge.company.founded} by ${websiteKnowledge.company.founder}. We started with a vision to transform the recruitment landscape in Pakistan.`;
  }

  if (message.includes('where') || message.includes('location') || message.includes('office') || message.includes('address')) {
    return `Our office is located in ${websiteKnowledge.company.location}. You can visit us or contact us at:\n📧 ${websiteKnowledge.contact.email}\n📞 ${websiteKnowledge.contact.phone}`;
  }

  // Services with qualifying questions
  if (message.includes('service') || message.includes('what do you do') || message.includes('offer') || message.includes('help with')) {
    return `We offer comprehensive recruitment solutions:\n\n${websiteKnowledge.services.map(service => `• ${service}`).join('\n')}\n\nTo better assist you, I'd like to know:\n🔹 Are you looking to hire talent or find a job?\n🔹 Which industry are you in?\n🔹 What type of positions are you interested in?\n\nThis will help me provide more specific information!`;
  }

  if (message.includes('industry') || message.includes('sector') || message.includes('field')) {
    return `We serve clients across these industries:\n\n${websiteKnowledge.industries.map(industry => `• ${industry}`).join('\n')}\n\nDo you need talent in any of these sectors?`;
  }

  // Pricing with qualifying questions
  if (message.includes('price') || message.includes('cost') || message.includes('plan') || message.includes('pricing') || message.includes('how much')) {
    return `I'd be happy to help you find the right pricing plan! Our plans are:\n\n• Starter: ${websiteKnowledge.pricing.starter}\n• Professional: ${websiteKnowledge.pricing.professional}\n• Enterprise: ${websiteKnowledge.pricing.enterprise}\n\nTo recommend the best plan for you, could you tell me:\n🔹 How many positions do you typically hire per month?\n🔹 What's the size of your company?\n🔹 Do you need dedicated account management?\n\nThis will help me suggest the perfect plan for your needs!`;
  }

  // Contact information with next steps
  if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
    return `You can contact us through:\n\n📧 Email: ${websiteKnowledge.contact.email}\n📞 Phone: ${websiteKnowledge.contact.phone}\n📍 Office: ${websiteKnowledge.contact.office}\n\nBefore you contact us, let me help you get prepared:\n🔹 Are you interested in our services as an employer or job seeker?\n🔹 Do you have any specific questions about pricing or services?\n🔹 Would you prefer a call back or email response?\n\nThis will help our team assist you better!`;
  }

  // Statistics
  if (message.includes('stats') || message.includes('numbers') || message.includes('how many') || message.includes('clients') || message.includes('placements')) {
    return `Here are our key achievements:\n\n• ${websiteKnowledge.stats.companies} companies served\n• ${websiteKnowledge.stats.placements} successful placements\n• ${websiteKnowledge.stats.satisfaction} client satisfaction rate\n• ${websiteKnowledge.stats.faster} faster hiring process\n\nWe're proud of our growing impact in Pakistan's recruitment industry!`;
  }

  // Mission and vision
  if (message.includes('mission') || message.includes('goal') || message.includes('purpose')) {
    return `Our mission: ${websiteKnowledge.mission}`;
  }

  if (message.includes('vision') || message.includes('future') || message.includes('aspiration')) {
    return `Our vision: ${websiteKnowledge.vision}`;
  }

  // Jobs and careers with qualifying questions
  if (message.includes('job') || message.includes('career') || message.includes('opportunity') || message.includes('hiring') || message.includes('vacancy')) {
    return `Great! We help connect talent with opportunities across ${websiteKnowledge.industries.length} industries. To provide the best assistance:\n\n🔹 Are you a job seeker or an employer looking to hire?\n🔹 Which industry/field interests you?\n🔹 What level of positions (entry, mid, senior, executive)?\n🔹 Are you looking in Pakistan or internationally?\n\nBased on your answers, I can guide you to the right resources and next steps!`;
  }

  // Specific responses to user answers
  if (message.includes('small business') || message.includes('startup') || (message.includes('1') || message.includes('2') || message.includes('3')) && message.includes('position')) {
    return `Perfect! For small businesses hiring 1-3 positions per month, our **Starter Plan (PKR 15,000/month)** would be ideal. It includes:\n• Up to 3 job postings\n• Access to talent pool\n• Basic screening\n• 30-day replacement guarantee\n\nWould you like me to connect you with our team to get started?`;
  }

  if (message.includes('growing company') || message.includes('medium') || (message.includes('5') || message.includes('10')) && message.includes('position')) {
    return `Excellent! For growing companies, our **Professional Plan (PKR 35,000/month)** is perfect. It offers:\n• Up to 10 job postings\n• Dedicated account manager\n• Advanced screening\n• 60-day replacement guarantee\n• Priority support\n\nShall I arrange a demo for you?`;
  }

  if (message.includes('large') || message.includes('enterprise') || message.includes('unlimited') || message.includes('many position')) {
    return `Great! For large organizations, our **Enterprise Plan (PKR 75,000/month)** provides:\n• Unlimited job postings\n• Dedicated recruitment team\n• Custom integrations\n• 90-day replacement guarantee\n• 24/7 support\n\nI'd recommend speaking with our enterprise team. Should I arrange a consultation?`;
  }

  if (message.includes('resume') || message.includes('cv') || message.includes('resume builder')) {
    return `Great! Our resume builder tool helps create professional, ATS-friendly resumes. To give you the best guidance:\n\n🔹 What's your experience level (entry, mid-level, senior)?\n🔹 Which industry/field are you targeting?\n🔹 Do you have an existing resume that needs improvement?\n🔹 Are you applying for specific types of roles?\n\nBased on your answers, I can provide specific tips and direct you to our resume builder tool!`;
  }

  if (message.includes('job seeker') || message.includes('looking for job') || message.includes('find job')) {
    return `Wonderful! As a job seeker, we offer several free services:\n• Browse our job portal\n• Join our talent pool for exclusive opportunities\n• Use our resume builder tool\n• Get interview preparation tips\n\nWhich industry are you interested in? We serve ${websiteKnowledge.industries.join(', ')}. I can guide you to relevant opportunities!`;
  }

  if (message.includes('employer') || message.includes('hire') || message.includes('recruit')) {
    return `Perfect! As an employer, we can help you find the right talent. Let me ask:\n🔹 What positions are you looking to fill?\n🔹 How urgently do you need to hire?\n🔹 What's your typical hiring volume per month?\n\nBased on this, I can recommend the best approach and pricing plan for your needs!`;
  }

  // Industry-specific responses
  if (websiteKnowledge.industries.some(industry => message.includes(industry.toLowerCase()))) {
    const matchedIndustry = websiteKnowledge.industries.find(industry => message.includes(industry.toLowerCase()));
    return `Excellent! We have strong expertise in ${matchedIndustry}. We've successfully placed candidates and helped companies hire in this sector.\n\n🔹 Are you looking for permanent or temporary positions?\n🔹 What level of experience (entry, mid, senior)?\n🔹 Any specific skills or certifications required?\n\nI can connect you with our specialized recruiters for ${matchedIndustry}!`;
  }

  // Default intelligent response
  return `I have comprehensive knowledge about Talentrix - our team, services, pricing, company history, and more. Could you please rephrase your question or ask about something specific like:\n\n• Our founder and team\n• Services we offer\n• Pricing plans\n• Company information\n• Contact details\n\nWhat would you like to know?`;
};

export default function Chatbot() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Talentrix Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getIntelligentResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "Do you help with resume building?",
    "Can you help me find a job?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => sendMessage(), 100);
  };

  // Don't show chatbot on contact page
  if (location === '/contact') {
    return null;
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        )}

        {isOpen && (
          <Card className="w-80 h-96 shadow-2xl border-0 overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Talentrix Assistant</h3>
                    <p className="text-xs opacity-90">Online now</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 h-auto"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="p-0 h-64 overflow-y-auto bg-gray-50">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-purple-500 text-white'
                          : 'bg-white text-gray-800 border'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-4 h-4 mt-0.5 text-purple-500 flex-shrink-0" />
                        )}
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        {message.sender === 'user' && (
                          <User className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border px-3 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-purple-500" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left p-2 text-xs bg-white border rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            {/* Input */}
            <div className="p-3 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-purple-500 hover:bg-purple-600 p-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}
