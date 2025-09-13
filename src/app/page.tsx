import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import VolunteerExperience from '@/components/sections/VolunteerExperience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Experience />
        <VolunteerExperience />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
