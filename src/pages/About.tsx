
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About LVLUP Credit Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to helping individuals and families achieve financial freedom through expert credit repair and education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a mission to democratize access to financial opportunities, LVLUP Credit Solutions has helped thousands of clients repair their credit and transform their financial futures.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of licensed credit professionals understands that your credit score is more than just a number – it's the key to unlocking homeownership, business opportunities, and financial stability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                  <div className="text-gray-600">Clients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="hover-lift shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide honest, effective, and affordable credit repair services that empower our clients to achieve their financial goals and live the life they deserve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "Clear communication and honest expectations throughout your credit repair journey.",
                icon: "🔍"
              },
              {
                title: "Results-Driven",
                description: "We focus on delivering measurable improvements to your credit score and financial health.",
                icon: "📈"
              },
              {
                title: "Client-First",
                description: "Your success is our success. We're committed to providing exceptional service and support.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
