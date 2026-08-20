import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { FlipClock } from '../FlipClock/FlipClock';
import { Button } from '../UI/Button';
import { Maximize2, Sliders, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { theme } = useSettings();

  return (
    <section className="relative pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme.accentColor }}
      />

      {/* Pill Badge */}
      <div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border mb-8 shadow-sm select-none"
        style={{
          backgroundColor: theme.cardBg,
          color: theme.textColor,
          borderColor: theme.hingeColor,
        }}
      >
        <Sparkles className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
        <span>Next-Generation Ambient Digital Display</span>
      </div>

      {/* Headline */}
      <h1
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-6"
        style={{ color: theme.textColor }}
      >
        Time, beautifully displayed.
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg sm:text-xl max-w-2xl font-normal leading-relaxed opacity-75 mb-10"
        style={{ color: theme.textColor }}
      >
        A minimalist digital screensaver designed for desks, displays, studios, classrooms, and everywhere time deserves to look better.
      </p>

      {/* Interactive Hero Live Clock Container */}
      <div
        className="w-full max-w-5xl my-6 p-6 sm:p-12 rounded-3xl border shadow-2xl transition-all duration-500 backdrop-blur-sm"
        style={{
          backgroundColor: `${theme.cardBg}80`,
          borderColor: `${theme.hingeColor}A0`,
        }}
      >
        <FlipClock />
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Link to="/screensaver">
          <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-xl">
            <Maximize2 className="w-5 h-5" />
            <span>Launch Screensaver</span>
          </Button>
        </Link>

        <Link to="/clock">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <Sliders className="w-5 h-5" />
            <span>Customize Clock</span>
          </Button>
        </Link>
      </div>

      {/* Subtle Hint */}
      <div
        className="mt-6 text-xs font-mono tracking-wider opacity-50 flex items-center gap-1.5"
        style={{ color: theme.textColor }}
      >
        <span>Press</span>
        <kbd
          className="px-2 py-0.5 rounded text-[10px] font-bold border"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}
        >
          F
        </kbd>
        <span>anytime for Fullscreen screensaver</span>
      </div>
    </section>
  );
};
