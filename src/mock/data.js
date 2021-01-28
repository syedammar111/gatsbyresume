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
  subtitle: 'Im a Designer, Developer, Data scientist & an IT Specialist.',
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
    img: 'boutique21.png',
    title: 'Boutique Fur Gallery',
    info: 'A luxury Fur Fashion Boutique',
    info2:
      'Tech stack: Shopify, Forma, SNPT Instagram, Kit, Rviyu, Rviyu, Tipo Appointment Booking',
    url: 'https://boutiquefurgallery.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'buddy.JPG',
    title: 'Buddy Electronics',
    info: 'Electronics Engineering Ecommerce Store',
    info2: 'Tech stack: Wordpress, Woocommerce, Elementor, Woolementor, CartFlows, WPForms Lite',
    url: 'https://buddyelectronics.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pakfrag1.JPG',
    title: 'Pak Fragrances',
    info: 'Discussion forum and database for Fragrances',
    info2:
      'Tech stack: Gatsby JS, React basic, React router, Redux, Firebase,Stripe, Styled Components, Redux Saga, Hooks, Context API, GraphQL, Just library for test',
    url: 'http://pakfragrances.ml/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'byt.JPG',
    title: 'Book Your Table',
    info: 'Restaurant Table Reservation System',
    info2: 'Tech stack: Wordpress, Blocksy, Appointment Hour Booking, Brizy, Elementor',
    url: 'http://byt.epizy.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'luna.JPG',
    title: 'Luna',
    info: 'Static dog app website',
    info2: 'Tech stack: HTML, Css, Bootstrap',
    url: 'https://mystifying-ptolemy-60393f.netlify.app/',
    repo: 'https://github.com/syedammar111/luna', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'miniprojects.JPG',
    title: 'Quick and Useful toolkit',
    info: 'A list of useful and interesting projects, quick tools & hacks',
    info2: 'Tech stack: HTML, Css, Bootstrap, SortableJS',
    url: '',
    repo: 'https://github.com/syedammar111/projects_display', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mohina.JPG',
    title: 'Mohina website',
    info: 'Fashion, lifestyle & Estore website',
    info2: 'Tech stack: Wordpress, Elementor, WPForms Lite, Freenom, Woolementor, Woocomerce',
    url: 'http://imhina.gq',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smilyas.JPG',
    title: 'Syed Muhammad Ilyas book website',
    info: 'Author and Ebook website',
    info2: 'Tech stack: Wordpress, Elementor, WPForms Lite, Freenom, Woolementor, Woocomerce',
    url: 'http://smilyas.gq',
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
