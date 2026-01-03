import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Fullstack Developer',
    company: 'BPOSeats (HQZen.com)',
    location: 'Philippines (Remote)',
    period: 'Feb 2022 – Present',
    description: [
      'Led a full stack team to deliver core features using Python (Django), PHP (Laravel), and Vue.js',
      'Reviewed and approved merge requests to ensure high code quality and maintainability',
      'Mentored junior developers and interns on best practices and architecture',
      'Architected and optimized REST APIs for scalable integrations',
    ],
    current: true,
  },
  {
    title: 'Web Developer',
    company: 'Pixel Data Center',
    location: 'Kajiado, Kenya',
    period: 'Jan 2021 – Dec 2022',
    description: [
      'Built and maintained React.js-based websites and dashboards',
      'Integrated backend APIs using Django and Laravel',
      'Implemented frontend caching strategies for improved performance',
      'Collaborated with design and backend teams to align technical implementation',
    ],
    current: false,
  },
  {
    title: 'Software Developer Intern',
    company: 'Quatrix Global',
    location: 'Nairobi, Kenya',
    period: 'Jun 2020 – Dec 2020',
    description: [
      'Assisted in backend development using Laravel',
      'Created analytical reports using SQL Server Reporting Services',
      'Implemented CI/CD pipelines with CircleCI for automated testing',
      'Ensured cross-browser compatibility and responsive design',
    ],
    current: false,
  },
  {
    title: 'Junior Software Developer Intern',
    company: 'Kajiado County Government',
    location: 'Kajiado, Kenya',
    period: 'May 2019 – Sep 2019',
    description: [
      'Worked on county-wide internal tools and documentation',
      'Assisted in system design and infrastructure planning',
      'Revamped and managed the county government website',
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/5 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Experience</h2>
          <div className="h-px bg-muted flex-1 max-w-xs" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1.5 md:-translate-x-2 mt-8 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass glass-hover rounded-xl p-6 group">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full mb-4">
                        Current Position
                      </span>
                    )}

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Education
          </h3>
          <div className="glass rounded-xl p-6 max-w-2xl">
            <h4 className="text-lg font-semibold text-foreground">Bachelor of Science in Computer Technology</h4>
            <p className="text-primary font-medium">Meru University of Science and Technology</p>
            <p className="text-muted-foreground text-sm mt-1">2016 – 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};
