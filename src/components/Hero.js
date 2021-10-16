const Hero = () => {
    const heroPopInImage = "./assets/images/hero-pop-in.svg";
    return (
        <>
            <section className="p-0 pt-10 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5 py-md-10">
                        <div className="col-12 col-lg-6 text-center text-lg-left">
                            <h1 className="display-3">
                                Speed up your workflow with our <b>features.</b>
                            </h1>
                            <div className="input-group mb-1">
                                <input
                                    type="text"
                                    className="form-control px-3"
                                    placeholder="your@mail.com"
                                    aria-label="Get a free copy"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-white"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <small>
                                * we won't share your data with third parties
                            </small>
                        </div>
                        <div
                            className="col-12 col-lg-6"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <img src={heroPopInImage} alt="alt tag" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
