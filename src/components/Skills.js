const Skills = () => {
    const skills = [
        {
            graphic: "./assets/images/skills/javascript.svg",
            title: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            id: 1,
        },
        {
            graphic: "./assets/images/skills/nodejs.svg",
            title: "Node.js",
            url: "https://nodejs.org/",
            id: 2,
        },
        {
            graphic: "./assets/images/skills/git.svg",
            title: "Git",
            url: "https://git-scm.com/",
            id: 3,
        },
        {
            graphic: "./assets/images/skills/react.svg",
            title: "React",
            url: "https://reactjs.org/",
            id: 4,
        },
        {
            graphic: "./assets/images/skills/agile-scrum.png",
            title: "Agile / Scrum",
            url: "https://agilemanifesto.org/",
            id: 5,
        },
        {
            graphic: "./assets/images/skills/mongodb.svg",
            title: "MongoDB",
            url: "https://www.mongodb.com/",
            id: 6,
        },
        {
            graphic: "./assets/images/skills/mysql.svg",
            title: "MySQL",
            url: "https://www.mysql.com/",
            id: 7,
        },
        {
            graphic: "./assets/images/skills/postman.svg",
            title: "Postman",
            url: "https://www.postman.com//",
            id: 8,
        },
        {
            graphic: "./assets/images/skills/rest-api.svg",
            title: "RESTful APIs",
            url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/",
            id: 9,
        },
        {
            graphic: "./assets/images/skills/expressjs.svg",
            title: "Express.js",
            url: "https://expressjs.com/",
            id: 10,
        },
        {
            graphic: "./assets/images/skills/chrome-dev-tools.svg",
            title: "Chrome Dev Tools",
            url: "https://developer.chrome.com/docs/devtools/",
            id: 11,
        },

        {
            graphic: "./assets/images/skills/jira.svg",
            title: "JIRA",
            url: "https://www.atlassian.com/software/jira",
            id: 12,
        },
        {
            graphic: "./assets/images/skills/html-5.svg",
            title: "HTML 5",
            url: "https://html.spec.whatwg.org/multipage/",
            id: 13,
        },
        {
            graphic: "./assets/images/skills/css-3.svg",
            title: "CSS 3",
            url: "https://www.w3.org/TR/css3-roadmap/",
            id: 14,
        },
        {
            graphic: "./assets/images/skills/visual-studio-code.svg",
            title: "VS Code",
            url: "https://code.visualstudio.com/",
            id: 15,
        },
        {
            graphic: "./assets/images/skills/csharp.svg",
            title: "C#",
            url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
            id: 16,
        },
        {
            graphic: "./assets/images/skills/dotnet.svg",
            title: ".NET Framework",
            url: "https://dotnet.microsoft.com/",
            id: 17,
        },
        {
            graphic: "./assets/images/skills/microsoft-sql-server.svg",
            title: "SQL Server",
            url: "https://www.microsoft.com/en-us/sql-server/",
            id: 18,
        },
        {
            graphic: "./assets/images/skills/visual-studio.svg",
            title: "Microsoft Visual Studio",
            url: "https://visualstudio.microsoft.com/",
            id: 19,
        },
        {
            graphic: "./assets/images/skills/jquery.svg",
            title: "jQuery",
            url: "https://jquery.com/",
            id: 20,
        },
        {
            graphic: "./assets/images/skills/atlassian.svg",
            title: "Atlassian Suite",
            url: "https://www.atlassian.com/",
            id: 21,
        },
        {
            graphic: "./assets/images/skills/servicenow.svg",
            title: "ServiceNow",
            url: "https://www.servicenow.com/",
            id: 22,
        },
        {
            graphic: "./assets/images/skills/bootstrap.svg",
            title: "Bootstrap",
            url: "https://jquery.com/",
            id: 23,
        },
        {
            graphic: "./assets/images/skills/bulma.svg",
            title: "Bulma",
            url: "https://bulma.io/",
            id: 24,
        },

        {
            graphic: "./assets/images/skills/wordpress.svg",
            title: "WordPress",
            url: "https://wordpress.com/",
            id: 25,
        },
        {
            graphic: "./assets/images/skills/selenium.svg",
            title: "Selenium",
            url: "https://www.selenium.dev/",
            id: 26,
        },

        {
            graphic: "./assets/images/skills/npm.svg",
            title: "Node Package Manager",
            url: "https://www.npmjs.com/",
            id: 27,
        },
        {
            graphic: "./assets/images/skills/heroku.svg",
            title: "Heroku",
            url: "https://heroku.com/",
            id: 28,
        },
        {
            graphic: "./assets/images/skills/sequelize.svg",
            title: "Sequelize ORM",
            url: "https://sequelize.org/",
            id: 29,
        },
        {
            graphic: "./assets/images/skills/mongoose.png",
            title: "Mongoose ORM",
            url: "https://mongoosejs.com/",
            id: 30,
        },
        {
            graphic: "./assets/images/skills/handlebars.svg",
            title: "Handlebars.js",
            url: "https://handlebarsjs.com/",
            id: 31,
        },
    ];
    const styles = {
        graphics: {
            height: "100px",
            width: "100px",
        },
    };
    return (
        <>
            <section class="separator-top">
                <div class="container mt-5 mb-1">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 text-md-center mobile-center">
                            <h2>
                                Skills and{" "}
                                <span class="font-weight-bold">
                                    Technologies
                                </span>
                            </h2>
                            <p>Never stop learning.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col partners align-items-center">
                            <div
                                class="owl-carousel"
                                data-items="[6,4,2]"
                                data-loop="true"
                                data-autoplay="true"
                            >
                                {skills.map((element) => (
                                    <div key={element.id}>
                                        <div class="logo">
                                            <img
                                                src={element.graphic}
                                                alt={element.title}
                                                style={styles.graphics}
                                            />
                                        </div>
                                        <div class="mt-3 text-muted">
                                            {element.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
