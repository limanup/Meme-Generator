import memesData from "../memesData";

export default function Meme () {

    function getRandomMeme () {
        const memesArr = memesData.data.memes
        // Use Math.random() function to get the random number between(0-1, 1 exclusive).
        // Multiply it by the array length to get the numbers between(0-arrayLength).
        // Use Math.floor() to get the index ranging from(0 to arrayLength-1).
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        console.log(randomMeme.url)
    }

    return (
        <main>
            <form>
                <input autoComplete='off' autoFocus placeholder="Text on top" type='text'></input>
                <input autoComplete='off' placeholder="Text on bottom" type='text'></input>
                <button type='button' onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}