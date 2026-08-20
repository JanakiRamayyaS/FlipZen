import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { Home, Camera, Building2, GraduationCap, Tv, Focus } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const { theme } = useSettings();

  const useCases = [
    {
      icon: Home,
      title: 'Home Office',
      desc: 'A calm visual anchor for your primary workspace or secondary monitor.',
    },
    {
      icon: Camera,
      title: 'Studio',
      desc: 'A beautiful ambient display for creative studios, video sets, and podcasts.',
    },
    {
      icon: Building2,
      title: 'Reception',
      desc: 'Professional digital time display for office lobbies, waiting rooms, and hotels.',
    },
    {
      icon: GraduationCap,
      title: 'Classroom',
      desc: 'Simple, distraction-free time display for schools, universities, and exam rooms.',
    },
    {
      icon: Tv,
      title: 'TV Display',
      desc: 'Turn a spare smart TV screen or Apple TV browser into an ambient living room clock.',
    },
    {
      icon: Focus,
      title: 'Focus Space',
      desc: 'Use as part of your Pomodoro or deep work environment to keep track of time.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase opacity-60" style={{ color: theme.accentColor }}>
          Versatile Deployment
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-3 mb-4" style={{ color: theme.textColor }}>
          Made for more than a desk.
        </h2>
        <p className="text-base sm:text-lg opacity-70" style={{ color: theme.textColor }}>
          From personal workstations to public signage displays.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl border transition-all duration-300 hover:border-blue-500/50 flex flex-col gap-4"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.hingeColor,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: theme.cardTopBg, color: theme.accentColor }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: theme.textColor }}>
                  {item.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed" style={{ color: theme.textColor }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
