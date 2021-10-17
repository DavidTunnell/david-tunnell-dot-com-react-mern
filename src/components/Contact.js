const Contact = () => {
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
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Phone"
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
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <div className="col">
                                        <button className="btn btn-primary px-5">
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
