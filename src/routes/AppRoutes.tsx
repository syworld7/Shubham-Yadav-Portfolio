import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
