import React from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
    const [arrBoxes, setArrBoxes] = React.useState(boxes);

    // declarative method
    function toggle(id) {
        setArrBoxes((prevSqaures) => {
            return prevSqaures.map((square) => {
                return square.id === id
                    ? { ...square, on: !square.on }
                    : square;
            });
        });
    }

    const squares = arrBoxes.map((box) => (
        <Box on={box.on} key={box.id} toggle={() => toggle(box.id)} />
    ));

    return (
        <main>
            <h1>Boxes will go here</h1>
            {squares}
        </main>
    );
}
