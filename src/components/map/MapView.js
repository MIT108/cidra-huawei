import React from 'react'
import {
    Wrapper,
    Status
} from "@googlemaps/react-wrapper";

import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin';


function MapView({ location, zoomLevel }) {
    
    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>

            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC7WVaKcMyrus1CoKszDFQ1_H2DyACeMlU' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                {/* <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                /> */}
            </GoogleMapReact>
            </div>
        </div>
    )
}

export default MapView