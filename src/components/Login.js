const Login = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    return (
        <>
            <div class="viewport">
                <div
                    class="image image-overlay"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div class="container">
                    <div class="row justify-content-center align-items-center vh-100">
                        <div class="col-md-6 col-lg-5">
                            <div
                                class="accordion-group accordion-group-portal"
                                data-accordion-group
                            >
                                <div class="accordion open" data-accordion>
                                    <div class="accordion-control" data-control>
                                        <h5>Sign In</h5>
                                    </div>
                                    <div class="accordion-content" data-content>
                                        <div class="accordion-content-wrapper">
                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput2">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        class="form-control"
                                                        id="exampleFormControlInput2"
                                                    />
                                                </div>
                                                <a
                                                    href="/"
                                                    class="btn btn-primary btn-block"
                                                >
                                                    Sign In
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion" data-accordion>
                                    <div class="accordion-control" data-control>
                                        <h5>Create Account</h5>
                                    </div>
                                    <div class="accordion-content" data-content>
                                        <div class="accordion-content-wrapper">
                                            <p>
                                                Create account is currently
                                                disabled for everyone except
                                                David.
                                            </p>
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
