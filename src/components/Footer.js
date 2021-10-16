import { Link } from "react-router-dom";

const Footer = () => {
    const styles = {
        notFoundStyle: {
            backgroundImage: "url(./assets/images/404-bg.jpg)",
        },
    };
    return (
        <>
            <footer class="bg-dark text-white">
                <div class="separator-top">
                    <div class="container py-5">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-md-5 text-center text-md-left">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Contacts
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Legal Information
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-2 text-center">
                                <img
                                    class="logo-sm"
                                    src="../../assets/images/demo/logo/logo-light.svg"
                                    alt="Logo"
                                />
                            </div>
                            <div class="col-md-5 text-center text-md-right">
                                <ul class="socials">
                                    <li>
                                        <a
                                            href="/"
                                            class="icon-facebook fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            class="icon-instagram fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            class="icon-twitter fs-20"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            class="icon-linkedin fs-20"
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
