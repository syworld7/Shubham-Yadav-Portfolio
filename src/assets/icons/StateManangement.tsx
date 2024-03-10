import React, { SVGProps } from 'react';

export const StateManagement = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="8" height="8" x="2" y="2" rx="2" />
    <path d="M14 6h6" />
    <path d="M14 18h6" />
    <path d="M6 10v4" />
    <rect width="8" height="8" x="2" y="14" rx="2" />
    <rect width="8" height="8" x="14" y="2" rx="2" />
    <rect width="8" height="8" x="14" y="14" rx="2" />
  </svg>
);
