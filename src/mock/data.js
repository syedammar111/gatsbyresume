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
  subtitle: 'Im a designer, developer, data scientist & IT specialist',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
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
    info2: 'Shopify, Forma, SNPT Instagram, Kit, Rviyu, Rviyu, Tipo Appointment Booking',
    url: 'https://boutiquefurgallery.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'buddy.JPG',
    title: 'Buddy Electronics',
    info: 'Electronics Engineering Ecommerce Store',
    info2: 'Wordpress, Woocommerce, Elementor, Woolementor, CartFlows, WPForms Lite',
    url: 'https://buddyelectronics.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pakfrag1.JPG',
    title: 'Pak Fragrances',
    info: 'Discussion forum and database for perfumes',
    info2: 'Gatsby JS, React basic, React router, Redux, Firebase,Stripe, Styled Components, Redux Saga, Hooks, Context API, GraphQL, Just library for test',
    url: 'http://domain23d573.stackstaging.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'byt.JPG',
    title: 'Book Your Table',
    info: 'Restaurant Table Reservation System',
    info2: 'Wordpress, Blocksy, Appointment Hour Booking, Brizy, Elementor',
    url: 'http://byt.epizy.com/',
    repo: '', // if no repo, the button will not show up
  },
    {
    id: nanoid(),
    img: 'luna.JPG',
    title: 'Luna',
    info: 'Static Dog App',
    info2: 'HTML, Css, Bootstrap',
    url: 'https://mystifying-ptolemy-60393f.netlify.app/',
    repo: 'https://github.com/syedammar111/luna', // if no repo, the button will not show up
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
