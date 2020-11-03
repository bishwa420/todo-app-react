import React from "react"

import '../style/styles.css'

function Header() {

    const date = new Date(2020, 11, 3, 23)
    const hours = date.getHours()

    const styles = {
        backgroundColor: "yellow",
        color: "orange"
    }

    let greetingMessage = ""

    if(hours < 12) {
        greetingMessage = "morning"
        styles.color = "orange"
    } else if(hours < 18) {
        greetingMessage = "afternoon"
        styles.color = "red"
    } else if(hours < 22) {
        greetingMessage = "evening"
        styles.color = "black"
    } else {
        greetingMessage = "night"
        styles.color = "green"
    }
    return (
        <div>
            <h1 style={styles}>Good {greetingMessage}!</h1> <br/>
            <h1 style={styles}>TODO list</h1>
        </div>
    )
}

export default Header;