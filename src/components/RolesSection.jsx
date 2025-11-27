// components/RolesSection.jsx
import React from 'react';

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pick Your <span className="text-blue-400">Adventure</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Three amazing paths, one incredible journey. Choose what excites you most and let's build something awesome together!
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Web Development Role */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
            
            {/* Icon & Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-blue-300">Bring Ideas to Life with Code</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Love the idea of building websites that people actually use? You'll work on responsive layouts, cool animations, and real projects that make you go "I built that!" 
            </p>

            {/* Skills You'll Learn */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-center mb-4">You'll Get Really Good At:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Making websites look stunning on any device</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Adding those "wow" animations everyone loves</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Working like a pro developer (seriously!)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Using AI to code faster and smarter</span>
                </div>
              </div>
            </div>

          </div>

          {/* UI/UX Design Role */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
            
            {/* Icon & Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-blue-300">Make Things Beautiful & Easy to Use</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Ever used an app and thought "this just feels right"? That's what you'll create - experiences that are beautiful, intuitive, and make users happy.
            </p>

            {/* Skills You'll Learn */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-center mb-4">You'll Master:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Designing interfaces people love to use</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Creating user journeys that make sense</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Prototyping with tools like Figma</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Understanding what users actually want</span>
                </div>
              </div>
            </div>

          </div>

          {/* Graphic Design Role */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 group">
            
            {/* Icon & Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Graphic Design</h3>
              <p className="text-blue-300">Create Visuals That Stop the Scroll</p>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6 text-center">
              Got an eye for what looks good? You'll craft brand identities, design logos that stick in people's minds, and create visuals that tell amazing stories.
            </p>

            {/* Skills You'll Learn */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-center mb-4">You'll Become Pro At:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Building complete brand personalities</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Designing logos that actually mean something</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Creating social content that gets noticed</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Working with real client briefs</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">No Matter Which Path You Choose</h3>
          <p className="text-gray-400 mb-8">You'll get the full experience with mentorship, real projects, and skills that actually matter in the industry.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">🎯</span>
              </div>
              <p className="font-medium text-white">Personal Mentorship</p>
              <p className="text-gray-400 text-sm">One-on-one guidance from industry pros</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">💬</span>
              </div>
              <p className="font-medium text-white">Regular Check-ins</p>
              <p className="text-gray-400 text-sm">Weekly feedback to keep you on track</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-blue-400 text-xl">🏆</span>
              </div>
              <p className="font-medium text-white">Portfolio & Certificate</p>
              <p className="text-gray-400 text-sm">Leave with work you're proud to show</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RolesSection;