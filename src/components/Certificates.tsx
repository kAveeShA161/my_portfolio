import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { XIcon, ChevronDownIcon, ExternalLinkIcon } from 'lucide-react';
interface CertificateSkill {
  name: string;
  //level: string;
}
interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url: string;
  image: string;
  skills: CertificateSkill[];
}
const certificatesData: Certificate[] = [
{
  id: 1,
  name: 'DevOps Foundations',
  issuer: 'LinkedIn Learning',
  date: 'April 2026',
  url: 'https://www.linkedin.com/learning/certificates/3b0b3a1eeedb7cae2803221c0e81629af20f306f103d5989ee8509404b4004fa/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BuQBQhhfjQdO%2Bf375lvL42A%3D%3D',
  image:
  'public/images/Certificates/DevOpsCertificate.jpg',
  skills: [
  {
    name: 'DevOps',
    //level: 'Basic'
  }]
},
{
  id: 2,
  name: 'CMLE - Certified Machine Learning Engineer L2',
  issuer: 'Noob Dev',
  date: 'March 2026',
  url: 'https://credsverse.com/credentials/a831bf76-e36e-48ef-9bd8-35fb61819359',
  image:
  'public/images/Certificates/MLE2.png',
  skills: [
  {
    name: 'Machine Learning',
    //level: 'A'
  },
  {
    name: 'Association Rule Learning',
    //level: 'Advanced'
  },
  {
    name: 'Unsupervised Learning',
    //level: 'Advanced'
  },
  {
    name: 'Data Preprocessing',
    //level: 'Intermediate'
  },
  {name: 'Data Exploitation'},
  {name: 'Model Evaluation'}
]

},
{
  id: 3,
  name: 'ML Engineer - Level 1',
  issuer: 'Noob Dev',
  date: 'February 2026',
  url: 'https://credsverse.com/credentials/c547d4dd-fd9a-426d-a08b-39124f4661d8',
  image:
  'public/images/Certificates/MLE1.png',
  skills: [
  {
    name: 'Data Preprocessing',
    //level: 'Advanced'
  },
  {
    name: 'Regression Modelling',
    //level: 'Advanced'
  },
  {
    name: 'Model Evaluation',
    //level: 'Intermediate'
  },
  {
    name: 'Supervised Learning',
    //level: 'Advanced'
  }]

},
{
  id: 4,
  name: 'Kubernetes From 10000 Feet',
  issuer: 'CoDeKu DevOps Academy',
  date: 'February 2026',
  url: 'https://drive.google.com/file/d/10PjHJr-6uvAnSGQ3bvogsqrf7DY9FC-_/view?usp=drive_link',
  image:
  'public/images/Certificates/K8S.png',
  skills: [
  {
    name: 'Kubernetes Architecture',
    //level: 'Advanced'
  }]
},
{
  id: 5,
  name: 'Postman API Fundamentals Student Expert',
  issuer: 'Postman',
  date: 'September 2025',
  url: 'https://drive.google.com/file/d/1jTIikYC1Deu0ihKq-GtrbFWH3piVjYbJ/view?usp=drive_link',
  image:
  'public/images/Certificates/postman.jpg',
  skills: [
  {
    name: 'API Testing',
    //level: 'Advanced'
  }, 
  {name: 'Postman'}]
},
{
  id: 6,
  name: 'JavaScript (Intermediate)',
  issuer: 'HackerRank',
  date: 'August 2025',
  url: 'https://www.hackerrank.com/certificates/iframe/b08eff78458a',
  image:
  'public/images/Certificates/jsin.jpg',
  skills: [
  {
    name: 'JavaScript (Intermediate)',
    //level: 'Advanced'
  }]
},
{
  id: 7,
  name: 'JavaScript (Basic)',
  issuer: 'HackerRank',
  date: 'August 2025',
  url: 'https://www.hackerrank.com/certificates/iframe/b08eff78458a',
  image:
  'public/images/Certificates/jsbc.jpg',
  skills: [
  {
    name: 'JavaScript (Basic)',
    //level: 'Advanced'
  }]
},
{
  id: 8,
  name: 'Python for Beginners',
  issuer: 'University of Moratuwa - CODL',
  date: 'April 2025',
  url: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_python-universityofmoratuwa-codl-activity-7318114870774706176-VPls?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
  image:
  'public/images/Certificates/pythonBeg.jpeg',
  skills: [
  {
    name: 'Python',
    //level: 'Advanced'
  }]
},
{
  id: 9,
  name: 'Bootstrap Mastery',
  issuer: 'Udemy',
  date: 'March 2025',
  url: 'https://www.udemy.com/certificate/UC-4adc482f-10d3-4f51-932a-114ea48a7fd4/',
  image:
  'public/images/Certificates/Bootstrap.jpg',
  skills: [
  {
    name: 'Bootstrap',
    //level: 'Advanced'
  },
  { name: 'Responsive Web Design' }]
},
{
  id: 10,
  name: 'CSS (Basic)',
  issuer: 'HackerRank',
  date: 'March 2025',
  url: 'https://www.hackerrank.com/certificates/iframe/57a7c021f573',
  image:
  'public/images/Certificates/CSSBC.png',
  skills: [
  {
    name: 'CSS (Basic)',
    //level: 'Advanced'
  }]
},
{
  id: 11,
  name: 'Diploma in Information Technology',
  issuer: 'Pearson',
  date: 'February 2024',
  url: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_informationtechnology-certification-pearsonassured-activity-7305250076589764608-Jb6M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
  image:
  'public/images/Certificates/IT.jpeg',
  skills: [
  {
    name: 'CSS',
    //level: 'Advanced'
  },
  {name : 'HTML'}, {name: 'MySQL'}, {name: 'Python'}, {name: 'C#'}, {name: 'Adobe Photoshop'}, {name: 'MS Office'}]
},
{
  id: 12,
  name: 'Diploma in English',
  issuer: 'Pearson',
  date: 'July 2023',
  url: 'https://www.linkedin.com/posts/kaveesha-sewmini-6862142b7_englishproficiency-diplomainenglish-esoftmetrocampus-activity-7305238218608668675-gd53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwHN8YBMimIh3vAIEjxbD3AuPRmZysgmZM',
  image:
  'public/images/Certificates/English.jpeg',
  skills: [
  {
    name: 'English',
    //level: 'Advanced'
  },
  {name: 'Spoken English'}]
}
];

