import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';

export const Footer: React.FC = () => {
  const { theme } = useSettings();

  return (
    <footer
      className="border-t py-12 px-4 sm:px-6 lg:px-8 mt-20 transition-colors"
      style={{
        backgroundColor: theme.bg,
        borderColor: `${theme.hingeColor}80`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-bold text-lg tracking-tight" style={{ color: theme.textColor }}>
              FlipZen
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-mono font-medium border"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor, color: theme.accentColor }}
            >
              v1.0.0
            </span>
          </div>
          <p className="text-xs opacity-60 max-w-sm" style={{ color: theme.textColor }}>
            Time, beautifully displayed. A minimalist digital screensaver for your desk and room display.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium" style={{ color: theme.textColor }}>
          <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">
            Home
          </Link>
          <Link to="/clock" className="opacity-70 hover:opacity-100 transition-opacity">
            Customize
          </Link>
          <Link to="/screensaver" className="opacity-70 hover:opacity-100 transition-opacity">
            Screensaver
          </Link>
          <Link to="/about" className="opacity-70 hover:opacity-100 transition-opacity">
            About
          </Link>
          <Link to="/privacy" className="opacity-70 hover:opacity-100 transition-opacity">
            Privacy
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] opacity-40"
        style={{ borderColor: `${theme.hingeColor}40`, color: theme.textColor }}
      >
        <span>© {new Date().getFullYear()} FlipZen. All rights reserved.</span>
        <span>Your settings stay private on your device.</span>
      </div>
    </footer>
  );
};
