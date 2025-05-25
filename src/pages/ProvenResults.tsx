
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProvenResults = () => {
  const results = [
    { before: 580, after: 750, improvement: 170, timeframe: "6 months", name: "Sarah M." },
    { before: 620, after: 780, improvement: 160, timeframe: "4 months", name: "James K." },
    { before: 550, after: 720, improvement: 170, timeframe: "8 months", name: "Maria L." },
    { before: 600, after: 790, improvement: 190, timeframe: "5 months", name: "David R." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Proven Results That Speak for Themselves
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See real credit score improvements from our satisfied clients. These results represent actual outcomes achieved through our professional credit repair services.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600">150+</div>
                <div className="text-gray-600">Avg. Point Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600">90</div>
                <div className="text-gray-600">Days Average</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <Card key={index} className="hover-lift shadow-lg animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Client: {result.name}</div>
                    <div className="text-3xl font-bold text-red-500 mb-1">{result.before}</div>
                    <div className="text-sm text-gray-500 mb-2">Before</div>
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-1 bg-gradient-to-r from-red-500 to-primary-500 rounded"></div>
                    </div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">{result.after}</div>
                    <div className="text-sm text-gray-500">After</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <div className="text-xl font-bold text-primary-600">+{result.improvement}</div>
                    <div className="text-sm text-gray-600">points in {result.timeframe}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg">
              Get Your Free Credit Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                quote: "LVLUP helped me increase my credit score by 170 points! I was able to qualify for a mortgage and buy my dream home.",
                rating: 5
              },
              {
                name: "James K.",
                quote: "Professional, reliable, and effective. The team kept me informed throughout the entire process.",
                rating: 5
              },
              {
                name: "Maria L.",
                quote: "I couldn't believe how fast they worked. My score improved dramatically in just a few months.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-900">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvenResults;
