import { useMemo, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import {
  HeartIcon,
  UsersIcon,
  TrophyIcon,
  ChevronDownIcon,
  XIcon
} from 'lucide-react';
interface Activity {
  id: number;
  title: string;
  role: string;
  icon: ReactNode;
  description: string;
  images: {
    src: string;
    //caption: string;
  }[];
}

interface ActivityPreview {
  src: string;
  title: string;
  role: string;
}

const activitiesData: Activity[] = [
{
  id: 1,
  title: 'Project Chair',
  role: 'SabraXtreme 3.0',
  icon: <UsersIcon className="w-6 h-6" />,
  description:
  'Served as Project Chair for SabraXtreme 3.0 under the IEEE Student Branch of SUSL, leading an organizing committee of 30 members. Directed the planning and execution of multiple initiatives, including an awareness session on IEEEXtreme 19.0 and a workshop on Competitive Programming and Data Structures & Algorithms to prepare participants for the competition. Coordinated with guest speakers, faculty members, and industry professionals to deliver impactful sessions, while ensuring smooth event management and execution. This role strengthened my leadership, team management, event coordination, and communication skills through hands-on experience in organizing large-scale technical events.',
  images: [
      { src: '/my_portfolio/images/ExtraCurricular/SabraXtreme1.jpeg'},
      { src: '/my_portfolio/images/ExtraCurricular/SabraXtreme2.jpeg'},
      { src: '/my_portfolio/images/ExtraCurricular/SabraXtreme4.jpeg'},
      { src: '/my_portfolio/images/ExtraCurricular/SabraXtreme3.jpeg'}
  ]
},
  {
  id: 2,
  title: 'Student Branch Ambassador',
  role: 'IEEEXtreme 19.0',
  icon: <UsersIcon className="w-6 h-6" />,
  description:
  'Served as a Student Branch Ambassador for the global programming competition IEEEXtreme 19.0, organized by IEEE. Represented the SUSL Student Branch in promoting and coordinating participation for an event that engaged over 19,000+ competitors worldwide. This role strengthened my skills in communication, leadership, and event coordination while contributing to the growth of a global tech community through IEEEXtreme 19.0.',
  images: [
  {
    src: '/my_portfolio/images/ExtraCurricular/AmbIEEEXtreme.jpg',
    //caption: 'Team collaboration session at ReactConf 2023'
  },
  {
    src: '/my_portfolio/images/ExtraCurricular/OC.jpeg',
    //caption: 'Mentoring session with junior developers'
  },
  {src: '/my_portfolio/images/ExtraCurricular/VolunteerDiary.jpeg'},
  {src: '/my_portfolio/images/ExtraCurricular/IEEEXtremeBanner.jpeg'}]

},
{
  id: 3,
  title: 'Student Branch Ambassador',
  role: 'Innovation Nation Sri Lanka 2025',
  icon: <UsersIcon className="w-6 h-6" />,
  description:
  'Served as a Student Branch Ambassador for Innovation Nation Sri Lanka 2025, representing the IEEE Student Branch of SUSL. Actively contributed to organizing and coordinating the competition at branch level, including the final competition event. Responsible for designing promotional flyers, supporting event planning, and coordinating with participants and organizing teams. This role strengthened my skills in event management, teamwork, communication, and creative design while contributing to a successful national-level innovation competition.',
  images: [
  ]
},
{
  id: 4,
  title: 'Participation',
  role: 'IEEEXtreme 19.0 24 Hour Programming Competition',
  icon: <TrophyIcon className="w-6 h-6" />,
  description:
  'Participated in IEEEXtreme 19.0, a 24-hour global competitive programming challenge involving +19,000 participants worldwide. Competed as part of Team Vistara alongside Sewmini Kumaranayaka and Dasini Jayakody, focusing on solving complex algorithmic and data structure problems under strict time constraints. This experience strengthened my skills in problem-solving, algorithm design, critical thinking, and teamwork under pressure, while improving my ability to collaborate effectively in high-intensity environments.',
  images: [
  {
    src: '/my_portfolio/images/ExtraCurricular/IEEEXtremParticipation.jpg',
    //caption: 'Teaching a weekend coding workshop'
  }]
},
{
  id: 5,
  title: 'Volunteer Of the Month - October 2025',
  role: 'IEEE Student Branch of SUSL',
  icon: <TrophyIcon className="w-6 h-6" />,
  description:
  'Recognized as Volunteer of the Month for outstanding contributions to the IEEE Student Branch of Sabaragamuwa University of Sri Lanka in October 2025. Actively engaged in multiple leadership and technical initiatives, including serving as Project Chair of SabraXtreme 3.0, contributing to the design team for IEEE Day 2025 celebrations, and representing the student branch as a Student Ambassador for Innovation Nation Sri Lanka 2025 and Student Branch Ambassador for IEEEXtreme 19.0. These roles involved leading teams, coordinating events, contributing to visual design work, and promoting technical programs within the university community. This recognition reflects consistent dedication to teamwork, leadership, creativity, and active contribution to student-led initiatives.',
  images: [
  {
    src: '/my_portfolio/images/ExtraCurricular/VolOfMon.jpeg'
    //caption: 'Teaching a weekend coding workshop'
  }]
},{
  id: 6,
  title: 'Design Team Member',
  role: 'IEEE Day 2025',
  icon: <HeartIcon className="w-6 h-6" />,
  description:
  'Contributed as a Design Team Member for IEEE Day 2025 under the IEEE Student Branch of Sabaragamuwa University of Sri Lanka. Assisted in designing promotional flyers, creating visual materials and supporting event branding. Worked closely with the organizing team to deliver creative designs that enhanced event engagement and promotion. This experience strengthened my skills in graphic design, teamwork, and creative collaboration.',
  images: [
  {
    src: '/my_portfolio/images/ExtraCurricular/IEEEDay20251.jpeg'
    //caption: 'Teaching a weekend coding workshop'
  }, 
  {src: '/my_portfolio/images/ExtraCurricular/IEEEDay20252.jpeg'}]
},{
  id: 7,
  title: '1st Place Winner',
  role: 'Renewable Energy & Energy Efficiency Poster Design Competition',
  icon: <TrophyIcon className="w-6 h-6" />,
  description:
  'Awarded 1st Place in the Renewable Energy & Energy Efficiency Poster Design Competition organized by the G17 University Ambassadors Consortium at Wayamba University of Sri Lanka.',
  images: [
  {
    src: '/my_portfolio/images/ExtraCurricular/poster1.jpeg'
    //caption: 'Teaching a weekend coding workshop'
  }, 
  {src: '/my_portfolio/images/ExtraCurricular/Poster2.jpeg'}]
},
];

function ModalParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const angle = i / 24 * Math.PI * 2;
      const radius = 45 + Math.random() * 10;
      const size = Math.random() * 4 + 2;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 2;

      return {
        id: i,
        angle,
        radius,
        size,
        duration,
        delay
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((particle) => {
        const x = Math.cos(particle.angle) * particle.radius;
        const y = Math.sin(particle.angle) * particle.radius;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent-400 dark:bg-accent-300"
            style={{
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: '50%',
              marginLeft: `${x}%`,
              marginTop: `${y}%`
            }}
            animate={{
              opacity: [0, 1, 0.6, 1, 0],
              scale: [0.5, 1.3, 0.8, 1.2, 0.5]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        );
      })}
    </div>
  );
}

