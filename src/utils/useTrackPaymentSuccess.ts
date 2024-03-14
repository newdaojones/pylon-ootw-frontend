import { useEffect } from 'react';

const useTrackPaymentSuccess = (paidStatus: string) => {
  useEffect(() => {
    try {
      if (paidStatus === 'paid' && !(window as any).fbq) {
        // Initialize Meta Pixel
        (function () {
          const fbq = (window as any).fbq = (window as any).fbq || function () {
            fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
          };
          if (!(window as any)._fbq) (window as any)._fbq = fbq;
          fbq.push = fbq;
          fbq.loaded = true;
          fbq.version = '2.0';
          fbq.queue = [];
          const el = document.createElement('script');
          el.async = true;
          el.src = 'https://connect.facebook.net/en_US/fbevents.js';
          el.onerror = () => {
            console.error('Failed to load Meta Pixel script.');
          };
          const scr = document.getElementsByTagName('script')[0];
          scr?.parentNode?.insertBefore(el, scr);
        })();
        (window as any).fbq('init', '858549085925794');
        (window as any).fbq('track', 'PageView');
      }
    } catch (error) {
      console.error('Error initializing Meta Pixel:', error);
    }
  }, [paidStatus]);
};

export default useTrackPaymentSuccess;