import React from "react"

class Product extends React.Component {

    render() {
        return (
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Price: {this.props.price}</li>
                <li>Description: {this.props.description}</li>
            </ul>
        )
    }
}

export default Product