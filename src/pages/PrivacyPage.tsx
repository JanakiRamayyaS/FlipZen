import React from 'react';
import { Navbar } from '../components/UI/Navbar';
import { Footer } from '../components/UI/Footer';
import { useSettings } from '../context/SettingsContext';
import { ShieldCheck, HardDrive, EyeOff, Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { theme } = useSettings();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500" style={{ backgroundColor: theme.bg }}>
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase opacity-80 border mb-4"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor, color: theme.accentColor }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Tracking Guarantee</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{ color: theme.textColor }}>
            Privacy Policy
          </h1>
          <p className="text-lg opacity-75 max-w-2xl mx-auto" style={{ color: theme.textColor }}>
            FlipZen is built on a strict privacy-first foundation. Your settings stay on your device.
          </p>
        </div>

        <div className="space-y-8">
          <div className="p-8 rounded-3xl border shadow-xl flex items-start gap-5" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
            <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}>
              <HardDrive className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: theme.textColor }}>Local Storage Only</h2>
              <p className="opacity-80 leading-relaxed text-sm" style={{ color: theme.textColor }}>
                All user preferences — including selected color themes, 12/24 hour display format, seconds visibility, clock size scaling, brightness, and background preferences — are stored locally in your browser's <code className="font-mono px-2 py-0.5 rounded bg-black/20">localStorage</code>.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl border shadow-xl flex items-start gap-5" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
            <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}>
              <EyeOff className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: theme.textColor }}>No Analytics or Tracking</h2>
              <p className="opacity-80 leading-relaxed text-sm" style={{ color: theme.textColor }}>
                FlipZen does not use tracking cookies, analytics pixels, or third-party behavioral telemetry. We do not gather or store any personally identifiable information.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl border shadow-xl flex items-start gap-5" style={{ backgroundColor: theme.cardBg, borderColor: theme.hingeColor }}>
            <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}>
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: theme.textColor }}>No Network Transmission</h2>
              <p className="opacity-80 leading-relaxed text-sm" style={{ color: theme.textColor }}>
                Once the web page asset bundle loads into your browser, FlipZen operates entirely client-side. The clock reads time from your system clock device without communicating with external remote servers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
