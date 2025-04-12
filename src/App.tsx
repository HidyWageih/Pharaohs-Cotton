import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-pharaoh-black text-pharaoh-gold">
          <Navbar />
          <HomePage />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;