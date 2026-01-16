
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: {
        page_path?: string
        event_category?: string
        event_label?: string
        value?: number
      }
    ) => void
    dataLayer: any[]
  }
}

export const trackEvent = (
  eventName: string,
  eventCategory: string = 'CTA Click',
  eventLabel: string = ''
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-EDDPQBE3QJ', {
      page_path: url,
    })
  }
}

export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return

  let maxScroll = 0
  const thresholds = [25, 50, 75, 100]

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollPercent = Math.round((scrollTop / docHeight) * 100)

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && maxScroll < threshold) {
        maxScroll = threshold
        trackEvent(`scroll_depth_${threshold}`, 'Engagement', `Scrolled ${threshold}%`)
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

