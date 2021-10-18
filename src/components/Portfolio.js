const Portfolio = () => {
    const portfolio = [
        {
            image: "./assets/images/travel-1.jpg",
            title: "1",
            flavor: "test",
            topRight: "other test",
            id: 1,
        },
        {
            image: "./assets/images/travel-2.jpg",
            title: "2",
            flavor: "test",
            topRight: "other test",
            id: 2,
        },
        {
            image: "./assets/images/travel-3.jpg",
            title: "3",
            flavor: "test",
            topRight: "other test",
            id: 3,
        },
        {
            image: "./assets/images/travel-4.jpg",
            title: "4",
            flavor: "test",
            topRight: "other test",
            id: 4,
        },
        {
            image: "./assets/images/travel-5.jpg",
            title: "5",
            flavor: "test",
            topRight: "other test",
            id: 5,
        },
        {
            image: "./assets/images/travel-6.jpg",
            title: "6",
            flavor: "test",
            topRight: "other test",
            id: 6,
        },
    ];
    const styles = {
        preventRunoff: { overflow: "hidden" },
    };
    return (
        <>
            <section
                className="section-decorated-bottom pt-0"
                style={styles.preventRunoff}
            >
                {/* <div className="decorated-bottom text-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 40"
                        preserveAspectRatio="none"
                    >
                        <path d="">
                            <animate
                                attributeName="d"
                                begin="0s"
                                dur="5s"
                                repeatCount="indefinite"
                                values="
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;
              M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z;
              M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z;
              M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"
                            ></animate>
                        </path>
                    </svg>
                </div> */}
                <div className="container">
                    <div
                        className="row"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <div className="col">
                            <div
                                className="owl-carousel visible"
                                data-items="[3,2,1]"
                                data-margin="20"
                                data-dots="true"
                                data-loop="true"
                                data-center="true"
                            >
                                {portfolio.map((element) => (
                                    <article
                                        className="tile tile-long"
                                        key={element.id}
                                    >
                                        <div
                                            className="tile-image"
                                            style={{
                                                backgroundImage: `url(${element.image})`,
                                            }}
                                        ></div>
                                        <a href="/" className="tile-content">
                                            <div className="tile-header on-hover text-right">
                                                <h4 className="fs-30 text-white">
                                                    {element.topRight}
                                                </h4>
                                            </div>
                                            <div className="tile-footer">
                                                <span className="eyebrow">
                                                    {element.flavor}
                                                </span>
                                                <h3>{element.title}</h3>
                                            </div>
                                        </a>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
