
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.results'), href: '/results' },
    { name: t('nav.repair'), href: '/credit-repair' },
    { name: t('nav.monitoring'), href: '/credit-monitoring' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dkmddgqsl/image/upload/v1748183032/LVLUP-Credit-Solution-logo_laab4e.png"
              alt="LVLUP Credit Solutions"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-primary-600 hover:bg-gray-50 ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSelector />
            <Button className="ml-4 bg-primary-500 hover:bg-primary-600 text-white">
              {t('hero.consultation')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              <ChevronDown className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                  {t('hero.consultation')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
