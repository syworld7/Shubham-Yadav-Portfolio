import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TypewriterText = ({
  text,
  className,
  speed = 200,
  deleteSpeed = 100,
  waitBeforeDelete = 2000,
}: {
  text: string;
  className: string;
  speed?: number;
  deleteSpeed?: number;
  waitBeforeDelete?: number;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => text.substring(0, prev.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (displayedText === text) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, waitBeforeDelete);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => text.substring(0, prev.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, deleteSpeed, waitBeforeDelete]);

  return (
    <>
      <span className={className}>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block w-[4px] h-[1em] ml-1 align-middle bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </>
  );
};
