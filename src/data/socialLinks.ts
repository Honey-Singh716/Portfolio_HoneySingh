// src/data/socialLinks.ts

export interface SocialProfile {
  id: string;
  platform: string;
  username: string;
  url: string;
  label: string;
  icon: string; // lucide icon name
}

export const socialProfiles: SocialProfile[] = [
  {
    id: 'github',
    platform: 'GitHub',
    username: 'Honey-Singh716',
    url: 'https://github.com/Honey-Singh716',
    label: 'Projects & Open Source',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'honey-singh-in',
    url: 'https://www.linkedin.com/in/honey-singh-in/',
    label: 'Professional Network',
    icon: 'Linkedin',
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'honey-singh_12',
    url: 'https://leetcode.com/u/honey-singh_12/',
    label: 'Problem Solving',
    icon: 'Code2',
  },
  {
    id: 'kaggle',
    platform: 'Kaggle',
    username: 'honeysingh12coder',
    url: 'https://www.kaggle.com/honeysingh12coder',
    label: 'Data Science & ML',
    icon: 'BarChart2',
  },
];

