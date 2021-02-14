import React from 'react'
import axios from 'axios'
// Components
// import FindAPark from '../../components/find_park.js'
import RecentParks from '../../components/recent_parks.js'
import SubmitAPark from '../../components/submit_park.js'

class Home extends React.Component {
  state = {
    name: '',
    address: '',
    image: '',
    latitude: '',
    longitude: '',
    parks: [],
  };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    // Create
    createPark = (event) => {
        event.preventDefault()
        axios
            .post('/parks', this.state)
            .then((res) => {this.getParks()})
    }
    // Read
    getParks = () => {
        axios
            .get('/parks')
            .then((res) => {
                this.setState({
                    parks: res.data,
                    name: '',
                    address: '',
                    image: '',
                    latitude: '',
                    longitude: '',
                })
            })
            .catch((err) => {console.log(err)})
    }
    // Update
    updatePark = (event) => {
        event.preventDefault()
        event.target.reset()
        axios
            .put('/parks/' + event.target.id, this.state)
            .then((res) => {
                this.getParks()
            })
    }
    // Delete
    deletePark = (event) => {
        axios
        .delete('/parks/' + event.target.value)
        .then((res) => {
            this.getParks()
        })
    }
    componentDidMount = () => {
        this.getParks()
    }
    render = () => {
        return (
            <React.Fragment>
                <RecentParks state={this.state}
                handleChange={this.handleChange}
                getParks={this.getParks} updatePark={this.updatePark} deletePark={this.deletePark} />
                <SubmitAPark state={this.state} handleChange={this.handleChange} getParks={this.getParks} createPark={this.createPark}/>
            </React.Fragment>
        )
    }
}

export default Home
