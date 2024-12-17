import React from 'react'

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className = ''
}) => {
  return <div className={`${className}`}>{children}</div>
}
