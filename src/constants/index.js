import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Nextjs,
  C,
  Cpp,
  Python,
  Java,
  Angular,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  postgres,
  docker,
  FoxTrading,
  meta,
  JPMorgan,
  shopify,
  biblio,
  DUOStudio,
  jobit,
  tripguide,
  threejs,
  biblioVid,
  DUOStudioVid
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML 5",
      icon: html,
      percentage: 99,
    },
    {
      name: "CSS 3",
      icon: css,
      percentage: 97,
    },
    {
      name: "JavaScript",
      icon: javascript,
      percentage: 94,
    },
    {
      name: "TypeScript",
      icon: typescript,
      percentage: 30,
    },
    {
      name: "C",
      icon: C,
      percentage: "97",
    },
    {
      name: "C++",
      icon: Cpp,
      percentage: "97",
    },
    {
      name: "python",
      icon: Python,
      percentage: "92",
    },
    {
      name: "Java",
      icon: Java,
      percentage: "20",
    }
  ],
  tools_frameworks: [{
    name: "React JS",
    icon: reactjs,
    percentage: 90,
  },
  {
    name: "nextjs",
    icon: Nextjs,
    percentage: 20
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    percentage: 30,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    percentage: 94
  },
  {
    name: "Node JS",
    icon: nodejs,
    percentage: 95
  },
  {
    name: "MongoDB",
    icon: mongodb,
    percentage: 80
  },
  {
    name: "Three JS",
    icon: threejs,
    percentage: 60
  },
  {
    name: "git",
    icon: git,
    percentage: 94
  },
  {
    name: "postgres",
    icon: postgres,
    percentage: 97
  },
  {
    name: "docker",
    icon: docker,
    percentage: 60
  },
  {
    name: "angular",
    icon: Angular,
    percentage: 20,
  }],
  skills:[{
      name: "Data Structures & Algorithms",
      percentage: 50,
    },
    {
      name: "Web Developement & Design",
      percentage: 90,
    },
    {
      name: "Machine Learning, A.I & Data Science",
      percentage: 30,
    },
    {
      name: "Object-oriented programming",
      percentage: 85, 
    }
  ]
};

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Fox Trading",
    icon: FoxTrading,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
      "Mastered various machine learning algorithms, including linear regression, decision trees, and neural networks.",
      "Developed and trained predictive models, focusing on data preprocessing, feature engineering, and model evaluation.",
      "Created a bike-sharing model to predict bike ride availability in specific localities using historical and weather data.",
      "Deployed models into production, ensuring efficient code, optimized performance, and seamless integration with existing systems.",
    ],
  },
  {
    title: "Software Engineering Experience",
    company_name: "JPMorgan Chase & Co.",
    icon: JPMorgan,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Interfaced stock price data feed with JPMorgan Chase tools and frameworks like Perspective to display real-time stock data visually.",
      "Implemented the Perspective open source code in preparation for data visualisation",
      "Used Perspective to create a chart for a trading dashboard"
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Biblio",
    description:
      "Web-based platform that allows users to track and organise their reading habits through storing information about a book they read.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
    ],
    image: biblio,
    source_code_link: "https://github.com/ggps2002/BookManager",
    vid: biblioVid,
    liveURL: "https://mellifluous-kringle-12e9db.netlify.app"
  },
  {
    name: "DUO Studio",
    description:
      "DUO Studio is a showcase of modern web design and animation techniques. By leveraging GSAP and LocomotiveScroll, this project demonstrates how to create smooth and engaging animations that enhance user experience. The website is built with a focus on performance and visual appeal.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: DUOStudio,
    source_code_link: "https://github.com/ggps2002/DUOWebsite",
    vid: DUOStudioVid,
    liveURL: "https://courageous-cassata-ebe3b0.netlify.app"
  }
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };