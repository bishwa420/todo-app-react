import React from "react"

import '../style/styles.css'

function Header() {

    const date = new Date()
    const hours = date.getHours()

    let greetingMessage = ""

    if(hours < 12) greetingMessage = "morning"
    else if(hours < 18) greetingMessage = "afternoon"
    else if(hours < 22) greetingMessage = "evening"
    else greetingMessage = "night"
    return (
        <div>
            <h1>Good {greetingMessage}!</h1> <br/>
            <h1>TODO list</h1>
        </div>
    )
}

export default Header;