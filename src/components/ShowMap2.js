import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { useState } from 'react'

// export class MapContainer extends Component {
export const MapContainer = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // for google map places autocomplete
  //     address: '',

  //     showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {},

  //     mapCenter: {
  //       lat: 5.0638835,
  //       lng: -75.522555
  //     }
  //   };
  // }

  const [state, setState] = useState({
    address: '',

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 5.0638835,
      lng: -75.522555
    }
  })

  // const handleChange = (address) => {
  //   setState({ address });
  // };

  // const handleSelect = (address) => {
  //   this.setState({ address });
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       console.log('Success', latLng);

  //       // update center state
  //       setState({ mapCenter: latLng });
  //     })
  //     .catch(error => console.error('Error', error));
  // };

  return (
    <div id='googleMaps'>
      {/* <PlacesAutocomplete
        value={state.address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete> */}

      <Map
        google={props.google}
        initialCenter={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng
        }}
        center={{
          lat: state.mapCenter.lat,
          lng: state.mapCenter.lng
        }}
      >
        <Marker
          position={{
            lat: state.mapCenter.lat,
            lng: state.mapCenter.lng
          }} />
      </Map>
    </div>
  )

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCOnA0TkClNxx4R_ZF9O2nEmY7HEjs8Am8')
})(MapContainer)