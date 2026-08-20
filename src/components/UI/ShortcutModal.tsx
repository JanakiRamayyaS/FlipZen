import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { X, Keyboard } from 'lucide-react';

interface ShortcutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutModal: React.FC<ShortcutModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useSettings();

  if (!isOpen) return null;

  const shortcuts = [
    { key: 'F', description: 'Toggle Fullscreen Mode' },
    { key: 'S', description: 'Toggle Seconds Display' },
    { key: 'D', description: 'Toggle Date Header' },
    { key: 'T', description: 'Cycle Themes' },
    { key: '+ / -', description: 'Increase / Decrease Clock Scale' },
    { key: 'B', description: 'Cycle Brightness Levels' },
    { key: 'R', description: 'Reset Settings to Default' },
    { key: '?', description: 'Toggle Keyboard Shortcut Menu' },
    { key: 'ESC', description: 'Exit Fullscreen / Screensaver' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-md rounded-2xl p-6 shadow-2xl border"
        style={{
          backgroundColor: theme.cardBg,
          color: theme.textColor,
          borderColor: theme.hingeColor,
        }}
      >
        <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: theme.hingeColor }}>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Keyboard className="w-5 h-5" style={{ color: theme.accentColor }} />
            <span>Keyboard Shortcuts</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            style={{ color: theme.textColor }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
          {shortcuts.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-black/20"
            >
              <span className="text-sm opacity-80">{item.description}</span>
              <kbd
                className="px-2.5 py-1 text-xs font-mono font-bold rounded shadow border"
                style={{
                  backgroundColor: theme.cardTopBg,
                  color: theme.textColor,
                  borderColor: theme.hingeColor,
                }}
              >
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-3 text-center text-xs opacity-50 border-t" style={{ borderColor: theme.hingeColor }}>
          Press any shortcut key on your keyboard to activate immediately.
        </div>
      </div>
    </div>
  );
};
