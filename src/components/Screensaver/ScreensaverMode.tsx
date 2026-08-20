import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { useMouseActivity } from '../../hooks/useMouseActivity';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import { FlipClock } from '../FlipClock/FlipClock';
import { ScreensaverControls } from './ScreensaverControls';
import { SettingsPanel } from '../Settings/SettingsPanel';
import { ShortcutModal } from '../UI/ShortcutModal';

export const ScreensaverMode: React.FC = () => {
  const { theme, settings } = useSettings();
  const navigate = useNavigate();
  const isMouseActive = useMouseActivity(3000);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [showToastHint, setShowToastHint] = useState(true);

  // Auto-hide initial toast hint after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToastHint(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Register keyboard shortcuts
  useKeyboardShortcuts(() => setIsShortcutsOpen((prev) => !prev));

  // Determine Background CSS style
  const getBgStyle = (): React.CSSProperties => {
    switch (settings.background) {
      case 'solid':
        return { backgroundColor: theme.bg };
      case 'gradient':
        return {
          background: `radial-gradient(circle at center, ${theme.cardTopBg} 0%, ${theme.bg} 100%)`,
        };
      case 'minimal':
        return { backgroundColor: '#000000' };
      case 'ambient':
      default:
        return {
          background: `radial-gradient(ellipse at top, ${theme.cardBg}40 0%, ${theme.bg} 70%)`,
        };
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden select-none flex items-center justify-center transition-colors duration-700"
      style={{
        ...getBgStyle(),
        filter: `brightness(${settings.brightness})`,
      }}
    >
      {/* Background Ambient Glow Effect */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: theme.accentColor }}
      />

      {/* Hero Live Clock */}
      <div className="z-10 scale-100 transition-transform duration-500">
        <FlipClock showLabels={false} />
      </div>

      {/* First-time Hint Toast */}
      {showToastHint && (
        <div
          className="fixed top-8 left-1/2 -translate-x-1/2 z-40 px-5 py-2 rounded-full text-xs font-mono tracking-wider opacity-75 backdrop-blur-md shadow-lg border animate-fade-in"
          style={{
            backgroundColor: theme.controlBg,
            color: theme.controlText,
            borderColor: `${theme.hingeColor}80`,
          }}
        >
          Move mouse to reveal controls • Press F for Fullscreen • Press ? for Shortcuts
        </div>
      )}

      {/* Discreet Auto-Hiding Bottom Control Bar */}
      <ScreensaverControls
        isVisible={isMouseActive || isSettingsOpen || isShortcutsOpen}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onExit={() => navigate('/')}
      />

      {/* Slide-over Settings Drawer */}
      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Keyboard Shortcuts Help Modal */}
      <ShortcutModal isOpen={isShortcutsOpen} onClose={() => setIsShortcutsOpen(false)} />
    </div>
  );
};
