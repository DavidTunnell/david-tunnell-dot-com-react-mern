import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapTest = () => {
    const defaultProps = {
        center: {
            lat: 29.45916909688631,
            lng: -98.63856639845606,
        },
        zoom: 11,
    };
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "200px", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
        </div>
    );
};

export default MapTest;
