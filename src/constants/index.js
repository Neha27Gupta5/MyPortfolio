import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1,   responsive, react, fullstack,
  blog5,blog1,blog2,blog2half,blog3,blog4,
  flappy,flappy1,flappy2,
  weather, weather1,weather2,
  code1,code2,code3,
  gradient,gradient1,
  editor1,editor2,editor3,
 
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/neha-gupta-839497260',
    icon: linkedin,
    icon1: linkedin1,
  },
  // {
  //   id: 2,
  //   name: 'Facebook',
  //   url: 'https://www.facebook.com/linthantkhai',
  //   icon: facebook,
  //   icon1: facebook1,
  // },
  // {
  //   id: 3,
  //   name: 'Instagram',
  //   url: 'https://www.instagram.com/rhaegar_121',
  //   icon: instagram,
  //   icon1: instagram1,
  // },
  // {
  //   id: 4,
  //   name: 'Twitter',
  //   url: 'https://twitter.com/Rhaegar121',
  //   icon: twitter,
  //   icon1: twitter1,
  // },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/Neha27Gupta5',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',

  },
  // {
  //   stack: ['languages', 'all'],
  //   name: 'Python',
  //   icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
   
  // },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  // {
  //   stack: ['frameworks', 'all'],
  //   name: 'Redux Toolkit',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  // },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  // {
  //   stack: ['frameworks', 'all'],
  //   name: 'Tailwind CSS',
  //   icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  // },
  {
    stack: ['frameworks', 'all'],
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
 
  {
    stack: ['tools', 'all'],
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  // {
  //   stack: ['tools', 'all'],
  //   name: 'Docker',
  //   icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
  // },
  // {
  //   stack: ['tools', 'all'],
  //   name: 'Figma',
  //   icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  // },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Blog Haven',
    desc: 'The Blog Haven is a dynamic full-stack blogging platform where users can effortlessly explore a variety of blog posts, search by title or category, dive into detailed blog content, create and manage their own posts when logged in, edit or delete their content, and engage with others through likes and views. With features like category-based filtering, responsive design, and personalized user profiles, Blog Haven ensures a seamless and interactive blogging experience for everyone.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    img: blog2half,
    carousel: [blog1,blog2,blog3,blog4,blog5,blog2half],
    source_link: 'https://github.com/Neha27Gupta5/Blog-Haven',
    live_link: 'https://bloghaven.netlify.app/',
  },
  {
    id: 2,
    name: 'Weather WebApp',
   "desc": "The Weather App allows you to check the current weather conditions for any city by simply entering the  city name. It provides real-time updates, temperature, humidity, and other weather details. The app is intuitive and user-friendly, making it easy to get accurate weather information at your fingertips.",
   "tech": ["JavaScript", "HTML", "CSS", "OpenWeatherAPI"],
    img: weather2,
    carousel: [weather, weather1,weather2],
    source_link: 'https://github.com/Neha27Gupta5/WeatherWebApp',
    live_link: 'https://weather-webapp-one.vercel.app/',
  },
  {
    id: 3,
    name: 'Flappy Bird Game',
    "desc": "Flappy Bird is a web-based arcade game I developed where players control a bird navigating through pipes by tapping to make it flap. Built with React, JavaScript, and CSS, the game offers smooth animations, responsive controls, and a scoring system that tracks progress. It combines simplicity with a fun, challenging experience, providing players with hours of entertainment. ",
    "tech": ["React", "JavaScript", "CSS"],
    img: flappy,
    carousel: [flappy,flappy1,flappy2],
    source_link: 'https://github.com/Rhaegar121/TVshows_Box',
    live_link: 'https://flappy-glide.netlify.app',
  },
  {
    id: 4,
    name: 'QR Code Generator',
    desc: 'QR Code Generator is a web application that allows users to generate QR codes from links or text. The generated QR code can be downloaded as an image file. Built using React, Vite, and styled with modern CSS for a clean, user-friendly interface.',
    tech: ['React', 'Vite', 'react-qr-code', 'CSS'],
    img: code3,
    carousel: [code1,code2,code3],
    source_link: 'https://github.com/Rhaegar121/Metrics-Webapp',
    live_link: 'https://qrify-code-me.netlify.app/',
  },
  {
    id: 5,
    name: 'Gradient Generator',
    desc: 'The Random Gradient Generator is a fun web application where users can click a button to generate random color gradients. Each click creates a new gradient with random colors, making it easy to experiment with different gradient combinations for web design or personal projects.',
    tech: ['React'],
    img: gradient,  
    carousel: [gradient,gradient1], 
    source_link: 'https://github.com/yourusername/random-gradient-generator',  
    live_link: 'https://gradient-generation.netlify.app',
  },
  {
    id: 6,
    name: 'Code Editor',
    desc: 'A simple code editor built with HTML, CSS, and JavaScript that allows users to write, edit, copy, download code, and see real-time results in the browser. It features basic syntax highlighting and a seamless user experience',
    tech: ['HTML','CSS','JavaScript'],
    img: editor1,  
    carousel: [editor1,editor2,editor3], 
    source_link: 'https://github.com/Neha27Gupta5/Code-Editor',  
    live_link: 'https://mycode-editor-html-css-js.netlify.app/',
  },

];

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hasan Rony',
    image: 'https://avatars.githubusercontent.com/u/77187003?v=4',
    text: 'I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.',
    country: 'India',
    linkedIn: 'https://www.linkedin.com/in/ahroniy/',
  },
  {
    id: 2,
    name: 'Rachel Isaac',
    image: 'https://media.licdn.com/dms/image/D4D35AQHOKsZ2nSaTjg/profile-framedphoto-shrink_400_400/0/1665541124692?e=1721469600&v=beta&t=Evk76YZRsti88Lyr1khjrlxcZKF8v2hrbA3G7YLhIz4',
    text: "Throughout our collaboration, I was consistently impressed by Barry's professionalism, attention to detail, and ability to adapt to changing requirements.",
    country: 'United Arab Emirates',
    linkedIn: 'https://www.linkedin.com/in/racheleno/',
  },
  {
    id: 3,
    name: 'Muhammad Talha Hanif',
    image: 'https://media.licdn.com/dms/image/D4D03AQF6A-cET7akGQ/profile-displayphoto-shrink_400_400/0/1687861230806?e=1726099200&v=beta&t=C1jrASsQ8AXgmkVrndSBMyBfh7eTBQ_pe2VG79FSNN0',
    text: 'He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.',
    country: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/muhammad-talha-hanif/',
  },
  {
    id: 4,
    name: 'Jerome Osman',
    image: 'https://media.licdn.com/dms/image/D4D03AQE1F2tqE5cttw/profile-displayphoto-shrink_400_400/0/1694205105262?e=1726099200&v=beta&t=TYftRu2dWsY-5eUgZSsorbbURiQMGtGVOcmcJeDrsGQ',
    text: 'His kindness and patience with his peers makes him easy to work with no matter the difficulty, and that reflects as well when it comes to helping others in his team or explaining something when need be',
    country: 'South Africa',
    linkedIn: 'https://www.linkedin.com/in/jerome-osman/',
  },
  {
    id: 5,
    name: 'Innocent N.',
    image: 'https://media.licdn.com/dms/image/D5603AQE1qYMUswBOAw/profile-displayphoto-shrink_400_400/0/1688151359384?e=1726099200&v=beta&t=rkHvuiSC9ww8BOxUhz2cqpIdzAoW6ZUEWbJDQW5W5OU',
    text: 'Communication was another strength that Barry brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.',
    country: 'Rwanda',
    linkedIn: 'https://www.linkedin.com/in/innocent-n/',
  },
  {
    id: 6,
    name: 'Marko Kermichiev',
    image: 'https://avatars.githubusercontent.com/u/112749658?v=4',
    text: 'I learned too much from you and I can say that you are fantastic developer. Working with you is always a pleasure, hope that we can work on some project asap.',
    country: 'Macedonia',
    linkedIn: 'https://www.linkedin.com/in/marko-kermichiev/',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  // {
  //   id: 4,
  //   name: 'Testimonial',
  //   url: '/#testimonial',
  // },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
