import Image from 'next/image';

const publications = [
  {
    id: 'ai-traffic-optimization',
    title: 'Intelligent Traffic Light Optimization Using Computer Vision and Machine Learning',
    authors: ['Srimal Fernando', 'Dr. A. Researcher', 'Dr. B. Collaborator'],
    venue: 'International Conference on AI and Smart Cities 2025',
    year: '2025',
    type: 'Conference Paper',
    status: 'Published',
    abstract: 'This paper presents a novel approach to traffic light optimization using computer vision techniques and machine learning algorithms to analyze real-time traffic density and adapt signal timing accordingly.',
    image: '/images/smart traffic light.webp',
    tags: ['Computer Vision', 'Machine Learning', 'Smart Cities', 'IoT'],
    link: '#',
    pdf: '#'
  },
  {
    id: 'data-driven-urban-planning',
    title: 'Data-Driven Approaches to Urban Infrastructure Planning',
    authors: ['Srimal Fernando', 'Dr. C. Supervisor'],
    venue: 'Journal of Urban Technology and Innovation',
    year: '2024',
    type: 'Journal Article',
    status: 'Under Review',
    abstract: 'An exploration of how big data analytics and machine learning can inform urban planning decisions, focusing on infrastructure development and resource optimization.',
    image: '/images/research nsrsit 2025.webp',
    tags: ['Data Science', 'Urban Planning', 'Big Data', 'Analytics'],
    link: '#',
    pdf: '#'
  },
  {
    id: 'ml-algorithm-optimization',
    title: 'Novel Optimization Techniques for Deep Learning Model Training',
    authors: ['Srimal Fernando', 'Research Team'],
    venue: 'International Conference on Machine Learning Research',
    year: '2024',
    type: 'Conference Paper',
    status: 'Presented',
    abstract: 'This work introduces new optimization methods for training deep neural networks, achieving faster convergence and improved performance on benchmark datasets.',
    image: '/images/research nsrsut 2025 2.webp',
    tags: ['Deep Learning', 'Optimization', 'Neural Networks', 'AI'],
    link: '#',
    pdf: '#'
  }
];

const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Developing intelligent algorithms and systems that can learn, adapt, and make decisions in complex environments.',
    icon: '🤖',
    projects: ['Smart Traffic Systems', 'Computer Vision Applications', 'Deep Learning Optimization']
  },
  {
    title: 'Data Science & Analytics',
    description: 'Extracting meaningful insights from large datasets to drive informed decision-making and predict future trends.',
    icon: '📊',
    projects: ['Urban Planning Analytics', 'Predictive Modeling', 'Statistical Analysis']
  },
  {
    title: 'Smart Cities & IoT',
    description: 'Creating intelligent urban infrastructure that improves quality of life through connected devices and data-driven solutions.',
    icon: '🏙️',
    projects: ['Traffic Light Optimization', 'Environmental Monitoring', 'Smart Infrastructure']
  },
  {
    title: 'Computer Vision',
    description: 'Enabling machines to interpret and understand visual information from the world around them.',
    icon: '👁️',
    projects: ['Real-time Traffic Analysis', 'Object Detection Systems', 'Image Recognition']
  }
];

const currentProjects = [
  {
    title: 'AI-Powered Urban Mobility',
    description: 'Developing next-generation traffic management systems using advanced AI and IoT technologies.',
    status: 'Ongoing',
    progress: 75,
    collaborators: ['NSBM Green University', 'Urban Planning Department'],
    image: '/images/smart traffic light.webp'
  },
  {
    title: 'Machine Learning Model Optimization',
    description: 'Research into novel techniques for improving the efficiency and accuracy of deep learning models.',
    status: 'Active',
    progress: 60,
    collaborators: ['AI Research Lab', 'Industry Partners'],
    image: '/images/research nsrsit 2025.webp'
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Exploring how big data analytics can transform organizational decision-making processes.',
    status: 'Planning',
    progress: 25,
    collaborators: ['Data Science Institute', 'Corporate Partners'],
    image: '/images/research nsrsut 2025 2.webp'
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">
          Research Portfolio
        </h1>
        <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto">
          Advancing the frontiers of artificial intelligence, data science, and smart city technologies 
          through innovative research and practical applications that solve real-world problems.
        </p>
      </div>

      {/* Research Areas */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Research Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{area.icon}</span>
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-blue-400">Active Projects:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {area.projects.map((project, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Publications & Papers</h2>
        <div className="space-y-8">
          {publications.map((pub) => (
            <article key={pub.id} className="glass rounded-2xl overflow-hidden hover-lift group">
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pub.status === 'Published' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      pub.status === 'Under Review' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <span className="text-sm text-blue-400 font-semibold">{pub.type} • {pub.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-sm text-purple-400 font-medium">
                      {pub.venue}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={pub.link}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow hover-lift"
                    >
                      View Paper
                    </a>
                    <a 
                      href={pub.pdf}
                      className="px-4 py-2 glass text-sm font-semibold rounded-full hover-lift transition-all duration-300"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Current Projects */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Current Research Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden hover-lift group">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Ongoing' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'Active' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-white text-sm font-semibold">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-black/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
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
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Collaborators:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.collaborators.map((collaborator, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-blue-400 mr-2">•</span>
                        {collaborator}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Impact */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Research Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-black text-blue-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Published Papers</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-black text-purple-400 mb-2">3</div>
            <div className="text-gray-300 text-sm">Active Projects</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-black text-green-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Collaborators</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover-lift">
            <div className="text-3xl font-black text-orange-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Research Areas</div>
          </div>
        </div>
      </div>

      {/* Collaboration CTA */}
      <div className="text-center glass rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Collaborate on Cutting-Edge Research
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Interested in collaborating on AI research, data science projects, or smart city innovations? 
          Let's explore how we can work together to advance the boundaries of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:research@srimal.me" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 glow hover-lift"
          >
            Research Collaboration
          </a>
          <a 
            href="/projects" 
            className="px-8 py-4 glass font-semibold rounded-full hover-lift transition-all duration-300"
          >
            View Technical Projects
          </a>
        </div>
      </div>
    </div>
  );
}