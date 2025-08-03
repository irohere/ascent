
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import './styles/globals.css';

// This is where you would hypothetically sync with a cloud service like Firebase
const useCloudSync = (initialState) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem('everbloomState');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('everbloomState', JSON.stringify(state));
    // In a real app: debouncedSyncToCloud(state);
  }, [state]);

  return [state, setState];
};


function App() {
  const [state, setState] = useCloudSync({
    level: 5,
    xp: 350,
    xpToNextLevel: 1000,
    auraPoints: 120,
    spiritGuardian: {
      name: 'Lumi',
      evolution: 2, // 1: Seed, 2: Sprout, 3: Fox-spirit
      growth: 35, // % to next evolution
    },
    tasks: [
      { id: 1, text: 'Meditate for 15 minutes', completed: true, questId: 'daily' },
      { id: 2, text: 'Complete one Deep Work session', completed: false, questId: 'daily' },
      { id: 3, text: 'Sketch for 30 minutes', completed: false, questId: 'artisan_path' },
    ],
  });

  return (
    <div className="min-h-screen font-sans">
      <ThemeToggle />
      <Dashboard state={state} setState={setState} />
    </div>
  );
}

export default App;// You would need to install React, TailwindCSS, Framer Motion, and an icon library like lucide-react
// npm install framer-motion lucide-react

import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import './styles/globals.css';

// This is where you would hypothetically sync with a cloud service like Firebase
const useCloudSync = (initialState) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem('everbloomState');
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('everbloomState', JSON.stringify(state));
    // In a real app: debouncedSyncToCloud(state);
  }, [state]);

  return [state, setState];
};


function App() {
  const [state, setState] = useCloudSync({
    level: 5,
    xp: 350,
    xpToNextLevel: 1000,
    auraPoints: 120,
    spiritGuardian: {
      name: 'Lumi',
      evolution: 2, // 1: Seed, 2: Sprout, 3: Fox-spirit
      growth: 35, // % to next evolution
    },
    tasks: [
      { id: 1, text: 'Meditate for 15 minutes', completed: true, questId: 'daily' },
      { id: 2, text: 'Complete one Deep Work session', completed: false, questId: 'daily' },
      { id: 3, text: 'Sketch for 30 minutes', completed: false, questId: 'artisan_path' },
    ],
  });

  return (
    <div className="min-h-screen font-sans">
      <ThemeToggle />
      <Dashboard state={state} setState={setState} />
    </div>
  );
}

export default App;
