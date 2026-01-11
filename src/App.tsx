import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <motion.div
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FloatingElements />
        <Navbar />
        <main className="flex-grow relative z-10">
          <AppRoutes />
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
