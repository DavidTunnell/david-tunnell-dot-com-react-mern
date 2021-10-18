import GoogleMapReact from "google-map-react";
// import MapMarker from "./MapMarker";
import { googleMapsArguments, pin } from "../utils/mapSettings";

const MapTest = () => {
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        const marker = new maps.Marker({
            position: googleMapsArguments.center,
            icon: pin,
            map: map,
        });
        marker.setMap(map);
        map.setOptions({
            styles: googleMapsArguments.stylesDark,
            disableDefaultUI: true,
        });
    };

    const styles = {
        mapStyles: { height: "40em", width: "100%" },
        preventRunoff: { overflow: "hidden" },
    };

    //https://github.com/google-map-react/google-map-react
    return (
        <div className="container-hero" style={styles.preventRunoff}>
            <div className="row position-relative">
                <div className="col" style={styles.mapStyles}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        }}
                        defaultCenter={googleMapsArguments.center}
                        defaultZoom={googleMapsArguments.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) =>
                            handleApiLoaded(map, maps)
                        }
                    ></GoogleMapReact>
                </div>
                <div className="col position-absolute">
                    <div className="row">
                        <div className="col-lg-5 pt-10 mt-1 ml-10 pl-10 info-card-parent">
                            <div className="boxed p-5 w-75 info-card">
                                <h2>Available Remote / Worldwide</h2>
                                <ul className="list-group list-group-line">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-map-pin2 fs-24 text-blue"></i>
                                        <span>San Antonio, TX USA</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-mail fs-24 text-blue"></i>
                                        <span>davidtunnell9@gmail.com</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-phone2 fs-24 text-blue"></i>
                                        <span>(210) 454-1039</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapTest;
