
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Credit Repair",
      price: "$89",
      period: "/month",
      description: "Perfect for individuals with minor credit issues",
      features: [
        "Credit report analysis",
        "Basic dispute letters",
        "Monthly progress reports",
        "Email support",
        "60-day money back guarantee"
      ],
      color: "border-gray-200",
      buttonClass: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "Premium Credit Repair",
      price: "$129",
      period: "/month",
      description: "Most popular - comprehensive credit restoration",
      features: [
        "Everything in Basic",
        "Advanced dispute strategies",
        "Creditor intervention calls",
        "Credit builder recommendations",
        "Phone support",
        "Bi-weekly progress reports"
      ],
      color: "border-primary-500 ring-2 ring-primary-500",
      buttonClass: "bg-primary-500 hover:bg-primary-600 text-white",
      popular: true
    },
    {
      name: "Elite Credit Repair",
      price: "$179",
      period: "/month",
      description: "Maximum results for complex credit situations",
      features: [
        "Everything in Premium",
        "Personalized credit coach",
        "Expedited dispute process",
        "Legal consultation",
        "Priority phone support",
        "Weekly progress updates",
        "Identity theft protection"
      ],
      color: "border-purple-200",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the credit repair plan that fits your needs. All plans include our 60-day money-back guarantee.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover-lift ${plan.color} animate-scale-in`} style={{animationDelay: `${index * 0.2}s`}}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-xl text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full py-3 text-lg font-semibold ${plan.buttonClass}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "How long does credit repair take?",
                answer: "Most clients see improvements within 30-90 days. The exact timeline depends on the complexity of your credit situation and the number of negative items that need to be addressed."
              },
              {
                question: "What's included in the money-back guarantee?",
                answer: "If we don't remove at least one negative item from your credit report within 60 days, you'll receive a full refund of all fees paid."
              },
              {
                question: "Can I cancel my service at any time?",
                answer: "Yes, you can cancel your service at any time with no cancellation fees. We believe in earning your business every month."
              },
              {
                question: "Will credit repair hurt my credit score?",
                answer: "No, legitimate credit repair will not hurt your credit score. We only dispute inaccurate, unverifiable, or outdated information according to federal law."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Credit?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied clients who have transformed their credit scores with LVLUP Credit Solutions.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
