import { Camera, Code } from 'lucide-react';
import { siteConfig } from './constants';
import { PerformanceOptimization } from '../assets/icons/PerformanceOptimization';
import { StateManagement } from '../assets/icons/StateManangement';

export const aboutConfig = {
  heading: `Frontend Developer with ${siteConfig.experienceYears} years of experience building responsive web applications`,
  description: [
    `I'm a Frontend Developer with ${siteConfig.experienceYears} years of experience building responsive web applications using React.js, TypeScript, JavaScript (ES6+), and Tailwind CSS. My journey started with a Bachelor of Technology in Computer Science from Swami Vivekanand College of Engineering, Indore.`,
    `I specialize in React.js, Redux Toolkit, Zustand, and modern frontend technologies. I'm proficient in state management and familiar with backend technologies like Node.js, Express.js, and REST APIs. I believe in writing clean, maintainable code and creating high-performance, scalable user interfaces.`,
    `Currently working as an Associate Software Engineer at Webkorps Services India Pvt. Ltd., I've delivered responsive UIs, optimized web app performance, and built reusable components that reduced code duplication by 25%. I'm experienced in Agile/Scrum methodology and passionate about creating exceptional digital experiences.`,
  ],
  interests: [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive UIs with React.js and TypeScript',
    },
    {
      icon: PerformanceOptimization,
      title: 'Performance Optimization',
      description: 'Optimizing web apps with lazy loading and code splitting',
    },
    {
      icon: StateManagement,
      title: 'State Management',
      description: 'Expert in Redux Toolkit and Zustand',
    },
    {
      icon: Camera,
      title: 'UI/UX Design',
      description: 'Transforming Figma designs into pixel-perfect interfaces',
    },
  ],
};
