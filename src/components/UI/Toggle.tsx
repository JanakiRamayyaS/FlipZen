import React from 'react';
import { useSettings } from '../../context/SettingsContext';

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange, description }) => {
  const { theme } = useSettings();

  return (
    <div
      className="flex items-center justify-between py-2 cursor-pointer select-none"
      onClick={() => onChange(!checked)}
    >
      <div className="flex flex-col pr-4">
        <span className="text-sm font-medium" style={{ color: theme.textColor }}>
          {label}
        </span>
        {description && (
          <span className="text-xs opacity-60" style={{ color: theme.textColor }}>
            {description}
          </span>
        )}
      </div>

      <div
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          checked ? 'justify-end' : 'justify-start'
        }`}
        style={{
          backgroundColor: checked ? theme.accentColor : theme.hingeColor,
        }}
      >
        <div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300" />
      </div>
    </div>
  );
};
