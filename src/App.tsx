import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import { Home } from './pages/Home';
import { ClockPage } from './pages/ClockPage';
import { ScreensaverPage } from './pages/ScreensaverPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';

export const App: React.FC = () => {
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
