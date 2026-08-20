import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { useClock } from '../../hooks/useClock';
import { FlipDigit } from './FlipDigit';
import { FlipSeparator } from './FlipSeparator';
import { DateDisplay } from './DateDisplay';

interface FlipClockProps {
  showLabels?: boolean;
}

export const FlipClock: React.FC<FlipClockProps> = ({ showLabels = false }) => {
  const { settings } = useSettings();
  const timeState = useClock(settings.timeFormat);

  const h1 = timeState.hours.charAt(0);
  const h2 = timeState.hours.charAt(1);

  const m1 = timeState.minutes.charAt(0);
  const m2 = timeState.minutes.charAt(1);

  const s1 = timeState.seconds.charAt(0);
  const s2 = timeState.seconds.charAt(1);

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4 w-full max-w-full overflow-hidden transition-all duration-500">
      {/* Clock Digits Main Row */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 flex-nowrap max-w-full">
        {/* Hours Group */}
        <div className="flex items-center gap-1 md:gap-2">
          <FlipDigit digit={h1} size={settings.clockScale} label={showLabels ? 'HOURS' : undefined} />
          <FlipDigit digit={h2} size={settings.clockScale} />
        </div>

        {/* Hour-Minute Separator */}
        <FlipSeparator size={settings.clockScale} />

        {/* Minutes Group */}
        <div className="flex items-center gap-1 md:gap-2">
          <FlipDigit digit={m1} size={settings.clockScale} label={showLabels ? 'MINUTES' : undefined} />
          <FlipDigit digit={m2} size={settings.clockScale} />
        </div>

        {/* Seconds Group (Optional) */}
        {settings.showSeconds && (
          <>
            <FlipSeparator size={settings.clockScale} />
            <div className="flex items-center gap-1 md:gap-2">
              <FlipDigit digit={s1} size={settings.clockScale} label={showLabels ? 'SECONDS' : undefined} />
              <FlipDigit digit={s2} size={settings.clockScale} />
            </div>
          </>
        )}
      </div>

      {/* Date & AM/PM Row */}
      <DateDisplay
        dateString={timeState.fullDateString}
        ampm={timeState.ampm}
        size={settings.clockScale}
      />
    </div>
  );
};
