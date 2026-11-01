// src/App.tsx
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Engineering } from '@/components/sections/Engineering';
import { SystemInterests } from '@/components/sections/SystemInterests';
import { Journey } from '@/components/sections/Journey';
import { CodingProfiles } from '@/components/sections/CodingProfiles';
import { BeyondCode } from '@/components/sections/BeyondCode';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

function App() {
  // Smooth scroll init — native fallback since lenis needs more setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Engineering />
        <SystemInterests />
<Journey />
        <CodingProfiles />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

