// Analytics service for tracking user interactions
interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  customData?: Record<string, any>
}

class Analytics {
  private isProduction = process.env.NODE_ENV === 'production'
  
  // Track page views
  trackPageView(page: string, title?: string) {
    this.track({
      event: 'page_view',
      category: 'engagement',
      action: 'view',
      label: page,
      customData: {
        page_title: title,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Track content views
  trackContentView(contentType: string, contentId: string, contentTitle?: string) {
    this.track({
      event: 'view_content',
      category: 'content',
      action: 'view',
      label: contentType,
      customData: {
        content_id: contentId,
        content_title: contentTitle,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Track form submissions
  trackFormSubmission(formType: string, formData?: Record<string, any>) {
    this.track({
      event: 'form_submit',
      category: 'conversion',
      action: 'submit',
      label: formType,
      customData: {
        form_data: formData,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Track button clicks
  trackButtonClick(buttonText: string, buttonLocation: string) {
    this.track({
      event: 'button_click',
      category: 'engagement',
      action: 'click',
      label: buttonText,
      customData: {
        location: buttonLocation,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Track service interest
  trackServiceInterest(service: string, source: string) {
    this.track({
      event: 'service_interest',
      category: 'conversion',
      action: 'interest',
      label: service,
      customData: {
        source,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Track contact interactions
  trackContactInteraction(method: string, duration?: number) {
    this.track({
      event: 'contact_interaction',
      category: 'conversion',
      action: 'contact',
      label: method,
      value: duration,
      customData: {
        timestamp: new Date().toISOString()
      }
    })
  }

  // Main tracking function
  private track(event: AnalyticsEvent) {
    if (!this.isProduction) {
      console.log('Analytics Event:', event)
      return
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customData
      })
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', event.event, {
        content_category: event.category,
        content_name: event.label,
        value: event.value,
        ...event.customData
      })
    }

    // Server-side tracking (you can implement this with your backend)
    this.sendToServer(event)
  }

  // Send events to your server for additional tracking
  private async sendToServer(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          referrer: document.referrer
        })
      })
    } catch (error) {
      console.error('Failed to send analytics to server:', error)
    }
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Hook for React components
export const useAnalytics = () => {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackContentView: analytics.trackContentView.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackServiceInterest: analytics.trackServiceInterest.bind(analytics),
    trackContactInteraction: analytics.trackContactInteraction.bind(analytics)
  }
}
