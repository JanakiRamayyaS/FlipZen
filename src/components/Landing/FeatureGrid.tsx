import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Maximize, RotateCw, Palette, ShieldCheck, Monitor, Compass } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const { theme } = useSettings();

  const features = [
    {
      icon: Maximize,
      title: 'Fullscreen Immersion',
      description: 'Turn any computer, tablet, TV, or secondary display into a distraction-free ambient clock with one click.',
    },
    {
      icon: RotateCw,
      title: 'Smooth Split-Flap Animation',
      description: 'Realistic 3D mechanical transitions engineered using hardware-accelerated CSS transforms at 60 FPS.',
    },
    {
      icon: Palette,
      title: 'Your Personal Style',
      description: 'Tailor themes, clock sizing, brightness, background ambience, date visibility, and 12/24 hour format.',
    },
    {
      icon: ShieldCheck,
      title: 'Private by Design',
      description: 'Your settings stay 100% on your device in local storage. No accounts required, no tracking, no backend calls.',
    },
    {
      icon: Monitor,
      title: 'Everywhere & Multi-Screen',
      description: 'Seamlessly scales across 4K desktop monitors, laptops, iPads, tablets, classrooms, and smart TV screens.',
    },
    {
      icon: Compass,
      title: 'Stay Focused',
      description: 'Use as a calm productivity companion for your desk, deep work sessions, study, or studio environment.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase opacity-60" style={{ color: theme.accentColor }}>
          Built For Production
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4" style={{ color: theme.textColor }}>
          Designed with craftsmanship in every detail.
        </h2>
        <p className="text-base sm:text-lg opacity-70" style={{ color: theme.textColor }}>
          Everything you need for an immersive, reliable, long-running display.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.hingeColor,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow"
                style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: theme.textColor }}>
                {item.title}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
