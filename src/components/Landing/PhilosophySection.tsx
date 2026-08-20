import React from 'react';
import { useSettings } from '../../context/SettingsContext';

export const PhilosophySection: React.FC = () => {
  const { theme } = useSettings();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-b my-12"
      style={{ borderColor: `${theme.hingeColor}60` }}
    >
      <span className="text-xs font-mono font-semibold tracking-widest uppercase opacity-60" style={{ color: theme.accentColor }}>
        Design Philosophy
      </span>
      <h2
        className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6 leading-tight"
        style={{ color: theme.textColor }}
      >
        A clock that disappears into your space.
      </h2>
      <p
        className="text-lg sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-80"
        style={{ color: theme.textColor }}
      >
        FlipZen is designed to give time a presence without demanding attention.
        Inspired by physical split-flap displays, re-engineered for ultra-fluid 60 FPS performance on any screen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
        <div className="p-6 rounded-2xl border" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
          <h3 className="font-semibold text-base mb-2" style={{ color: theme.textColor }}>
            Less Interface
          </h3>
          <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
            No cluttered dashboards, no distracting notifications. Just pure time in a form that respects your focus.
          </p>
        </div>
        <div className="p-6 rounded-2xl border" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
          <h3 className="font-semibold text-base mb-2" style={{ color: theme.textColor }}>
            More Atmosphere
          </h3>
          <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
            Harmonious palettes and subtle micro-shadows turn unused monitors into peaceful ambient room art.
          </p>
        </div>
        <div className="p-6 rounded-2xl border" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
          <h3 className="font-semibold text-base mb-2" style={{ color: theme.textColor }}>
            Zero Distraction
          </h3>
          <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
            Controls hide automatically during screensaver mode so your eyes focus entirely on what matters.
          </p>
        </div>
      </div>
    </section>
  );
};
