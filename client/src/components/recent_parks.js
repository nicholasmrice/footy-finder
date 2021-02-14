import React from 'react'
import {Link} from 'react-router-dom'

class RecentParks extends React.Component {
    render = () => {
        return (
            <div id="recent-parks-container">
                <h2>Recently Added Parks</h2>
                <div id="recent-grid-container">
                {this.props.state.parks.map((park) => {
                    return <div key={park.id}>
                       <img src={park.image} alt="park"/>
                        <h5>Park: {park.name}</h5>
                        <h5>Address: {park.address}</h5>
                        <details>
                            <summary>Edit Park</summary>
                            <form id={park.id} onSubmit={this.props.updatePark}>
                                <label htmlFor="name">name</label>
                                <input type="text" id="name"    onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="address">address</label>
                                <input type="text" id="address" onChange={this.props.handleChange}/>
                                <br />
                                <label htmlFor="image">image</label>
                                <input type="text" id="image" onChange={this.props.handleChange}/>
                                <br />
                                <input type="submit" value="Update Park"/>
                            </form>
                        </details>
                        <Link to={`/show/${park.id}`}>
                            <h5>View More Details</h5>
                        </Link>
                    <button value={park.id} onClick={this.props.deletePark}>X</button>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default RecentParks
