import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapTest = () => {
    const googleMapsArguments = {
        center: {
            lat: 29.45916909688631,
            lng: -98.63856639845606,
        },
        zoom: 11,
        disableDefaultUI: true,
        styles: [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#f5f5f5",
                    },
                ],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#bdbdbd",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#ffffff",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#757575",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#dadada",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#616161",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e5e5e5",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#eeeeee",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c9c9c9",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9e9e9e",
                    },
                ],
            },
        ],
    };

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        const pin = "../../assets/images/pin-blue.svg";
        const marker = new maps.Marker({
            position: googleMapsArguments.center,
            icon: pin,
            map: map,
        });
        map.setOptions({ styles: googleMapsArguments.styles });
        marker.setMap(map);
    };

    //https://github.com/google-map-react/google-map-react
    return (
        <div class="container-hero">
            <div class="row position-relative">
                <div class="col" style={{ height: "30em", width: "100%" }}>
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
                    >
                        {/* <MapMarker
                                key={1}
                                text={"*test"}
                                lat={29.45916909688631}
                                lng={-98.63856639845606}
                            /> */}
                    </GoogleMapReact>
                </div>
                <div class="col position-absolute"> box2 </div>
            </div>
        </div>
    );
};

export default MapTest;
