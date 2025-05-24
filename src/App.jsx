import React, { useState } from 'react';
import Terminal from './pages/Terminal.jsx';
import Portfolio from './pages/Portfolio.jsx';
import { DarkModeProvider } from './utils/DarkModeContext.jsx';

function App() {
  const [currentView, setCurrentView] = useState('portfolio');

  return (
    <DarkModeProvider>
      <div className="open-sans">
        {currentView === 'terminal' ? (
          <Terminal onSwitchView={setCurrentView} />
        ) : (
          <Portfolio onSwitchView={setCurrentView} />
        )}
      </div>
    </DarkModeProvider>
  );
}

export default App;