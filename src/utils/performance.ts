// Performance monitoring utility for Core Web Vitals and other metrics

interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  fcp?: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initObservers()
  }

  private initObservers() {
    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry
          this.metrics.lcp = lastEntry.startTime
          this.logMetric('LCP', this.metrics.lcp)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        this.observers.push(lcpObserver)
      } catch (e) {
        console.warn('LCP observer failed:', e)
      }

      // FID (First Input Delay)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            this.metrics.fid = entry.processingStart - entry.startTime
            this.logMetric('FID', this.metrics.fid)
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        this.observers.push(fidObserver)
      } catch (e) {
        console.warn('FID observer failed:', e)
      }

      // CLS (Cumulative Layout Shift)
      try {
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          this.metrics.cls = clsValue
          this.logMetric('CLS', this.metrics.cls)
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(clsObserver)
      } catch (e) {
        console.warn('CLS observer failed:', e)
      }
    }

    // TTFB (Time to First Byte)
    this.measureTTFB()
    
    // FCP (First Contentful Paint)
    this.measureFCP()
  }

  private measureTTFB() {
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              this.metrics.ttfb = entry.responseStart - entry.requestStart
              this.logMetric('TTFB', this.metrics.ttfb)
            }
          })
        })
        navigationObserver.observe({ entryTypes: ['navigation'] })
        this.observers.push(navigationObserver)
      } catch (e) {
        console.warn('TTFB observer failed:', e)
      }
    }
  }

  private measureFCP() {
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const firstEntry = entries[0]
          this.metrics.fcp = firstEntry.startTime
          this.logMetric('FCP', this.metrics.fcp)
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
        this.observers.push(fcpObserver)
      } catch (e) {
        console.warn('FCP observer failed:', e)
      }
    }
  }

  private logMetric(name: string, value: number) {
    console.log(`Performance Metric - ${name}:`, value)
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        page_url: window.location.href
      })
    }
  }

  // Get current metrics
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  // Check if metrics meet Core Web Vitals thresholds
  checkCoreWebVitals(): {
    lcp: 'good' | 'needs-improvement' | 'poor'
    fid: 'good' | 'needs-improvement' | 'poor'
    cls: 'good' | 'needs-improvement' | 'poor'
  } {
    const lcp = this.metrics.lcp || 0
    const fid = this.metrics.fid || 0
    const cls = this.metrics.cls || 0

    return {
      lcp: lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs-improvement' : 'poor',
      fid: fid <= 100 ? 'good' : fid <= 300 ? 'needs-improvement' : 'poor',
      cls: cls <= 0.1 ? 'good' : cls <= 0.25 ? 'needs-improvement' : 'poor'
    }
  }

  // Measure custom performance
  measureCustom(name: string, fn: () => void) {
    const start = performance.now()
    fn()
    const duration = performance.now() - start
    this.logMetric(name, duration)
    return duration
  }

  // Cleanup observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor()

// Hook for React components
export const usePerformance = () => {
  return {
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
    checkCoreWebVitals: performanceMonitor.checkCoreWebVitals.bind(performanceMonitor),
    measureCustom: performanceMonitor.measureCustom.bind(performanceMonitor)
  }
}
