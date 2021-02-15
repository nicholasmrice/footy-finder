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
    parks: []
  };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/parks/', this.state).then(response => {
     this.setState({
      parks: response.data,
      name: '',
      address: '',
      image: '',
      latitude: '',
      longitude: '',
    });
  });
};
    // Create
    createPark = (event) => {
        event.preventDefault()
        axios
            .post('/parks/', this.state)
            .then((response) => {this.getParks()})
    }
    // Read
    getParks = () => {
        axios
            .get('/parks/')
            .then((response) => {
                this.setState({
                    parks: response.data,
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
       event.preventDefault();
		   const id = event.target._id;
		   axios.put('/parks/' + id, this.state).then(response => {
			 this.setState({
         parks: response.data,
         name: '',
         address: '',
         image: '',
         latitude: '',
         longitude: ''
       });
     });
     };

    // Delete
    deletePark = (event) => {
        axios.delete('/parks/' + event.target.value).then((response) => {
            this.setState({
              parks: response.data
            });
        });
    };
    componentDidMount = () => {
      axios.get('/parks/').then(response => {
       this.setState({
        parks: response.data
    });
  });
  };
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

export default Home;
