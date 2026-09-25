// Analytics and GA4 Event Hooks

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Generic GA4 Event dispatcher
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
    // Also track in dataLayer if configured
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    if (import.meta.env.DEV) {
      console.log(`[GA4 Event] ${eventName}:`, params);
    }
  } catch (err) {
    console.warn('[Analytics Error]', err);
  }
}

/**
 * Helper to track WhatsApp booking button clicks
 */
export function trackWhatsAppBooking(placement: string, serviceTitle?: string): void {
  trackEvent('whatsapp_booking_click', {
    placement,
    service_title: serviceTitle || 'general',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Helper to track Google Maps navigation link clicks
 */
export function trackMapsClick(placement: string): void {
  trackEvent('google_maps_click', {
    placement,
    destination: 'Panunggangan_Barat_Cibodas',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Helper to track direct telephone clicks
 */
export function trackPhoneCall(): void {
  trackEvent('phone_call_click', {
    phone_number: '085888417271',
    timestamp: new Date().toISOString(),
  });
}

/**
 * Helper to track FAQ accordion expansion
 */
export function trackFaqToggle(question: string, isOpen: boolean): void {
  trackEvent('faq_interaction', {
    question,
    action: isOpen ? 'opened' : 'closed',
    timestamp: new Date().toISOString(),
  });
}
