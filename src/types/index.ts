export type TimeFormat = '12h' | '24h';
export type ClockScale = 'sm' | 'md' | 'lg' | 'xl';
export type BackgroundStyle = 'solid' | 'gradient' | 'ambient' | 'minimal';
export type AnimationMode = 'full' | 'reduced' | 'off';
export type SleepTimerOption = 0 | 15 | 30 | 60 | 120;

export type ThemeId = 'midnight' | 'paper' | 'mono' | 'ocean' | 'warm' | 'minimal';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  bg: string;
  cardBg: string;
  cardTopBg: string;
  cardBottomBg: string;
  textColor: string;
  dividerColor: string;
  hingeColor: string;
  shadowColor: string;
  accentColor: string;
  controlBg: string;
  controlText: string;
}

export interface ClockSettings {
  timeFormat: TimeFormat;
  showSeconds: boolean;
  showDate: boolean;
  theme: ThemeId;
  clockScale: ClockScale;
  brightness: number; // 0.2 to 1.0
  background: BackgroundStyle;
  animation: AnimationMode;
  sleepTimer: SleepTimerOption;
}

export const DEFAULT_SETTINGS: ClockSettings = {
  timeFormat: '12h',
  showSeconds: true,
  showDate: true,
  theme: 'midnight',
  clockScale: 'lg',
  brightness: 1.0,
  background: 'ambient',
  animation: 'full',
  sleepTimer: 0,
};
