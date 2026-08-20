import React from 'react';
import { useSettings } from '../../context/SettingsContext';

interface DateDisplayProps {
  dateString: string;
  ampm?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ dateString, ampm, size = 'lg' }) => {
  const { theme, settings } = useSettings();

  const textSizes = {
    sm: 'text-xs md:text-sm tracking-widest',
    md: 'text-sm md:text-base tracking-[0.2em]',
    lg: 'text-base md:text-xl tracking-[0.25em]',
    xl: 'text-lg md:text-2xl tracking-[0.3em]',
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-6 select-none transition-all duration-300">
      {settings.showDate && (
        <div
          className={`font-mono font-medium uppercase opacity-75 drop-shadow-sm ${textSizes[size]}`}
          style={{ color: theme.textColor }}
        >
          {dateString}
        </div>
      )}

      {settings.timeFormat === '12h' && ampm && (
        <span
          className="px-3 py-0.5 rounded-full font-mono text-xs md:text-sm font-semibold tracking-wider uppercase shadow-inner"
          style={{
            backgroundColor: theme.cardBg,
            color: theme.accentColor,
            border: `1px solid ${theme.hingeColor}`,
          }}
        >
          {ampm}
        </span>
      )}
    </div>
  );
};
