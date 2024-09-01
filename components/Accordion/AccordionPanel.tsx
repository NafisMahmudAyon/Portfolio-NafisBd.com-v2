'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";

interface AccordionPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({ children, className }) => {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className={`${className}`}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
