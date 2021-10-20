const PortfolioModal = () => {
    return (
        <>
            {/* class to see it: show */}
            <div class="row mb-2">
                <div class="mx-auto">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myExampleModal"
                    >
                        Launch Modal
                    </button>
                </div>
            </div>

            <div
                class="modal fade"
                id="myExampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                {/* modal-lg */}
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-image">
                            <img
                                src="../assets/images/demo/image-square-2.jpg"
                                alt="text"
                                class="modal-image"
                            />
                            <button
                                type="button"
                                class="close close-absolute"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" class="icon-x"></span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            <h3>Modal title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Molestias alias ipsam minima,
                                dolore! Modi enim porro neque quaerat
                                blanditiis. Ipsa aliquam quam maxime rerum eum
                                accusamus nulla, molestiae soluta repellendus!
                            </p>
                        </div>
                        <div class="modal-footer gutter-1">
                            <div class="container-fluid">
                                <div class="row gutter-1">
                                    <div class="col-8">
                                        <button
                                            type="button"
                                            class="btn btn-block btn-primary"
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                    <div class="col-4">
                                        <button
                                            type="button"
                                            class="btn btn-block btn-red"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioModal;
