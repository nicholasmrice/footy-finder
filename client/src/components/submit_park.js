import React from 'react'

class SubmitAPark extends React.Component {
    render = () => {
        return (
            <div id="submit-park-container">
                <h2>Add a Park</h2>
                <form id="submit-park-form" onSubmit={this.props.createPark}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={this.props.handleChange} value={this.props.state.name}/>
                    <br/>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" onChange={this.props.handleChange} value={this.props.state.address}/>
                    <br/>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="text" onChange={this.props.handleChange} value={this.props.state.image}/>
                    <br/>
                    <input type="submit" value="Create New Park"/>
                </form>
            </div>
        )
    }
}

export default SubmitAPark
