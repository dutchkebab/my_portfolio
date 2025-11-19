import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Wander AI-Generated Travel Planner',
    description: 'Developed an AI-based travel planner that generates itineraries in under 10 seconds, estimates costs, and displays real-time weather, significantly improving travel planning efficiency.',
    skills: ['React.js', 'Chakra UI', 'GPT API', 'Google Maps API', 'Tailwind CSS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Office Scheduling App for Scorion B.V',
    description: 'Partnered with 3 other developers to develop a user-friendly web application during the COVID-19 pandemic to assist 30+ employees in reserving desks and declaring their in-office workdays, enhancing workplace organization and safety.',
    skills: ['Svelte', 'Node.js', 'Firebase'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center">
          <span className="text-primary">{'>'}</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all duration-300 bg-card flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 font-mono">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
