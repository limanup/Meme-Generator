import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App(props) {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [arrBoxes, setArrBoxes] = React.useState(boxes);

    // const backColor = props.darkMode? "#222222" : "#CCCCCC"
    // const styles = {backgroundColor: backColor}
    
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    
    const squares = arrBoxes.map((box) => (
        <Box on={box.on} key={box.id} />
    ));
    
    return (
        <main>
            <h1>Boxes will go here</h1>
            {squares}
        </main>
    );
}
