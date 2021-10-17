const AboutCards = () => {
    const styles = {
        sectionPadding: {
            padding: "7em",
        },
    };
    return (
        <>
            <section class="bg-light" style={styles.sectionPadding}>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-12 col-lg-7">
                            <ul class="masonry gallery gutter-2">
                                <li class="col-md-6">
                                    <div class="boxed bg-primary text-white rising p-4">
                                        <i class="icon-weather_sun fs-50 mb-2"></i>
                                        <h4>Weather</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod
                                        </p>
                                    </div>
                                </li>
                                <li class="col-md-6 mt-md-5">
                                    <div class="boxed rising p-4">
                                        <i class="icon-ecommerce_basket_check fs-50 mb-2"></i>
                                        <h4>Ecommerce</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor
                                        </p>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="boxed rising p-4">
                                        <i class="icon-ecommerce_wallet fs-50 mb-2"></i>
                                        <h4>Save Money</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                        </p>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="boxed rising p-4">
                                        <i class="icon-basic_anticlockwise fs-50 mb-2"></i>
                                        <h4>24/7</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-12 col-lg-4 align-self-center text-center text-md-left">
                            <h2 class="h1">
                                <b>Work</b> with us.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet placeat velit provident
                                blanditiis, dolore nobis cum voluptates
                            </p>
                            <button
                                type="button"
                                class="btn btn-primary btn-rounded mt-2 px-5"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCards;
