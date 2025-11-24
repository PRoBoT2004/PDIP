// components/RequirementsSection.jsx
import React from 'react';

const RequirementsSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-blue-400">Requirements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Basic skills and willingness to learn are all you need to get started. We'll help you grow from there.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Web Development Requirements */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">For Web Development</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Basic HTML, CSS, JS</h4>
                    <p className="text-gray-400 text-sm">Fundamental understanding of web technologies</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Framework Knowledge (Plus)</h4>
                    <p className="text-gray-400 text-sm">Understanding of any framework is a bonus, not required</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Familiarity with UI Layouts / Figma</h4>
                    <p className="text-gray-400 text-sm">Basic understanding of design tools and layouts</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Eagerness to Learn Modern Workflows</h4>
                    <p className="text-gray-400 text-sm">Most important - willingness to adapt and grow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Design Requirements */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">For Graphic Design</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Basic Photoshop / Illustrator</h4>
                    <p className="text-gray-400 text-sm">Fundamental knowledge of Adobe design tools</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Understanding of Color and Layout</h4>
                    <p className="text-gray-400 text-sm">Basic design principles and visual composition</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Creativity and Consistency</h4>
                    <p className="text-gray-400 text-sm">Ability to generate ideas and maintain quality</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Willingness to Follow Brand Rules</h4>
                    <p className="text-gray-400 text-sm">Ability to work within brand guidelines and standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* General Requirements */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">General Requirements for Both Roles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">💪</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Commitment</h4>
              <p className="text-gray-400 text-sm">Dedication to complete the full internship duration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Growth Mindset</h4>
              <p className="text-gray-400 text-sm">Eagerness to learn and improve continuously</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Communication</h4>
              <p className="text-gray-400 text-sm">Good English communication for feedback and reviews</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RequirementsSection;