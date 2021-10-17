const PortfolioAlt = () => {
    const portfolio = [
        {
            image: "./assets/images/app.jpg",
            title: "App",
        },
        {
            image: "./assets/images/service.jpg",
            title: "Service",
        },
        {
            image: "./assets/images/coworking.jpg",
            title: "Coworking",
        },
        {
            image: "./assets/images/event.jpg",
            title: "Event",
        },
        {
            image: "./assets/images/fitness.jpg",
            title: "Fitness",
        },
        {
            image: "./assets/images/hotel.jpg",
            title: "Hotel",
        },
    ];
    const styles = {
        sectionPadding: {
            padding: "7em",
        },
    };
    return (
        <>
            <section class="bg-white" style={styles.sectionPadding}>
                <div class="container">
                    <div class="row gutter-1 gutter-md-3 demo-preview">
                        {portfolio.map((element) => (
                            <div class="col-6 col-lg-4">
                                <article class="card card-minimal">
                                    <a
                                        href="html/landing/app.html"
                                        class="card-img-container"
                                    >
                                        <img
                                            class="card-img"
                                            src={element.image}
                                            alt={element.title}
                                        />
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title text-center">
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
