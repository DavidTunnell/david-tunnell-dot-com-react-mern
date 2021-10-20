import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { badges } from "../utils/data";

const PortfolioModal = () => {
    var testArray = [1, 3, 4, 5, 6, 16, 18, 20, 22, 23, 24, 27, 31, 34, 35];
    const getBadges = (arr) => {
        const returnArray = [];
        arr.forEach((element) => {
            returnArray.push(badges.find((x) => x.id === element));
        });
        return returnArray;
    };
    const badgesForProject = getBadges(testArray);
    const styles = {
        gitHubButton: { backgroundColor: "#f94144", color: "white" },
    };
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
                                                <div className="mb-2">
                                                    {badgesForProject.map(
                                                        (element) => (
                                                            <div
                                                                className="badge badge-pill badge-success"
                                                                style={{
                                                                    backgroundColor:
                                                                        element.bgColor,
                                                                    margin: "3px",
                                                                    color: element.textColor,
                                                                }}
                                                                key={element.id}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div>
                                                    <p>
                                                        A Twitter content
                                                        containerizer. Create an
                                                        account and build custom
                                                        feeds out of their
                                                        favorite Twitter users.
                                                        These feeds can be
                                                        shared (links), followed
                                                        and experienced as a
                                                        group using the comment
                                                        section. This creates a
                                                        new way to experience
                                                        any interest, from a
                                                        live sporting event to
                                                        your favorite
                                                        personalities or any
                                                        other subject.
                                                    </p>
                                                </div>
                                                <div class="container bg-light text-center">
                                                    <div class="row mt-3 p-1">
                                                        <div class="col">
                                                            <i class="icon-monitor fs-60"></i>
                                                        </div>
                                                        <div class="col">
                                                            <i className="icon-github fs-60"></i>
                                                        </div>
                                                        <div class="w-100"></div>
                                                        <div class="col">
                                                            Live Demo
                                                        </div>
                                                        <div class="col">
                                                            GitHub Repo
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="mt-3 container-fluid">
                                                    <a href="/" target="_blank">
                                                        <button
                                                            className="btn bg-light mr-1 mb-1"
                                                            type="button"
                                                        >
                                                            <i class="icon-monitor fs-60"></i>
                                                            Live Demo
                                                        </button>
                                                    </a>
                                                    <a href="/" target="_blank">
                                                        <button
                                                            className="btn mr-1 mb-1 bg-light"
                                                            type="button"
                                                            // style={
                                                            //     styles.gitHubButton
                                                            // }
                                                        >
                                                            <i className="icon-github fs-60"></i>
                                                            GitHub Repo
                                                        </button>
                                                    </a>
                                                </div> */}
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
