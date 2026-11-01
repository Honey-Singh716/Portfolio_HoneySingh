// src/data/profile.ts

export const profile = {
  name: 'Honey Singh',
  title: 'Software Engineer | Backend Development | AI & Machine Learning',
  tagline: 'Building software, exploring intelligence, and turning ideas into products.',
  bio: "I'm a B.Tech student in Artificial Intelligence and Data Science, passionate about building meaningful software, understanding systems behind the scenes and exploring intelligent technologies.",
  email: 'honeysingh.work12@gmail.com',
  phone: '+91-9311601925',
  location: 'India',
  available: true, // available for internships
  showPhoto: true, // set to false if you want no personal photo displayed
  showResume: true, // set to false if you want no resume download button
  resumeUrl: '/resume.pdf',
  photo: '/photo.jpg',

  social: {
    github: 'https://github.com/Honey-Singh716',
    linkedin: 'https://www.linkedin.com/in/honey-singh-in/',
    leetcode: 'https://leetcode.com/u/honey-singh_12/',
    kaggle: 'https://www.kaggle.com/honeysingh12coder',
  },

  education: {
    degree: 'B.Tech',
    field: 'Artificial Intelligence and Data Science',
    institution: 'IIT Jodhpur',
    year: '3rd Year',
    status: 'Pursuing',
  },
} as const;

export type Profile = typeof profile;

