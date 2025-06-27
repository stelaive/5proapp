'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  whileHover?: any
  initial?: any
  whileInView?: any
  viewport?: any
  transition?: any
}

export default function AnimatedCard({ 
  children, 
  className = '',
  whileHover = { y: -8, scale: 1.02 },
  initial = { opacity: 0, y: 50 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, margin: "-50px" },
  transition = { duration: 0.5, ease: "easeOut" }
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      whileHover={whileHover}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  )
} 