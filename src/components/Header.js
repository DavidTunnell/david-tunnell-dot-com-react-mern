import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header-sticky header-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="../../index.html">
                            <img
                                className="navbar-logo navbar-logo-light"
                                src="./assets/images/logo-light.png"
                                alt="Logo"
                            />

                            <img
                                className="navbar-logo navbar-logo-dark"
                                src="./assets/images/logo-dark.png"
                                alt="Logo"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="burger">
                                <span></span>
                            </span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav align-items-center mr-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="../../index.html"
                                        role="button"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="../../index.html"
                                        role="button"
                                    >
                                        Link 1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="../../index.html"
                                        role="button"
                                    >
                                        Link 2
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center mr-0">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        id="navbarDropdown-2"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        David Tunnell
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a
                                            className="dropdown-item"
                                            href="../app/profile.html"
                                        >
                                            Public Profile
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="../app/connections.html"
                                        >
                                            Connections
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="../app/groups.html"
                                        >
                                            Groups
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a
                                            className="dropdown-item"
                                            href="../app/settings.html"
                                        >
                                            Settings
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="../app/payments.html"
                                        >
                                            Payments
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
