export const mockContactInfo = {
  name: "Marco",
  surname: "Dispoto",
  jobTitle: "Jr. Front-End Developer",
  birthDate: {
    value: "25 febbraio 1993",
    icon: "faCakeCandles",
    showValue: "25 febbraio 1993",
    wrapElement: "div",
    action: null,
  },
  city: {
    value: "Bari",
    showValue: "Bari",
    icon: "faCity",
    wrapElement: "div",
    action: null,
  },
  email: {
    value: "dispotomarco@gmail.com",
    showValue: "dispotomarco@gmail.com",
    icon: "faEnvelope",
    wrapElement: "a",
    action: "mailto",
  },
  phone: {
    value: "+393807056476",
    showValue: "+39 380 70 56 476",
    icon: "faPhone",
    wrapElement: "a",
    action: "tel",
  },
  language: {
    it: {
      level: "Mother tongue",
      flag: "it",
      altText: "italian flag",
    },
    en: {
      level: "B2.2",
      flag: "gb",
      altText: "uk flag",
    },
  },
  personalInfo:
    "I'm a web developer with 2+ years of experience in web-app development. I'm quite curious and dynamic,and I'd like to specialize in front-end development. In the last couple of months I have had the opportunity to get to know and use ReactJS with RTK, Styled-Components and TailwindCSS but I also have a good grasp on Bootstrap.",
  professionalExp: [
    {
      title: "Web Developer",
      employer: "The Digital Box S.p.A.",
      fromTo: "09/2020 - current",
      responsibilities: [
        "Tasks in Front-end web applications, using ReactJS and Redux Toolkit, RxJS, Styled-components and TailwindCSS; full translation of a mock-up in a component-based UI.",
        "Tasks in NodeJS applications based on Fastify, MongoDB.",
        "Tasks on the legacy platform codebase: PHP, MySQL, JS (ES5) and jQuery, Bootstrap.",
      ],
    },
    {
      title: "Freelance Web Developer",
      employer: "Murex B&B",
      fromTo: "04-2021",
      responsibilities: [
        "Website development: HTML, CSS and JS. Use of PHP for a small admin panel.", // add link ?
      ],
    },
    {
      title: "IT Technician",
      employer: "CSC SRL - Automotive spare parts distribution",
      fromTo: "01/2016 - 08/2020",
      responsibilities: [
        "Development of a web scraper using Python and Selenium Webdriver",
        "Analysis and development of scripts to support the ERP",
      ],
    },
  ],
  skills: [
    "Components oriented UI development (ReactJS, TailwindCSS, Styled-Components)",
    "Basic knowledge of Redux Toolkit",
    "Basic knowledge of RxJS",
    "OOP development (Typescript, PHP)",
    "Knowledge of GIT",
    "Basic knowledge of NodeJS, Fastify and Express",
    "Knowledge of MySQL and MongoDB",
    "Basic knowledge of Java and Python",
  ],
  courses: [
    {
      school: "Cisco CCNA Discovery: Networking for Home and Small Business",
      date: "04/2012 - 06/2012",
    },
    {
      school: "ISIS Greenwich (London, UK)",
      date: "11/2011 - 12/2011",
      description:
        "Level 1 Certificate in ESOL International (Speaking and Listening) B2.2 of the CEFR",
    },
  ],
  education: [
    {
      school: "Aulab - Coding Bootcamp",
      date: "05-2020 - 08/2020",
      description:
        "Full Stack Development: focus on HTML, CSS, Bootstrap, PHP and Laravel.",
    },
    {
      school: "Università degli Studi di Bari Aldo Moro",
      date: "10/2012 - current",
      description: "Computer Science",
    },
    {
      school: "Istituto Tecnico Industriale Guglielmo Marconi",
      date: "09/2007 - 07/2012",
      description: "High school diploma in IT (100/100)",
    },
  ],
};
