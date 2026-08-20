import React from 'react';
import { useSettings } from '../../context/SettingsContext';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  style,
  ...props
}) => {
  const { theme } = useSettings();

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold',
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.textColor,
          color: theme.bg,
          border: '1px solid transparent',
        };
      case 'secondary':
        return {
          backgroundColor: theme.cardBg,
          color: theme.textColor,
          border: `1px solid ${theme.hingeColor}`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: theme.textColor,
          border: `1px solid ${theme.hingeColor}`,
        };
      case 'ghost':
      default:
        return {
          backgroundColor: 'transparent',
          color: theme.textColor,
          border: '1px solid transparent',
        };
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
      style={{ ...getVariantStyles(), ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
