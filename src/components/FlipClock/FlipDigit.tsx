import React, { useState, useEffect, useRef } from 'react';
import { useSettings } from '../../context/SettingsContext';

interface FlipDigitProps {
  digit: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string; // e.g. "HOURS", "MINUTES", "SECONDS"
}

export const FlipDigit: React.FC<FlipDigitProps> = ({ digit, size = 'lg', label }) => {
  const { theme, settings } = useSettings();
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (digit !== currentDigit) {
      setPreviousDigit(currentDigit);
      setCurrentDigit(digit);

      if (settings.animation !== 'off') {
        setIsFlipping(true);
        const timer = setTimeout(() => {
          setIsFlipping(false);
        }, settings.animation === 'reduced' ? 250 : 500);

        return () => clearTimeout(timer);
      }
    }
  }, [digit, currentDigit, settings.animation]);

  // Size sizing maps
  const sizeClasses = {
    sm: 'w-14 h-20 text-3xl md:w-20 md:h-28 md:text-5xl lg:w-24 lg:h-36 lg:text-6xl',
    md: 'w-20 h-28 text-5xl md:w-28 md:h-40 md:text-7xl lg:w-36 lg:h-52 lg:text-8xl',
    lg: 'w-24 h-36 text-6xl md:w-36 md:h-52 md:text-8xl lg:w-48 lg:h-64 lg:text-9xl',
    xl: 'w-28 h-40 text-7xl md:w-44 md:h-60 md:text-[10rem] lg:w-56 lg:h-80 lg:text-[12rem]',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.cardBg,
    color: theme.textColor,
    boxShadow: `0 12px 30px ${theme.shadowColor}, inset 0 1px 1px rgba(255,255,255,0.08)`,
  };

  const cardTopStyle: React.CSSProperties = {
    backgroundColor: theme.cardTopBg,
    color: theme.textColor,
    borderBottom: `1px solid ${theme.dividerColor}`,
  };

  const cardBottomStyle: React.CSSProperties = {
    backgroundColor: theme.cardBottomBg,
    color: theme.textColor,
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div
        className={`relative rounded-xl font-bold font-mono perspective-1000 ${sizeClasses[size]}`}
        style={cardStyle}
        aria-label={`Digit ${digit}`}
      >
        {/* Hinge Pin Left & Right notches */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-r z-30"
          style={{ backgroundColor: theme.hingeColor }}
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-l z-30"
          style={{ backgroundColor: theme.hingeColor }}
        />

        {/* Center Split Divider Line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] z-20"
          style={{ backgroundColor: theme.dividerColor }}
        />

        {/* Static Background Cards */}
        {/* Upper Static Card (Displays CURRENT digit top half) */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-xl flex items-end justify-center"
          style={cardTopStyle}
        >
          <span className="translate-y-1/2 leading-none">{currentDigit}</span>
        </div>

        {/* Lower Static Card (Displays PREVIOUS digit bottom half during flip, or CURRENT digit when static) */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-xl flex items-start justify-center"
          style={cardBottomStyle}
        >
          <span className="-translate-y-1/2 leading-none">
            {isFlipping ? previousDigit : currentDigit}
          </span>
        </div>

        {/* Animating Flap Cards (When Flipping) */}
        {isFlipping && settings.animation !== 'off' && (
          <>
            {/* Front Top Flap (Flips down from 0 to -90 deg showing PREVIOUS top half) */}
            <div
              className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-xl flex items-end justify-center origin-bottom z-20 animate-flip-top"
              style={{
                ...cardTopStyle,
                animationDuration: settings.animation === 'reduced' ? '250ms' : '500ms',
              }}
            >
              <span className="translate-y-1/2 leading-none">{previousDigit}</span>
            </div>

            {/* Back Bottom Flap (Flips down from 90 to 0 deg showing CURRENT bottom half) */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-xl flex items-start justify-center origin-top z-20 animate-flip-bottom"
              style={{
                ...cardBottomStyle,
                animationDuration: settings.animation === 'reduced' ? '250ms' : '500ms',
              }}
            >
              <span className="-translate-y-1/2 leading-none">{currentDigit}</span>
            </div>
          </>
        )}
      </div>

      {label && (
        <span
          className="mt-2 text-xs font-semibold tracking-widest uppercase opacity-60"
          style={{ color: theme.textColor }}
        >
          {label}
        </span>
      )}
    </div>
  );
};
