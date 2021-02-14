import React from 'react'
import axios from 'axios'

class ShowPark extends React.Component {
  state = {
    name: '',
		address: '',
		latitude: '',
		longitude: '',
    image: '',
		// parks: []
	};
  // Read/Show Park
  showPark = () => {
        axios
        .get('/parks/' + this.props.match.params.id)
        .then((res) => {
            this.setState({
                name: res.data.name,
                address: res.data.address,
                image: res.data.image,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
            })
        })
    }
    // Update Park
    updatePark = (event) => {
        event.preventDefault()
        event.target.reset()
        axios
            .put('/parks/' + event.target.id, this.state)
            .then((res) => {
                this.getParks()
            })
    }
    // Delete Park
    deletePark = (event) => {
        axios
        .delete('/parks/' + event.target.value)
        .then((res) => {
            this.getParks()
        })
    }
    componentDidMount = () => {
      this.showPark()
  }
    render = () => {
      return (
          <div id="show-park-container">
              <h2>This Park</h2>
              <h3>Name: {this.state.name}</h3>
              <h3>Address: {this.state.address}</h3>
              <img src={this.state.image} alt="park"/>
              <h5>Latitude: {this.state.latitude}</h5>
              <h5>Longitude: {this.state.longitude}</h5>
          </div>
      )
  }
}

export default ShowPark
