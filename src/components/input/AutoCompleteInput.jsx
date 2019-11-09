import React from 'react';
/* global google */


class AutoCompleteInput extends React.Component {

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.address = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.address = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["address"]});
    this.address.addListener('place_changed', this.handlePlaceChanged);
  }

  async handlePlaceChanged(){
    const place = await this.address.getPlace();
    this.props.handleSetAddressState(place.formatted_address);
  }


  render() {
    return (
        <input ref={this.autocompleteInput}  className='formInput' id="address" name='address' placeholder="Enter your address"
         type="text"></input>
    );
  }
}

export default AutoCompleteInput;