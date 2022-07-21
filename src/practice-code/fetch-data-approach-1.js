import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    // console.log("Component rendered")
    /**
     * with .then(data => setStarWarsData(data))
     * code will actually run in an infinite loop
     * Reason: fetch lives on top level of our component
     * so anytime the component renders, it will call fetch
     * then fetch will setStarWarsData
     * which updates state 
     * causing react to re-render the component again
     * goes in a loop
     */
    


    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        // .then(data => setStarWarsData(data))
        .then(data => console.log(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
