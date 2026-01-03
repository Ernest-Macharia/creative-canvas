import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'HQZen Platform',
    description:
      'A full-featured business process platform for recruitment, staffing, and productivity. An all-in-one ecosystem built with modern technologies.',
    tech: ['Django', 'Laravel', 'Vue.js', 'PostgreSQL', 'REST API'],
    link: 'https://hqzen.com',
    github: null,
    image: 'hqzen',
  },
  {
    title: 'Quatrix Global',
    description:
      'A comprehensive transportation service solution featuring real-time tracking, booking management, and analytics dashboard.',
    tech: ['Laravel', 'React', 'MySQL', 'CircleCI'],
    link: 'https://quatrixglobal.com',
    github: null,
    image: 'quatrix',
  },
];

const otherProjects = [
  {
    title: 'County Government Portal',
    description: 'Revamped internal tools and public-facing website for Kajiado County Government.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard with SQL Server Reporting Services integration.',
    tech: ['React', 'SSRS', 'Node.js'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    tech: ['Django', 'React', 'PostgreSQL'],
  },
  {
    title: 'Mobile Expense Tracker',
    description: 'Cross-platform mobile app for personal finance management.',
    tech: ['React Native', 'Firebase'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-1/3 h-96 bg-accent/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Projects</h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image/Placeholder */}
              <div
                className={`md:col-span-7 rounded-xl overflow-hidden ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center glass group cursor-pointer">
                  <div className="text-6xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                    {project.image === 'hqzen' ? 'HQ' : 'QG'}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 0 ? 'md:right-0 md:text-right' : 'md:left-0 md:text-left'
                } z-10`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <div className="glass rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}>
                  {project.tech.map((t) => (
                    <li key={t} className="hover:text-primary transition-colors">{t}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold font-display text-center mb-12">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="glass glass-hover rounded-xl p-6 group flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-4 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
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
