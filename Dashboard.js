import React from 'react';
import { motion } from 'framer-motion';
import SpiritGuardian from './SpiritGuardian';
import TaskCard from './TaskCard';

const Dashboard = ({ state, setState }) => {
  const handleTaskComplete = (taskId, points = 50) => {
    setState(prevState => {
      const newTasks = prevState.tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      
      const task = prevState.tasks.find(t => t.id === taskId);
      const xpChange = task.completed ? -points : points;

      return {
        ...prevState,
        tasks: newTasks,
        xp: prevState.xp + xpChange,
        spiritGuardian: {
          ...prevState.spiritGuardian,
          growth: prevState.spiritGuardian.growth + (xpChange > 0 ? 5 : -5)
        }
      };
    });
  };

  return (
    <motion.main 
      className="container mx-auto p-4 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header className="text-center my-8">
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>Today's Sanctuary</h1>
        <p className="text-lg mt-2" style={{ color: 'var(--text-secondary)' }}>Nurture your spirit, complete your quests.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Your Spirit Guardian</h2>
            <SpiritGuardian guardian={state.spiritGuardian} xp={state.xp} xpToNextLevel={state.xpToNextLevel} />
        </section>

        <section className="lg:col-span-2">
           <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Daily Mission</h2>
          <div className="space-y-4">
            {state.tasks.map(task => (
              <TaskCard key={task.id} task={task} onComplete={handleTaskComplete} />
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default Dashboard;
