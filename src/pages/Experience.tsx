import { Link } from 'react-router-dom';
import { experiences } from '../config/experiences';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
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
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-blue-600/20"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              <motion.div
                className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                }}
              />

              <div className="ml-20 flex-1">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <Briefcase className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready for New Challenges</h3>
            <p className="mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Let's Connect
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
