// components/DetailsSection.jsx
import React from 'react';

const DetailsSection = () => {
  const details = [
    {
      icon: '⏰',
      title: 'Duration',
      value: '2–3 Months',
      description: 'Flexible timeline based on your learning pace and project complexity',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🌐',
      title: 'Work Mode',
      value: 'Remote / Hybrid',
      description: 'Work from anywhere with optional in-person meetups if local',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: '💰',
      title: 'Stipend',
      value: 'Performance Based',
      description: 'Earn based on your consistency, quality of work, and dedication',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: '🛠️',
      title: 'Tools Allowed',
      value: 'Any + AI Tools',
      description: 'Use any development/design tools plus AI assistance for enhanced productivity',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Internship <span className="text-blue-400">Details</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to know about the internship structure, timeline, and working conditions.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {details.map((detail, index) => (
            <div 
              key={detail.title}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 hover:from-blue-500/15 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{detail.title}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-3">{detail.value}</div>
                  <p className="text-gray-300 leading-relaxed">{detail.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* What's Included */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center">
                ✅
              </span>
              What's Included
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Weekly mentor check-ins</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Project feedback & reviews</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Industry-standard workflows</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Portfolio development guidance</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Certificate upon completion</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-300">Career guidance sessions</span>
              </div>
            </div>
          </div>

          {/* Working Schedule */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg mr-3 flex items-center justify-center">
                📅
              </span>
              Working Schedule
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Flexible Hours</h4>
                <p className="text-gray-300 text-sm">Work at your own pace with weekly milestone targets</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Weekly Meetings</h4>
                <p className="text-gray-300 text-sm">1-2 check-ins per week for progress review and guidance</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Project Deadlines</h4>
                <p className="text-gray-300 text-sm">Realistic timelines with buffer for learning and iterations</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Support Access</h4>
                <p className="text-gray-300 text-sm">24/7 communication channels for questions and assistance</p>
              </div>
            </div>
          </div>

        </div>

        {/* Key Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Key Highlights</h3>
            <p className="text-gray-400">Designed for maximum learning with real-world application</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-gray-400">Remote Flexibility</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">AI</div>
              <p className="text-gray-400">Tools Integration</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Live</div>
              <p className="text-gray-400">Project Work</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1:1</div>
              <p className="text-gray-400">Mentorship</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailsSection;