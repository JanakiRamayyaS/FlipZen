import React from 'react';
import { useSettings } from '../../context/SettingsContext';

interface FlipSeparatorProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const FlipSeparator: React.FC<FlipSeparatorProps> = ({ size = 'lg' }) => {
  const { theme } = useSettings();

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4 md:w-5 md:h-5',
    xl: 'w-5 h-5 md:w-6 md:h-6',
  };

  const gapSizes = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-10',
  };

  return (
    <div className={`flex flex-col justify-center items-center ${gapSizes[size]} px-1 md:px-2 select-none`}>
      <div
        className={`rounded-full transition-all duration-300 opacity-80 shadow-sm ${dotSizes[size]}`}
        style={{ backgroundColor: theme.textColor }}
      />
      <div
        className={`rounded-full transition-all duration-300 opacity-80 shadow-sm ${dotSizes[size]}`}
        style={{ backgroundColor: theme.textColor }}
      />
    </div>
  );
};
