import React, { createContext, useContext, useMemo } from 'react';
import { DEFAULT_SETTINGS } from '../types';
import type { ClockSettings, ThemeConfig, ThemeId } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { themes } from '../themes/themes';

interface SettingsContextType {
  settings: ClockSettings;
  theme: ThemeConfig;
  updateSettings: (newSettings: Partial<ClockSettings>) => void;
  resetSettings: () => void;
  cycleTheme: () => void;
  toggleSeconds: () => void;
  toggleDate: () => void;
  toggleFormat: () => void;
  stepScale: (direction: 'up' | 'down') => void;
  toggleBrightness: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useLocalStorage<ClockSettings>('flipzen_settings_v1', DEFAULT_SETTINGS);

  const theme = useMemo(() => {
    return themes[settings.theme] || themes.midnight;
  }, [settings.theme]);

  const updateSettings = (newSettings: Partial<ClockSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const cycleTheme = () => {
    const themeList: ThemeId[] = ['midnight', 'paper', 'mono', 'ocean', 'warm', 'minimal'];
    const currentIndex = themeList.indexOf(settings.theme);
    const nextTheme = themeList[(currentIndex + 1) % themeList.length];
    updateSettings({ theme: nextTheme });
  };

  const toggleSeconds = () => {
    updateSettings({ showSeconds: !settings.showSeconds });
  };

  const toggleDate = () => {
    updateSettings({ showDate: !settings.showDate });
  };

  const toggleFormat = () => {
    updateSettings({ timeFormat: settings.timeFormat === '12h' ? '24h' : '12h' });
  };

  const stepScale = (direction: 'up' | 'down') => {
    const scales: ('sm' | 'md' | 'lg' | 'xl')[] = ['sm', 'md', 'lg', 'xl'];
    const currentIndex = scales.indexOf(settings.clockScale);
    let nextIndex = direction === 'up' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= scales.length) nextIndex = scales.length - 1;
    updateSettings({ clockScale: scales[nextIndex] });
  };

  const toggleBrightness = () => {
    const levels = [0.4, 0.7, 1.0];
    const currentIndex = levels.indexOf(settings.brightness);
    const nextBrightness = levels[(currentIndex + 1) % levels.length];
    updateSettings({ brightness: nextBrightness });
  };

  const value = useMemo(
    () => ({
      settings,
      theme,
      updateSettings,
      resetSettings,
      cycleTheme,
      toggleSeconds,
      toggleDate,
      toggleFormat,
      stepScale,
      toggleBrightness,
    }),
    [settings, theme]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
