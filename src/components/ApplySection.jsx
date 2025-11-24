// components/ApplySection.jsx
import React from 'react';

const ApplySection = () => {
  return (
    <section id="apply" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Apply <span className="text-blue-400">Now</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to kickstart your career? Choose your path and begin your journey with us.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Web Development Application */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Web Development Internship</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Build modern websites, learn responsive design, and master frontend development with real-world projects.
            </p>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Apply for Web Development
            </button>
          </div>

          {/* Graphic Design Application */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Graphic Design Internship</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Create stunning brand identities, design logos, and build visual assets that make brands stand out.
            </p>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Apply for Graphic Design
            </button>
          </div>

        </div>

        {/* Application Process Reminder */}
        <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Application Process</h3>
          <p className="text-gray-400 mb-6">
            After clicking apply, you'll fill out our application form, complete a practical task, attend a brief interview, and receive your offer letter.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-blue-300">
            <span>📝 Application</span>
            <span>→</span>
            <span>⚡ Task</span>
            <span>→</span>
            <span>💬 Interview</span>
            <span>→</span>
            <span>🎉 Offer Letter</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApplySection;