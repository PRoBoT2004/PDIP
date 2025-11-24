// components/LearningSection.jsx
import React from 'react';

const LearningSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What You Will <span className="text-blue-400">Learn</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Master industry-relevant skills through hands-on practice with modern tools and real-world project scenarios.
          </p>
        </div>

        {/* Learning Tracks */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Web Development Track */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            
            {/* Header */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Web Development</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Building Modern UI Layouts</h4>
                    <p className="text-gray-400 text-sm">Create responsive, accessible interfaces using modern CSS and frameworks</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Mobile Responsiveness</h4>
                    <p className="text-gray-400 text-sm">Master responsive design principles for all device sizes</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">✨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adding Animations and Interactions</h4>
                    <p className="text-gray-400 text-sm">Implement smooth animations and interactive user experiences</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Using AI Tools in Development</h4>
                    <p className="text-gray-400 text-sm">Leverage AI for faster coding, debugging, and optimization</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Deploying Websites Professionally</h4>
                    <p className="text-gray-400 text-sm">Learn hosting, deployment, and maintenance best practices</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Graphic Design Track */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            
            {/* Header */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Creating Brand Identity Systems</h4>
                    <p className="text-gray-400 text-sm">Develop complete visual identities from concept to execution</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Logo Designing in Illustrator</h4>
                    <p className="text-gray-400 text-sm">Master professional logo design using Adobe Illustrator</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Making Posts and Banners</h4>
                    <p className="text-gray-400 text-sm">Create engaging social media content and marketing materials</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Building Moodboards</h4>
                    <p className="text-gray-400 text-sm">Create comprehensive visual guides for design projects</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Design References and Style Guides</h4>
                    <p className="text-gray-400 text-sm">Learn to research, analyze, and document design standards</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningSection;