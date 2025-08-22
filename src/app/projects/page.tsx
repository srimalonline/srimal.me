import Image from 'next/image';

const projects = [
  {
    id: 'smart-traffic-system',
    title: 'Smart Traffic Light System',
    description: 'AI-powered traffic management system using computer vision and machine learning to optimize traffic flow and reduce congestion in urban areas.',
    image: '/images/smart traffic light.webp',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'IoT', 'Arduino'],
    category: 'AI/ML',
    status: 'Completed',
    highlights: [
      'Real-time traffic density analysis',
      'Adaptive signal timing optimization',
      'Emergency vehicle priority system',
      '30% reduction in average wait times'
    ]
  },
  {
    id: 'research-publications',
    title: 'AI Research Publications',
    description: 'Published research papers on machine learning algorithms, data science methodologies, and intelligent systems at international conferences.',
    image: '/images/research nsrsit 2025.webp',
    technologies: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Research Methodology'],
    category: 'Research',
    status: 'Ongoing',
    highlights: [
      'Multiple conference presentations',
      'Peer-reviewed publications',
      'Novel algorithmic contributions',
      'International recognition'
    ]
  },
  {
    id: 'hackathon-projects',
    title: 'Hackathon Winning Solutions',
    description: 'Award-winning projects developed during competitive programming events and hackathons, showcasing rapid prototyping and innovative problem-solving.',
    image: '/images/duothan 2  - hackathon mentor.webp',
    technologies: ['React', 'Node.js', 'Python', 'APIs', 'Cloud Services'],
    category: 'Full-Stack',
    status: 'Multiple',
    highlights: [
      'First place in multiple competitions',
      'Mentored 50+ participants',
      'Innovative solution architectures',
      'Team leadership experience'
    ]
  },
  {
    id: 'ieee-technical-projects',
    title: 'IEEE Technical Leadership',
    description: 'Leading technical initiatives and mentoring programs within IEEE student chapters, fostering innovation and knowledge sharing.',
    image: '/images/ieee technical mentor.webp',
    technologies: ['Leadership', 'Technical Mentoring', 'Project Management', 'Community Building'],
    category: 'Leadership',
    status: 'Ongoing',
    highlights: [
      'Technical workshop organization',
      'Student mentorship programs',
      'Innovation project guidance',
      'Community impact initiatives'
    ]
  },
  {
    id: 'web-applications',
    title: 'Modern Web Applications',
    description: 'Full-stack web applications built with modern technologies, focusing on user experience, performance, and scalability.',
    image: '/images/Picsart_22-11-21_17-37-50-741.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    category: 'Web Development',
    status: 'Ongoing',
    highlights: [
      'Responsive design principles',
      'Performance optimization',
      'Modern UI/UX patterns',
      'Scalable architecture'
    ]
  },
  {
    id: 'academic-excellence',
    title: 'Academic Achievement Portfolio',
    description: 'First-class honors in Computer Science with distinction in multiple specialized areas including AI, data structures, and software engineering.',
    image: '/images/graduration.webp',
    technologies: ['Computer Science', 'Mathematics', 'Statistics', 'Software Engineering'],
    category: 'Academic',
    status: 'Completed',
    highlights: [
      'First-class honors degree',
      'Dean\'s list recognition',
      'Outstanding project awards',
      'Research thesis distinction'
    ]
  }
];

// const categories = ['All', 'AI/ML', 'Research', 'Web Development', 'Full-Stack', 'Leadership', 'Academic'];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
          A showcase of my technical expertise, research contributions, and innovative solutions 
          spanning AI/ML, web development, and academic excellence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <div key={project.id} className="glass rounded-2xl overflow-hidden hover-lift group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Highlights:</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center glass rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Interested in collaborating on innovative projects or discussing technical solutions? 
          I&apos;m always excited to work on challenging problems and create impactful technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:contact@srimal.me" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow hover-lift"
          >
            Start a Conversation
          </a>
          <a 
            href="/blog" 
            className="px-8 py-4 glass font-semibold rounded-full hover-lift transition-all duration-300"
          >
            Read My Articles
          </a>
        </div>
      </div>
    </div>
  );
}