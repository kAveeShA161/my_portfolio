import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { ExternalLinkIcon, GithubIcon, FilterIcon } from 'lucide-react';
const projectsData = [
{
  id: 1,
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
  id: 2,
  title: 'Truth Lab - AI-Based Fake News Detector',
  description:
  'Created Truth Lab, a solution aimed at combating misinformation by analyzing content and providing credibility insights. The project highlights the role of technology in building a more informed and trustworthy digital space.',
  image:
  '/my_portfolio/images/TruthLab.png',
  tags: ['React', 'Flask', 'MongoDB','NLP', 'TensorFlow', 'Python', 'Machine Learning', 'Web Development', 'Full-Stack Development', 'Database Management', 'Git', 'Github', 'Figma'],
  liveUrl: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_computerscience-miniproject-artificialintelligence-activity-7444394599189680128-V8ZU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
  githubUrl: 'https://github.com/SE5104-Mini-Project-Group-08/TruthLab'
},
{
  id: 3,
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
  id: 4,
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
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) =>
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === tag ? 'bg-accent-600 dark:bg-accent-500 text-white shadow-md shadow-accent-500/20' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400'}`}>
            
              {tag}
            </button>
          )}
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
