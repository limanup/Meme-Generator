import memesData from "../memesData";
import { useState, useEffect } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });
    
    const [allMemes, setAllMemes] = useState({});
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setAllMemes(data.data.memes))
    }, [])
    
    console.log(allMemes)


    function getRandomMeme() {
        // Use Math.random() function to get the random number between(0-1, 1 exclusive).
        // Multiply it by the array length to get the numbers between(0-arrayLength).
        // Use Math.floor() to get the index ranging from(0 to arrayLength-1).
        const randomMeme =
            allMemes[Math.floor(Math.random() * allMemes.length)];
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: randomMeme.url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <form>
                <input
                    autoComplete="off"
                    autoFocus
                    placeholder="Text on top"
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input
                    placeholder="Text on bottom"
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>
                <button type="button" onClick={getRandomMeme}>
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme-container">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text text-top">{meme.topText}</h2>
                <h2 className="meme-text text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
