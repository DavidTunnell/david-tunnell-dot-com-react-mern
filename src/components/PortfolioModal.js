import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { badges } from "../utils/data";

const PortfolioModal = () => {
    var testArray = [1, 5, 10, 20, 30, 21];
    const getBadges = (arr) => {
        const returnArray = [];
        arr.forEach((element) => {
            returnArray.push(badges.find((x) => x.id === element));
        });
        return returnArray;
    };
    console.log("=========!!!!!!!!!!!============");
    console.log(getBadges(testArray));
    console.log("=========!!!!!!!!!!!============");

    return (
        <>
            {/* class to see it: show */}
            <div className="row mb-2">
                <div className="mx-auto">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myExampleModal"
                    >
                        Launch Modal
                    </button>
                </div>
            </div>

            <div
                className="modal fade"
                id="myExampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-xl"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="row" data-aos="zoom-in">
                            <div className="col">
                                <button
                                    type="button"
                                    className="close close-absolute bg-light m-1"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="icon-x"
                                    ></span>
                                </button>

                                <div className="boxed p-5 p-lg-10">
                                    <div className="container">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-5">
                                                <h2>
                                                    <b>Feedster</b>
                                                </h2>
                                                <div>
                                                    <div className="badge badge-pill badge-success m-1">
                                                        React
                                                    </div>
                                                </div>
                                                <p>
                                                    Appropriately reintermediate
                                                    resource-leveling
                                                    functionalities through
                                                    resource.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
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
