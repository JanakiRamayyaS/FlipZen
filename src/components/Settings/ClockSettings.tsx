import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Toggle } from '../UI/Toggle';
import { Slider } from '../UI/Slider';
import type { ClockScale, SleepTimerOption } from '../../types';

export const ClockSettings: React.FC = () => {
  const { settings, updateSettings, theme } = useSettings();

  const scales: { label: string; value: ClockScale }[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'XL', value: 'xl' },
  ];

  const sleepTimers: { label: string; value: SleepTimerOption }[] = [
    { label: 'Never', value: 0 },
    { label: '15m', value: 15 },
    { label: '30m', value: 30 },
    { label: '60m', value: 60 },
    { label: '120m', value: 120 },
  ];

  return (
    <div className="flex flex-col gap-5 w-full select-none">
      {/* Time Format */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
          Time Format
        </span>
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/20">
          <button
            onClick={() => updateSettings({ timeFormat: '12h' })}
            className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
              settings.timeFormat === '12h' ? 'shadow' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: settings.timeFormat === '12h' ? theme.cardBg : 'transparent',
              color: theme.textColor,
            }}
          >
            12-Hour (AM/PM)
          </button>
          <button
            onClick={() => updateSettings({ timeFormat: '24h' })}
            className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
              settings.timeFormat === '24h' ? 'shadow' : 'opacity-60 hover:opacity-100'
            }`}
            style={{
              backgroundColor: settings.timeFormat === '24h' ? theme.cardBg : 'transparent',
              color: theme.textColor,
            }}
          >
            24-Hour
          </button>
        </div>
      </div>

      {/* Clock Size Scale Selector */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
          Clock Scale
        </span>
        <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-black/20">
          {scales.map((s) => (
            <button
              key={s.value}
              onClick={() => updateSettings({ clockScale: s.value })}
              className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
                settings.clockScale === s.value ? 'shadow' : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: settings.clockScale === s.value ? theme.cardBg : 'transparent',
                color: theme.textColor,
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brightness Slider */}
      <Slider
        label="Display Brightness"
        min={0.3}
        max={1.0}
        step={0.1}
        value={settings.brightness}
        onChange={(val) => updateSettings({ brightness: val })}
        displayValue={`${Math.round(settings.brightness * 100)}%`}
      />

      {/* Toggles */}
      <div className="flex flex-col divide-y divide-white/5 border-t border-b border-white/5 py-1">
        <Toggle
          label="Show Seconds"
          checked={settings.showSeconds}
          onChange={(checked) => updateSettings({ showSeconds: checked })}
          description="Display seconds flip digit cards"
        />
        <Toggle
          label="Show Date Header"
          checked={settings.showDate}
          onChange={(checked) => updateSettings({ showDate: checked })}
          description="Display current day and full date"
        />
      </div>

      {/* Sleep Timer */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
          Sleep Auto-Dim Timer
        </span>
        <div className="grid grid-cols-5 gap-1 p-1 rounded-xl bg-black/20">
          {sleepTimers.map((st) => (
            <button
              key={st.value}
              onClick={() => updateSettings({ sleepTimer: st.value })}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                settings.sleepTimer === st.value ? 'shadow' : 'opacity-60 hover:opacity-100'
              }`}
              style={{
                backgroundColor: settings.sleepTimer === st.value ? theme.cardBg : 'transparent',
                color: theme.textColor,
              }}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
