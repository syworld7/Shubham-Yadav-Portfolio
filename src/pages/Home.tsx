import { siteConfig } from '../config/constants';
import { homeConfig } from '../config/home';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypewriterText } from '../components/TypewriterText';
import { socialLinksConfig } from '../config/socialLinks';

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="min-h-screen pt-20 relative z-10">
      {/* Top Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block text-gray-900 dark:text-white">Hi,</span>
                <span className="block mt-2">
                  I'm{' '}
                  <TypewriterText
                    text="Shubham Yadav"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mt-4">
                {homeConfig.jobTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                {homeConfig.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
                  >
                    <motion.span
                      whileHover={{ x: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      View My Work
                    </motion.span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-colors duration-200"
                  onClick={() => {
                    const downloadUrl = siteConfig.resumeUrl;
                    window.open(downloadUrl, '_blank');
                  }}
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Download className="mr-2 w-4 h-4" />
                  </motion.div>
                  Download Resume
                </motion.button>
              </div>

              <div className="flex items-center space-x-6 mt-8">
                {socialLinksConfig?.map(({ icon: Icon, href, label, delay, target }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="relative group text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.8 }}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="inline-flex"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.span>

                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.img
                  src={profileImage}
                  alt="Shubham Yadav"
                  className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ rotateY: -10 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Technologies I Work With
            </h2>
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden overflow-y-hidden gap-8 py-8 px-4 w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...homeConfig.technologies, ...homeConfig.technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgb(59 130 246)',
                    transition: { duration: 0.4 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-40 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <tech.logo />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
