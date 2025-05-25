
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="https://res.cloudinary.com/dkmddgqsl/image/upload/v1748183032/LVLUP-Credit-Solution-logo_laab4e.png"
              alt="LVLUP Credit Solutions"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Professional credit repair services that deliver real results. Transform your credit score and unlock your financial potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/credit-repair" className="text-gray-300 hover:text-primary-400 transition-colors">{t('nav.repair')}</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-primary-400 transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@lvlupcreditsolutions.com</p>
              <p>📍 Licensed Nationwide</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 LVLUP Credit Solutions. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
