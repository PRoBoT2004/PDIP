// components/ProcessSection.jsx
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Fill the Application Form',
      description: 'Complete our detailed application form with your background, skills, and motivation for joining the internship program.',
      icon: '📝',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02', 
      title: 'Complete the Assigned Task',
      description: 'Work on a practical assignment that demonstrates your current skill level and approach to problem-solving.',
      icon: '⚡',
      color: 'from-blue-600 to-blue-700'
    },
    {
      number: '03',
      title: 'Attend a Short Interview',
      description: 'Join a brief conversation with our team to discuss your work, goals, and how we can help you grow.',
      icon: '💬',
      color: 'from-blue-700 to-blue-800'
    },
    {
      number: '04',
      title: 'Receive Offer Letter & Start Date',
      description: 'Get your official internship offer with all details, timeline, and instructions to begin your journey.',
      icon: '🎉',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Internship <span className="text-blue-400">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A simple, structured selection process that ensures only serious and committed candidates proceed to the internship program.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              {/* Connector Line - except for last item */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-400/50 to-blue-600/30 hidden lg:block"></div>
              )}

              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* Step Number & Icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {step.icon}
                  </div>
                  <div className="text-center lg:text-left ml-4 lg:ml-0">
                    <div className="text-3xl font-bold text-blue-400">{step.number}</div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="lg:col-span-10">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why This Process Works</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This structure ensures only serious candidates proceed, creating a focused learning environment for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Quality Focus</h4>
              <p className="text-gray-400 text-sm">Only committed candidates join the program</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Quick Process</h4>
              <p className="text-gray-400 text-sm">Complete evaluation within 1-2 weeks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-xl">🤝</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Fair Selection</h4>
              <p className="text-gray-400 text-sm">Transparent and merit-based assessment</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-blue-300 font-medium">⏱️ Complete Process Timeline: 1-2 Weeks</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;