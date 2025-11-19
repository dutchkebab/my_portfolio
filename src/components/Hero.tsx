import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/vedat.jpeg';

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
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono">
                <span className="text-primary">{'>'}</span> Vedat Duha Daglar
              </h1>
              <div className="h-12 md:h-16 flex items-center justify-center md:justify-start">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono">
                  {typedText}
                  <span className="typing-cursor text-primary">|</span>
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8">
              Software engineer specializing in fullstack development with React, Go, and building 
              scalable applications that serve thousands of users.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
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
          </div>

          {/* Right side - Image/Visual element */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative group">
              {/* Terminal-style frame */}
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card border-2 border-primary/30 rounded-lg p-1 shadow-lg">
                {/* Terminal header */}
                <div className="bg-muted/50 rounded-t-lg px-4 py-2 flex items-center gap-2 border-b border-primary/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">profile.jpg</span>
                </div>
                {/* Image */}
                <div className="p-4">
                  <img 
                    src={profileImage} 
                    alt="Vedat Duha Daglar" 
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-16 text-center">
          <div className="text-primary text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
