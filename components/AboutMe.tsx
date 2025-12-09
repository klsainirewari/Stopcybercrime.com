import React from 'react';
import { User, Mail, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutMe: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 px-6 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-brand-blue md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 border-4 border-white/30">
                            <User size={64} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">KL Saini</h3>
                        <div className="flex items-center gap-2 mt-2 bg-blue-800 px-3 py-1 rounded-full text-sm">
                            <ShieldCheck size={16} />
                            <span>{t.aboutSection.role}</span>
                        </div>
                    </div>
                    
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-brand-dark mb-4">{t.aboutSection.title}</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t.aboutSection.description}
                        </p>
                        
                        <div className="border-t border-slate-100 pt-6">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                                {t.aboutSection.contactTitle}
                            </h4>
                            <a 
                                href="mailto:kanheya@live.com" 
                                className="flex items-center gap-3 text-brand-blue hover:text-brand-dark transition group"
                            >
                                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium text-lg">kanheya@live.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;