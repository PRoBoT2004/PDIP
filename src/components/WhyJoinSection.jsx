// components/WhyJoinSection.jsx
import React from 'react';

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Industry-Style Tasks',
      description: 'Work on industry-style tasks'
    },
    {
      icon: '⚡',
      title: 'Modern & Practical',
      description: 'No outdated projects — everything is modern & practical'
    },
    {
      icon: '🏢',
      title: 'Real Agency Experience',
      description: 'Learn how real digital agencies operate'
    },
    {
      icon: '💼',
      title: 'Strong Portfolio',
      description: 'Build a strong portfolio piece'
    },
    {
      icon: '🤖',
      title: 'AI Tools Integration',
      description: 'Use AI tools smartly and efficiently'
    },
    {
      icon: '👨‍🏫',
      title: 'Continuous Guidance',
      description: 'Get guidance during and after the internship'
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Internship certificate provided'
    },
    {
      icon: '💰',
      title: 'Performance Stipend',
      description: 'Stipend available based on performance'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Join This <span className="text-blue-400">Internship</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            This isn't just another internship. It's your gateway to industry-level experience with modern tools, real projects, and continuous support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Real-World Focus</h3>
            <p className="text-gray-300 leading-relaxed">
              Every task mirrors actual client projects. No theoretical assignments - just practical, industry-relevant work that builds your professional portfolio.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Future-Ready Skills</h3>
            <p className="text-gray-300 leading-relaxed">
              Learn cutting-edge tools and workflows that agencies use today. Stay ahead with AI integration and modern development practices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
            <p className="text-gray-300 leading-relaxed">
              Get mentorship that continues beyond the internship. Build lasting professional relationships and career guidance.
            </p>
          </div>

        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Success Guaranteed</h3>
            <p className="text-gray-400">Our structured approach ensures every intern gains valuable experience</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">Certificate Completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2-3</div>
              <p className="text-gray-400">Portfolio Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-400">Mentor Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Live</div>
              <p className="text-gray-400">Project Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyJoinSection;