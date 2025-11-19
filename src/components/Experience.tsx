import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const experiences = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Stamps B.V',
    location: 'Utrecht, NL',
    period: '08/2025 – Present',
    responsibilities: [
      'Developing and maintaining a full-stack app serving 70,000+ users with React Native, Next.js, and Go (Gin)',
      'Implementing new features, resolving bugs, and performing performance optimizations across the stack',
      'Working with background job and event-driven systems to automate asynchronous workflows',
      'Contributing to code reviews, CI/CD pipelines, and overall software quality through Agile development'
    ],
    skills: ['React Native', 'Next.js', 'Go (Gin)', 'PostgreSQL', 'CI/CD', 'Agile']
  },
  {
    title: 'Software Engineer Intern',
    company: 'AgroVision',
    location: 'Deventer, NL',
    period: '02/2025 – 06/2025',
    responsibilities: [
      'Implemented a secure user impersonation system for a customer-facing platform, enabling support staff to assist users while maintaining GDPR compliance',
      'Developed authentication and authorization mechanisms using Duende IdentityServer',
      'Implemented user consent management and activity logging to track impersonation sessions transparently'
    ],
    skills: ['C#', '.NET Core', 'IdentityServer', 'Angular', 'SQL Server', 'Azure DevOps']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Just Eat Takeaway',
    location: 'Enschede, NL',
    period: '03/2024 – 09/2024',
    responsibilities: [
      'Researched the development of a global order flow configuration application across 15+ countries',
      'Integrated the restaurant configuration interfaces of Just Eat and Takeaway.com systems into a single micro frontend'
    ],
    skills: ['PHP', 'JavaScript', 'Git', 'Agile']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Everbridge',
    location: 'Deventer, NL',
    period: '03/2023 – 08/2023',
    responsibilities: [
      'Built a real-time data visualization app using React which is now used in production',
      'Implemented Single Sign-On (SSO) for internal software using Keycloak, reducing login times for 50+ employees'
    ],
    skills: ['React', 'Keycloak', 'Docker', 'Git', 'Agile']
  }
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center">
          <span className="text-primary">{'>'}</span> Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all duration-300 bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-muted-foreground">• {exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
