import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * Animations trigger every time the element enters the viewport.
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || '0px 0px -60px 0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return [ref, isVisible]
}

/**
 * Hook for staggered children reveal — triggers every time.
 */
export function useStaggerReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -40px 0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return [ref, isVisible]
}
