// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! We're a team of passionate creators who love building beautiful websites, designing stunning brands, and crafting user experiences that people actually enjoy using.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We've been in the trenches, working with amazing brands and businesses, helping them tell their stories through smart design and clean code. And honestly? We've learned a thing or two along the way.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              That's why we created this internship program - to share what we know with the next generation of designers and developers. We want to give you the real-world experience that actually prepares you for what's out there.
            </p>
          </div>

          {/* Right Visual */}
          <div className="space-y-6">
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <p className="text-gray-400">Years Creating Magic</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-gray-400">Dreams Brought to Life</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <p className="text-gray-400">Happy Collaborators</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-gray-400">We're Here for You</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">What We Love Doing</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Building websites that actually work (and look amazing)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Designing user experiences that feel effortless</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Creating brands that people remember</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Crafting visuals that tell powerful stories</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Why We Do This</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe there's a huge gap between what you learn in college and what you actually need in the real world. So we're here to bridge that gap - with real projects, modern tools, and mentors who've been where you want to go. Think of us as your career launchpad! 🚀
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">💡</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Real Talk, Real Projects</h4>
            <p className="text-gray-400 text-sm">No boring theory. Just hands-on work that actually matters.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">🤝</span>
            </div>
            <h4 className="font-semibold text-white mb-2">We Actually Care</h4>
            <p className="text-gray-400 text-sm">Your success is our success. We're invested in your journey.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-blue-400 text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Future-Ready Skills</h4>
            <p className="text-gray-400 text-sm">Learn what the industry actually uses, including AI tools.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;