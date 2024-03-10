import { siteConfig } from '../config/constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Code2, Heart, ArrowUp } from 'lucide-react';
import { footerConfig } from '../config/footerConfig';
import { socialLinksConfig } from '../config/socialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {/* Top Section */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2 text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold">Shubham Yadav</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-md mx-auto sm:mx-0">
              {footerConfig.title}
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
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
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/skills', label: 'Skills' },
                { path: '/projects', label: 'Projects' },
                { path: '/experience', label: 'Experience' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center justify-center sm:justify-start group text-sm sm:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={siteConfig.phone}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-bas truncate"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{siteConfig.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-300 text-center sm:text-left">
            <span className="text-sm sm:text-base">© {currentYear} Shubham Yadav. Made with</span>
            <div className="flex items-center space-x-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span className="text-sm sm:text-base">using React & Framer Motion</span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline">Back to Top</span>
            <span className="sm:hidden">Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
