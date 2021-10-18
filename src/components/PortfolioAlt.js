const PortfolioAlt = () => {
    const portfolio = [
        {
            image: "./assets/images/app.jpg",
            title: "App",
            url: "https://www.google.com",
            id: 1,
        },
        {
            image: "./assets/images/service.jpg",
            title: "Service",
            url: "https://www.google.com",
            id: 2,
        },
        {
            image: "./assets/images/coworking.jpg",
            title: "Coworking",
            url: "https://www.google.com",
            id: 3,
        },
        {
            image: "./assets/images/event.jpg",
            title: "Event",
            url: "https://www.google.com",
            id: 4,
        },
        {
            image: "./assets/images/fitness.jpg",
            title: "Fitness",
            url: "https://www.google.com",
            id: 5,
        },
        {
            image: "./assets/images/hotel.jpg",
            title: "Hotel",
            url: "https://www.google.com",
            id: 6,
        },
    ];
    return (
        <>
            <section className="bg-white pt-10 pb-10">
                <div className="container">
                    <div className="row gutter-1 gutter-md-3 demo-preview">
                        {portfolio.map((element) => (
                            <div className="col-6 col-lg-4" key={element.id}>
                                <article className="card card-minimal">
                                    <a
                                        href={element.url}
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
                                            <a href={element.url}>
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
