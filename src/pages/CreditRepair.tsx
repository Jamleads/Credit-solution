
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';

const CreditRepair = () => {
  const services = [
    {
      title: "Credit Report Analysis",
      description: "Comprehensive review of all three credit reports to identify errors and negative items.",
      icon: "🔍"
    },
    {
      title: "Dispute Process",
      description: "Professional dispute letters sent to credit bureaus to remove inaccurate information.",
      icon: "📝"
    },
    {
      title: "Creditor Negotiations",
      description: "Direct communication with creditors to negotiate payment plans and removals.",
      icon: "🤝"
    },
    {
      title: "Score Optimization",
      description: "Strategic advice to improve credit utilization and payment history.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Credit Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Remove negative items, improve your credit score, and unlock better financial opportunities with our proven credit repair process.
              </p>
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg">
                Start Your Credit Repair Journey
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <Card className="shadow-2xl hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Can Remove:</h3>
                  <ul className="space-y-3">
                    {[
                      "Late Payments",
                      "Collections",
                      "Charge-offs",
                      "Bankruptcies",
                      "Foreclosures",
                      "Repossessions",
                      "Tax Liens",
                      "Identity Theft Items"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Credit Repair Process</h2>
            <p className="text-xl text-gray-600">A proven 4-step approach to credit restoration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Credit Repair</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Lower Interest Rates",
                    description: "Qualify for better rates on loans, credit cards, and mortgages"
                  },
                  {
                    title: "Higher Credit Limits",
                    description: "Access to more credit and better credit card offers"
                  },
                  {
                    title: "Rental Approval",
                    description: "Easier approval for apartments and rental properties"
                  },
                  {
                    title: "Employment Opportunities",
                    description: "Some employers check credit for certain positions"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="shadow-2xl hover-lift">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Results</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                      <div className="text-gray-600">Point Increase</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary-600 mb-2">90</div>
                      <div className="text-gray-600">Days Average</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default CreditRepair;
