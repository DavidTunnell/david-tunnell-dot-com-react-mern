import React, { useState, useReducer } from "react";
import useScrollToTop from "../utils/useScrollToTop";
import auth from "../utils/auth";
import SimpleReactValidator from "simple-react-validator";

const Login = ({ userId, setUserId }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [validatorLogin] = useState(new SimpleReactValidator());
    // eslint-disable-next-line
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    const bgImage = "./assets/images/login-bg.jpg";

    useScrollToTop();

    //use react router history
    // const history = useHistory();

    //on submitting login form
    const onSubmit = async (event) => {
        event.preventDefault();
        //check client side validation
        if (validatorLogin.allValid()) {
            const loginInput = { email, password };
            //log user in
            const loggedInUser = auth.login(loginInput);
            loggedInUser.then((returnData) => {
                if (returnData.success) {
                    // history.push("/dashboard");
                    //forward to dashboard
                    window.location.href = "/dashboard";
                    setUserId(returnData.userData.userID);
                    setShowMessage(false);
                } else {
                    setUserId(null);
                    setShowMessage(true);
                }
            });
        } else {
            validatorLogin.showMessages();
        }
        forceUpdate();
    };

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
                                                    <label htmlFor="email-field">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email-field"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(event) => {
                                                            setEmail(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    />
                                                    {validatorLogin.message(
                                                        "email",
                                                        email,
                                                        "required|email"
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password-field">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="********"
                                                        id="password-field"
                                                        value={password}
                                                        onChange={(event) => {
                                                            setPassword(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                    />
                                                    {validatorLogin.message(
                                                        "password",
                                                        password,
                                                        "required"
                                                    )}
                                                </div>
                                                <button
                                                    onClick={onSubmit}
                                                    className="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </button>
                                            </form>
                                            {showMessage && (
                                                <div className="text-danger mt-4 text-center">
                                                    Error logging in. Are the
                                                    credentials correct?
                                                </div>
                                            )}
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

export default Login;
