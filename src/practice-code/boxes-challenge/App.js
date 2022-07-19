import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App(props) {
    const [arrBoxes, setArrBoxes] = React.useState(boxes);

    function toggle(id) {
        setArrBoxes((prevSqaures) => {
            const newSquares = [];

            for (let i = 0; i < prevSqaures.length; i++) {
                if (prevSqaures[i].id === id) {
                    const newBox = {
                        id: id,
                        on: !prevSqaures[i].on,
                    };
                    newSquares.push(newBox);
                } else {
                    newSquares.push(prevSqaures[i]);
                }
            }
            return newSquares;
        });
    }

    const squares = arrBoxes.map((box) => (
        <Box on={box.on} key={box.id} id={box.id} toggle={toggle} />
    ));

    return (
        <main>
            <h1>Boxes will go here</h1>
            {squares}
        </main>
    );
}
