import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const roles = [
  'Fullstack Software Engineer',
  'React Native Developer',
  'Go Backend Developer',
  'Building Scalable Applications'
];

const Hero = () => {
  const typedText = useTypingEffect(roles, 80, 40, 2000);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
            <span className="text-primary">{'>'}</span> Vedat Duha Daglar
          </h1>
          <div className="h-12 md:h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono">
              {typedText}
              <span className="typing-cursor text-primary">|</span>
            </h2>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Software engineer specializing in fullstack development with React, Go, and building 
          scalable applications that serve thousands of users.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button variant="default" size="lg" className="gap-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>

        <div className="animate-bounce mt-12">
          <div className="text-primary text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
