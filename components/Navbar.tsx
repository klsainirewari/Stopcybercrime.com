import React, { useState } from 'react';
import { Menu, X, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.fraud, href: '#fraud-types' },
        { name: t.nav.tools, href: '#tools' },
        { name: t.nav.tips, href: '#tips' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.report, href: '#report' },
    ];

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as Language);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-sm text-white shadow-lg border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
                        <Shield className="text-brand-yellow" />
                        <span>CYBER RAKSHAK</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-brand-yellow transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        {/* Language Selector */}
                        <div className="flex items-center bg-brand-blue rounded px-2 py-1 border border-blue-400">
                            <Globe size={16} className="mr-2 text-blue-200" />
                            <select 
                                value={language} 
                                onChange={handleLanguageChange}
                                className="bg-transparent text-sm focus:outline-none cursor-pointer"
                            >
                                <option value="hi" className="text-slate-800">हिंदी</option>
                                <option value="en" className="text-slate-800">English</option>
                                <option value="pa" className="text-slate-800">ਪੰਜਾਬੀ</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-brand-yellow focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-brand-blue border-t border-blue-800">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-brand-yellow transition"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                         <div className="px-3 py-2">
                             <div className="flex items-center text-white mb-2 text-sm font-bold">
                                <Globe size={16} className="mr-2" />
                                <span>भाषा / Language</span>
                             </div>
                            <select 
                                value={language} 
                                onChange={handleLanguageChange}
                                className="w-full bg-white text-slate-900 rounded px-2 py-2 text-sm"
                            >
                                <option value="hi">हिंदी</option>
                                <option value="en">English</option>
                                <option value="pa">ਪੰਜਾਬੀ</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;