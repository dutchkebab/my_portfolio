import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="font-mono text-sm">
          © 2025 Vedat Duha Daglar. Built with React & TypeScript
        </p>
      </footer>
    </main>
  );
};

export default Index;
