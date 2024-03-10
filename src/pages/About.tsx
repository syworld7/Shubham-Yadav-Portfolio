import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import {
  scrollAnimationVariants,
  staggerContainer,
  staggerItem,
} from '../hooks/useScrollAnimation';
import { aboutConfig } from '../config/about';

const About = () => {
  return (
    <div className="min-h-screen pt-20 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">{aboutConfig.heading}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={profileImage}
              alt="About Me"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {aboutConfig.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={scrollAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Beyond Coding
          </h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutConfig?.interests?.map((interest) => (
              <motion.div
                key={interest.title}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    backgroundColor: 'rgb(59 130 246)',
                    transition: { duration: 0.4 },
                  }}
                >
                  <interest.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
