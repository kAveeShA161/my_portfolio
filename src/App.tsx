import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Articles } from './components/Articles';
import { Certificates } from './components/Certificates';
import { ExtraCurricular } from './components/ExtraCurricular';
import { ResumeDownload } from './components/ResumeDownload';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden font-sans selection:bg-accent-500/30">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Projects />
          <Skills />
          <Articles />
          <Certificates />
          <ExtraCurricular />
          <ResumeDownload />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}
