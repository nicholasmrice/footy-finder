import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class RecentParks extends React.Component {
    render = () => {
        return (
            <div id="recent-parks-container">
                <h3>A place to find & share our favorite parks to play the worlds game</h3>
                <div id="recent-grid-container">
                {this.props.state.parks.map((park) => {
                     return <div key={park._id}>
                         <h5>Park: {park.name}</h5>
                         <h5>Address: {park.address}</h5>
                         <img src={park.image} alt="park"/>
                         <h5>Latitude: {park.latitude}</h5>
                         <h5>Longitude: {park.longitude}</h5>
                        <details>
                            <summary>Edit Park</summary>
                            <form id={park._id} onSubmit={this.props.updatePark}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name"    onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="image">Image</label>
                                <input type="text" id="image" onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="latitude">Latitude</label>
                                <input type="text" id="latitude" onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="longitude">Longitude</label>
                                <input type="text" id="longitude" onChange={this.props.handleChange}/>
                                <br />
                                <input type="submit" value="Update Park"/>
                            </form>
                        </details>
                        <Link
                            onClick={()=>this.props.getId(park._id)}
                        to={`/parks/${park._id}`}>
                            <h5>View More Details</h5>
                        </Link>
                    <button value={park._id} onClick={this.props.deletePark}>X</button>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default RecentParks;
