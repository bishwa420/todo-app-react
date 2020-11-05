import React from "react"

function Product(props) {

    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Price: {props.price}</li>
            <li>Description: {props.description}</li>
        </ul>
    )
}

export default Product