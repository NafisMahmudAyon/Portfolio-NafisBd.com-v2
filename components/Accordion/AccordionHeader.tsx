'use client'
import React from "react";
import { motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";

interface AccordionHeaderProps {
  children: React.ReactNode;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`AccordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
};
