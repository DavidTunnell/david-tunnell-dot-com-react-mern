import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { fetchGet } from "../utils/api";
import auth from "../utils/auth";

const Footer = ({
    linkedInUrl,
    gitHubUrl,
    stackOverflowUrl,
    toTop,
    userIsLoggedIn,
    loginState,
    logoutState,
}) => {
    useEffect(() => {
        console.log("every time?");
        console.log(userIsLoggedIn);
        console.log(loginState);
        console.log(logoutState);

        auth.isAuthenticated().then((data) => {
            console.log(data);
            //set state in parent by passing function here
        });
    });

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
