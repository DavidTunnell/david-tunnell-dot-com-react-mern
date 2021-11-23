const VideoGames = () => {
    const bgImage = "./assets/images/original-uo-art.jpeg";
    return (
        <section className="viewport pt-2">
            <div
                className="image "
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div
                className="container p-2 mt-10 mb-10 card"
                style={{
                    opacity: "0.9",
                }}
            >
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 ">
                        <div>
                            <div class=" text-black p-5">
                                <div class="container">
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
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                1
                                                            </th>
                                                            <td>
                                                                The Legend of
                                                                Zelda
                                                            </td>
                                                            <td></td>
                                                            <td>NES</td>
                                                            <td></td>
                                                        </tr>
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
