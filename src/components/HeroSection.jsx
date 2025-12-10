// components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Real Projects, Real Experience
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Kickstart Your <span className="text-blue-400">Creative & Tech Career</span> With Real Projects
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Join our Web Development, UI/UX Design, and Graphic Design Internship Program and gain the experience that actually matters.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Work on real client-style tasks using modern tools, AI workflows, and industry-standard practices.
              </p>
            </div>

            {/* CTA */}
            <a 
              href="https://forms.gle/3Verbrw97c7nU17e6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Apply Now
            </a>

          </div>

          {/* Right Visual */}
          <div className="relative">
            
            {/* Main Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 backdrop-blur-sm">
              
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mr-4 flex items-center justify-center">
                  <span className="text-white font-bold">IP</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Internship Portal</h3>
                  <p className="text-gray-400 text-sm">Start your career journey</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                
                <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-blue-400">💻</span>
                    </div>
                    <div>
                      <p className="font-medium">Web Development</p>
                      <p className="text-gray-400 text-sm">Frontend & Modern Tech</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-medium">Available</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-blue-400">🎨</span>
                    </div>
                    <div>
                      <p className="font-medium">UI/UX Design</p>
                      <p className="text-gray-400 text-sm">User Experience & Interface</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-medium">Available</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-400/20">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-blue-400">🖌️</span>
                    </div>
                    <div>
                      <p className="font-medium">Graphic Design</p>
                      <p className="text-gray-400 text-sm">Branding & Visual Identity</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-medium">Available</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">2-3</p>
                    <p className="text-gray-400 text-xs">Months</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">Remote</p>
                    <p className="text-gray-400 text-xs">Work Mode</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">Paid</p>
                    <p className="text-gray-400 text-xs">Stipend</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600/10 border border-blue-400/20 rounded-xl backdrop-blur-sm"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;