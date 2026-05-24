import airthImage from '../assets/project-icons/airth-core-img.png';
import airthImage1 from '../assets/project-icons/airth-core-img-1.png';
import airthImage2 from '../assets/project-icons/airth-core-img-2.png';
import airthImage3 from '../assets/project-icons/airth-core-img-3.png';
import airthImage4 from '../assets/project-icons/airth-core-img-4.png';
import airthImage5 from '../assets/project-icons/airth-core-img-5.png';
import airthImage6 from '../assets/project-icons/airth-core-img-6.png';
import airthImage7 from '../assets/project-icons/airth-core-img-7.png';
import assetpandaImage from '../assets/project-icons/asset-panda-img.png';
import assetpandaImage1 from '../assets/project-icons/asset-panda-img-1.png';
import assetpandaImage2 from '../assets/project-icons/asset-panda-img-2.png';
import assetpandaImage3 from '../assets/project-icons/asset-panda-img-3.png';
import assetpandaImage4 from '../assets/project-icons/asset-panda-img-4.png';
import assetpandaImage5 from '../assets/project-icons/asset-panda-img-5.png';
import assetpandaImage6 from '../assets/project-icons/asset-panda-img-6.png';
import assetpandaImage7 from '../assets/project-icons/asset-panda-img-7.png';
import inventraImage from '../assets/project-icons/inventra-img.png';
import inventraImage1 from '../assets/project-icons/inventra-img-1.png';
import inventraImage2 from '../assets/project-icons/inventra-img-2.png';
import inventraImage3 from '../assets/project-icons/inventra-img-3.png';
import quickPaysImage from '../assets/project-icons/quickPays-Img.png'
import quickPaysImage1 from '../assets/project-icons/quickPays-Img-1.png'
import quickPaysImage2 from '../assets/project-icons/quickPays-Img-2.png'
import quickPaysImage3 from '../assets/project-icons/quickPays-Img-3.png'

export const projectsConfig = [
  {
    title: 'Airth.io (Live Client Project)',
    description:
      'Airth.io is a data processing platform that helps users analyze, visualize, and manage data efficiently. It provides real-time insights, dashboards, and tools for building scalable data-driven applications.',
    images: [
      airthImage,
      airthImage1,
      airthImage2,
      airthImage3,
      airthImage4,
      airthImage5,
      airthImage6,
      airthImage7,
    ],
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'CraftJS', 'JointJS+', 'AWS S3'],
    demo: 'https://airth-core-ui.airth.io/signin',
    date: '2025',
  },
  {
    title: 'AssetPanda (Live Client Project)',
    description:
      'AssetPanda is an asset management system used to track company assets such as IT equipment, tools, and inventory. It enables real-time tracking, reporting, audits, and asset lifecycle management.',
    images: [
      assetpandaImage,
      assetpandaImage1,
      assetpandaImage2,
      assetpandaImage3,
      assetpandaImage4,
      assetpandaImage5,
      assetpandaImage6,
      assetpandaImage7,
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'Chart.js', 'DevExtreme', 'jsPDF'],
    demo: 'https://assetpanda.app/login',
    date: '2024',
  },
  {
    title: 'Inventra',
    description:
      'Inventra is a full-stack inventory management application that enables users to securely register, manage, and track inventory items and categories. Built with modern UI elements, it provides comprehensive real-time search, robust category filtering, and configurable pagination, all secured via JWT authentication.',
    images: [
      inventraImage,
      inventraImage1,
      inventraImage2,
      inventraImage3,
    ],
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
    demo: 'https://inventra-frontend-kappa.vercel.app/login',
    date: '2026',
  },
   {
    title: 'QuickPays',
    description:
      'QuickPay is a modern payment checkout and transaction dashboard application with secure payment processing and analytics. It features responsive UI, interactive charts, transaction tracking, and secure card validation. Built using React, TypeScript, Redux Toolkit, and Tailwind CSS for a fast and scalable user experience.',
    images: [
      quickPaysImage,
      quickPaysImage1,
      quickPaysImage2,
      quickPaysImage3,
    ],
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Vite', 'Material UI'],
    demo: 'https://quickpays.netlify.app/',
    date: '2026',
  },
];
