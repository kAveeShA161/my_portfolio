import {
  ArrowUpIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon } from
'lucide-react';
import { siteContainerClassName } from './SectionWrapper';

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className={siteContainerClassName}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              className="text-xl font-heading font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              
              Kaveesha
              <span className="text-accent-600 dark:text-accent-400">.me</span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Kaveesha Sewmini. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kAveeShA161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              
              <GithubIcon size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kaveesha-sewmini-6862142b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              
              <LinkedinIcon size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.hackerrank.com/profile/Kavee161"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              
              <HackerRankIcon size={20} />
              <span className="sr-only">HackerRank</span>
            </a>
            <a
              href="mailto:kaveeshasewmini161@gmail.com"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              
              <MailIcon size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Back to top">
            
            <ArrowUpIcon size={20} />
          </button>
        </div>
      </div>
    </footer>);

}
