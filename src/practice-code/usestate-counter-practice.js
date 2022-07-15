import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [count, setCount] = React.useState(0)
    
    function minusOne() {
        setCount(count - 1)
    }
    
    function addOne () {
        setCount(count + 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusOne}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={addOne}>+</button>
        </div>
    )
}
