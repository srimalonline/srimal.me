import Image from 'next/image';

const blogPosts = [
  {
    id: 'ai-research-journey',
    title: 'My Journey in AI Research: From Student to Scholar',
    excerpt: 'Reflections on my academic path in artificial intelligence, the challenges faced, breakthroughs achieved, and the future of AI research.',
    image: '/images/research nsrsit 2025.webp',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI Research',
    tags: ['AI', 'Research', 'Machine Learning', 'Academia']
  },
  {
    id: 'mentoring-next-generation',
    title: 'Mentoring the Next Generation of Engineers',
    excerpt: 'How technical mentorship programs shape future innovators and my experience guiding students through complex engineering challenges.',
    image: '/images/ieee technical mentor.webp',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Mentorship',
    tags: ['Mentorship', 'IEEE', 'Leadership', 'Education']
  },
  {
    id: 'hackathon-winning-strategies',
    title: 'Winning Hackathons: Strategy, Execution, and Innovation',
    excerpt: 'Inside look at successful hackathon approaches, from ideation to implementation, and how to build award-winning solutions under pressure.',
    image: '/images/duothan 2  - hackathon mentor.webp',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Competition',
    tags: ['Hackathons', 'Strategy', 'Innovation', 'Team Leadership']
  },
  {
    id: 'smart-city-solutions',
    title: 'Building Smart Cities: IoT and AI Integration',
    excerpt: 'How intelligent traffic systems and IoT infrastructure are revolutionizing urban mobility and creating sustainable smart cities.',
    image: '/images/smart traffic light.jpg',
    date: '2024-12-28',
    readTime: '12 min read',
    category: 'Technology',
    tags: ['IoT', 'Smart Cities', 'AI', 'Urban Planning']
  },
  {
    id: 'community-building-tech',
    title: 'Building Tech Communities: Lessons from Event Organization',
    excerpt: 'Creating meaningful tech events that foster innovation, networking, and knowledge sharing within the developer community.',
    image: '/images/nsbm senior orientation 2024.webp',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'Community',
    tags: ['Community Building', 'Events', 'Networking', 'Leadership']
  },
  {
    id: 'global-volunteering-impact',
    title: 'Global Impact Through Technology Volunteering',
    excerpt: 'My experience with international volunteer programs and how technology can drive positive social change across communities.',
    image: '/images/aiesec project coast voluneer.webp',
    date: '2024-12-15',
    readTime: '9 min read',
    category: 'Social Impact',
    tags: ['Volunteering', 'AIESEC', 'Global Impact', 'Social Change']
  },
  {
    id: 'academic-excellence-journey',
    title: 'Achieving Academic Excellence: Strategies and Mindset',
    excerpt: 'The path to first-class honors in Computer Science, balancing theoretical knowledge with practical application.',
    image: '/images/graduration.webp',
    date: '2024-12-10',
    readTime: '8 min read',
    category: 'Education',
    tags: ['Academic Success', 'Computer Science', 'Study Tips', 'Career']
  },
  {
    id: 'digital-storytelling-media',
    title: 'The Art of Digital Storytelling in Tech Media',
    excerpt: 'How visual narratives and multimedia content can effectively communicate complex technical concepts to diverse audiences.',
    image: '/images/steerx media volunteer.webp',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Media',
    tags: ['Digital Media', 'Storytelling', 'Content Creation', 'Communication']
  }
];

// const categories = ['All', 'AI Research', 'Technology', 'Mentorship', 'Community', 'Education', 'Competition', 'Social Impact', 'Media'];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-black mb-6">
          Tech Insights & Stories
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Exploring the intersection of technology, research, and human impact through personal experiences,
          technical insights, and lessons learned from the field.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="glass rounded-3xl overflow-hidden hover-lift group">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/30 text-white text-xs font-semibold rounded-full border border-white/30 backdrop-blur-sm">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm text-black/70 font-semibold">{blogPosts[0].category}</span>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                {blogPosts[0].title}
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {blogPosts[0].tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-black/5 text-black/70 text-xs rounded-md border border-black/10">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${blogPosts[0].id}`}
                className="px-6 py-3 bg-black font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 hover-lift inline-flex items-center w-fit"
                style={{ color: 'white' }}
              >
                Read Article
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.slice(1).map((post, index) => (
          <article key={post.id} className={`glass rounded-2xl overflow-hidden hover-lift group fade-in-stagger-${Math.min(index + 1, 6)}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-black/5 text-black/60 text-xs rounded border border-black/10">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-black hover:text-gray-700 transition-colors text-sm font-semibold"
              >
                Read More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="text-center glass rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          Stay Updated with Latest Insights
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Get notified about new articles on AI research, technology trends, and lessons from the field.
          Join a community of innovators and lifelong learners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full flex-1 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 border border-black/10 bg-white"
          />
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 hover-lift whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}