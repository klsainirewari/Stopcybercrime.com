import React from 'react';
import { Lock, Shield, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TipsSection: React.FC = () => {
    const { t } = useLanguage();

    const getIcon = (type: string) => {
        switch (type) {
            case 'lock': return <Lock className="w-6 h-6 text-brand-blue" />;
            case 'shield': return <Shield className="w-6 h-6 text-brand-blue" />;
            case 'link': return <LinkIcon className="w-6 h-6 text-brand-blue" />;
            default: return <Shield />;
        }
    };

    return (
        <section id="tips" className="py-20 px-6 bg-brand-light">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">
                    {t.tipsSection.title}
                </h2>

                <div className="mb-12 bg-green-100 border border-green-300 rounded-lg p-6 flex items-start gap-4 shadow-sm max-w-3xl mx-auto">
                    <div className="bg-green-600 text-white p-2 rounded-full shrink-0">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-800 mb-1">{t.tipsSection.volunteerTitle}</h3>
                        <p className="text-green-900 font-medium">
                            "{t.tipsSection.volunteerText} <br/>
                            <span className="bg-yellow-200 px-1 rounded text-black">{t.tipsSection.volunteerHighlight}</span>"
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {t.tipsSection.items.map((tip) => (
                        <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-blue">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    {getIcon(tip.icon)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{tip.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {tip.content.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                        <span className="text-brand-blue font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TipsSection;