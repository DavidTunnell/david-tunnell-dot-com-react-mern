import { Link } from "react-router-dom";
import React, { useState, useReducer } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SimpleReactValidator from "simple-react-validator";
import { fetchCreate } from "../utils/api";

const Dashboard = () => {
    const bgImage = "./assets/images/login-bg.jpg";
    const cardBgColor = "#f5f5f5";

    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [userFeedback, setUserFeedback] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [userFeedbackColor, setUserFeedbackColor] = useState(true);

    const [validatorVgSubmit] = useState(new SimpleReactValidator());
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    const handleVgSubmit = async (event) => {
        event.preventDefault();
        const selectedRating = document
            .querySelector(".rating-options")
            .querySelector(".selectric")
            .querySelector(".label");
        console.log(selectedRating);
        // if (validatorVgSubmit.allValid()) {
        //     //add to db via fetch
        //     const vgInput = { title, difficulty, date: startDate, notes };
        //     await fetchCreate(
        //         process.env.REACT_APP_BASE_URL + "/api/vg/",
        //         vgInput
        //     ).then((returnData) => {
        //         if (returnData) {
        //             setTitle("");
        //             setDifficulty("");
        //             setNotes("");
        //             setUserFeedbackColor(true);
        //             setUserFeedback("The game was added to the db.");
        //         } else {
        //             setUserFeedbackColor(false);
        //             setUserFeedback("There was an issue adding the game.");
        //         }
        //     });
        // } else {
        //     validatorVgSubmit.showMessages();
        // }
        // forceUpdate();
        // setTimeout(function () {
        //     setUserFeedback("");
        // }, 3000);
    };

    return (
        <>
            <div className="viewport">
                <div
                    className="image image-overlay image-blur "
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="container mt-10 mb-3">
                    <div className="row justify-content-center align-items-center mt-10">
                        <div
                            className="w-100 p-3 card mt-10 mb-10"
                            style={{ backgroundColor: cardBgColor }}
                        >
                            <div className="container pt-5 pb-5">
                                <div className="row justify-content-center">
                                    <div className="col col-md-10 col-lg-8">
                                        <div className="nav nav-tabs mb-1">
                                            <Link
                                                className="nav-item nav-link active"
                                                data-toggle="tab"
                                                to="/"
                                            >
                                                Video Games
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane show active"
                                        role="tabpanel"
                                    >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8">
                                                <div className="row">
                                                    <div className="col ">
                                                        <h5 className="mb-2 fs-20 font-weight-normal">
                                                            Add a Game
                                                        </h5>
                                                        <form>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="title">
                                                                            Title
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="title"
                                                                            aria-describedby="title"
                                                                            placeholder="Metroid"
                                                                            value={
                                                                                title
                                                                            }
                                                                            onChange={(
                                                                                event
                                                                            ) => {
                                                                                setTitle(
                                                                                    event
                                                                                        .target
                                                                                        .value
                                                                                );
                                                                            }}
                                                                        />{" "}
                                                                        {validatorVgSubmit.message(
                                                                            "title",
                                                                            title,
                                                                            "required"
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="difficulty">
                                                                            Difficulty
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="difficulty"
                                                                            aria-describedby="difficulty"
                                                                            placeholder="N/A"
                                                                            value={
                                                                                difficulty
                                                                            }
                                                                            onChange={(
                                                                                event
                                                                            ) => {
                                                                                setDifficulty(
                                                                                    event
                                                                                        .target
                                                                                        .value
                                                                                );
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="date">
                                                                            Date
                                                                        </label>
                                                                        <DatePicker
                                                                            selected={
                                                                                startDate
                                                                            }
                                                                            className="form-control"
                                                                            placeholder="12/25/3020"
                                                                            onChange={(
                                                                                date
                                                                            ) =>
                                                                                setStartDate(
                                                                                    date
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="notes">
                                                                            Rating
                                                                        </label>
                                                                        <div className="form-group rating-options">
                                                                            <select className="form-control">
                                                                                <option
                                                                                    value="0"
                                                                                    className="text-success"
                                                                                >
                                                                                    Normal
                                                                                </option>
                                                                                <option
                                                                                    value="1"
                                                                                    className="text-primary"
                                                                                >
                                                                                    Incredible
                                                                                </option>
                                                                                <option
                                                                                    value="2"
                                                                                    className="text-warning"
                                                                                >
                                                                                    All
                                                                                    Time
                                                                                    Greatest
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label htmlFor="notes">
                                                                            Notes
                                                                        </label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="notes"
                                                                            rows="2"
                                                                            placeholder="With Joyce!"
                                                                            value={
                                                                                notes
                                                                            }
                                                                            onChange={(
                                                                                event
                                                                            ) => {
                                                                                setNotes(
                                                                                    event
                                                                                        .target
                                                                                        .value
                                                                                );
                                                                            }}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-row mt-1 align-items-center">
                                                                <div className="col-12">
                                                                    <button
                                                                        className="btn btn-secondary"
                                                                        onClick={
                                                                            handleVgSubmit
                                                                        }
                                                                    >
                                                                        Save
                                                                        Changes
                                                                    </button>
                                                                    {userFeedback && (
                                                                        <span
                                                                            className={
                                                                                userFeedbackColor
                                                                                    ? "text-success p-4"
                                                                                    : "text-danger p-4"
                                                                            }
                                                                        >
                                                                            {
                                                                                userFeedback
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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

export default Dashboard;
