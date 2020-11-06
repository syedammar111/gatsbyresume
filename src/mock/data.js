import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Syed Ammar Ilyas', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Syed Ammar Ilyas',
  subtitle: 'im a Developer, Designer, Data Scientist & IT Specialist',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '222.png',
    title: 'Boutique Fur Gallery',
    info: 'A luxury fur fashion boutique',
    info2: '',
    url: 'https://boutiquefurgallery.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'be.JPG',
    title: 'Buddy Electronics',
    info: 'Electronics Engineering Ecommerce Store',
    info2: '',
    url: 'https://buddyelectronics.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pf.JPG',
    title: 'Pak Fragrances',
    info: 'Discussion forum and database for perfumes',
    info2: '',
    url: 'https://pakfragrances.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'syedammarilyas@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/syedammarilyas',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/syedammarilyas/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/syedammarilyas/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/syedammar111',
    },
      ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
