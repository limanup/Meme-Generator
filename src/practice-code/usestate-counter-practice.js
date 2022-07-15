import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [count, setCount] = React.useState(0)
    

    /**
     * this is an example of changing state with a callback function
     * the callback function changes prevCount to prevCount + 1
     * this is an arrow function 
     */
    function minusOne() {
        setCount(prevCount => prevCount - 1)
    }

    /**
     * this is an exmaple of changing state without callback function
     * which is not ideal
     * function addOne () {
     *      setCount(count + 1)
     * }
     * */ 
    
    function addOne () {
        setCount(prevCount => prevCount + 1)
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
