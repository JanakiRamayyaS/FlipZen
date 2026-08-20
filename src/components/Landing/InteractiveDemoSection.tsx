import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { FlipClock } from '../FlipClock/FlipClock';
import { ThemeSelector } from '../Settings/ThemeSelector';
import { ClockSettings } from '../Settings/ClockSettings';
import { DisplaySettings } from '../Settings/DisplaySettings';
import { Sliders } from 'lucide-react';

export const InteractiveDemoSection: React.FC = () => {
  const { theme } = useSettings();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase opacity-80 border mb-4"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor, color: theme.accentColor }}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Real-Time Playground</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: theme.textColor }}>
          Test FlipZen live right here.
        </h2>
        <p className="text-base sm:text-lg opacity-70" style={{ color: theme.textColor }}>
          Adjust themes, sizes, animations, and options below. Changes apply in real time.
        </p>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl border shadow-2xl"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.hingeColor,
        }}
      >
        {/* Left Side: Live Preview Window */}
        <div
          className="lg:col-span-7 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl border min-h-[400px] shadow-inner relative overflow-hidden transition-all duration-500"
          style={{
            backgroundColor: theme.bg,
            borderColor: theme.hingeColor,
          }}
        >
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${theme.accentColor} 0%, transparent 70%)`,
            }}
          />
          <div className="z-10">
            <FlipClock />
          </div>
        </div>

        {/* Right Side: Interactive Controls Drawer Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6 max-h-[600px] overflow-y-auto pr-2">
          <div className="p-4 rounded-xl border" style={{ backgroundColor: theme.cardTopBg, borderColor: theme.hingeColor }}>
            <ClockSettings />
          </div>

          <div className="p-4 rounded-xl border" style={{ backgroundColor: theme.cardTopBg, borderColor: theme.hingeColor }}>
            <ThemeSelector />
          </div>

          <div className="p-4 rounded-xl border" style={{ backgroundColor: theme.cardTopBg, borderColor: theme.hingeColor }}>
            <DisplaySettings />
          </div>
        </div>
      </div>
    </section>
  );
};
