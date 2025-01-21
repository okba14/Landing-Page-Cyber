import React, { useState, useEffect } from 'react';
import {
  Shield,
  ChevronDown,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { ContactModal } from './components/ContactModal';
import type { Language, NavItem, Feature } from './types';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [lang, setLang] = useState<Language>('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems: NavItem[] = [
    { label: { en: 'Home', ar: 'الرئيسية' }, href: '#' },
    { label: { en: 'Features', ar: 'المميزات' }, href: '#features' },
    { label: { en: 'About', ar: 'عن الشركة' }, href: '#about' },
    { label: { en: 'Contact', ar: 'اتصل بنا' }, href: '#contact' },
  ];

  const features: Feature[] = [
    {
      icon: '🛡️',
      title: { 
        en: 'Advanced Protection', 
        ar: 'حماية متقدمة' 
      },
      description: {
        en: 'State-of-the-art cybersecurity solutions for complete digital protection.',
        ar: 'حلول أمان إلكتروني متطورة لحماية رقمية كاملة.'
      }
    },
    {
      icon: '🎯',
      title: { 
        en: 'Threat Detection', 
        ar: 'كشف التهديدات' 
      },
      description: {
        en: 'Real-time monitoring and instant threat detection capabilities.',
        ar: 'مراقبة في الوقت الفعلي وقدرات الكشف الفوري عن التهديدات.'
      }
    },
    {
      icon: '📱',
      title: { 
        en: 'Multi-Device Security', 
        ar: 'أمان متعدد الأجهزة' 
      },
      description: {
        en: 'Protect all your devices with a single, powerful solution.',
        ar: 'حماية جميع أجهزتك بحل واحد قوي.'
      }
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 text-gray-900 dark:text-white ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-lg p-2">
                  <Shield className="w-8 h-8 text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">CyberLandingPage</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium hover:text-transparent hover:bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text transition-all duration-300 hover:scale-105"
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
              <LanguageToggle
                currentLang={lang}
                onToggle={() => setLang(lang === 'en' ? 'ar' : 'en')}
              />
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-base font-medium hover:text-transparent hover:bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                {lang === 'en' ? (
                  'Secure Your Digital Future'
                ) : (
                  'أمّن مستقبلك الرقمي'
                )}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {lang === 'en' ? (
                  'Protecting your online presence with advanced cybersecurity solutions.'
                ) : (
                  'حماية وجودك على الإنترنت بحلول أمان إلكتروني متقدمة.'
                )}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    {lang === 'en' ? 'Get Started' : 'ابدأ الآن'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-6 py-3 border border-violet-200 dark:border-violet-800 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all duration-300 transform hover:-translate-y-0.5">
                  {lang === 'en' ? 'Learn More' : 'اعرف المزيد'}
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Cybersecurity"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:shadow-violet-500/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                  {feature.title[lang]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-8 bg-gradient-to-r from-violet-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-violet-400 transform hover:scale-110 transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-violet-400 transform hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-violet-400 transform hover:scale-110 transition-all">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;