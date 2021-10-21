import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { fetchCreate } from "../utils/api";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const recaptchaRef = React.createRef();

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                console.log(`Error, invalid input field.`);
        }
    };

    const handleFormSubmit = async (e) => {
        //check for suspicious activity with Invisible reCAPTCHA - https://www.npmjs.com/package/react-google-recaptcha
        recaptchaRef.current.execute();
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        const contactEntry = { name, email, phone, message };
        await fetchCreate(
            process.env.REACT_APP_BASE_URL + "/api/contact/",
            contactEntry
        ).then((returnData) => {
            if (returnData.length !== 0) {
                console.log("success");
            } else {
                console.log("fail");
            }
        });
    };
    return (
        <>
            <section className="bg-light pt-10 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="eyebrow mb-1 text-primary">
                                Get in touch
                            </span>
                            <h2>I look forward to hearing from you.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form>
                                <div className="form-row mb-1">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Name"
                                            name="name"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Phone"
                                            name="phone"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-1">
                                    <div className="col">
                                        <textarea
                                            className="form-control form-control-minimal"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder="Your Message"
                                            name="message"
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <div className="col">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            size="invisible"
                                            sitekey={
                                                process.env
                                                    .REACT_APP_GOOGLE_SITE_KEY
                                            }
                                            onChange={onChange}
                                        />
                                        <button
                                            className="btn btn-primary px-5"
                                            onClick={handleFormSubmit}
                                        >
                                            Send Mail
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
