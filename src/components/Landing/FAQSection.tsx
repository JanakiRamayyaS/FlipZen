import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { theme } = useSettings();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is FlipZen free?',
      a: 'Yes, FlipZen offers a free core experience with full access to screensaver mode, custom themes, scaling options, and shortcuts.',
    },
    {
      q: 'Does it require an account?',
      a: 'No account or login is required. You can launch FlipZen immediately in your browser.',
    },
    {
      q: 'Does it work offline?',
      a: 'Yes! FlipZen is built as a PWA (Progressive Web App). Once loaded, the core clock works completely offline without internet server interaction.',
    },
    {
      q: 'Can I use it on a TV?',
      a: 'Yes! Any smart TV or streaming box with a web browser (e.g. LG webOS, Samsung Tizen, Android TV, Fire TV, Apple TV apps) can run FlipZen in fullscreen mode.',
    },
    {
      q: 'Does FlipZen collect my data?',
      a: 'No. All user settings (themes, 12/24 hour preference, clock scale, brightness) stay exclusively on your local device via standard browser localStorage.',
    },
    {
      q: 'Can I customize the clock?',
      a: 'Absolutely. You can customize themes (Midnight, Paper, Mono, Ocean, Warm, Minimal), toggle seconds and date headers, adjust clock size, set brightness levels, and pick background styles.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase opacity-60" style={{ color: theme.accentColor }}>
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4" style={{ color: theme.textColor }}>
          Everything you need to know.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border overflow-hidden transition-colors"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.hingeColor,
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between font-semibold text-base sm:text-lg cursor-pointer"
                style={{ color: theme.textColor }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ color: theme.accentColor }}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm opacity-75 leading-relaxed" style={{ color: theme.textColor }}>
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
