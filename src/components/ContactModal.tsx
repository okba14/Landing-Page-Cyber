import React from 'react';
import { X, Phone, Mail, MessageCircle, Send, Facebook } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export function ContactModal({ isOpen, onClose, lang }: ContactModalProps) {
  if (!isOpen) return null;

  const text = {
    title: { en: 'Contact Us', ar: 'اتصل بنا' },
    close: { en: 'Close', ar: 'إغلاق' },
  };

  const contacts = [
    { icon: <Phone className="w-5 h-5" />, label: '(+2136)71.36.04.38' },
    { icon: <Mail className="w-5 h-5" />, label: 'techokba@gmail.com' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' },
    { icon: <Send className="w-5 h-5" />, label: 'Telegram' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{text.title[lang]}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {contact.icon}
              <span>{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}