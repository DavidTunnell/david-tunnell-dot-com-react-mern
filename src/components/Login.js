import React, { useState } from "react";
import useScrollToTop from "../utils/useScrollToTop";
import auth from "../utils/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const bgImage = "./assets/images/login-bg.jpg";
    useScrollToTop();
    //use react router history
    const history = useHistory();
    const onSubmit = async (event) => {
        event.preventDefault();
        const loginInput = { email, password };
        const isSuccessful = auth.login(loginInput);
        if (isSuccessful) {
            history.push("/dashboard");
        } else {
            console.log("error logging in");
        }
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
                                                </div>
                                                <button
                                                    onClick={onSubmit}
                                                    className="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </button>
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
