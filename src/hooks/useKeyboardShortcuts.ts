import { useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';
import { useFullscreen } from './useFullscreen';

export function useKeyboardShortcuts(onToggleHelp?: () => void) {
  const {
    cycleTheme,
    toggleSeconds,
    toggleDate,
    stepScale,
    toggleBrightness,
    resetSettings,
  } = useSettings();

  const { toggleFullscreen } = useFullscreen();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore key events when user is typing in form inputs
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) {
        return;
      }

      const key = event.key.toLowerCase();

      switch (key) {
        case 'f':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 's':
          event.preventDefault();
          toggleSeconds();
          break;
        case 'd':
          event.preventDefault();
          toggleDate();
          break;
        case 't':
          event.preventDefault();
          cycleTheme();
          break;
        case '+':
        case '=':
          event.preventDefault();
          stepScale('up');
          break;
        case '-':
        case '_':
          event.preventDefault();
          stepScale('down');
          break;
        case 'b':
          event.preventDefault();
          toggleBrightness();
          break;
        case 'r':
          event.preventDefault();
          resetSettings();
          break;
        case '?':
        case '/':
          event.preventDefault();
          if (onToggleHelp) onToggleHelp();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    toggleFullscreen,
    toggleSeconds,
    toggleDate,
    cycleTheme,
    stepScale,
    toggleBrightness,
    resetSettings,
    onToggleHelp,
  ]);
}
