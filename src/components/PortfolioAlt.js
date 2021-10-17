const PortfolioAlt = () => {
    const portfolio = [
        {
            image: "./assets/images/app.jpg",
            title: "blah",
        },
        {
            image: "./assets/images/service.jpg",
            title: "blah",
        },
        {
            image: "./assets/images/coworking.jpg",
            title: "blah",
        },
        {
            image: "./assets/images/event.jpg",
            title: "blah",
        },
        {
            image: "./assets/images/fitness.jpg",
            title: "blah",
        },
        {
            image: "./assets/images/hotel.jpg",
            title: "blah",
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
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/app.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[0].image}
                                        alt="App"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/app.html">App</a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/service.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[1].image}
                                        alt="Service"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/service.html">
                                            Service
                                        </a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/coworking.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[2].image}
                                        alt="Coworking"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/coworking.html">
                                            Coworking
                                        </a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/event.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[3].image}
                                        alt="Event"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/event.html">
                                            Event
                                        </a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/fitness.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[4].image}
                                        alt="Fitness"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/fitness.html">
                                            Fitness
                                        </a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                        <div class="col-6 col-lg-4">
                            <article class="card card-minimal">
                                <a
                                    href="html/landing/hotel.html"
                                    class="card-img-container"
                                >
                                    <img
                                        class="card-img"
                                        src={portfolio[5].image}
                                        alt="Hotel"
                                    />
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        <a href="html/landing/hotel.html">
                                            Hotel
                                        </a>
                                    </h5>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioAlt;
