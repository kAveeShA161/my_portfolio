import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { ChevronDownIcon, ExternalLinkIcon, GithubIcon, FilterIcon } from 'lucide-react';
const projectsData = [
  {
    id: 1,
    title: 'TaskFlow',
    description:
      'Built a full-stack task management platform with features like task CRUD, dashboard analytics, mood tracking, focus streaks, and AI-powered task planning using Google Gemini API. Implemented secure authentication with JWT, email verification, and OTP-based password reset, and deployed using AWS Lambda and Vercel with CI/CD automation via GitHub Actions and Docker.',
    image:
      '/my_portfolio/images/TaskFlow_Image.png',
    tags: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Cookie Parser', 'Google Gemini API', 'AWS Lambda', 'Vercel', 'GitHub Actions', 'Docker', 'CI/CD', 'REST API', 'Full-Stack Development', 'Authentication', 'Cloud Deployment'],
    liveUrl: 'https://ai-based-to-do-app.vercel.app/',
    githubUrl: 'https://github.com/kAveeShA161/AI_Based_To_Do_App'
  },
  {
    id: 2,
    title: 'Maternal & Child Health Management System - Ongoing Project',
    description:
      'Built a full-stack healthcare management system to digitize maternal and child health records and improve healthcare operations for MOH Office, Imbulpe, Sri Lanka. Designed responsive interfaces for efficient patient data handling and implemented secure authentication, encrypted data processing, REST APIs, and scalable database architecture to ensure reliability and data integrity.',
    image:
      '/my_portfolio/images/MOH_Imbulpe.png',
    tags: ['React','TypeScript','Vite','Node.js','Express.js','PostgreSQL','Prisma','Tailwind CSS','Radix UI','JWT','REST API','Zod','Authentication','Data Security','Healthcare Technology','Full-Stack Development','Team Leadership','Database Management'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Brain Tumor Classifier',
    description:
      'Built a brain tumor classifier using convolutional neural networks (CNNs) to analyze MRI scans and identify tumor types. Focused on data preprocessing, model optimization, and improving prediction accuracy for reliable results.',
    image:
      '/my_portfolio/images/Brain_Tumor.png',
    tags: ['Python', 'Flask', 'React', 'TensorFlow', 'Keras', 'CNN', 'Deep Learning', 'Machine Learning', 'Medical Imaging', "Jupyter Notebook", 'Web Development', 'Full-Stack Development', 'Database Management', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/kAveeShA161/Brain_Tumor_Classifier'
  },
  {
    id: 4,
    title: 'Truth Lab - AI-Based Fake News Detector',
    description:
      'Created Truth Lab, a solution aimed at combating misinformation by analyzing content and providing credibility insights. The project highlights the role of technology in building a more informed and trustworthy digital space.',
    image:
      '/my_portfolio/images/TruthLab.png',
    tags: ['React', 'Flask', 'MongoDB', 'NLP', 'TensorFlow', 'Python', 'Machine Learning', 'Web Development', 'Full-Stack Development', 'Database Management', 'Git', 'Github', 'Figma'],
    liveUrl: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_computerscience-miniproject-artificialintelligence-activity-7444394599189680128-V8ZU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
    githubUrl: 'https://github.com/SE5104-Mini-Project-Group-08/TruthLab'
  },
  {
    id: 5,
    title: 'University Sports Management System',
    description:
      'Built a University Sports Management System to manage student registrations, team creation, and sports activities efficiently. Key features include a role-based admin panel, interactive community page, and an online store with inventory management.',
    image:
      '/my_portfolio/images/SportsMS.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'PHP', 'Laravel', 'Web Development', 'Full-Stack Development', 'Database Management', 'Git', 'Github', 'Figma'],
    liveUrl: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_webdevelopment-laravel-mysql-activity-7360600358462676993-9zsI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
    githubUrl: 'https://github.com/kAveeShA161/Sport_Management_System_WebProject'
  },
  {
    id: 6,
    title: 'MT Hospital Service Website',
    description:
      'A responsive web application designed to provide easy access to healthcare services and medicine ordering. Features include intuitive navigation, an online pharmacy order form, and user registration functionality. Built using HTML and CSS with a focus on simplicity and usability.',
    image:
      '/my_portfolio/images/MTHospital.png',
    tags: ['HTML5', 'CSS3', 'Frontend Development', 'Web Development'],
    liveUrl: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_webdevelopment-html-css-activity-7304880146975514625-NLgf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
    githubUrl: 'https://github.com/kAveeShA161/MTHospitalService'
  }];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, []);
  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);
  return (
    <SectionWrapper id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        title="Featured Projects"
        subtitle="My recent work." />


      {/* Filter Bar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <FilterIcon
            size={16}
            className="text-slate-400 dark:text-slate-500" />

          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Filter by skill
          </span>
        </div>
        <div className="relative max-w-xs">
          <button
            type="button"
            onClick={() => setIsFilterOpen((open) => !open)}
            aria-expanded={isFilterOpen}
            aria-haspopup="listbox"
            className="flex w-full items-center justify-between gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-accent-500 hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-accent-500 dark:hover:text-accent-400">
            <span className="truncate">{activeFilter}</span>
            <ChevronDownIcon
              size={18}
              className={`shrink-0 text-slate-400 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isFilterOpen &&
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -8
                }}
                transition={{
                  duration: 0.18
                }}
                className="absolute left-0 top-full z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-950/30"
                role="listbox">
                {allTags.map((tag) =>
                  <button
                    key={tag}
                    type="button"
                    role="option"
                    aria-selected={activeFilter === tag}
                    onClick={() => {
                      setActiveFilter(tag);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${activeFilter === tag ? 'bg-accent-600 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-accent-600 dark:text-slate-300 dark:hover:bg-slate-700/70 dark:hover:text-accent-400'}`}>
                    {tag}
                  </button>
                )}
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) =>
            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-accent-500/5 dark:hover:shadow-accent-500/10 transition-all duration-300">

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

              </div>

              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) =>
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${activeFilter === tag ? 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>

                      {tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">

                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">

                    <GithubIcon size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      <AnimatePresence>
        {filteredProjects.length === 0 &&
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="text-center py-16">

            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found with{' '}
              <span className="font-semibold text-accent-600 dark:text-accent-400">
                {activeFilter}
              </span>
              . Try a different filter.
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </SectionWrapper>);

}
