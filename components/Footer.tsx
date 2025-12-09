import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">🛡️ Cyber Rakshak</h2>
                    <p className="mb-4">{t.footer.rights} एक सुरक्षित डिजिटल भारत की ओर एक कदम।</p>
                    <p className="text-sm text-slate-500">
                        {t.footer.note}
                    </p>
                </div>
                
                <div className="md:text-right">
                    <h3 className="text-white font-bold mb-4">{t.footer.linksTitle}</h3>
                    <ul className="space-y-2">
                        <li><a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="hover:text-brand-yellow transition">{t.footer.portalLink}</a></li>
                        <li><a href="#fraud-types" className="hover:text-brand-yellow transition">{t.nav.fraud}</a></li>
                        <li><a href="#tips" className="hover:text-brand-yellow transition">{t.nav.tips}</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto border-t border-slate-800 mt-8 pt-8 text-center text-sm">
                &copy; {new Date().getFullYear()} Cyber Rakshak. {t.footer.rights}
            </div>
        </footer>
    );
};

export default Footer;