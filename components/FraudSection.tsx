import React from 'react';
import { QrCode, MonitorX, VideoOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FraudSection: React.FC = () => {
    const { t } = useLanguage();

    const getIcon = (type: string) => {
        switch (type) {
            case 'qr': return <QrCode className="w-8 h-8 text-white" />;
            case 'screen': return <MonitorX className="w-8 h-8 text-white" />;
            case 'video': return <VideoOff className="w-8 h-8 text-white" />;
            default: return <QrCode />;
        }
    };

    return (
        <section id="fraud-types" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center border-b-2 border-slate-200 pb-4 inline-block w-full">
                    {t.fraudSection.title}
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {t.fraudSection.items.map((fraud) => (
                        <div key={fraud.id} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-brand-blue w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md">
                                {getIcon(fraud.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{fraud.title}</h3>
                            <p className="text-slate-600 mb-4">{fraud.description}</p>
                            <div className="bg-yellow-50 border-l-4 border-brand-yellow p-3 rounded">
                                <p className="text-sm text-slate-700">
                                    <strong>{t.fraudSection.preventionLabel}:</strong> {fraud.prevention}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FraudSection;