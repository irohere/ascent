import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const TaskCard = ({ task, onComplete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`p-5 rounded-2xl flex items-center justify-between cursor-pointer border-2 transition-all duration-300 ${
        task.completed 
        ? 'bg-opacity-50' 
        : ''
      }`}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)',
      }}
      onClick={() => onComplete(task.id)}
    >
      <div className="flex items-center">
        <motion.div 
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4"
            style={{ 
                borderColor: 'var(--accent-primary)',
                backgroundColor: task.completed ? 'var(--accent-primary)' : 'transparent'
             }}
            transition={{ duration: 0.3 }}
        >
          {task.completed && <motion.div initial={{scale:0}} animate={{scale:1}}><Check size={20} color="var(--bg-primary)" /></motion.div>}
        </motion.div>
        <span className={`font-semibold text-lg ${task.completed ? 'line-through' : ''}`} style={{color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)'}}>
          {task.text}
        </span>
      </div>
      <div className="flex items-center font-bold" style={{color: 'var(--accent-primary)'}}>
        <Zap size={18} className="mr-1"/>
        <span>50 XP</span>
      </div>
    </motion.div>
  );
};

export default TaskCard;
