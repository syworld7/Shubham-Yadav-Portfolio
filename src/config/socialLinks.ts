import { Github } from 'lucide-react';
import { siteConfig } from './constants';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

export const socialLinksConfig = [
  {
    icon: Github,
    href: siteConfig.github,
    label: 'GitHub',
    delay: 0,
    target: '_blank',
  },
  {
    icon: Linkedin,
    href: siteConfig.linkedin,
    label: 'LinkedIn',
    delay: 0.1,
    target: '_blank',
  },
  {
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
    label: 'Email',
    delay: 0.2,
    target: '_self',
  },
];
