import { Link } from "react-router-dom";

const Footer = () => {
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/404-bg.jpg)",
        },
    };
    return (
        <>
            <footer className="bg-dark text-white">
                <div className="separator-top">
                    <div className="container py-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-5 text-center text-md-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Contacts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Legal Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 text-center">
                                <img
                                    className="logo-sm"
                                    src="./assets/images/logo-light.png"
                                    alt="Logo"
                                />
                            </div>
                            <div className="col-md-5 text-center text-md-right">
                                <ul className="socials">
                                    <li>
                                        <a
                                            href="/"
                                            className="icon-facebook fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="icon-instagram fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="icon-twitter fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="icon-linkedin fs-20"
                                        ></a>
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
