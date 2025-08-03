// components/ThemeToggle.js
import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

const ThemeToggle = () => {
    const changeTheme = (theme) => {
        document.documentElement.className = theme;
    };
    return (
        <div className="absolute top-4 right-4 flex gap-2 p-2 rounded-full" style={{backgroundColor: 'var(--bg-secondary)'}}>
            <button onClick={() => changeTheme('light')} className="p-2 rounded-full hover:bg-opacity-50" style={{backgroundColor: 'var(--accent-secondary)'}}><Sun size={18}/></button>
            <button onClick={() => changeTheme('dark')} className="p-2 rounded-full hover:bg-opacity-50" style={{backgroundColor: 'var(--accent-primary)'}}><Moon size={18}/></button>
            <button onClick={() => changeTheme('')} className="p-2 rounded-full hover:bg-opacity-50" style={{backgroundColor: 'var(--accent-primary)'}}><Sparkles size={18}/></button>
        </div>
    );
};

export default ThemeToggle;

// components/SpiritGuardian.js
import React from 'react';
import { motion } from 'framer-motion';

const SpiritGuardian = ({ guardian }) => {
  // In a real app, this would select different SVG or 3D models based on evolution
  const guardianImage = "https://i.imgur.com/uR2R8y6.png"; // Placeholder Ghibli-esque spirit

  return (
    <motion.div 
        className="w-full max-w-xs p-4 rounded-3xl flex flex-col items-center" 
        style={{backgroundColor: 'var(--bg-secondary)', border: '2px solid var(--border-color)'}}
        whileHover={{y: -10, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}}
    >
      <motion.img 
        src={guardianImage} 
        alt="Spirit Guardian" 
        className="w-48 h-48"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <h3 className="text-xl font-bold mt-4">{guardian.name}</h3>
      <p style={{color: 'var(--text-secondary)'}}>Evo. {guardian.evolution}</p>
      
      <div className="w-full mt-4">
        <p className="text-sm font-semibold text-center mb-1">Growth</p>
        <div className="w-full h-4 rounded-full" style={{backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)'}}>
            <motion.div 
                className="h-full rounded-full" 
                style={{backgroundColor: 'var(--accent-primary)'}}
                initial={{width: 0}}
                animate={{width: `${guardian.growth}%`}}
            />
        </div>
      </div>
    </motion.div>
  );
};

export default SpiritGuardian;
