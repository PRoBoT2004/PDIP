// components/RequirementsSection.jsx
import React from 'react';

const RequirementsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What You Need to <span className="text-blue-400">Get Started</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't worry - we're not looking for experts! Just bring your curiosity, basic skills, and a willingness to learn awesome stuff.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Web Development Requirements */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">For Web Development</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Know the Basics (HTML, CSS, JS)</h4>
                    <p className="text-gray-400 text-sm">You don't need to be a wizard - just comfortable with the fundamentals</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Framework Knowledge (Nice to Have)</h4>
                    <p className="text-gray-400 text-sm">React, Vue, Angular? Cool! Don't have any? No problem!</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Get How Layouts Work</h4>
                    <p className="text-gray-400 text-sm">Basic understanding of UI design and tools like Figma</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Love Learning New Things</h4>
                    <p className="text-gray-400 text-sm">Most important one! Ready to dive into modern workflows?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design Requirements */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">For UI/UX Design</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Basic Design Tool Knowledge</h4>
                    <p className="text-gray-400 text-sm">Figma, Sketch, or Adobe XD - just know your way around one</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Eye for Good Design</h4>
                    <p className="text-gray-400 text-sm">You know good design when you see it (even if you can't explain why)</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Think About Users</h4>
                    <p className="text-gray-400 text-sm">You care about making things easy and enjoyable for people</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Curious About "Why"</h4>
                    <p className="text-gray-400 text-sm">You ask questions like "why does this feel confusing?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Design Requirements */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">For Graphic Design</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Know Photoshop or Illustrator</h4>
                    <p className="text-gray-400 text-sm">Basic skills in Adobe tools - we'll teach you the pro tricks</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Get Colors and Layout</h4>
                    <p className="text-gray-400 text-sm">You understand that some things just "look right" together</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Creative & Consistent</h4>
                    <p className="text-gray-400 text-sm">You can come up with ideas and stick to a quality standard</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Can Follow Guidelines</h4>
                    <p className="text-gray-400 text-sm">You're cool with working within brand rules and client needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* General Requirements */}
        {/* <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">The Non-Negotiables (For Everyone!)</h3>
          <p className="text-gray-400 text-center mb-8">These are the things that really matter, no matter which path you choose:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">💪</span>
              </div>
              <h4 className="font-semibold text-white mb-2">You're In This for Real</h4>
              <p className="text-gray-400 text-sm">Ready to commit to the full journey, not just dip your toes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">🧠</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Growth Mindset</h4>
              <p className="text-gray-400 text-sm">Love learning, embrace feedback, and see challenges as fun puzzles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Good Communication</h4>
              <p className="text-gray-400 text-sm">You can express ideas clearly and aren't afraid to ask questions</p>
            </div>
          </div>
        </div> */}

        {/* Encouraging Note */}
        {/* <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Not Sure If You're Ready? 🤔</h3>
            <p className="text-gray-300 leading-relaxed">
              Here's the thing - we'd rather have someone who's excited to learn than someone who knows everything but isn't curious. If you're reading this and thinking "I want to try," then you're probably exactly who we're looking for!
            </p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default RequirementsSection;