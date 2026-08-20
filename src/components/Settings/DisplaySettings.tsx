import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import type { AnimationMode, BackgroundStyle } from '../../types';

export const DisplaySettings: React.FC = () => {
  const { settings, updateSettings, theme } = useSettings();

  const backgrounds: { label: string; value: BackgroundStyle; desc: string }[] = [
    { label: 'Ambient', value: 'ambient', desc: 'Subtle atmospheric glow' },
    { label: 'Solid', value: 'solid', desc: 'Clean single color background' },
    { label: 'Gradient', value: 'gradient', desc: 'Smooth radial gradient' },
    { label: 'Minimal', value: 'minimal', desc: 'Pure void deep black' },
  ];

  const animations: { label: string; value: AnimationMode; desc: string }[] = [
    { label: 'Full 3D', value: 'full', desc: 'Realistic split-flap motion' },
    { label: 'Reduced', value: 'reduced', desc: 'Faster subtle transition' },
    { label: 'Off', value: 'off', desc: 'Instant digit swap (battery saver)' },
  ];

  return (
    <div className="flex flex-col gap-5 w-full select-none">
      {/* Background Style */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
          Background Ambience
        </span>
        <div className="grid grid-cols-2 gap-2">
          {backgrounds.map((bg) => {
            const isSelected = settings.background === bg.value;
            return (
              <button
                key={bg.value}
                onClick={() => updateSettings({ background: bg.value })}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected ? 'ring-2 ring-blue-500 scale-[1.01]' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.hingeColor,
                  color: theme.textColor,
                }}
              >
                <div className="text-xs font-semibold">{bg.label}</div>
                <div className="text-[10px] opacity-60 mt-0.5">{bg.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animation Motion Mode */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
          Card Flip Animation
        </span>
        <div className="flex flex-col gap-2">
          {animations.map((anim) => {
            const isSelected = settings.animation === anim.value;
            return (
              <button
                key={anim.value}
                onClick={() => updateSettings({ animation: anim.value })}
                className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.hingeColor,
                  color: theme.textColor,
                }}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">{anim.label}</span>
                  <span className="text-[10px] opacity-60">{anim.desc}</span>
                </div>
                {isSelected && (
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
