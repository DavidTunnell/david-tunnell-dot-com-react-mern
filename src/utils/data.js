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

const portfolio = [
    {
        id: 1,
        image: "./assets/images/portfolio/feedster.jpg",
        title: "Feedster",
        gitHubUrl:
            "https://github.com/DavidTunnell/feedster-content-containerizer-twitter-api-node-express-mysql-handlebars-sequelize-mvc-fullstack",
        demoUrl: "http://feedster-twitter.herokuapp.com/",
        details: "test",
    },
    {
        id: 2,
        image: "./assets/images/portfolio/cool-tech-blog.jpg",
        title: "Cool Tech Blog",
        gitHubUrl:
            "https://github.com/DavidTunnell/tech-blog-fullstack-mvc-node-express-mysql-handlebars-authentication",
        demoUrl: "https://mighty-earth-36141.herokuapp.com/",
        details: "test",
    },
    {
        id: 3,
        image: "./assets/images/portfolio/discogra.jpg",
        title: "Discogra: Music Finder",
        gitHubUrl:
            "https://github.com/DavidTunnell/music-discography-multiple-third-party-apis",
        demoUrl:
            "https://davidtunnell.github.io/music-discography-multiple-third-party-apis/",
        details: "test",
    },
    {
        id: 4,
        image: "./assets/images/portfolio/previous-portfolio.jpg",
        title: "My Previous Web Portfolio",
        gitHubUrl: "https://github.com/DavidTunnell/my-web-portfolio",
        demoUrl: "https://david-tunnell-web-portfolio-v1.herokuapp.com/",
        details: "test",
    },
    {
        id: 5,
        image: "./assets/images/portfolio/david-tunnell-dot-com.jpg",
        title: "DavidTunnell.com",
        gitHubUrl:
            "https://github.com/DavidTunnell/david-tunnell-dot-com-react-mern",
        demoUrl: "https://www.davidtunnell.com/",
        details: "test",
    },
    {
        id: 6,
        image: "./assets/images/portfolio/microblog.jpg",
        title: "Microblog",
        gitHubUrl:
            "https://github.com/DavidTunnell/microblog-react-router-mongodb-mongoose-node-express",
        demoUrl: "https://sheltered-river-02202.herokuapp.com/",
        details: "test",
    },
    {
        id: 7,
        image: "./assets/images/portfolio/gerimed.jpg",
        title: "GeriMed",
        gitHubUrl: null,
        demoUrl: "https://www.gerimedgso.com/pharmacy-type/ltc-pharmacies/",
        details: "test",
    },
    {
        id: 8,
        image: "./assets/images/portfolio/ts-inc.jpg",
        title: "Transfer Solutions",
        gitHubUrl: null,
        demoUrl: "https://ts-inc.com/",
        details: "test",
    },
    {
        id: 9,
        image: "./assets/images/portfolio/zachry-group.jpg",
        title: "Zachry Group",
        gitHubUrl: null,
        demoUrl: "https://zachrygroup.com/",
        details: "test",
    },
    {
        id: 10,
        image: "./assets/images/portfolio/lmi.jpg",
        title: "LMI",
        gitHubUrl: null,
        demoUrl: "https://www.lmi.org/",
        details: "test",
    },
    {
        id: 11,
        image: "./assets/images/portfolio/hintd.jpg",
        title: "Hintd",
        gitHubUrl: null,
        demoUrl: "https://hinted.com/",
        details: "test",
    },
    {
        id: 12,
        image: "./assets/images/portfolio/smart.jpg",
        title: "SMART DoD Scholarships",
        gitHubUrl: null,
        demoUrl: "https://www.smartscholarship.org/smart",
        details: "test",
    },
];

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
];

export { skills, carrouselCards, portfolio, badges };
