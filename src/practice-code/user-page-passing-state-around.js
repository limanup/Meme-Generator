// App.js

import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    
    const [user, setUser] = React.useState("Joe")
    
    return (
        <main>
            <Header user={user}/>
            <Body user={user}/>
        </main>
    )
}


// Header.js

export default function Header(props) {

    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

// Body.js

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}


// style.css

// * {
//     box-sizing: border-box;
// }

// body {
//     margin: 0;
//     background-color: whitesmoke;
// }

// header {
//     height: 65px;
//     box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
//     display: flex;
//     align-items: center;
//     padding-inline: 20px;
//     background-color: #dce6fd
// }

// section {
//     padding: 20px;
// }