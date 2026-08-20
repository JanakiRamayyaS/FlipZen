import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import { Home } from './pages/Home';
import { ClockPage } from './pages/ClockPage';
import { ScreensaverPage } from './pages/ScreensaverPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';

export const App: React.FC = () => {
  useEffect(() => {
    // Send Streamlit component readiness signals to parent window
    const sendStreamlitReady = () => {
      try {
        if (window.parent) {
          window.parent.postMessage(
            {
              isStreamlitMessage: true,
              type: 'streamlit:componentReady',
              apiVersion: 1,
            },
            '*'
          );

          window.parent.postMessage(
            {
              isStreamlitMessage: true,
              type: 'streamlit:setFrameHeight',
              height: Math.max(window.innerHeight || 850, 850),
            },
            '*'
          );
        }
      } catch (e) {
        console.warn('Streamlit postMessage notice:', e);
      }
    };

    sendStreamlitReady();

    const handleResize = () => {
      sendStreamlitReady();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SettingsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/screensaver" element={<ScreensaverPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
};

export default App;
