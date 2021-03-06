//data for skill component
const skills = [
    {
        graphic: "./assets/images/skills/sequelize.svg",
        title: "Sequelize ORM",
        url: "https://sequelize.org/",
        id: 1,
    },
    {
        graphic: "./assets/images/skills/mongoose.png",
        title: "Mongoose ORM",
        url: "https://mongoosejs.com/",
        id: 2,
    },
    {
        graphic: "./assets/images/skills/javascript.svg",
        title: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        id: 3,
    },
    {
        graphic: "./assets/images/skills/nodejs.svg",
        title: "Node.js",
        url: "https://nodejs.org/",
        id: 4,
    },
    {
        graphic: "./assets/images/skills/git.svg",
        title: "Git",
        url: "https://git-scm.com/",
        id: 5,
    },
    {
        graphic: "./assets/images/skills/react.svg",
        title: "React",
        url: "https://reactjs.org/",
        id: 6,
    },
    {
        graphic: "./assets/images/skills/agile-scrum.png",
        title: "Agile / Scrum",
        url: "https://agilemanifesto.org/",
        id: 7,
    },
    {
        graphic: "./assets/images/skills/mongodb.svg",
        title: "MongoDB",
        url: "https://www.mongodb.com/",
        id: 8,
    },
    {
        graphic: "./assets/images/skills/mysql.svg",
        title: "MySQL",
        url: "https://www.mysql.com/",
        id: 9,
    },
    {
        graphic: "./assets/images/skills/postman.svg",
        title: "Postman",
        url: "https://www.postman.com//",
        id: 10,
    },
    {
        graphic: "./assets/images/skills/rest-api.svg",
        title: "RESTful APIs",
        url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/",
        id: 11,
    },
    {
        graphic: "./assets/images/skills/expressjs.svg",
        title: "Express.js",
        url: "https://expressjs.com/",
        id: 12,
    },
    {
        graphic: "./assets/images/skills/chrome-dev-tools.svg",
        title: "Chrome Dev Tools",
        url: "https://developer.chrome.com/docs/devtools/",
        id: 13,
    },

    {
        graphic: "./assets/images/skills/jira.svg",
        title: "JIRA",
        url: "https://www.atlassian.com/software/jira",
        id: 14,
    },
    {
        graphic: "./assets/images/skills/html-5.svg",
        title: "HTML 5",
        url: "https://html.spec.whatwg.org/multipage/",
        id: 15,
    },
    {
        graphic: "./assets/images/skills/css-3.svg",
        title: "CSS 3",
        url: "https://www.w3.org/TR/css3-roadmap/",
        id: 16,
    },
    {
        graphic: "./assets/images/skills/visual-studio-code.svg",
        title: "VS Code",
        url: "https://code.visualstudio.com/",
        id: 17,
    },
    {
        graphic: "./assets/images/skills/csharp.svg",
        title: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        id: 18,
    },
    {
        graphic: "./assets/images/skills/dotnet.svg",
        title: ".NET Framework",
        url: "https://dotnet.microsoft.com/",
        id: 19,
    },
    {
        graphic: "./assets/images/skills/microsoft-sql-server.svg",
        title: "SQL Server",
        url: "https://www.microsoft.com/en-us/sql-server/",
        id: 20,
    },
    {
        graphic: "./assets/images/skills/visual-studio.svg",
        title: "Microsoft Visual Studio",
        url: "https://visualstudio.microsoft.com/",
        id: 21,
    },
    {
        graphic: "./assets/images/skills/jquery.svg",
        title: "jQuery",
        url: "https://jquery.com/",
        id: 22,
    },
    {
        graphic: "./assets/images/skills/atlassian.svg",
        title: "Atlassian Suite",
        url: "https://www.atlassian.com/",
        id: 23,
    },
    {
        graphic: "./assets/images/skills/servicenow.svg",
        title: "ServiceNow",
        url: "https://www.servicenow.com/",
        id: 24,
    },
    {
        graphic: "./assets/images/skills/bootstrap.svg",
        title: "Bootstrap",
        url: "https://jquery.com/",
        id: 25,
    },
    {
        graphic: "./assets/images/skills/bulma.svg",
        title: "Bulma",
        url: "https://bulma.io/",
        id: 26,
    },

    {
        graphic: "./assets/images/skills/wordpress.svg",
        title: "WordPress",
        url: "https://wordpress.com/",
        id: 27,
    },
    {
        graphic: "./assets/images/skills/selenium.svg",
        title: "Selenium",
        url: "https://www.selenium.dev/",
        id: 28,
    },

    {
        graphic: "./assets/images/skills/npm.svg",
        title: "Node Package Manager",
        url: "https://www.npmjs.com/",
        id: 29,
    },
    {
        graphic: "./assets/images/skills/heroku.svg",
        title: "Heroku",
        url: "https://heroku.com/",
        id: 30,
    },
    {
        graphic: "./assets/images/skills/handlebars.svg",
        title: "Handlebars.js",
        url: "https://handlebarsjs.com/",
        id: 31,
    },
];

