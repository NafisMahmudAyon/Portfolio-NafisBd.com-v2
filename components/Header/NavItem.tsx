'use client'
import React from 'react'
import { motion } from "framer-motion"

interface NavItemProps {
  text: string;
  className?: string;
  href?: string;
  target?: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, active, className="", href, target }) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    if (href) {
      if (target === '_blank') {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <motion.li
      className={`${className} ${active ? 'text-headingText dark:text-headingDarkText underline underline-offset-4' : 'text-normalText dark:text-normalDarkText hover:text-headingText dark:hover:text-headingDarkText hover:underline hover:underline-offset-4 underline-offset-4 '}`}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.li>
  )
}

export default NavItem;
