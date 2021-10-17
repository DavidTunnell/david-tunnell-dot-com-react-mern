const Map = () => {
    /*
      <script>
         function initMap() {
           // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.702888, lng: -74.012420},
          zoom: 12,
          disableDefaultUI: true,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
        });

        map.panBy(0, -200);
        
        var pin ='../../assets/images/pin-blue.svg';

        var marker = new google.maps.Marker({
          position: map.getCenter(),
          icon: pin,
          map: map
        });
         }
       </script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHtKZB7XlS_CVrIFsPbgroMG0SgX3c-po&callback=initMap"
      async defer></script>



      
*/
    const styles = {
        sectionPadding: {
            padding: "7em",
        },
    };
    return (
        <>
            <section className="map" style={styles.sectionPadding}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="boxed p-5">
                                <h2>USA, New York, Broadway</h2>
                                <ul className="list-group list-group-line">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-map-pin2 fs-24 text-blue"></i>
                                        <span>5th Avenue</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-mail fs-24 text-blue"></i>
                                        <span>example@example.com</span>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="icon-phone2 fs-24 text-blue"></i>
                                        <span>(123) 456-7890</span>
                                    </li>
                                </ul>
                                <a
                                    href="/"
                                    className="btn btn-primary btn-block btn-rounded mt-2"
                                >
                                    View Full Map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map" className="map-area"></div>
            </section>
        </>
    );
};

export default Map;
