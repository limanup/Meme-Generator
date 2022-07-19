export default function Box (props) {
    return (
        <div
            className="boxes"
            on={props.on}
            style={{backgroundColor: props.on ? "#222222" : "none"}}
        ></div>
    )
}