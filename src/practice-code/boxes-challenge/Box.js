import { useState } from "react";

export default function Box(props) {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     *
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     *
     * Goal: clicking each box should toggle it on and off.
     */

    const [isColorOn, setIsColorOn] = React.useState(props.on);

    return (
        <div
            className="boxes"
            style={{ backgroundColor: isColorOn ? "#222222" : "transparent" }}
            onClick={() => {
                setIsColorOn(!isColorOn);
                // setIsColorOn(prevOn => !prevOn)
            }}
        ></div>
    );
}
