import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { useFullscreen } from '../../hooks/useFullscreen';
import { Sliders, Sun, Palette, Maximize, Minimize, X, Keyboard } from 'lucide-react';

interface ScreensaverControlsProps {
  isVisible: boolean;
  onOpenSettings: () => void;
  onOpenShortcuts: () => void;
  onExit: () => void;
}

export const ScreensaverControls: React.FC<ScreensaverControlsProps> = ({
  isVisible,
  onOpenSettings,
  onOpenShortcuts,
  onExit,
}) => {
  const { theme, cycleTheme, toggleBrightness } = useSettings();
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div
        className="flex items-center gap-1 sm:gap-2 px-4 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl border transition-colors"
        style={{
          backgroundColor: theme.controlBg,
          color: theme.controlText,
          borderColor: `${theme.hingeColor}A0`,
        }}
      >
        {/* Quick Theme Cycle */}
        <button
          onClick={cycleTheme}
          title="Cycle Theme (T)"
          className="p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold"
        >
          <Palette className="w-4 h-4" />
          <span className="hidden sm:inline">{theme.name}</span>
        </button>

        <div className="w-[1px] h-5 opacity-20 bg-white" />

        {/* Quick Brightness Toggle */}
        <button
          onClick={toggleBrightness}
          title="Toggle Brightness (B)"
          className="p-2 rounded-xl hover:bg-white/10 transition-colors"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Settings Drawer Trigger */}
        <button
          onClick={onOpenSettings}
          title="Open Settings Drawer"
          className="p-2 rounded-xl hover:bg-white/10 transition-colors"
        >
          <Sliders className="w-4 h-4" />
        </button>

        {/* Shortcuts Trigger */}
        <button
          onClick={onOpenShortcuts}
          title="Keyboard Shortcuts (?)"
          className="p-2 rounded-xl hover:bg-white/10 transition-colors"
        >
          <Keyboard className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-5 opacity-20 bg-white" />

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title="Toggle Fullscreen (F)"
          className="p-2 rounded-xl hover:bg-white/10 transition-colors"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        {/* Exit Screensaver Button */}
        <button
          onClick={onExit}
          title="Exit Screensaver Mode (ESC)"
          className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 transition-colors flex items-center gap-1 text-xs font-medium"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Exit</span>
        </button>
      </div>
    </div>
  );
};
