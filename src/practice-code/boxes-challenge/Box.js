import { useState } from "react";

export default function Box(props) {

    return (
        <div
            className="boxes"
            style={{ backgroundColor: props.on ? "#222222" : "transparent" }}
            onClick={() => props.toggle(props.id)}
        ></div>
    );
}
