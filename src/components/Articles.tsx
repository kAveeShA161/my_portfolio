import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  FilterIcon } from
'lucide-react';
interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  image: string;
  tags: string[];
}
const articlesData: Article[] = [
{
  id: 1,
  title: 'What is Docker Compose? How to Dockerize a MERN Application',
  excerpt:
  "In this article, I’ve broken down how Docker Compose helps us manage multiple containers (client, server, and database) using just one file and one command.To keep things simple, I’ve used a MERN application as an example and explained everything step by step in a beginner-friendly way.",
  date: 'Apr 14, 2026',
  readTime: '2 min read',
  url: 'https://www.linkedin.com/pulse/what-docker-compose-how-dockerize-mern-application-kaveesha-sewmini-k8flc',
  image:
  'my_portfolio/public/images/DockerCompose.png',
  tags: ['Docker', 'DockerCompose']
},
{
  id: 2,
  title: 'What is a Docker Volume? Build your first Docker Volume',
  excerpt:
  'A practical article that explores how Docker Volumes solve critical challenges like data loss and lack of real-time updates in containerized applications. Covers volume types, essential commands, and demonstrates how tools like Nodemon enable efficient live development workflows.',
  date: 'Apr 8, 2026',
  readTime: '3 min read',
  url: 'https://www.linkedin.com/pulse/what-docker-volume-build-your-first-kaveesha-sewmini-jsq3c',
  image:
  'my_portfolio/public/images/DockerVolume.png',
  tags: ['Docker', 'DockerVolume']
},
{
  id: 3,
  title: 'Top 15 Docker Commands Every Beginner Should Know',
  excerpt:
  'A comprehensive guide designed to help developers master essential Docker CLI commands for building images, running containers, monitoring system status, and maintaining a clean development environment. Focused on simplifying containerization for beginners.',
  date: 'Apr 1, 2026',
  readTime: '3 min read',
  url: 'https://www.linkedin.com/pulse/top-15-docker-commands-every-beginner-should-know-kaveesha-sewmini-h0oec',
  image:
  'my_portfolio/public/images/DockerCommands.png',
  tags: ['Docker', 'DockerCommands']
},
{
  id: 4,
  title: 'What is a Dockerfile? How to Create Your First Docker Image (Step-by-Step Guide)',
  excerpt:
  'A hands-on guide that walks through creating and using Dockerfiles to build and run containerized applications. Demonstrates key instructions and explains the concept of Docker images as static snapshots, emphasizing the need for rebuilding when code changes.',
  date: 'Mar 31, 2026',
  readTime: '2 min read',
  url: 'https://www.linkedin.com/pulse/what-dockerfile-how-create-your-first-docker-image-guide-sewmini-kmucc',
  image:
  'my_portfolio/public/images/Dockerfile.png',
  tags: ['Docker', 'Dockerfile']
},
{
  id: 5,
  title: 'Understanding Docker Architecture',
  excerpt:
  'A detailed guide that explains the core components of Docker, including the Client, Daemon, Host, Registry, Images, Containers, and Volumes. The article breaks down the complete workflow from Dockerfile to running containers, helping beginners build a solid foundation in containerization and DevOps.',
  date: 'Feb 28, 2026',
  readTime: '3 min read',
  url: 'https://www.linkedin.com/pulse/understanding-docker-architecture-client-daemon-host-registry-rlfac',
  image:
  'my_portfolio/public/images/DockerArchitecture.jpeg',
  tags: ['Docker', 'DockerArchitecture']
},
{
  id: 6,
  title: 'Understanding Docker: Containers vs Virtual Machines',
  excerpt:
  'A beginner-friendly guide that explains the fundamentals of Docker and compares containers with traditional virtual machines. The article highlights how containerization improves efficiency, consistency, and portability in modern software development.',
  date: 'Feb 27, 2026',
  readTime: '3 min read',
  url: 'https://www.linkedin.com/pulse/what-docker-kaveesha-sewmini-m7fec',
  image:
  'my_portfolio/public/images/Dockerintro.png',
  tags: ['Docker']
},{
  id: 7,
  title: 'Bcrypt Password Verification in Python',
  excerpt:
  'A cybersecurity-focused article that explains secure password hashing using bcrypt. Covers key concepts such as salting, key stretching, and secure verification techniques, along with practical Python implementation examples to demonstrate modern authentication best practices.',
  date: 'Dec 21, 2025',
  readTime: '4 min read',
  url: 'https://medium.com/@kaveeshasewmini161/bcrypt-password-verification-in-python-9dfa3fa2fa00',
  image:
  'my_portfolio/public/images/Bcrypt.jpeg',
  tags: ['Python', 'Bcrypt']
},
{
  id: 8,
  title: 'Tuple Packing & Unpacking in Python',
  excerpt:
  'A beginner-friendly article that explains how tuples work in Python, including tuple creation, nested tuples, and the concepts of packing and unpacking. Demonstrates how to efficiently assign and extract values while avoiding common errors.',
  date: 'Apr 18, 2025',
  readTime: '2 min read',
  url: 'https://www.linkedin.com/pulse/tuple-packing-unpacking-python-kaveesha-sewmini-n4kaf',
  image:
  'my_portfolio/public/images/PythonTuplePU.png',
  tags: ['Python', 'Tuple']
},
{
  id: 9,
  title: 'Quantum Computing: The Next Tech Revolution — What You Need to Know',
  excerpt:
  'A beginner-friendly article that explores the fundamentals of quantum computing, including qubits and superposition, and discusses its potential impact on areas such as cryptography, AI, and drug discovery, along with current challenges and future possibilities.',
  date: 'Apr 13, 2025',
  readTime: '3 min read',
  url: 'https://medium.com/@kaveeshasewmini161/quantum-computing-the-next-tech-revolution-what-you-need-to-know-aac6a7eb7df7',
  image:
  'my_portfolio/public/images/QuantumComputing.png',
  tags: ['QuantumComputing']
}
];

export function Articles() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articlesData.forEach((a) => a.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, []);
  const filteredArticles = useMemo(() => {
    if (activeFilter === 'All') return articlesData;
    return articlesData.filter((a) => a.tags.includes(activeFilter));
  }, [activeFilter]);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <SectionWrapper id="articles" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeader
        title="Recent Articles"
        subtitle="" />
      

      {/* Filter Bar */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FilterIcon
            size={16}
            className="text-slate-400 dark:text-slate-500" />
          
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Filter by topic
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

      {/* Carousel Controls */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scroll('left')}
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-all shadow-sm"
          aria-label="Scroll left">
          
          <ArrowLeftIcon size={18} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-all shadow-sm"
          aria-label="Scroll right">
          
          <ArrowRightIcon size={18} />
        </button>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) =>
          <motion.article
            key={article.id}
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
            className="group flex-shrink-0 w-[340px] md:w-[360px] snap-start bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-accent-500/5 dark:hover:shadow-accent-500/10 transition-all duration-300">
            
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  {article.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 backdrop-blur-sm">
                  
                      {tag}
                    </span>
                )}
                </div>
              </div>

              <div className="flex flex-col p-6">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon size={13} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon size={13} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                <a
                href={article.url}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-400 mt-auto group-hover:gap-3 transition-all">
                
                  Read Article <ArrowRightIcon size={16} />
                </a>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        {filteredArticles.length === 0 &&
        <div className="flex items-center justify-center w-full py-16">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No articles found for{' '}
              <span className="font-semibold text-accent-600 dark:text-accent-400">
                {activeFilter}
              </span>
              .
            </p>
          </div>
        }
      </div>
    </SectionWrapper>);

}
