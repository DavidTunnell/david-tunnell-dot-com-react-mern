const About = () => {
    const styles = {
        sectionPadding: {
            padding: "7em",
        },
    };
    return (
        <>
            <section style={styles.sectionPadding}>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-4 text-center">
                            <i class="svg-icon fs-50 text-blue mb-2">
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 64 64"
                                    enable-background="new 0 0 64 64"
                                    xmlSpace="preserve"
                                >
                                    <rect
                                        x="10"
                                        y="45"
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        width="12"
                                        height="18"
                                    />
                                    <rect
                                        x="42"
                                        y="18"
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        width="12"
                                        height="45"
                                    />
                                    <rect
                                        x="26"
                                        y="32"
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        width="12"
                                        height="31"
                                    />
                                    <g>
                                        <line
                                            fill="none"
                                            stroke="#000000"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                            x1="14"
                                            y1="38"
                                            x2="51"
                                            y2="1"
                                        />
                                        <polyline
                                            fill="none"
                                            stroke="#000000"
                                            stroke-width="2"
                                            stroke-linejoin="bevel"
                                            stroke-miterlimit="10"
                                            points="40,1 51,1 51,12 
                    "
                                        />
                                    </g>
                                </svg>
                            </i>
                            <h4 class="fs-18 text-uppercase font-weight-normal">
                                High Income
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                            </p>
                        </div>
                        <div class="col-md-4 text-center">
                            <i class="svg-icon fs-50 text-blue mb-2">
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 64 64"
                                    enable-background="new 0 0 64 64"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        d="M54.999,36.001C55,50.913,42.912,63,28,62.999
                C13.087,63,1,50.912,1.001,36C1,21.088,13.088,9,28,9.001V36L54.999,36.001z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        d="M63,28C63.001,13.087,50.914,0.998,36.001,1v27H63z"
                                    />
                                </svg>
                            </i>
                            <h4 class="fs-18 text-uppercase font-weight-normal">
                                Market Leaders
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                            </p>
                        </div>
                        <div class="col-md-4 text-center">
                            <i class="svg-icon fs-50 text-blue mb-2">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="64px"
                                    height="64px"
                                    viewBox="0 0 64 64"
                                    enable-background="new 0 0 64 64"
                                    xmlSpace="preserve"
                                >
                                    <circle
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        cx="51"
                                        cy="13"
                                        r="12"
                                    />
                                    <circle
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        cx="11"
                                        cy="42"
                                        r="10"
                                    />
                                    <circle
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        cx="48"
                                        cy="55"
                                        r="8"
                                    />
                                    <line
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        x1="40"
                                        y1="54"
                                        x2="20"
                                        y2="46"
                                    />
                                    <line
                                        fill="none"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        x1="19"
                                        y1="35"
                                        x2="41"
                                        y2="21"
                                    />
                                </svg>
                            </i>
                            <h4 class="fs-18 text-uppercase font-weight-normal">
                                Connections
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
