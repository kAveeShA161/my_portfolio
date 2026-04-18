import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { DownloadIcon, FileTextIcon } from 'lucide-react';
import { RESUME_FILE_NAME, RESUME_FILE_PATH } from '../constants/resume';
export function ResumeDownload() {
  return (
    <SectionWrapper id="resume" className="bg-white dark:bg-slate-950">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        whileInView={{
          opacity: 1,
          scale: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-900 border border-slate-800">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-sm border border-white/10">
            <FileTextIcon size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Looking for my Resume?
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mb-10">
            Download my complete resume to see my full work history, educational
            background, and a comprehensive list of my technical skills.
          </p>

          <motion.a
            href={RESUME_FILE_PATH}
            download={RESUME_FILE_NAME}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-500 hover:bg-accent-400 text-white font-semibold shadow-lg shadow-accent-500/25 transition-colors">
            
            <DownloadIcon size={20} />
            Download Resume (PDF)
          </motion.a>
        </div>
      </motion.div>
    </SectionWrapper>);

}
