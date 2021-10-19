import { portfolio } from "../utils/data";

const PortfolioAlt = () => {
    const styles = {
        bgColor: {
            backgroundColor: "#f94144",
        },
    };
    return (
        <>
            <section className="bg-light pt-9 pb-10">
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 text-md-center">
                            <h2>Projects / Portfolio</h2>
                            <p>
                                Some projects have proprietary code bases and
                                others are available on GitHub. Some apps may be
                                a sleep and take a few moments to spin up before
                                loading.
                            </p>
                        </div>
                    </div>
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
