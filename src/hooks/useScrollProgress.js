import { useState, useEffect } from 'react'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    const pageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    )

    const vh = window.innerHeight

    const handleScrollProgress = () => {
      setScrollProgress(parseInt((window.pageYOffset / (pageHeight - vh)) * 100))
    }

    window.addEventListener('scroll', handleScrollProgress)

    return () => window.removeEventListener('scroll', handleScrollProgress)
  }, [])

  return scrollProgress
}
