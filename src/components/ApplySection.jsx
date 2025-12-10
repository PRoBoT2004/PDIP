// components/ApplySection.jsx
import React from 'react';

const ApplySection = () => {
  const formLink = 'https://forms.gle/3Verbrw97c7nU17e6';

  return (
    <section id="apply" className="py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/50 animate-bounce">
              🎯 Certification Programs Open!
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Certification Path</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Industry-focused certification programs with real projects and hands-on experience. Exceptional performers earn stipends based on project quality! 🚀
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Web Development Certification */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-400/30 rounded-3xl p-8 hover:border-blue-400/60 hover:from-blue-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 relative flex flex-col h-full">
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Most Popular 🔥
            </div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-gray-300 text-sm">Frontend & Backend Certification</p>
            </div>

            {/* Content */}
            <div className="flex-grow space-y-8">
              {/* What You'll Master */}
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Skills You'll Master:</h4>
                <ul className="text-gray-300 text-sm space-y-3">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>React.js & Modern JavaScript</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Responsive Design & CSS Frameworks</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>API Integration & Database Management</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Git & Version Control</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Real-World Project Development</li>
                </ul>
              </div>

              {/* Duration & Investment */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <p className="text-blue-400 font-semibold text-lg">2-3 Months</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold text-sm">Earn Stipend</p>
                  <p className="text-gray-400 text-xs">If You Excel</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="hidden sm:inline">Get Certified</span>
                  <span className="sm:hidden">Apply Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* UI/UX Design Certification */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-400/30 rounded-3xl p-8 hover:border-blue-400/60 hover:from-blue-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-300 text-sm">User Experience Certification</p>
            </div>

            {/* Content */}
            <div className="flex-grow space-y-8">
              {/* What You'll Master */}
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Skills You'll Master:</h4>
                <ul className="text-gray-300 text-sm space-y-3">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Figma & Design Systems</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>User Research & Testing</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Wireframing & Prototyping</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mobile & Web Design</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Client Project Execution</li>
                </ul>
              </div>

              {/* Duration & Investment */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <p className="text-blue-400 font-semibold text-lg">2-3 Months</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold text-sm">Earn Stipend</p>
                  <p className="text-gray-400 text-xs">If You Excel</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="hidden sm:inline">Get Certified</span>
                  <span className="sm:hidden">Apply Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Graphic Design Certification */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-400/30 rounded-3xl p-8 hover:border-blue-400/60 hover:from-blue-500/30 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Graphic Design</h3>
              <p className="text-gray-300 text-sm">Brand Identity Certification</p>
            </div>

            {/* Content */}
            <div className="flex-grow space-y-8">
              {/* What You'll Master */}
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-4">Skills You'll Master:</h4>
                <ul className="text-gray-300 text-sm space-y-3">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Adobe Creative Suite</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Brand Identity Design</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Social Media Graphics</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Print & Digital Design</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Professional Portfolio Creation</li>
                </ul>
              </div>

              {/* Duration & Investment */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <p className="text-blue-400 font-semibold text-lg">2-3 Months</p>
                  <p className="text-gray-400 text-xs">Duration</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-semibold text-sm">Earn Stipend</p>
                  <p className="text-gray-400 text-xs">If You Excel</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="hidden sm:inline">Get Certified</span>
                  <span className="sm:hidden">Apply Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-purple-600/20 border-2 border-blue-400/40 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">🎓 Professional Certification Program</h3>
            
            {/* Clarification Box - Shortened */}
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Premium certification program with hands-on projects. <span className="text-green-300 font-medium">🌟 Top performers earn stipends for exceptional work!</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 text-left">
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Industry-Recognized Certificate
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance-Based Stipend Opportunity
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Work From Home Flexibility
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Portfolio-Ready Projects
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  One-on-One Mentorship
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Industry Tools & Software Access
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Career Guidance & Job Referrals
                </div>
                <div className="flex items-center text-gray-200 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  LinkedIn Recommendation Letter
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <a 
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl md:rounded-2xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300/50 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="hidden sm:inline">Apply for Certification Program</span>
                  <span className="sm:hidden">Start Your Journey</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApplySection;