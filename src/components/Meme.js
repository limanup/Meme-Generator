export default function Meme () {
    return (
        <main>
            <form>
                <input autoComplete='off' autoFocus placeholder="Text on top" type='text'></input>
                <input autoComplete='off' placeholder="Text on bottom" type='text'></input>
                <button type='submit'>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}