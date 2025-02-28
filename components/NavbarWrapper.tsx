'use client'

import { useEffect, useState } from 'react'
import NavBar from './Header/NavBar'

export const NavbarWrapper = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (timer) clearTimeout(timer)

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

      // Only set timer to hide if not hovering
      if (!isHovering) {
        const newTimer = setTimeout(() => {
          if (currentScrollPos > 10) {
            setVisible(false)
          }
        }, 3000)
        setTimer(newTimer)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, timer, isHovering])

  const handleMouseEnter = () => {
    setIsHovering(true)
    setVisible(true)
    if (timer) clearTimeout(timer)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Set timer to hide navbar after mouse leaves
    const newTimer = setTimeout(() => {
      if (window.scrollY > 10) {
        setVisible(false)
      }
    }, 3000)
    setTimer(newTimer)
  }

  return (
    <div 
      className={`hidden lg:block max-w-[calc(1440px_-_10%)] w-full fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'top-0 mt-10 opacity-100' : '-top-24 opacity-0'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavBar />
    </div>
  )
}

{/* Replace the original div with NavbarWrapper component */ }
<NavbarWrapper />