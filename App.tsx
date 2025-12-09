import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FraudSection from './components/FraudSection';
import TipsSection from './components/TipsSection';
import ToolsSection from './components/ToolsSection';
import AboutMe from './components/AboutMe';
import ReportingSection from './components/ReportingSection';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <FraudSection />
        <ToolsSection />
        <TipsSection />
        <ReportingSection />
        <AboutMe />
        
        <section id="disclaimer" className="py-12 px-6 bg-slate-100 text-center">
            <div className="max-w-4xl mx-auto text-slate-500 text-sm">
                <h3 className="font-bold mb-2 uppercase tracking-wide text-slate-400">{t.disclaimer.title}</h3>
                <p>
                    {t.disclaimer.text}
                </p>
            </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistant FAB */}
      <ChatAssistant />
    </div>
  );
};

export default App;