//data for portfolio cards and modals
const portfolio = [
    // {
    //     id: 1,
    //     openSource: true,
    //     image: "./assets/images/portfolio/upstudy.io.jpg",
    //     modalImage: "./assets/images/portfolio/upstudy.io.jpg",
    //     title: "Upstudy.io",
    //     techSkills: [1, 2, 3, 4, 5, 6, 13, 21, 27, 31, 35, 39, 40],
    //     details:
    //         "Upstudy is a new way to find relevant learning content by allowing the highest quality material for any subject rise to the top. Currently, there are many different places to look when searching for study material on a particular topic. You might find results at YouTube, Khan Academy or Stack Overflow but which is the best place to spend your time learning? Upstudy allows users to delve into specific study topics and be presented with the top content links as voted by the community as well as meta discussions and moderation on the study topic.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/upstudy-fullstack-react-redux-graphql-apollo-server-node-express-mongodb",
    //     demoUrl: "https://upstudy.herokuapp.com/",
    //     disclaimer:
    //         "I am actively developing this app and the demo server is updated and tested on.",
    //     companyUrl: null,
    // },
    {
        id: 3,
        openSource: false,
        image: "./assets/images/portfolio/lmi.jpg",
        modalImage: "./assets/images/portfolio/lmi.jpg",
        title: "LMI IT Projects",
        techSkills: [24, 25, 28, 29, 30, 31, 32],
        details:
            "I manage a team of 13 people and multi-million dollar budget to deliver complex software solutions and system integrations utilizing critical platforms as the ServiceNow Platform Lead that the organization as a whole relies on every day to complete work. To do this I continually motivated a diverse group of individuals while pursing relentless improvement and managing the needs of the all of the departments within the organization. This requires the need to make design and technical decisions with my team and delegating who is responsible for the implementation.",
        gitHubUrl: null,
        demoUrl: null,
        disclaimer:
            "The software I worked on is proprietary so links to the source code and demo is not available.",
        companyUrl: "https://www.lmi.org/",
    },
    // {
    //     id: 4,
    //     openSource: true,
    //     image: "./assets/images/portfolio/feedster.jpg",
    //     modalImage: "./assets/images/portfolio/feedster.jpg",
    //     title: "Feedster",
    //     techSkills: [1, 3, 4, 5, 6, 16, 18, 20, 22, 23, 24, 27, 31, 34, 35],
    //     details:
    //         "A Twitter content containerizer. Create an account and build custom feeds out of their favorite Twitter users. These feeds can be shared (links), followed and experienced as a group using the comment section. This creates a new way to experience any interest, from a live sporting event to your favorite personalities or any other subject.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/feedster-content-containerizer-twitter-api-node-express-mysql-handlebars-sequelize-mvc-fullstack",
    //     demoUrl: "http://feedster-twitter.herokuapp.com/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },
    // {
    //     id: 2,
    //     openSource: true,
    //     image: "./assets/images/portfolio/david-tunnell-dot-com.jpg",
    //     modalImage: "./assets/images/portfolio/david-tunnell-dot-com.jpg",
    //     title: "DavidTunnell.com",
    //     techSkills: [1, 2, 3, 4, 5, 6, 13, 17, 21, 23, 27, 31, 34, 35],
    //     details:
    //         "The new iteration of my web portfolio/presence build with a React front-end. The goal is to highlight my experience, projects and capabilities. There is a connection to the Google Maps API to provide location information. The server is used to serve the React application, provide an API that talks to a MongoDB instance for data persistence and send emails when the form is submitted.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/david-tunnell-dot-com-react-mern",
    //     demoUrl: "https://www.davidtunnell.com/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },

    {
        id: 5,
        openSource: false,
        image: "./assets/images/portfolio/smart.jpg",
        modalImage: "./assets/images/portfolio/smart.jpg",
        title: "SMART DoD Scholarships",
        techSkills: [7, 19, 25, 28, 29, 30, 32, 33],
        details:
            "The SMART Program provides STEM students with the tools needed to pursue higher education with a full scholarship and begin a career with the DoD. Helped turn around the project from a difficult situation. Developed Unit Tests, Page Object Models (XPath), and Gherkin based step automation using a proprietary .NET based automation testing framework build with NUnit, Selenium, and SpecFlow, coded in C#. Participated as a critical part of a fully Agile SCRUM team in all ceremonies. Hands on ServiceNow testing experience building manual test cases for complex requirements.",
        gitHubUrl: null,
        demoUrl: "https://www.smartscholarship.org/smart",
        disclaimer:
            "The software I worked on is proprietary so a link to the source code is not available. The official site contains the app I worked on, although much of the functionality is behind authentication.",
        companyUrl: "https://www.smartscholarship.org/smart",
    },
    // {
    //     id: 8,
    //     openSource: true,
    //     image: "./assets/images/portfolio/discogra.jpg",
    //     modalImage: "./assets/images/portfolio/discogra.jpg",
    //     title: "Discogra: Music Finder",
    //     techSkills: [1, 5, 6, 18, 23, 27, 31],
    //     details:
    //         "A tool using the Discogs.com API and the YouTube API to help users find music they are interested in. Renders dynamic results based on user input. Utilizes local storage to store persistent user data such as saving of users input and data including genres related to searches and previous search history.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/music-discography-multiple-third-party-apis",
    //     demoUrl:
    //         "https://davidtunnell.github.io/music-discography-multiple-third-party-apis/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },

    // {
    //     id: 7,
    //     openSource: true,
    //     image: "./assets/images/portfolio/microblog.jpg",
    //     modalImage: "./assets/images/portfolio/microblog.jpg",
    //     title: "Microblog",
    //     techSkills: [1, 2, 3, 4, 5, 6, 13, 21, 23, 24, 27, 34, 35],
    //     details:
    //         "A fullstack MERN app that allows for submitting, as might be expected, microblog posts. It was based on the 'Full Modern React YouTube Tutorial' and then modified to replace the json-server pseudo-database to a full MongoDB. Thus it has it's own node server. React-Router-Dom is used for URL routing, URL parameters, browser history stack usage, and linking without calling the server.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/microblog-react-router-mongodb-mongoose-node-express",
    //     demoUrl: "https://sheltered-river-02202.herokuapp.com/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },

    {
        id: 9,
        openSource: false,
        image: "./assets/images/portfolio/hintd.jpg",
        modalImage: "./assets/images/portfolio/hintd.jpg",
        title: "Hinted",
        techSkills: [1, 5, 6, 8, 9, 12, 13, 16, 29],
        details:
            "A place where you can create lists of what you want to buy and discover what???s new and trending. Every day, you???ll discover new, exciting things on Hinted from curators, influencers, and most importantly, your friends. Worked as part of a remote professional team building out new functionality and fixing bugs as quested by the client via JIRA Kanban. Quickly picked up a new framework (Laravel) and provided meaningful contributions to the project quickly as a contractor.",
        gitHubUrl: null,
        demoUrl: "https://hinted.com/",
        disclaimer:
            "The software I worked on is proprietary so a link to the source code is not available. The official site contains the app I worked on.",
        companyUrl: "https://hinted.com/",
    },
    // {
    //     id: 6,
    //     openSource: true,
    //     image: "/assets/images/portfolio/cool-tech-blog.jpg",
    //     modalImage: "/assets/images/portfolio/cool-tech-blog.jpg",
    //     title: "Cool Tech Blog",
    //     techSkills: [1, 3, 4, 5, 6, 16, 18, 20, 22, 23, 24, 27, 34, 35],
    //     details:
    //         "A fullstack MVC tech blog. The project has dashboard to create, read, update and delete blog posts for the admin. Individual pages for users to create accounts, login and logout using the site using authentication and session management. The ability for users comment on blog posts and for admins to delete them.",
    //     gitHubUrl:
    //         "https://github.com/DavidTunnell/tech-blog-fullstack-mvc-node-express-mysql-handlebars-authentication",
    //     demoUrl: "https://mighty-earth-36141.herokuapp.com/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },
    // {
    //     id: 10,
    //     openSource: true,
    //     image: "./assets/images/portfolio/previous-portfolio.jpg",
    //     modalImage: "./assets/images/portfolio/previous-portfolio.jpg",
    //     title: "My Previous Web Portfolio",
    //     techSkills: [1, 3, 4, 5, 6, 23, 27],
    //     details:
    //         "The previous iteration of my web portfolio. It has a Node.js/Express.js server to serve the index.html and associated files (which is vanilla JS/HTML/CSS) and to have an API call that allows for emails to be sent via the form via gmail servers using Nodemailer.",
    //     gitHubUrl: "https://github.com/DavidTunnell/my-web-portfolio",
    //     demoUrl: "https://david-tunnell-web-portfolio-v1.herokuapp.com/",
    //     disclaimer: null,
    //     companyUrl: null,
    // },
    {
        id: 11,
        openSource: false,
        image: "./assets/images/portfolio/gerimed.jpg",
        modalImage: "./assets/images/portfolio/gerimed.jpg",
        title: "GeriMed",
        techSkills: [1, 5, 6, 7, 12, 14, 24, 35, 36, 37, 38],
        details:
            "A group purchasing content management system for long term care pharmacies to manage and purchase perceptions for their clients. I was part of a fully remote professional team building new features and fixing bugs using a Kanban style workflow.",
        gitHubUrl: null,
        demoUrl: null,
        disclaimer:
            "The software I worked on is proprietary so links to the source code and demo is not available.",
        companyUrl: "https://www.gerimedgso.com/pharmacy-type/ltc-pharmacies/",
    },
    {
        id: 12,
        openSource: false,
        image: "./assets/images/portfolio/ts-inc.jpg",
        modalImage: "./assets/images/portfolio/ts-inc.jpg",
        title: "Visual Fast Mutual Fund Software",
        techSkills: [7, 11, 14, 38],
        details:
            "A  powerful, scalable, flexible and cost effective transfer agency system that reduces shareholder servicing costs, increases servicing capabilities, and simplifies integration and customization. I worked with the founder to enhance the platform with new functionality requested by clients.",
        gitHubUrl: null,
        demoUrl: null,
        disclaimer:
            "The software I worked on is proprietary so links to the source code and demo is not available.",
        companyUrl: "https://ts-inc.com/",
    },
    {
        id: 13,
        openSource: false,
        image: "./assets/images/portfolio/zachry-group.jpg",
        modalImage: "./assets/images/portfolio/zachry-group.jpg",
        title: "Zachry Group IT Projects",
        techSkills: [1, 5, 6, 7, 8, 10, 12, 14, 15, 26, 30, 32, 35, 38],
        details:
            "My intern project was adopted as the project timekeeping system for the IT Department. It integrated with historical software records via SOAP protocol. I was the lead developer on a mobile Windows Surface app to keep track of industrial plant construction progress in locations without reliable internet connection. I maintained all of the corporate WordPress sites and worked with clients to add features and updates.",
        gitHubUrl: null,
        demoUrl: null,
        disclaimer:
            "The software I worked on is proprietary so links to the source code and demo is not available.",
        companyUrl: "https://zachrygroup.com/",
    },
];

