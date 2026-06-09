import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}

export default function WhatsAppButton({
  phoneNumber = '8615661853999', // Default to your WhatsApp number
  message = 'Hello! I am interested in your cashmere products. Could you please provide more information?',
  position = 'bottom-right',
}: WhatsAppButtonProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after component mounts to avoid hydration issues
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    // Format the phone number (remove any non-digit characters except +)
    const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Web URL
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6';

  return (
    <AnimatePresence>
      <div className={`fixed ${positionClasses} z-50`}>
        {/* Chat bubble */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-80 mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  {t('whatsAppButton.chatTitle')}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  {t('whatsAppButton.chatIntro')}
                </p>

                <div className="bg-green-50 rounded p-3 border border-green-100">
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>{t('whatsAppButton.quickMessage')}</strong>
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    "{message}"
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('whatsAppButton.startChat')}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  {t('whatsAppButton.replyTime')}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-200 flex items-center justify-center group"
          title={t('whatsAppButton.tooltip')}
        >
          <MessageCircle className="w-6 h-6" />

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-75"></span>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {t('whatsAppButton.chatWithUs')}
          </div>
        </motion.button>

        {/* Optional: Floating label for first-time users */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-24 right-0 bg-gray-800 text-white text-xs rounded px-3 py-2 whitespace-nowrap pointer-events-none hidden sm:block"
          >
            {t('whatsAppButton.questionsChat')}
            <div className="absolute top-full right-2 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
