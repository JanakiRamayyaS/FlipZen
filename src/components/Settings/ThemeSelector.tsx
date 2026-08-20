import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { themes } from '../../themes/themes';
import type { ThemeId } from '../../types';
import { Check } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { settings, updateSettings, theme } = useSettings();

  const themeList = Object.values(themes);

  return (
    <div className="flex flex-col gap-3 w-full select-none">
      <span className="text-xs font-semibold uppercase tracking-wider opacity-70" style={{ color: theme.textColor }}>
        Theme Palette
      </span>
      <div className="grid grid-cols-2 gap-2.5">
        {themeList.map((item) => {
          const isSelected = settings.theme === item.id;
          return (
            <button
              key={item.id}
              onClick={() => updateSettings({ theme: item.id as ThemeId })}
              className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                isSelected ? 'ring-2 ring-blue-500 scale-[1.02]' : 'hover:opacity-90'
              }`}
              style={{
                backgroundColor: item.bg,
                borderColor: item.hingeColor,
              }}
            >
              {/* Theme Mini Card Preview */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shadow"
                style={{ backgroundColor: item.cardBg, color: item.textColor }}
              >
                12
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-xs font-semibold truncate" style={{ color: item.textColor }}>
                  {item.name}
                </span>
              </div>

              {isSelected && (
                <Check className="w-4 h-4 shrink-0" style={{ color: item.accentColor }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
