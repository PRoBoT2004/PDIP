// components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Contact <span className="text-blue-400">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have questions? Need more information? We're here to help you get started.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            
            {/* Email */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-blue-300">hello@primedigitals.io</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                  <p className="text-blue-300">+91 79901 98105 </p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM8 6v10h8V6H8zm4 2a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Instagram</h3>
                  <p className="text-blue-300">@prime_digitals._
                  </p>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Company Website</h3>
                  <p className="text-blue-300">https://primedigitals.io/</p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-blue-400/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-blue-400/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-blue-400/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-blue-400/20">
          <p className="text-gray-400">
            © 2024 PRIME DIGITALS. All rights reserved. Building the future, one intern at a time.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;