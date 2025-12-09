import React from 'react';
import { Image, Search, Bot, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ToolsSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="tools" className="py-20 px-6 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">
                        {t.toolsSection.title}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t.toolsSection.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Reverse Image Search */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                            <Image size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">{t.toolsSection.tools.reverseImage.title}</h3>
                        <p className="text-slate-600 mb-6 flex-1 text-sm">
                            {t.toolsSection.tools.reverseImage.desc}
                        </p>
                        <a 
                            href="https://images.google.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-white border-2 border-brand-blue text-brand-blue font-bold py-2 rounded-lg hover:bg-brand-blue hover:text-white transition flex items-center justify-center gap-2"
                        >
                            {t.toolsSection.tools.reverseImage.button}
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* Fake Post Checker */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                        <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-red">
                            <Search size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">{t.toolsSection.tools.fakePost.title}</h3>
                        <p className="text-slate-600 mb-6 flex-1 text-sm">
                            {t.toolsSection.tools.fakePost.desc}
                        </p>
                        <a 
                            href="https://factchecktools.google.com/explorer" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-white border-2 border-brand-red text-brand-red font-bold py-2 rounded-lg hover:bg-brand-red hover:text-white transition flex items-center justify-center gap-2"
                        >
                            {t.toolsSection.tools.fakePost.button}
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* AI Image Detector */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col">
                        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-purple-700">
                            <Bot size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">{t.toolsSection.tools.aiDetect.title}</h3>
                        <p className="text-slate-600 mb-6 flex-1 text-sm">
                            {t.toolsSection.tools.aiDetect.desc}
                        </p>
                        <a 
                            href="https://hivemoderation.com/ai-generated-content-detection" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-white border-2 border-purple-700 text-purple-700 font-bold py-2 rounded-lg hover:bg-purple-700 hover:text-white transition flex items-center justify-center gap-2"
                        >
                            {t.toolsSection.tools.aiDetect.button}
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;