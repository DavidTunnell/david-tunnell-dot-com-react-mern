const PortfolioAlt = () => {
    const portfolio = [
        {
            image: "./assets/images/app.jpg",
            title: "App",
            id: 1,
        },
        {
            image: "./assets/images/service.jpg",
            title: "Service",
            id: 2,
        },
        {
            image: "./assets/images/coworking.jpg",
            title: "Coworking",
            id: 3,
        },
        {
            image: "./assets/images/event.jpg",
            title: "Event",
            id: 4,
        },
        {
            image: "./assets/images/fitness.jpg",
            title: "Fitness",
            id: 5,
        },
        {
            image: "./assets/images/hotel.jpg",
            title: "Hotel",
            id: 6,
        },
    ];
    const styles = {
        sectionPadding: {
            padding: "7em",
        },
    };
    return (
        <>
            <section className="bg-white" style={styles.sectionPadding}>
                <div className="container">
                    <div className="row gutter-1 gutter-md-3 demo-preview">
                        {portfolio.map((element) => (
                            <div className="col-6 col-lg-4" key={element.id}>
                                <article className="card card-minimal">
                                    <a
                                        href="html/landing/app.html"
                                        className="card-img-container"
                                    >
                                        <img
                                            className="card-img"
                                            src={element.image}
                                            alt={element.title}
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            <a href="html/landing/app.html">
                                                {element.title}
                                            </a>
                                        </h5>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioAlt;
