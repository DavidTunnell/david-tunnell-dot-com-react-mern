import { useEffect } from "react";
const Login = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center vh-100">
                        <div className="col-md-6 col-lg-5">
                            <div
                                className="accordion-group accordion-group-portal"
                                data-accordion-group
                            >
                                <div className="accordion open" data-accordion>
                                    <div
                                        className="accordion-control"
                                        data-control
                                    >
                                        <h5>Sign In</h5>
                                    </div>
                                    <div
                                        className="accordion-content"
                                        data-content
                                    >
                                        <div className="accordion-content-wrapper">
                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput2">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleFormControlInput2"
                                                    />
                                                </div>
                                                <a
                                                    href="/"
                                                    className="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="accordion" data-accordion>
                                    <div
                                        className="accordion-control"
                                        data-control
                                    >
                                        <h5>Create Account</h5>
                                    </div>
                                    <div
                                        className="accordion-content"
                                        data-content
                                    >
                                        <div className="accordion-content-wrapper">
                                            <p>
                                                Create account is currently
                                                disabled for everyone except
                                                David.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
