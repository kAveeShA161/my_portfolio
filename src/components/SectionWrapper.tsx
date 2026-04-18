import React from 'react';
import { motion } from 'framer-motion';

export const siteContainerClassName =
  'mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}
export function SectionWrapper({
  children,
  id,
  className = '',
  delay = 0
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 ${className}`}
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}>

      <div className={siteContainerClassName}>{children}</div>
    </motion.section>);

}
export function SectionHeader({
  title,
  subtitle



}: {title: string;subtitle?: string;}) {
  return (
    <div className="mb-16 md:mb-24 text-center md:text-left">
      <motion.h2
        className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4"
        initial={{
          opacity: 0,
          x: -20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.5
        }}>
        
        {title}
      </motion.h2>
      {subtitle &&
      <motion.p
        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
        initial={{
          opacity: 0,
          x: -20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.5,
          delay: 0.1
        }}>
        
          {subtitle}
        </motion.p>
      }
    </div>);

}
