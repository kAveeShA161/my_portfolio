import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
interface Subject {
  name: string;
  grade: string;
}
interface EducationProgram {
  degree: string;
  period: string;
  description: string;
  subjects: Subject[];
}
interface EducationItem {
  id: number;
  institution: string;
  logo: string;
  programs: EducationProgram[];
}
const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Sabaragamuwa University of Sri Lanka',
    logo: '/images/Logo-SUSL.png',
    programs: [
      {
        degree: 'BSc(Hons) in Software Engineering',
        period: '2023 - Present',
        description:
          'Expected Graduation : 2027',
        subjects: [
          {
            name: 'Current GPA',
            grade: '3.71 / 4.0'
          }]
      }]

  },
  {

    id: 2,
    institution: 'ESOFT Metro Campus - Gampaha',
    logo: '/images/ESOFT_LOGO.png',
    programs: [
      {
        degree: 'Pearson Assured Diploma in Information Technology',
        period: '2022 - 2023',
        description:
          'Grade : Distinction',
        subjects: [
          {
            name: 'Information Technology Concepts',
            grade: '90%'
          },
          {
            name: 'Enhancing Productivity with MS Office',
            grade: '85%'
          },
          {
            name: 'Computer Hardware',
            grade: '88%'
          },
          {
            name: 'Network Technology',
            grade: '87%'
          },
          {
            name: 'Internet, Email & Web Design',
            grade: '85%'
          },
          {
            name: 'Graphics & Multimedia',
            grade: '88%'
          },
          {
            name: 'Software Engineering',
            grade: '87%'
          },
          {
            name: 'Programming with Python',
            grade: '80%'
          },
          {
            name: 'Database with SQL',
            grade: '73%'
          },
          {
            name: 'Programming with C#',
            grade: '77%'
          },
          {
            name: 'Final Project',
            grade: '52%'
          }]
      }
      ,
      {
        degree: 'Pearson Assured Diploma in English',
        period: '2022 - 2023',
        description: 'Grade : Distinction',
        subjects: [
          { name: 'Online Exam', grade: '84%' },
          { name: 'Reading and Writing', grade: '92%' },
          { name: 'Presentation with Viva', grade: '90%' },
          { name: 'Listening', grade: '90%' }
        ]
      }
    ]
  },
  {

    id: 3,
    institution: "Rathnavali Girls' College - Gampaha",
    logo: '/images/RBV_LOGO.jpeg',
    programs: [
      {
        degree: 'G.C.E. Advanced Level Examination',
        period: '2019 - 2021',
        description:
          'Stream : Physical Science | Z-Score : 1.4281',
        subjects: [
          {
            name: 'Physics',
            grade: 'A'
          },
          {
            name: 'Chemistry',
            grade: 'B'
          },
          {
            name: 'Combined Mathematics',
            grade: 'B'
          },
          {
            name: 'General English',
            grade: 'B'
          },
          ]
      }
      ,
      {
        degree: 'G.C.E. Advanced Level Examination',
        period: '2018',
        description: "Grade : 9A's",
        subjects: [
          { name: 'Buddhism', grade: 'A' },
          { name: 'Sinhala Language & Literature', grade: 'A' },
          { name: 'English', grade: 'A' },
          { name: 'Science', grade: 'A' },
          { name: 'Mathematics', grade: 'A' },
          { name: 'History', grade: 'A' },
          { name: 'Art', grade: 'A' },
          { name: 'Business & Accounting Studies', grade: 'A' },
          { name: 'Information & Communication Technology', grade: 'A' },
        ]
      }
    ]
  }

  ];

function EducationCard({
  item,
  index



}: { item: EducationItem; index: number; }) {
  const [expandedPrograms, setExpandedPrograms] = useState<Record<number, boolean>>({});

  const toggleProgram = (programIndex: number) => {
    setExpandedPrograms((current) => ({
      ...current,
      [programIndex]: !current[programIndex]
    }));
  };
  return (
    <motion.div
      className="relative pl-8 md:pl-24"
      initial={{
        opacity: 0,
        y: 20
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
        duration: 0.5,
        delay: index * 0.1
      }}>

      {/* Timeline Dot */}
      <div className="absolute left-[-5px] md:left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-white dark:ring-slate-950" />

      {/* Logo (Desktop only) */}
      <div className="hidden md:flex absolute left-8 top-0 h-20 w-20 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden -translate-x-1/2 shadow-md">
        <img
          src={item.logo}
          alt={`${item.institution} logo`}
          className="h-full w-full rounded-full object-contain p-2.5" />

      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:shadow-md transition-shadow overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Header row with logo on mobile */}
          <div className="flex items-start gap-4 mb-4">
            {/* Mobile logo */}
            <div className="flex md:hidden flex-shrink-0 h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="h-full w-full rounded-full object-contain p-2" />

            </div>

            <div className="flex-1">
              <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                {item.institution}
              </h4>
            </div>
          </div>

          <div className="space-y-5 mb-4">
            {item.programs.map((program, programIndex) =>
              <div
                key={`${item.id}-${program.degree}`}
                className={
                  programIndex === 0 ?
                    '' :
                    'border-t border-slate-200 dark:border-slate-800 pt-5'
                }>

                <div className="flex flex-col md:flex-row md:items-start lg:items-center justify-between gap-3 mb-2">
                  <h3 className="min-w-0 text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {program.degree}
                  </h3>
                  <div className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20 px-3 py-1 rounded-full w-fit">
                    <CalendarIcon size={14} />
                    {program.period}
                  </div>
                </div>

                {program.description &&
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {program.description}
                  </p>
                }
                <button
                  onClick={() => toggleProgram(programIndex)}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors">

                  {expandedPrograms[programIndex] ? 'Hide' : 'View'} Results
                  <motion.span
                    animate={{
                      rotate: expandedPrograms[programIndex] ? 180 : 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="inline-flex">

                    <ChevronDownIcon size={16} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expandedPrograms[programIndex] &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="overflow-hidden">

                      <div className="border-t border-slate-200 dark:border-slate-800 pt-5 mt-5">
                        <h5 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                          Results
                        </h5>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.subjects.map((subject, sIndex) =>
                        <motion.div
                          key={`${program.degree}-${subject.name}`}
                          initial={{
                            opacity: 0,
                            x: -10
                          }}
                          animate={{
                            opacity: 1,
                            x: 0
                          }}
                          transition={{
                            duration: 0.3,
                            delay: sIndex * 0.05
                          }}
                          className="flex items-center justify-between gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-4 py-3 border border-slate-100 dark:border-slate-700/50">

                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                {subject.name}
                              </span>
                              <span className="text-sm font-bold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30 px-2.5 py-0.5 rounded-lg flex-shrink-0">
                                {subject.grade}
                              </span>
                            </motion.div>
                        )}
                        </div>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>);

}
export function Education() {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-slate-950">
      <SectionHeader
        title="Education"
        subtitle="My academic background." />


      <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

        <div className="space-y-12">
          {educationData.map((item, index) =>
            <EducationCard key={item.id} item={item} index={index} />
          )}
        </div>
      </div>
    </SectionWrapper>);

}
