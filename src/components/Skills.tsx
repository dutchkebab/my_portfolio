import { useScrollReveal } from '@/hooks/useScrollReveal';
import reactLogo from '@/assets/tech/react.png';
import golangLogo from '@/assets/tech/golang.png';
import nodejsLogo from '@/assets/tech/nodejs.png';
import javaLogo from '@/assets/tech/java.png';
import javascriptLogo from '@/assets/tech/javascript.png';
import postgresqlLogo from '@/assets/tech/postgresql.png';
import dockerLogo from '@/assets/tech/docker.png';
import csharpLogo from '@/assets/tech/csharp.png';

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'Golang', logo: golangLogo },
  { name: 'Node.js', logo: nodejsLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'C#', logo: csharpLogo },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center">
          <span className="text-primary">{'>'}</span> Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:border-primary transition-all duration-300 h-full">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-center font-mono text-sm text-foreground">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
