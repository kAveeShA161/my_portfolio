import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { siteContainerClassName } from './SectionWrapper';
const navLinks = [
{
  name: 'About',
  href: '#home'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Articles',
  href: '#articles'
},
{
  name: 'Certifications',
  href: '#certificates'
},
{
  name: 'Volunteering',
  href: '#extracurricular'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
      element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}>
      
      <div className={`${siteContainerClassName} flex items-center justify-between`}>
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-xl font-heading font-bold tracking-tight text-slate-900 dark:text-white">
          
          Kaveesha<span className="text-accent-600 dark:text-accent-400">.me</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) =>
            <li key={link.name}>
                <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400 transition-colors">
                
                  {link.name}
                </a>
              </li>
            )}
          </ul>

          <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.nav
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
          
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
            <li key={link.name}>
                  <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-2 text-base font-medium text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400 transition-colors">
                
                    {link.name}
                  </a>
                </li>
            )}
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </motion.header>);

}
