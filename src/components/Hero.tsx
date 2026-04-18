import { useMemo, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  ArrowDownIcon,
  DownloadIcon,
  MailIcon } from
'lucide-react';
import { RESUME_FILE_NAME, RESUME_FILE_PATH } from '../constants/resume';
function HackerRankIcon({ size = 20 }: {size?: number;}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.22 14.12h-1.73c-.24 0-.39-.2-.39-.44v-2.97h-2.2v2.97c0 .24-.15.44-.39.44H8.78c-.24 0-.39-.2-.39-.44V8.32c0-.24.15-.44.39-.44h1.73c.24 0 .39.2.39.44v2.97h2.2V8.32c0-.24.15-.44.39-.44h1.73c.24 0 .39.2.39.44v7.36c0 .24-.15.44-.39.44z" />
    </svg>);

}
function ShiningParticles() {
  const particles = useMemo(() => {
    return Array.from(
      {
        length: 18
      },
      (_, i) => {
        const angle = i / 18 * Math.PI * 2 + Math.random() * 0.3;
        const radius = 150 + Math.random() * 72;
        const size = Math.random() * 5 + 4;
        const duration = 2.8 + Math.random() * 2.4;
        const delay = Math.random() * 2;
        const driftX = Math.random() * 18 - 9;
        const driftY = Math.random() * 18 - 9;
        const opacity = 0.45 + Math.random() * 0.35;
        return {
          id: i,
          angle,
          radius,
          size,
          duration,
          delay,
          driftX,
          driftY,
          opacity
        };
      }
    );
  }, []);
  return (
    <div className="absolute -inset-12 md:-inset-16 lg:-inset-20 pointer-events-none overflow-visible">
      {particles.map((p) => {
        const x = Math.cos(p.angle) * p.radius;
        const y = Math.sin(p.angle) * p.radius;
        return (
          <motion.span
            key={p.id}
            className="absolute left-1/2 top-1/2 z-10 rounded-full bg-accent-400 shadow-[0_0_18px_rgba(99,102,241,0.35)] dark:bg-accent-300 dark:shadow-[0_0_20px_rgba(165,180,252,0.45)] -translate-x-1/2 -translate-y-1/2"
            style={{
              width: p.size,
              height: p.size,
              marginLeft: x,
              marginTop: y,
              opacity: p.opacity
            }}
            animate={{
              opacity: [p.opacity * 0.35, p.opacity, p.opacity * 0.55, p.opacity],
              scale: [0.65, 1.25, 0.9, 1.15, 0.65],
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />);


      })}
    </div>);

}
export function Hero() {
  const scrollToEducation = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#education');
    if (element) {
      const offsetTop =
      element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1">
            
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium tracking-wide">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight text-balance">
              
              Crafting digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-indigo-500 dark:from-accent-400 dark:to-indigo-400">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
              
              I'm a full-stack developer specializing in building exceptional
              digital experiences. Currently focused on building accessible,
              human-centered products.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8">
              
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
                
                View My Work
              </a>
              <a
                href={RESUME_FILE_PATH}
                download={RESUME_FILE_NAME}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-accent-600 dark:border-accent-400 text-accent-600 dark:text-accent-400 font-medium hover:bg-accent-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-slate-900 transition-all">
                
                <DownloadIcon size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4">
              
              <a
                href="https://github.com/kAveeShA161"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all border border-slate-200 dark:border-slate-800">
                
                <GithubIcon size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kaveesha-sewmini-6862142b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all border border-slate-200 dark:border-slate-800">
                
                <LinkedinIcon size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.hackerrank.com/profile/Kavee161"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all border border-slate-200 dark:border-slate-800">
                
                <HackerRankIcon size={20} />
                <span className="sr-only">HackerRank</span>
              </a>
              <a
                href="mailto:kaveeshasewmini161@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all border border-slate-200 dark:border-slate-800">
              
              <MailIcon size={20} />
              <span className="sr-only">Email</span>
            </a>
            </motion.div>
          </motion.div>

          {/* Photo with Shining Particles */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative flex-shrink-0">
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-visible">
              {/* Shining particles */}
              <ShiningParticles />

              {/* Glow ring behind photo */}
              <div className="absolute inset-2 z-0 rounded-full bg-accent-500/20 dark:bg-accent-400/15 blur-xl" />

              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 z-20 rounded-full border-2 border-accent-500/30 dark:border-accent-400/20"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}>
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-500 dark:bg-accent-400 shadow-lg shadow-accent-500/50" />
              </motion.div>

              {/* Photo container */}
              <div className="absolute inset-4 z-30 md:inset-5 lg:inset-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="public/images/KaveehsaSewmini.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover" />
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}>
        
        <a
          href="#education"
          onClick={scrollToEducation}
          className="flex flex-col items-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">
            Scroll
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut'
            }}>
            
            <ArrowDownIcon size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>);

}
