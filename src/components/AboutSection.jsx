// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-blue-400">Prime Digitals</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Prime Digitals is a creative digital agency specializing in web development, UI/UX design, and brand identity. Since 2020, we've been helping businesses establish their digital presence through innovative solutions and creative excellence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team has successfully delivered projects across various industries, working with startups, small businesses, and established brands. We pride ourselves on creating digital experiences that are not just visually appealing, but also functional and user-centric.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              Our internship program was born from a simple observation: there's a significant gap between academic learning and industry requirements. We created this program to bridge that gap, offering students and fresh graduates hands-on experience with real-world projects and modern tools.
            </p>
          </div>

          {/* Right Visual */}
          <div className="space-y-6">
            
            {/* Company Overview */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Who We Are</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a full-service digital marketing company, we combine creativity with technology to deliver comprehensive digital solutions. From crafting compelling brand identities to developing cutting-edge web applications, we're your partners in digital transformation.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-lg mr-3 mt-1 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Strategic digital marketing campaigns</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-lg mr-3 mt-1 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Custom web & mobile development</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-lg mr-3 mt-1 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Brand strategy & visual identity</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-lg mr-3 mt-1 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Social media management & content creation</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Data-driven strategies for measurable results</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Collaborative process with our clients</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Cutting-edge tools and technologies</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Continuous support and optimization</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mission Statement */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're committed to nurturing the next generation of digital creators by providing practical, industry-relevant training. Our internship program combines real client work with mentorship from experienced professionals, ensuring that our interns graduate not just with certificates, but with portfolio-worthy projects and job-ready skills.
            </p>
          </div>
        </div> */}

        {/* What Makes Us Different */}
        {/* <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">💼</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Real-World Projects</h4>
            <p className="text-gray-400 text-sm">Work on actual client briefs and industry-standard deliverables, not theoretical assignments.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">🎓</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Expert Mentorship</h4>
            <p className="text-gray-400 text-sm">Learn from professionals with years of industry experience and active portfolios.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">🚀</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Modern Tech Stack</h4>
            <p className="text-gray-400 text-sm">Master current industry tools including AI-powered workflows and modern frameworks.</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default AboutSection;