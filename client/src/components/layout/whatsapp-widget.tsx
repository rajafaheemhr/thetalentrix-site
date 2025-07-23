import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappNumber = "15551234567";
  const message = "Hi! I'd like to know more about your recruitment services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
