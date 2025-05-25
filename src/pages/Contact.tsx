
import React from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact LVLUP Credit Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your credit score? Get in touch with our expert team today for your free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Phone",
                info: "(555) 123-4567",
                description: "Mon-Fri: 9AM-6PM EST",
                icon: "📞"
              },
              {
                title: "Email",
                info: "info@lvlupcreditsolutions.com",
                description: "We respond within 24 hours",
                icon: "✉️"
              },
              {
                title: "Service Area",
                info: "Licensed Nationwide",
                description: "Serving all 50 states",
                icon: "📍"
              }
            ].map((contact, index) => (
              <Card key={index} className="hover-lift text-center animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-2">{contact.info}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
