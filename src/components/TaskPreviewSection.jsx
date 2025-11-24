// components/TaskPreviewSection.jsx
import React, { useState } from 'react';

const TaskPreviewSection = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Internship Task <span className="text-blue-400">Preview</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Get a glimpse of the real-world tasks you'll be working on. Each assignment is designed to build your portfolio and industry experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-700/50 p-2 rounded-2xl border border-blue-400/20">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'web' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Web Development Tasks
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'design' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Graphic Design Tasks
            </button>
          </div>
        </div>

        {/* Task Content */}
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
          
          {activeTab === 'web' ? (
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Web Development Tasks</h3>
                  <p className="text-blue-300">Complete project workflow from design to deployment</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Create a Full 2-Page Website</h4>
                    <p className="text-gray-400 text-sm">Build a complete website with home and about pages using modern frameworks</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Add Premium UI Animations</h4>
                    <p className="text-gray-400 text-sm">Implement smooth transitions, hover effects, and interactive elements</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Ensure Full Responsiveness</h4>
                    <p className="text-gray-400 text-sm">Make sure the website works perfectly on all devices and screen sizes</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Deploy the Site</h4>
                    <p className="text-gray-400 text-sm">Launch your website live using professional hosting platforms</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Submit GitHub Repo + References</h4>
                    <p className="text-gray-400 text-sm">Organize code professionally and document all design references used</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Graphic Design Tasks</h3>
                  <p className="text-blue-300">Complete brand identity project from concept to delivery</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Create a Complete Brand Identity</h4>
                    <p className="text-gray-400 text-sm">Develop a cohesive visual identity system including colors, typography, and style</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Design Logo (Illustrator Mandatory)</h4>
                    <p className="text-gray-400 text-sm">Create professional, scalable logo designs using Adobe Illustrator</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Make 3 Posts and 1 Banner</h4>
                    <p className="text-gray-400 text-sm">Design engaging social media content and marketing materials</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Build Moodboard (Colors, Fonts, Aesthetics)</h4>
                    <p className="text-gray-400 text-sm">Create comprehensive visual guides showing design direction and inspiration</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-lg mr-4 flex items-center justify-center font-semibold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Submit References for Everything Used</h4>
                    <p className="text-gray-400 text-sm">Document all inspiration sources and maintain design integrity</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
              View Full Task Document
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TaskPreviewSection;