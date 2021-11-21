import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { fetchGet } from "../utils/api";
import auth from "../utils/auth";

const Footer = ({ linkedInUrl, gitHubUrl, stackOverflowUrl, toTop }) => {
    useEffect(() => {
        //if the user isn't logged in send them to login screen
        // if (!Auth.loggedIn()) {
        //     history.push("/login");
        // }
        // let isloggedIn = isLoggedIn();
        console.log("every time?");
        auth.isAuthenticated();
    });

    // const isLoggedIn = async () => {
    //     await fetchGet(
    //         process.env.REACT_APP_BASE_URL + "/api/users/auth/"
    //     ).then((returnData) => {
    //         console.log(returnData);
    //         // if (returnData?.success) {
    //         //     history.push("/dashboard");
    //         // } else {
    //         //     //validation error
    //         //     console.log("error logging in");
    //         // }
    //     });
    // };
    // let isloggedIn = isLoggedIn();
    return (
        <>
            <footer className="bg-dark text-white">
                <div className="separator-top">
                    <div className="container py-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-5 text-center text-md-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Test
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 text-center">
                                <Link
                                    to={{
                                        pathname: "/",
                                    }}
                                    onClick={toTop}
                                >
                                    <img
                                        className="logo-sm"
                                        src="./assets/images/logo-light.png"
                                        alt="davidtunnell.com logo"
                                    />
                                </Link>
                            </div>
                            <div className="col-md-5 text-center text-md-right">
                                <ul className="socials">
                                    <li>
                                        <a
                                            className="icon-linkedin fs-20"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={linkedInUrl}
                                        >
                                            {" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="icon-github fs-20"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={gitHubUrl}
                                        >
                                            {" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="icon-stack-overflow fs-20"
                                            target="_blank"
                                            rel="noreferrer"
                                            href={stackOverflowUrl}
                                        >
                                            {" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
