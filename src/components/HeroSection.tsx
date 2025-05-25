
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-primary-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold group">
                {t('hero.cta')}
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg font-semibold">
                {t('hero.consultation')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span>Licensed & Bonded</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span>100% Money Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                <span>BBB Accredited</span>
              </div>
            </div>
          </div>

          {/* Right Content - Credit Score Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Credit Score Gauge */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 hover-lift">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-600 mb-2">750+</div>
                  <div className="text-gray-600 text-lg">Average Score Improvement</div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-400 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-4 hover-lift animate-float">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 hover-lift animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-2xl font-bold text-gray-900">30-90</div>
                  <div className="text-sm text-gray-600">Days Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
