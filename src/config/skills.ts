import { Code, Database, Cloud, Palette, Cpu, Layers } from 'lucide-react';
import { VSCode } from '../assets/icons/VSCode';
import { Cursor } from '../assets/icons/Cursor';
import { Jest } from '../assets/icons/Jest';
import { Postman } from '../assets/icons/Postman';
import { Jira } from '../assets/icons/Jira';
import { Confluence } from '../assets/icons/Confluence';
import { siteConfig } from './constants';

export const skillsConfig = {
  skillsHeading: `Skills & Technologies`,
  skillsDescription: `A comprehensive overview of my technical expertise and the tools I use to build exceptional web applications.`,
  title: `${siteConfig.experienceYears} Years of Experience`,
  description: `Building responsive web applications with modern technologies and delivering high-performance user interfaces.`,
  information: [
    {
      title: '25%',
      description: `Code Duplication Reduction`,
    },
    {
      title: '30%',
      description: `Load Time Improvement`,
    },
    {
      title: '100%',
      description: `Pixel-Perfect UIs`,
    },
  ],
  skillCategories: [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
      ],
    },
    {
      title: 'Frontend Frameworks',
      icon: Palette,
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Redux Toolkit', level: 90 },
        { name: 'Zustand', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'UI Libraries',
      icon: Layers,
      skills: [
        { name: 'Ant Design', level: 85 },
        { name: 'Material UI', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'SCSS', level: 80 },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS (S3, EC2)', level: 80 },
        { name: 'Jenkins', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Cpu,
      skills: [
        { name: 'Socket.IO', level: 85 },
        { name: 'Monaco Editor', level: 80 },
        { name: 'CraftJS', level: 75 },
        { name: 'JointJS+', level: 70 },
      ],
    },
  ],
  tools: [
    { name: 'Visual Studio Code', icon: VSCode },
    { name: 'Cursor', icon: Cursor },
    { name: 'Postman', icon: Postman },
    { name: 'JIRA', icon: Jira },
    { name: 'Confluence', icon: Confluence },
    { name: 'Jest', icon: Jest },
  ],
};
