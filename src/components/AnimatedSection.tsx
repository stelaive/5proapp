'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: any
  whileInView?: any
  viewport?: any
  transition?: any
}

export default function AnimatedSection({ 
  children, 
  className = '',
  initial = { opacity: 0, y: 60 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, margin: "-100px" },
  transition = { duration: 0.6, ease: "easeOut" }
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  )
} 