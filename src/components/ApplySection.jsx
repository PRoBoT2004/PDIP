// components/ApplySection.jsx
import React from 'react';

const ApplySection = () => {
  return (
    <section id="apply" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to <span className="text-blue-400">Start Your Journey?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            This is it - your moment to level up! Pick the path that excites you most and let's build something amazing together. 🚀
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Web Development Application */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Love bringing ideas to life with code? Ready to build websites that make people go "wow, this is smooth"?
            </p>
            <div className="text-sm text-blue-300 mb-6">
              Perfect for: Future developers, coding enthusiasts, tech lovers
            </div>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Coding Journey
            </button>
          </div>

          {/* UI/UX Design Application */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dream about making apps that just "feel right"? Want to create experiences that users absolutely love?
            </p>
            <div className="text-sm text-blue-300 mb-6">
              Perfect for: Design thinkers, user advocates, problem solvers
            </div>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Design Journey
            </button>
          </div>

          {/* Graphic Design Application */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Graphic Design</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Have an eye for what looks amazing? Ready to create visuals that stop people mid-scroll and make them think "that's beautiful"?
            </p>
            <div className="text-sm text-blue-300 mb-6">
              Perfect for: Visual storytellers, brand builders, creative minds
            </div>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Creative Journey
            </button>
          </div>

        </div>

        {/* What Happens Next */}
        {/* <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">What Happens After You Hit Apply?</h3>
          <p className="text-gray-400 text-center mb-8">
            Don't worry, we keep it simple and straightforward - no lengthy processes or confusing steps!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">📝</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Fill the Form</h4>
              <p className="text-gray-400 text-sm">Tell us about yourself - keep it real and honest!</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Show Your Skills</h4>
              <p className="text-gray-400 text-sm">A fun task to see how you think and create</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">💬</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Quick Chat</h4>
              <p className="text-gray-400 text-sm">A friendly conversation about your goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-2xl">🎉</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Welcome Aboard!</h4>
              <p className="text-gray-400 text-sm">Get your offer letter and start date</p>
            </div>
          </div>
        </div> */}

        {/* Still Deciding? */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Still on the Fence? 🤔</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Look, we get it. Taking the leap can feel scary. But here's the thing - the best time to start was yesterday, the second-best time is right now. You've got nothing to lose and everything to gain!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">✨ No risk, all reward</span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">🚀 Boost your career</span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">💡 Learn from pros</span>
              <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">🏆 Build real portfolio</span>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default ApplySection;