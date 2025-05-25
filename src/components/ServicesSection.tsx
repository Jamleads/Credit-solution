
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.repair.title'),
      description: t('services.repair.desc'),
      icon: '🔧',
      features: ['Dispute Inaccuracies', 'Remove Negative Items', 'Score Optimization', 'Monthly Reports'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: t('services.monitoring.title'),
      description: t('services.monitoring.desc'),
      icon: '🛡️',
      features: ['Real-time Alerts', 'Identity Protection', 'Credit Monitoring', 'Score Tracking'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('services.consultation.title'),
      description: t('services.consultation.desc'),
      icon: '💬',
      features: ['Expert Analysis', 'Personalized Plan', 'No Obligation', 'Instant Results'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive credit solutions designed to help you achieve your financial goals faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
