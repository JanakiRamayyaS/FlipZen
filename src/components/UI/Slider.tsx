import React from 'react';
import { useSettings } from '../../context/SettingsContext';

interface SliderProps {
  label?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
  displayValue?: string;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  displayValue,
}) => {
  const { theme } = useSettings();

  return (
    <div className="flex flex-col gap-2 w-full select-none">
      <div className="flex justify-between items-center text-xs font-medium opacity-80" style={{ color: theme.textColor }}>
        {label && <span>{label}</span>}
        {displayValue && <span className="font-mono">{displayValue}</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-blue-500 bg-gray-700/40"
      />
    </div>
  );
};
