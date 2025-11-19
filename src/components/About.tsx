import { useScrollReveal } from '@/hooks/useScrollReveal';
import profileImage from '@/assets/vedat.jpeg';

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-center">
          <span className="text-primary">{'>'}</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <img
                src={profileImage}
                alt="Vedat Duha Daglar"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover border-2 border-primary/50"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Fullstack Software Engineer</span> with a 
              passion for building scalable applications that make a real impact. Currently working at 
              <span className="text-accent font-semibold"> Stamps B.V.</span>, where I develop and maintain 
              a full-stack application serving over 70,000+ users.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across modern technologies including <span className="text-primary">React Native</span>, 
              <span className="text-primary"> Next.js</span>, and <span className="text-primary">Go</span>. 
              I specialize in creating efficient, user-friendly solutions while maintaining high code quality 
              through best practices and Agile methodologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a Bachelor's degree in <span className="text-accent font-semibold">IT and Software Engineering</span> from 
              Saxion University and hands-on experience at companies like Just Eat Takeaway and Everbridge, 
              I bring a comprehensive approach to software development from concept to deployment.
            </p>

            <div className="pt-4">
              <p className="text-primary font-mono font-semibold">
                📍 Based in Utrecht, Netherlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
