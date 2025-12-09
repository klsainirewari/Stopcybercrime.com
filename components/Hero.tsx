import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative bg-gradient-to-br from-brand-dark to-brand-blue text-white pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                    <ShieldCheck className="w-20 h-20 text-brand-yellow animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Cyber Rakshak <span className="text-brand-yellow">({t.subtitle})</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    {t.tagline}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#fraud-types" className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition shadow-lg">
                        {t.hero.ctaFraud}
                    </a>
                    <a href="#report" className="bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2">
                        <AlertTriangle size={20} />
                        {t.hero.ctaReport}
                    </a>
                </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-brand-yellow mb-2">{t.hero.welcomeTitle}</h3>
                    <p className="text-blue-50">
                        {t.hero.welcomeText}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;