//placeholder data for carrousel component
const carrouselCards = [
    {
        image: "./assets/images/carrousel/travel-1.jpg",
        title: "1",
        flavor: "test",
        topRight: "other test",
        id: 1,
    },
    {
        image: "./assets/images/carrousel/travel-2.jpg",
        title: "2",
        flavor: "test",
        topRight: "other test",
        id: 2,
    },
    {
        image: "./assets/images/carrousel/travel-3.jpg",
        title: "3",
        flavor: "test",
        topRight: "other test",
        id: 3,
    },
    {
        image: "./assets/images/carrousel/travel-4.jpg",
        title: "4",
        flavor: "test",
        topRight: "other test",
        id: 4,
    },
    {
        image: "./assets/images/carrousel/travel-5.jpg",
        title: "5",
        flavor: "test",
        topRight: "other test",
        id: 5,
    },
    {
        image: "./assets/images/carrousel/travel-6.jpg",
        title: "6",
        flavor: "test",
        topRight: "other test",
        id: 6,
    },
];

//portfolio tech/skill badge details for modals
const badges = [
    {
        id: 1,
        name: "JavaScript",
        bgColor: "#F0DB4F",
        textColor: "#000000",
    },
    {
        id: 2,
        name: "React",
        bgColor: "#61DBFB",
        textColor: "#000000",
    },
    {
        id: 3,
        name: "Node.js",
        bgColor: "#68A063",
        textColor: "#FFFFFF",
    },
    {
        id: 4,
        name: "Express.js",
        bgColor: "#828282",
        textColor: "#FFFFFF",
    },
    {
        id: 5,
        name: "HTML",
        bgColor: "#f06529",
        textColor: "#FFFFFF",
    },
    {
        id: 6,
        name: "CSS",
        bgColor: "#2965f1",
        textColor: "#FFFFFF",
    },
    {
        id: 7,
        name: "C#",
        bgColor: "#539a39",
        textColor: "#FFFFFF",
    },
    {
        id: 8,
        name: "PHP",
        bgColor: "#7074a6",
        textColor: "#FFFFFF",
    },
    {
        id: 9,
        name: "Laravel",
        bgColor: "#df482c",
        textColor: "#FFFFFF",
    },
    {
        id: 10,
        name: "Java",
        bgColor: "#5d81a0",
        textColor: "#FFFFFF",
    },
    {
        id: 11,
        name: "VBA Scripting",
        bgColor: "#8a347f",
        textColor: "#FFFFFF",
    },
    {
        id: 12,
        name: "jQuery",
        bgColor: "#2a619e",
        textColor: "#FFFFFF",
    },
    {
        id: 13,
        name: "MongoDB",
        bgColor: "#3FA037",
        textColor: "#FFFFFF",
    },
    {
        id: 14,
        name: "SQL Server",
        bgColor: "#c33d2c",
        textColor: "#FFFFFF",
    },
    {
        id: 15,
        name: "SQLite",
        bgColor: "#7fbae6",
        textColor: "#FFFFFF",
    },
    {
        id: 16,
        name: "MySQL",
        bgColor: "#00758F",
        textColor: "#FFFFFF",
    },
    {
        id: 17,
        name: "Bootstrap CSS",
        bgColor: "#523f79",
        textColor: "#FFFFFF",
    },
    {
        id: 18,
        name: "Bulma CSS",
        bgColor: "#5dccb3",
        textColor: "#000000",
    },
    {
        id: 19,
        name: "Selenium",
        bgColor: "#57ad42",
        textColor: "#FFFFFF",
    },
    {
        id: 20,
        name: "Handlebars.js",
        bgColor: "#e68735",
        textColor: "#FFFFFF",
    },
    {
        id: 21,
        name: "Mongoose ORM",
        bgColor: "#7d1c0a",
        textColor: "#FFFFFF",
    },
    {
        id: 22,
        name: "Sequelize ORM",
        bgColor: "#4daceb",
        textColor: "#FFFFFF",
    },
    {
        id: 23,
        name: "Postman",
        bgColor: "#ee7843",
        textColor: "#FFFFFF",
    },
    {
        id: 24,
        name: "RESTful API",
        bgColor: "#57aad4",
        textColor: "#FFFFFF",
    },
    {
        id: 25,
        name: "ServiceNow",
        bgColor: "#8cb3a2",
        textColor: "#FFFFFF",
    },
    {
        id: 26,
        name: "WordPress",
        bgColor: "#454342",
        textColor: "#FFFFFF",
    },

    {
        id: 27,
        name: "Git",
        bgColor: "#ce5a3d",
        textColor: "#FFFFFF",
    },
    {
        id: 28,
        name: "Atlassian Suite",
        bgColor: "#417ff9",
        textColor: "#FFFFFF",
    },
    {
        id: 29,
        name: "JIRA",
        bgColor: "#417ff9",
        textColor: "#FFFFFF",
    },
    {
        id: 30,
        name: "System Integration",
        bgColor: "#102678",
        textColor: "#FFFFFF",
    },
    {
        id: 31,
        name: "Third Party APIs",
        bgColor: "#cbe1f5",
        textColor: "#000000",
    },
    {
        id: 32,
        name: "Agile / Scrum",
        bgColor: "#6bb7d1",
        textColor: "#FFFFFF",
    },
    {
        id: 33,
        name: "SDET",
        bgColor: "#c93c2d",
        textColor: "#FFFFFF",
    },
    {
        id: 34,
        name: "MVC",
        bgColor: "#f3af32",
        textColor: "#FFFFFF",
    },
    {
        id: 35,
        name: "Fullstack",
        bgColor: "#f94144",
        textColor: "#FFFFFF",
    },
    {
        id: 36,
        name: "AngularJS",
        bgColor: "#e22f35",
        textColor: "#FFFFFF",
    },
    {
        id: 37,
        name: "ASP.NET MVC",
        bgColor: "#0a72bb",
        textColor: "#FFFFFF",
    },
    {
        id: 38,
        name: ".NET Framework",
        bgColor: "#663f94",
        textColor: "#FFFFFF",
    },
    {
        id: 39,
        name: "Redux",
        bgColor: "#764abc",
        textColor: "#FFFFFF",
    },
    {
        id: 40,
        name: "GraphQL",
        bgColor: "#e00397",
        textColor: "#FFFFFF",
    },
];

export { skills, carrouselCards, portfolio, badges };
