const PortfolioModal = ({ projectData }) => {
    return (
        <>
            <div
                className="modal fade"
                id="project-modal"
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

                                <div className="boxed p-5">
                                    <div className="container">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-5">
                                                <h2>
                                                    <b>
                                                        {projectData &&
                                                            projectData.title}
                                                    </b>
                                                </h2>
                                                <div className="mb-2">
                                                    {projectData.techSkills.map(
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
                                                <div className="btn-group mt-2 container">
                                                    <a href="/" target="_blank">
                                                        <button className="btn bg-light m-1">
                                                            <div>
                                                                <i className="icon-monitor fs-60"></i>
                                                            </div>
                                                            <div>View Demo</div>
                                                        </button>
                                                    </a>
                                                    <a href="/" target="_blank">
                                                        <button className="btn bg-light m-1">
                                                            <div>
                                                                <i className="icon-github fs-60"></i>
                                                            </div>
                                                            <div>
                                                                GitHub Repo
                                                            </div>
                                                        </button>
                                                    </a>
                                                </div>
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
