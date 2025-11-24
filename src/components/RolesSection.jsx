// components/RolesSection.jsx
import React from 'react';

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Internship Roles <span className="text-blue-400">Available</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose your path and start building real-world experience with guided mentorship and industry-standard practices.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Web Development Role */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
            
            {/* Icon & Header */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Web Development Internship</h3>
                <p className="text-blue-300">Frontend & Modern Web Technologies</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              Work on website layouts, responsive design, animations, and real-world project flow. Ideal for beginners wanting to enter frontend development.
            </p>

            {/* Skills You'll Learn */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">What you'll work on:</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Modern responsive layouts</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Interactive UI animations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Real client project workflows</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Modern development tools</span>
                </div>
              </div>
            </div>

          </div>

          {/* Graphic Design Role */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
            
            {/* Icon & Header */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Graphic Design Internship</h3>
                <p className="text-blue-300">Branding & Visual Identity</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              Work on branding, logo creation, social media creatives, and full visual identity projects. Perfect for designers who want agency-style experience.
            </p>

            {/* Skills You'll Learn */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">What you'll work on:</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Complete brand identity systems</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Professional logo design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Social media creatives</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Marketing materials design</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Both Roles Include</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">📚</span>
              </div>
              <p className="font-medium text-white">Guided Tasks</p>
              <p className="text-gray-400 text-sm">Step-by-step mentorship</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">🔍</span>
              </div>
              <p className="font-medium text-white">Review Sessions</p>
              <p className="text-gray-400 text-sm">Regular feedback & improvement</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">🏆</span>
              </div>
              <p className="font-medium text-white">Certification</p>
              <p className="text-gray-400 text-sm">Industry-recognized certificate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RolesSection;