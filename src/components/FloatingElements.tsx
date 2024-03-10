import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const floatingElements = [
    { size: 'w-2 h-2', color: 'bg-blue-400', delay: 0, duration: 3 },
    { size: 'w-3 h-3', color: 'bg-purple-400', delay: 0.5, duration: 4 },
    { size: 'w-1 h-1', color: 'bg-pink-400', delay: 1, duration: 2.5 },
    { size: 'w-2 h-2', color: 'bg-indigo-400', delay: 1.5, duration: 3.5 },
    { size: 'w-4 h-4', color: 'bg-cyan-400', delay: 2, duration: 5 },
    { size: 'w-1 h-1', color: 'bg-emerald-400', delay: 2.5, duration: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-10`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: -1,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
