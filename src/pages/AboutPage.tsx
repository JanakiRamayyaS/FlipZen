import React from 'react';
import { Navbar } from '../components/UI/Navbar';
import { Footer } from '../components/UI/Footer';
import { useSettings } from '../context/SettingsContext';
import { Clock, Shield, Sparkles, Monitor, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { theme } = useSettings();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500" style={{ backgroundColor: theme.bg }}>
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase opacity-80 border mb-4"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor, color: theme.accentColor }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Vision</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ color: theme.textColor }}>
            About FlipZen
          </h1>
          <p className="text-lg opacity-75 max-w-2xl mx-auto" style={{ color: theme.textColor }}>
            A minimalist digital screensaver designed to turn idle screens into elegant ambient room art.
          </p>
        </div>

        <div className="space-y-12">
          <div className="p-8 rounded-3xl border shadow-xl space-y-4" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: theme.textColor }}>
              <Clock className="w-6 h-6" style={{ color: theme.accentColor }} />
              <span>The Concept</span>
            </h2>
            <p className="opacity-80 leading-relaxed" style={{ color: theme.textColor }}>
              FlipZen was born from an appreciation for mechanical split-flap clocks found in mid-century train stations and airports. We took the iconic tactile warmth of physical flip mechanisms and brought it into modern browser environments with high-performance CSS 3D physics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border space-y-3" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}>
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: theme.textColor }}>60 FPS Performance</h3>
              <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
                Built without heavy 3D rendering engines. FlipZen uses GPU-accelerated CSS keyframe transforms, maintaining a lightweight footprint with minimal CPU and battery usage for long-running displays.
              </p>
            </div>

            <div className="p-6 rounded-2xl border space-y-3" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}>
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: theme.textColor }}>Responsive Display</h3>
              <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
                Calculated dynamic font scaling ensures that FlipZen fits comfortably on 4K desktop screens, laptops, iPads, tablets, smart TVs, and portrait wall displays.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl border shadow-xl space-y-4" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: theme.textColor }}>
              <Shield className="w-6 h-6 text-emerald-400" />
              <span>Privacy & Offline Readiness</span>
            </h2>
            <p className="opacity-80 leading-relaxed" style={{ color: theme.textColor }}>
              FlipZen is privacy-first. Your settings never leave your computer. We do not require accounts, track user analytics, or store clock preferences on external cloud servers. It is also packaged with PWA offline caching so it works seamlessly without an active internet connection.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
