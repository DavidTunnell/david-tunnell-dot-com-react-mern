const Hero = () => {
    const heroPopInImage = "./assets/images/hero-pop-in.svg";
    const bgColors = [
        "#4ea8de",
        "#03071E",
        "#c81d25",
        "#1517af",
        "#f94144",
        "#005F73",
        "#e61f1f",
        "#392ea0",
        "#370617",
        "#03071E",
        "#1517af",
    ];
    //https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    return (
        <>
            {/* to set !important in react: https://joshtronic.com/2018/03/22/how-to-important-inline-styles-in-react/ */}
            <section
                className="p-0 pt-10 bg-primary text-white"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty(
                            "background-color",
                            randomColor,
                            "important"
                        );
                    }
                }}
            >
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
