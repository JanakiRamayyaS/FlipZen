import React from 'react';
import { Navbar } from '../components/UI/Navbar';
import { Hero } from '../components/Landing/Hero';
import { PhilosophySection } from '../components/Landing/PhilosophySection';
import { FeatureGrid } from '../components/Landing/FeatureGrid';
import { InteractiveDemoSection } from '../components/Landing/InteractiveDemoSection';
import { UseCasesSection } from '../components/Landing/UseCasesSection';
import { FAQSection } from '../components/Landing/FAQSection';
import { Footer } from '../components/UI/Footer';
import { useSettings } from '../context/SettingsContext';

export const Home: React.FC = () => {
  const { theme } = useSettings();

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{ backgroundColor: theme.bg }}
    >
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PhilosophySection />
        <FeatureGrid />
        <InteractiveDemoSection />
        <UseCasesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};
