import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="py-20 px-4 bg-card/50">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center">
          <span className="text-primary">{'>'}</span> Education
        </h2>

        <Card className="p-6 hover:border-primary transition-all duration-300 bg-card max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                Bachelor of IT and Software Engineering
              </h3>
              <div className="flex items-center gap-2 text-primary mb-2">
                <GraduationCap className="w-4 h-4" />
                <span className="font-semibold">Saxion University of Applied Sciences</span>
              </div>
              <p className="text-muted-foreground">Deventer, Netherlands</p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
              <Calendar className="w-4 h-4" />
              <span className="font-mono text-sm">09/2021 – 06/2025</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-2 text-muted-foreground">
              <span className="text-primary">▹</span>
              <span>Specialization in Advanced App Development (Grade 8/10)</span>
            </div>
            <div className="flex gap-2 text-muted-foreground">
              <span className="text-primary">▹</span>
              <span>Member of Software Engineering Students Association</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
