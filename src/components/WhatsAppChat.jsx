import React from "react";

const WhatsAppChat = () => {
  const whatsappLink = "https://wa.me/8277542358";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50"
    >
      <img className="h-8 w-8" src="/whatsapp.png" alt="WhatsApp Chat" />
    </a>
  );
};

export default WhatsAppChat;
