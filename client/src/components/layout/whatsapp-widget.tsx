import { MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function WhatsAppWidget() {
  const [location] = useLocation();
  const whatsappNumber = "923461213444";
  const message = "Hi! I'd like to know more about your recruitment services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Only show WhatsApp widget on contact page
  if (location !== '/contact') {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}