function ModalParticles() {
  const particles = useMemo(() => {
    return Array.from(
      {
        length: 24
      },
      (_, i) => {
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
      }
    );
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((p) => {
        const x = Math.cos(p.angle) * p.radius;
        const y = Math.sin(p.angle) * p.radius;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent-400 dark:bg-accent-300"
            style={{
              width: p.size,
              height: p.size,
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
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />);


      })}
    </div>);

}
function CertificateCard({
  cert,
  index,
  onPreview




}: {cert: Certificate;index: number;onPreview: (cert: Certificate) => void;}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
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
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.1
      }}
      className="group bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-colors">
      
      {/* Certificate Preview Image */}
      <button
        onClick={() => onPreview(cert)}
        className="relative w-full h-44 overflow-hidden cursor-pointer block"
        aria-label={`Preview ${cert.name} certificate`}>
        
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors z-10 flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-sm font-medium text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            Click to preview
          </span>
        </div>
        <img
          src={cert.image}
          alt={cert.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        
      </button>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
            {cert.name}
          </h3>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            aria-label={`View ${cert.name} credential`}>
            
            <ExternalLinkIcon size={18} />
          </a>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
          {cert.issuer}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">
          Issued {cert.date}
        </p>

        {/* Skills Dropdown */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors">
          
          {isExpanded ? 'Hide' : 'View'} Skills Gained
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
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="overflow-hidden">
            
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                {cert.skills.map((skill, sIndex) =>
              <motion.div
                key={skill.name}
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
                className="flex items-center justify-between gap-3 bg-white dark:bg-slate-800/50 rounded-xl px-4 py-2.5 border border-slate-100 dark:border-slate-700/50">
                
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    {/*<span className="text-xs font-bold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30 px-2.5 py-0.5 rounded-lg flex-shrink-0">
                      {skill.level}
                    </span>*/}
                  </motion.div>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.div>);

}
function CertificateModal({
  cert,
  onClose



}: {cert: Certificate;onClose: () => void;}) {
  return (
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}>
      
      <motion.div
        initial={{
          scale: 0.85,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        exit={{
          scale: 0.85,
          opacity: 0
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          aria-label="Close preview">
          
          <XIcon size={24} />
        </button>

        {/* Particles */}
        <ModalParticles />

        {/* Glow */}
        <div className="absolute -inset-4 bg-accent-500/10 rounded-3xl blur-2xl pointer-events-none" />

        {/* Certificate Image */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl z-10">
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-auto object-cover" />
          
        </div>

        {/* Info below */}
        <div className="relative z-10 text-center mt-6">
          <h3 className="text-xl font-heading font-bold text-white mb-1">
            {cert.name}
          </h3>
          <p className="text-sm text-slate-300">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </motion.div>
    </motion.div>);

}
export function Certificates() {
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  return (
    <SectionWrapper id="certificates" className="bg-white dark:bg-slate-950">
      <SectionHeader
        title="Certifications"
        subtitle="Professional credentials and continuous learning achievements." />
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
        {certificatesData.map((cert, index) =>
        <CertificateCard
          key={cert.id}
          cert={cert}
          index={index}
          onPreview={setPreviewCert} />

        )}
      </div>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {previewCert &&
        <CertificateModal
          cert={previewCert}
          onClose={() => setPreviewCert(null)} />

        }
      </AnimatePresence>
    </SectionWrapper>);

}
