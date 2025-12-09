import React from 'react';
import { PhoneCall, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ReportingSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="report" className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-100 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-red-100 rounded-full blur-xl"></div>
                    
                    <h2 className="text-3xl font-bold text-brand-red mb-6 relative z-10">
                        {t.reportingSection.title}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 relative z-10">
                        {t.reportingSection.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition">
                            <PhoneCall className="w-10 h-10 text-brand-red mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.reportingSection.callNow}</h3>
                            <p className="text-sm text-gray-500 mb-3">{t.reportingSection.helplineName}</p>
                            <a href="tel:1930" className="text-4xl font-black text-brand-red hover:scale-105 inline-block transition transform">
                                1930
                            </a>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100 hover:shadow-md transition">
                            <ExternalLink className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{t.reportingSection.onlineComplaint}</h3>
                            <p className="text-sm text-gray-500 mb-3">{t.reportingSection.portalName}</p>
                            <a 
                                href="https://cybercrime.gov.in/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-brand-blue hover:underline break-all"
                            >
                                cybercrime.gov.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportingSection;