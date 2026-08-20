import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import { ThemeSelector } from './ThemeSelector';
import { ClockSettings } from './ClockSettings';
import { DisplaySettings } from './DisplaySettings';
import { Button } from '../UI/Button';
import { X, Sliders, Palette, Monitor, RotateCcw, ShieldCheck } from 'lucide-react';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { theme, resetSettings } = useSettings();
  const [activeTab, setActiveTab] = useState<'clock' | 'theme' | 'display'>('clock');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-md h-full flex flex-col shadow-2xl border-l overflow-hidden animate-slide-left"
        style={{
          backgroundColor: theme.cardBg,
          color: theme.textColor,
          borderColor: theme.hingeColor,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: theme.hingeColor }}
        >
          <div className="flex items-center gap-2.5 font-bold text-lg">
            <Sliders className="w-5 h-5" style={{ color: theme.accentColor }} />
            <span>Clock Settings</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            style={{ color: theme.textColor }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex items-center px-4 pt-3 pb-2 gap-2 border-b"
          style={{ borderColor: theme.hingeColor }}
        >
          <button
            onClick={() => setActiveTab('clock')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'clock' ? 'shadow' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'clock' ? theme.cardTopBg : 'transparent',
              color: theme.textColor,
            }}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Clock</span>
          </button>
          <button
            onClick={() => setActiveTab('theme')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'theme' ? 'shadow' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'theme' ? theme.cardTopBg : 'transparent',
              color: theme.textColor,
            }}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Themes</span>
          </button>
          <button
            onClick={() => setActiveTab('display')}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'display' ? 'shadow' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'display' ? theme.cardTopBg : 'transparent',
              color: theme.textColor,
            }}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Display</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'clock' && <ClockSettings />}
          {activeTab === 'theme' && <ThemeSelector />}
          {activeTab === 'display' && <DisplaySettings />}
        </div>

        {/* Footer */}
        <div
          className="p-5 border-t flex flex-col gap-3"
          style={{ borderColor: theme.hingeColor }}
        >
          <div className="flex items-center justify-between text-xs opacity-60">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Settings stay on this device
            </span>
            <span>Privacy First</span>
          </div>

          <Button variant="outline" size="sm" onClick={resetSettings} className="w-full">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Default Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
