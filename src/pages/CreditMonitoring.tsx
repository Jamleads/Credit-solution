
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CreditMonitoring = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              24/7 Credit Monitoring & Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay protected with real-time credit monitoring, identity theft protection, and instant alerts when changes occur to your credit profile.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
              Start Monitoring Today
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Protection Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Alerts",
                description: "Instant notifications for any changes to your credit reports",
                icon: "🚨"
              },
              {
                title: "Identity Monitoring",
                description: "Monitor the dark web and data breaches for your personal information",
                icon: "🔒"
              },
              {
                title: "Credit Score Tracking",
                description: "Track your credit score changes and trends over time",
                icon: "📊"
              },
              {
                title: "Social Security Monitoring",
                description: "Alert you if your SSN is used in credit applications",
                icon: "🆔"
              },
              {
                title: "Bank Account Monitoring",
                description: "Monitor your bank accounts for suspicious activity",
                icon: "🏦"
              },
              {
                title: "Identity Theft Insurance",
                description: "Up to $1 million in identity theft insurance coverage",
                icon: "🛡️"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-lift text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Monitoring Service?</h2>
              <div className="space-y-6">
                {[
                  "Fastest alerts in the industry - notified within minutes",
                  "Monitor all 3 credit bureaus simultaneously",
                  "Mobile app with push notifications",
                  "Expert identity theft resolution specialists",
                  "Monthly credit score updates and insights",
                  "Family plan options available"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="shadow-2xl hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Protection Stats</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Alert Speed</span>
                      <span className="font-bold text-blue-600">Under 5 Minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Data Sources Monitored</span>
                      <span className="font-bold text-blue-600">Thousands</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Identity Theft Insurance</span>
                      <span className="font-bold text-blue-600">$1M Coverage</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-bold text-blue-600">99.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Protect Your Credit Today</h2>
          <p className="text-xl mb-8">
            Don't wait for identity theft to happen. Start monitoring your credit and personal information now.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Get Started - $9.99/month
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CreditMonitoring;
