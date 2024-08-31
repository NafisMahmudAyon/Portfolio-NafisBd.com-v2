import React from "react";

interface AccordionItemProps {
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => {
  return <div className="AccordionItem">{children}</div>;
};
