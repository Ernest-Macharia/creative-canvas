import { Code2, Database, Globe, Smartphone, Server, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sass'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Django', 'Flask', 'Laravel', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native', 'Android'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'DevOps',
    icon: Code2,
    items: ['Git', 'Docker', 'AWS', 'CircleCI', 'TravisCI'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Postman', 'Figma', 'ESLint', 'Webpack'],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">About Me</h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a highly motivated <span className="text-foreground">Fullstack Developer</span> based in 
              <span className="text-primary"> Nairobi, Kenya</span>, with a passion for creating intuitive 
              and accessible user interfaces paired with secure, maintainable backend systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over <span className="text-primary">5 years of experience</span>, I've had the privilege 
              of working on diverse projects, from county government systems to international business 
              platforms. I thrive on leading teams, mentoring developers, and architecting solutions 
              that scale.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently, I'm focused on building accessible, human-centered products at 
              <span className="text-primary"> HQZen.com</span>, where I lead full-stack development 
              initiatives.
            </p>

            {/* Terminal-style code block */}
            <div className="glass rounded-lg p-4 font-mono text-sm mt-8">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground ml-2">ernest.js</span>
              </div>
              <div className="space-y-1">
                <p><span className="text-accent">const</span> <span className="text-foreground">ernest</span> = {'{'}</p>
                <p className="pl-4"><span className="text-primary">location</span>: <span className="text-yellow-400">"Nairobi, Kenya"</span>,</p>
                <p className="pl-4"><span className="text-primary">experience</span>: <span className="text-yellow-400">"5+ years"</span>,</p>
                <p className="pl-4"><span className="text-primary">passion</span>: <span className="text-yellow-400">"Building amazing things"</span>,</p>
                <p className="pl-4"><span className="text-primary">available</span>: <span className="text-primary">true</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="glass glass-hover rounded-xl p-5 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.category}</h3>
                </div>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
