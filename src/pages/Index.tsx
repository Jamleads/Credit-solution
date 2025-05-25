
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ContactForm />
    </div>
  );
};

export default Index;
