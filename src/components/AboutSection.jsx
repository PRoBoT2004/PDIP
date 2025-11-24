// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a digital solutions company focused on building modern websites, branding systems, and creative digital assets.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team works closely with brands and businesses to help them grow through smart design and efficient technology.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              This internship program is designed to give students real-world exposure, help them build strong portfolios, and prepare them for industry-level work.
            </p>
          </div>

          {/* Right Visual */}
          <div className="space-y-6">
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Core Services</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Modern Website Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Brand Identity & Logo Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Digital Marketing Assets</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">UI/UX Design Solutions</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To bridge the gap between academic learning and industry requirements by providing hands-on experience through real projects, modern tools, and expert mentorship.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;