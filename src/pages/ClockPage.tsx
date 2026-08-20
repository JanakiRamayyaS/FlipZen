import React from 'react';
import { Navbar } from '../components/UI/Navbar';
import { Footer } from '../components/UI/Footer';
import { FlipClock } from '../components/FlipClock/FlipClock';
import { ThemeSelector } from '../components/Settings/ThemeSelector';
import { ClockSettings } from '../components/Settings/ClockSettings';
import { DisplaySettings } from '../components/Settings/DisplaySettings';
import { useSettings } from '../context/SettingsContext';
import { Button } from '../components/UI/Button';
import { Link } from 'react-router-dom';
import { Maximize2, RotateCcw } from 'lucide-react';

export const ClockPage: React.FC = () => {
  const { theme, resetSettings } = useSettings();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500" style={{ backgroundColor: theme.bg }}>
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b" style={{ borderColor: `${theme.hingeColor}80` }}>
          <div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: theme.textColor }}>
              Interactive Clock Studio
            </h1>
            <p className="text-sm opacity-70 mt-1" style={{ color: theme.textColor }}>
              Customize parameters and preview your flip clock display live.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={resetSettings}>
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
            <Link to="/screensaver">
              <Button variant="primary" size="sm">
                <Maximize2 className="w-4 h-4" />
                <span>Launch Screensaver</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Stage */}
          <div
            className="lg:col-span-8 flex flex-col items-center justify-center p-8 sm:p-16 rounded-3xl border min-h-[500px] shadow-2xl relative overflow-hidden transition-all duration-500"
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.hingeColor,
            }}
          >
            <FlipClock showLabels />
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-2xl border shadow-lg" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
              <ClockSettings />
            </div>

            <div className="p-6 rounded-2xl border shadow-lg" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
              <ThemeSelector />
            </div>

            <div className="p-6 rounded-2xl border shadow-lg" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
              <DisplaySettings />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
