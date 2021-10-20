import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
                <div
                    class="modal-dialog modal-dialog-centered modal-xl"
                    role="document"
                >
                    <div class="modal-content">
                        <div class="row" data-aos="zoom-in">
                            <div class="col">
                                <button
                                    type="button"
                                    class="close close-absolute bg-light m-1"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span
                                        aria-hidden="true"
                                        class="icon-x"
                                    ></span>
                                </button>

                                <div class="boxed p-5 p-lg-10">
                                    <div class="container">
                                        <div class="row justify-content-between align-items-center">
                                            <div class="col-md-5">
                                                <h2>
                                                    <b>Feedster</b>
                                                </h2>
                                                <div>
                                                    <div class="badge badge-pill badge-success m-1">
                                                        React
                                                    </div>
                                                    <div class="badge badge-pill badge-primary text-white">
                                                        .NET Framework
                                                    </div>
                                                </div>
                                                <p>
                                                    Appropriately reintermediate
                                                    resource-leveling
                                                    functionalities through
                                                    resource.
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <img
                                                    src="./assets/images/demo/image-square-3.jpg"
                                                    alt="blah"
                                                />
                                            </div>
                                        </div>
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
