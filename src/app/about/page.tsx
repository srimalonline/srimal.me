import Image from 'next/image';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'R', 'SQL'],
  'AI/ML & Data Science': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Jupyter'],
  'Web Technologies': ['React', 'Next.js', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Databases & Cloud': ['PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud', 'Firebase', 'Docker'],
  'Tools & Platforms': ['Git', 'VS Code', 'Figma', 'Notion', 'Linux', 'Arduino', 'Raspberry Pi']
};

const achievements = [
  {
    title: 'First-Class Honors Graduate',
    description: 'Computer Science degree with distinction, Dean\'s List recognition',
    image: '/images/graduration.webp',
    year: '2024'
  },
  {
    title: 'AI Research Publications',
    description: 'Published research papers at international conferences on ML and data science',
    image: '/images/research nsrsit 2025.webp',
    year: '2025'
  },
  {
    title: 'IEEE Technical Leadership',
    description: 'Led technical mentorship programs and innovation workshops',
    image: '/images/ieee technical mentor.webp',
    year: '2023-2024'
  },
  {
    title: 'Hackathon Champion',
    description: 'Multiple first-place wins and mentored 50+ participants',
    image: '/images/duothan 2  - hackathon mentor.webp',
    year: '2023-2024'
  }
];

const timeline = [
  {
    year: '2025',
    title: 'AI Master\'s Student & Researcher',
    description: 'Pursuing advanced studies in AI and data science, conducting cutting-edge research in machine learning algorithms.',
    image: '/images/research nsrsut 2025 2.webp'
  },
  {
    year: '2024',
    title: 'Computer Science Graduate',
    description: 'Graduated with first-class honors, completed thesis on intelligent systems with distinction.',
    image: '/images/graduration.webp'
  },
  {
    year: '2023-2024',
    title: 'IEEE Technical Mentor',
    description: 'Led technical workshops, mentored engineering students, and organized innovation challenges.',
    image: '/images/ieee technical mentor 2.webp'
  },
  {
    year: '2023',
    title: 'Community Event Organizer',
    description: 'Organized tech orientation programs, workshops, and networking events for 500+ students.',
    image: '/images/nsbm senior orientation 2023.webp'
  },
  {
    year: '2022-2023',
    title: 'Global Volunteer & Media Creator',
    description: 'International volunteer work with AIESEC, digital storytelling and media content creation.',
    image: '/images/aiesec project coast voluneer.webp'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 mx-auto relative border-2 border-black/10 rounded-full overflow-hidden">
            <Image
              src="/srimal-fernando.png"
              alt="Srimal Fernando"
              fill
              className="rounded-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
          About Srimal Fernando
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Researcher and engineer specializing in artificial intelligence, machine learning, and scalable software systems.
          Committed to advancing the field through rigorous research, innovative solutions, and technical leadership.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">My Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              As a Computer Science graduate with first-class honors, I have developed a strong foundation in both theoretical
              computer science and practical software engineering. My academic and professional journey has been driven by a
              commitment to advancing artificial intelligence and machine learning through rigorous research.
            </p>
            <p>
              My work encompasses research in intelligent systems, full-stack software development, and technical leadership.
              I have contributed to publications at international conferences and developed solutions for complex real-world problems,
              from intelligent traffic systems to advanced machine learning models.
            </p>
            <p>
              As a technical mentor and research leader, I am dedicated to fostering knowledge sharing and innovation within the
              engineering community. Through academic collaboration, technical mentorship, and research initiatives, I work to advance
              both individual capabilities and the broader field of artificial intelligence.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="glass rounded-2xl p-6 hover-lift">
            <div className="relative h-64 rounded-xl overflow-hidden mb-4">
              <Image
                src="/images/research nsrsit 2025.webp"
                alt="Research presentation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Research & Development</h3>
            <p className="text-gray-700 text-sm">
              Conducting advanced research in artificial intelligence and machine learning. Current focus includes
              intelligent algorithms, data science applications, and the theoretical foundations of modern AI systems.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 text-center fade-in">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className={`glass rounded-2xl p-6 hover-lift fade-in-stagger-${Math.min(index + 1, 6)}`}>
              <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black/5 text-black/70 text-sm rounded-full border border-black/10 hover:bg-black/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 text-center fade-in">Key Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className={`glass rounded-2xl overflow-hidden hover-lift group fade-in-stagger-${index + 1}`}>
              <div className="relative h-48">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/10 text-black/60 text-xs font-semibold rounded-full border border-black/20">
                    {achievement.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Journey Timeline</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8 group">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 relative rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
              </div>
              <div className="glass rounded-2xl p-6 hover-lift flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-black/10 text-black/60 text-sm font-semibold rounded-full border border-black/20">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center glass rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Interested in discussing research collaborations, technical partnerships, or exploring opportunities to advance
          the field of artificial intelligence? I welcome inquiries from fellow researchers and industry professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@srimal.me"
             className="px-8 py-4 bg-black font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 hover-lift"
            style={{ color: 'white' }}
          >
            Get In Touch
          </a>
          <a
            href="/projects"
            className="px-8 py-4 bg-white border-2 border-black text-black font-semibold rounded-full hover:bg-gray-100 hover-lift transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}