const VideoGames = () => {
    const bgImage = "./assets/images/original-uo-art.jpeg";

    return (
        <div className="viewport">
            <div
                className="image "
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="container p-2  mt-10 mb-10">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 ">
                        <div>
                            <section class="bg-blue text-white  p-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col text-center">
                                            <h2>
                                                Video <b>Games</b>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="table-responsive-md">
                                                <table class="table table-lined">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                Name
                                                            </th>
                                                            <th scope="col">
                                                                Capitalisation
                                                            </th>
                                                            <th scope="col">
                                                                Price
                                                            </th>
                                                            <th scope="col">
                                                                Circulating
                                                            </th>
                                                            <th scope="col">
                                                                24h Change
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                Bitcoin
                                                            </th>
                                                            <td>$132.12 B</td>
                                                            <td>$8021.47</td>
                                                            <td>
                                                                16,924,425 BTC
                                                            </td>
                                                            <td>15.75%</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Ethereum
                                                            </th>
                                                            <td>$56.48 B</td>
                                                            <td>$575</td>
                                                            <td>
                                                                98,245,714 ETH
                                                            </td>
                                                            <td>2.75%</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Ripple
                                                            </th>
                                                            <td>$24.41 B</td>
                                                            <td>$0.6372</td>
                                                            <td>
                                                                39,091,716,516
                                                                XRP
                                                            </td>
                                                            <td>15.75%</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Bitcoin Cash
                                                            </th>
                                                            <td>$16.42 B</td>
                                                            <td>$964.75</td>
                                                            <td>
                                                                17,022,925 BCH
                                                            </td>
                                                            <td>10.48%</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Litecoin
                                                            </th>
                                                            <td>$8.66 B</td>
                                                            <td>$155.43</td>
                                                            <td>
                                                                55,670,106 LTC
                                                            </td>
                                                            <td>1.25%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGames;
