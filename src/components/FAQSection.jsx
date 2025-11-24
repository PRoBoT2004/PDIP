// components/FAQSection.jsx
import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Is this internship remote?",
      answer: "Yes, you can work from anywhere unless stated otherwise. We provide all necessary tools and support for remote collaboration."
    },
    {
      question: "Do I need advanced skills?",
      answer: "No. Basic skills and willingness to learn are enough. We'll guide you through advanced concepts and modern workflows step by step."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, upon successful completion of all tasks and requirements, you'll receive an industry-recognized internship certificate."
    },
    {
      question: "How will tasks be submitted?",
      answer: "Through a structured submission format shared after onboarding. We'll provide clear guidelines for project delivery and review."
    },
    {
      question: "Is there a stipend provided?",
      answer: "Yes, stipend is available based on performance and consistency. We reward dedication and quality work throughout the internship."
    },
    {
      question: "Can I continue my studies during the internship?",
      answer: "Absolutely! The internship is designed to be flexible with your academic schedule. You can manage both effectively."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Got questions? We've got answers. Here are the most common questions about our internship program.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-400/20 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-500/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className={`w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-blue-400/20">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">Feel free to reach out to us directly. We're here to help!</p>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;