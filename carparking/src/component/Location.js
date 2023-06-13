import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./LocationStyles.css"
export class Location extends Component{
    render()
    {
        return (

            <Map className="map-location" google={this.props.google} zoom={14}>
     
     <Marker onClick={this.onMarkerClick}
             name={'Current location'} />
    
     <InfoWindow onClose={this.onInfoWindowClose}>
          
     </InfoWindow>
    </Map>
    
      );
    }
 
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBx53vloVAFnuSk2tK5PzJNoGay_R1fPno")
  })(Location)
