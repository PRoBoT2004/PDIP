// App.jsx
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RolesSection from './components/RolesSection';
// import LearningSection from './components/LearningSection';
// import TaskPreviewSection from './components/TaskPreviewSection';
// import WhyJoinSection from './components/WhyJoinSection';
// import ProcessSection from './components/ProcessSection';
// import DetailsSection from './components/DetailsSection';
import RequirementsSection from './components/RequirementsSection';
import FAQSection from './components/FAQSection';
import ApplySection from './components/ApplySection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <ApplySection />
      {/* <RolesSection /> */}
      {/* <LearningSection /> */}
      {/* <TaskPreviewSection /> */}
      {/* <WhyJoinSection /> */}
      {/* <ProcessSection /> */}
      {/* <DetailsSection /> */}
      {/* <RequirementsSection /> */}
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default App;