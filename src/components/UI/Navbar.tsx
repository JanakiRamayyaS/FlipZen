import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { Button } from './Button';
import { Maximize2, Sliders, Info, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme } = useSettings();
  const location = useLocation();

  const isCurrent = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: `${theme.bg}B3`, // 70% opacity hex
        borderColor: `${theme.hingeColor}80`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Branding */}
        <Link to="/" className="flex items-center gap-3 group select-none">
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: theme.cardBg, color: theme.textColor, border: `1px solid ${theme.hingeColor}` }}
          >
            {/* Split flap line graphic icon */}
            <div className="absolute inset-x-0 top-1/2 h-[1px]" style={{ backgroundColor: theme.hingeColor }} />
            <span className="font-mono z-10 text-xs">FZ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-lg leading-none" style={{ color: theme.textColor }}>
              FlipZen
            </span>
            <span className="text-[10px] tracking-widest uppercase opacity-50 font-mono mt-0.5" style={{ color: theme.textColor }}>
              Ambient Display
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1 font-medium text-sm">
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              isCurrent('/') ? 'bg-white/10 font-semibold' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ color: theme.textColor }}
          >
            Home
          </Link>
          <Link
            to="/clock"
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              isCurrent('/clock') ? 'bg-white/10 font-semibold' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ color: theme.textColor }}
          >
            <Sliders className="w-4 h-4" />
            <span>Customize</span>
          </Link>
          <Link
            to="/about"
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              isCurrent('/about') ? 'bg-white/10 font-semibold' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ color: theme.textColor }}
          >
            <Info className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link
            to="/privacy"
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              isCurrent('/privacy') ? 'bg-white/10 font-semibold' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ color: theme.textColor }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy</span>
          </Link>
        </div>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3">
          <Link to="/screensaver">
            <Button variant="primary" size="sm">
              <Maximize2 className="w-4 h-4" />
              <span>Launch Screensaver</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
