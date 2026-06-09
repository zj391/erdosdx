import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Tawk.to chat widget integration
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/1h0g2sr1f';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (window.Tawk_API) {
        window.Tawk_API.destroy();
      }
    };
  }, []);

  return null;
}

// Extend window type for Tawk
declare global {
  interface Window {
    Tawk_API?: {
      destroy: () => void;
      [key: string]: any;
    };
  }
}
