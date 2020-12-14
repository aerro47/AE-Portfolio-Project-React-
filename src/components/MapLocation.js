import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '50%',
    
}

export class MapContainer extends Component {

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={{ lat: 45.249868, lng: -93.305090}}
            >

            <Marker position={{ lat: 45.249868, lng: -93.305090}} />
            </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDPddgBQMrkBPhkxnPTQIy3vrfOVfi-XEM'
  })(MapContainer);