function ActivityImageModal({
  preview,
  onClose
}: {
  preview: ActivityPreview;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          aria-label="Close preview">
          <XIcon size={24} />
        </button>

        <ModalParticles />

        <div className="absolute -inset-4 bg-accent-500/10 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-slate-950/80 shadow-2xl z-10">
          <div className="flex items-center justify-center p-4 md:p-6 max-h-[80vh]">
            <img
              src={preview.src}
              alt={`${preview.title} - ${preview.role}`}
              className="max-h-[72vh] w-auto max-w-full object-contain" />
          </div>
        </div>

        <div className="relative z-10 text-center mt-6">
          <h3 className="text-xl font-heading font-bold text-white mb-1">
            {preview.title}
          </h3>
          <p className="text-sm text-slate-300">{preview.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActivityCard({
  activity,
  index,
  onPreview
}: {
  activity: Activity;
  index: number;
  onPreview: (preview: ActivityPreview) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      key={activity.id}
      initial={{
        opacity: 0,
        x: -20
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center">
            {activity.icon}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              {activity.title}
            </h3>
            <span className="hidden sm:block text-slate-300 dark:text-slate-700">
              •
            </span>
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
              {activity.role}
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {activity.description}
          </p>

          {activity.images.length > 0 &&
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors">
            
              {isExpanded ? 'Hide' : 'See'} Photos ({activity.images.length})
              <motion.span
              animate={{
                rotate: isExpanded ? 180 : 0
              }}
              transition={{
                duration: 0.3
              }}
              className="inline-flex">
              
                <ChevronDownIcon size={16} />
              </motion.span>
            </button>
          }
        </div>
      </div>

      {/* Expandable Image Gallery */}
      <AnimatePresence>
        {isExpanded &&
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
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="overflow-hidden">
          
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activity.images.map((img, imgIndex) =>
                <motion.div
                  key={img.src}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.35,
                    delay: imgIndex * 0.1
                  }}
                  className="group relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700/50">

                      <button
                    type="button"
                    onClick={() =>
                    onPreview({
                      src: img.src,
                      title: activity.title,
                      role: activity.role
                    })
                    }
                    className="relative block w-full aspect-[4/3] overflow-hidden"
                    aria-label={`Preview ${activity.title} image ${imgIndex + 1}`}>
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-900/25 group-hover:bg-slate-900/10 transition-colors">
                          <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-sm font-medium text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                            Click to preview
                          </span>
                        </div>
                        <img
                      src={img.src}
                      alt={`${activity.title} - ${activity.role} photo ${imgIndex + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      </button>
                    </motion.div>
                )}
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}
export function ExtraCurricular() {
  const [previewImage, setPreviewImage] = useState<ActivityPreview | null>(null);

  return (
    <SectionWrapper
      id="extracurricular"
      className="bg-slate-50 dark:bg-slate-900/50">
      
      <SectionHeader
        title="Beyond the Code"
        subtitle="Community involvement, volunteering, and extracurricular activities." />
      

      <div className="space-y-6">
        {activitiesData.map((activity, index) =>
        <ActivityCard
          key={activity.id}
          activity={activity}
          index={index}
          onPreview={setPreviewImage} />
        )}
      </div>

      <AnimatePresence>
        {previewImage &&
        <ActivityImageModal
          preview={previewImage}
          onClose={() => setPreviewImage(null)} />
        }
      </AnimatePresence>
    </SectionWrapper>);

}
