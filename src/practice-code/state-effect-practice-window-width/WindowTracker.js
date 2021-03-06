import React from "react"
import {useState, useEffect} from React

export default function WindowTracker() {

    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        // move the function outside of event listener to re-use
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        console.log("Setting up...")
        window.addEventListener("resize", watchWidth)

        // use return to clean-up side effect to avoid memory leak
        return () => {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }

    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}


/**
 * above code will generate a memory leak when the window width is toggled off
 * (in App.js)
 * Error message:
 * Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:69:56)
 * so we used return function to clean up side effect
 */