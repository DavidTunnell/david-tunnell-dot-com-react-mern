import { useEffect } from "react";
import { fetchGet, fetchDelete } from "../utils/api";
import React, { useState } from "react";
import moment from "moment";

const VideoGames = ({ userIsLoggedIn }) => {
    const bgImage = "./assets/images/original-uo-art.jpeg";
    const [videoGames, setVideoGames] = useState();

    useEffect(() => {
        const getVgData = async () => {
            await fetchGet(process.env.REACT_APP_BASE_URL + "/api/vg/").then(
                (returnData) => {
                    console.log(returnData);
                    setVideoGames(returnData);
                }
            );
        };
        getVgData();
    }, []);

    const handleDeleteRow = (event) => {
        const deleteVgRecord = async (id) => {
            await fetchDelete(
                process.env.REACT_APP_BASE_URL + "/api/vg/" + id
            ).then((returnData) => {
                //filter out and update state
                setVideoGames(filterOutId(id));
            });
        };
        const userResponse = window.confirm(
            "Are you sure you want to delete this?"
        );
        if (userResponse) {
            const id = event.target.getAttribute("data-id");
            deleteVgRecord(id);
        }
    };

    const filterOutId = (id) => {
        return videoGames.filter((el) => el._id !== id);
    };

    const getColorClass = (rating) => {
        switch (rating) {
            case "Normal":
                return "text-success";
            case "Incredible":
                return "text-primary";
            case "All Time Great":
                return "text-warning";
            default:
                return "text-danger";
        }
    };

    return (
        <section
            className="viewport pt-2 col-lg-12 col-sm-6"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "1920px 1080px",
                // backgroundRepeat: "no-repeat",
                backgroundColor: "#323335",
            }}
        >
            <div className="image"></div>
            <div
                className="container p-2 mt-10 mb-10 card col-lg-9 col-sm-6"
                style={{
                    opacity: "0.9",
                }}
            >
                <div className="row justify-content-center align-items-center">
                    <div className="">
                        <div class="row">
                            <div class="text-black p-5">
                                <div class="container col-lg-9 col-sm-6 vg-mobile">
                                    <div class="row">
                                        <div class="col text-center">
                                            <h2>
                                                Video <b>Games</b>
                                            </h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center">
                                            I'm a lifelong gaming fan starting
                                            with Super Mario Bro's for NES when
                                            I was about 4 years old. The{" "}
                                            <a
                                                href={bgImage}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                background image
                                            </a>{" "}
                                            belongs to my favorite game of all
                                            time, the old days of{" "}
                                            <a
                                                href="https://en.wikipedia.org/wiki/Ultima_Online"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Ultima Online
                                            </a>
                                            . The 1st 47 are out of order
                                            because they came from different
                                            lists. I'm probably missed some
                                            before making lists but I always
                                            keep this up to date now. Some games
                                            on the list can't necessarily be
                                            traditionally 'beaten' but because
                                            of the amount of time or effort I
                                            added it. It's my list after all!
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-center">
                                            <h5 className="mt-1">Ratings</h5>
                                        </span>
                                        <div className="row d-flex justify-content-center flex-nowrap">
                                            <div className="btn-group p-2">
                                                <label className="btn bg-success">
                                                    <span className="m-1">
                                                        Normal
                                                    </span>
                                                </label>
                                                <label className="btn btn-primary">
                                                    <div>
                                                        <span className="m-1">
                                                            Incredible
                                                        </span>
                                                    </div>
                                                </label>
                                                <label className="btn btn-warning">
                                                    <div>
                                                        <span className="m-1">
                                                            ALl Time Great
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col">
                                            <div class="table-responsive-md">
                                                <table class="table table-lined">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                #
                                                            </th>
                                                            <th scope="col">
                                                                Title
                                                            </th>
                                                            <th scope="col">
                                                                Difficulty
                                                            </th>
                                                            <th scope="col">
                                                                Notes
                                                            </th>
                                                            <th scope="col">
                                                                Date
                                                            </th>
                                                            {userIsLoggedIn && (
                                                                <th scope="col">
                                                                    Delete
                                                                </th>
                                                            )}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {videoGames &&
                                                            videoGames.map(
                                                                (
                                                                    gameBeaten,
                                                                    index
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            gameBeaten._id
                                                                        }
                                                                    >
                                                                        <th scope="row">
                                                                            {index +
                                                                                1}
                                                                        </th>
                                                                        <td>
                                                                            <span
                                                                                className={getColorClass(
                                                                                    gameBeaten.rating
                                                                                )}
                                                                            >
                                                                                {
                                                                                    gameBeaten.title
                                                                                }
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                gameBeaten.difficulty
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                gameBeaten.notes
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {gameBeaten.date &&
                                                                                moment(
                                                                                    gameBeaten.date
                                                                                ).format(
                                                                                    "MM-DD-YYYY"
                                                                                )}
                                                                        </td>
                                                                        {userIsLoggedIn && (
                                                                            <td>
                                                                                <span
                                                                                    class="btn btn-danger btn-xs"
                                                                                    data-id={
                                                                                        gameBeaten._id
                                                                                    }
                                                                                    onClick={(
                                                                                        event
                                                                                    ) =>
                                                                                        handleDeleteRow(
                                                                                            event
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Delete
                                                                                </span>
                                                                            </td>
                                                                        )}
                                                                    </tr>
                                                                )
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGames;
