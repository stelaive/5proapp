'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  whileHover?: any
  whileTap?: any
  type?: 'button' | 'submit' | 'reset'
}

export default function AnimatedButton({ 
  children, 
  className = '',
  onClick,
  whileHover = { scale: 1.05, y: -2 },
  whileTap = { scale: 0.95 },
  type = 'button'
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
} 