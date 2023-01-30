// import react from 'react';

import { useState, } from "react";

function Home(props){
    const [text, setText] = useState("");
    
    //handle onchange
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    //to change into uppercase
    const handleUppercase = () => {
         setText(text.toUpperCase());
    }
    //to change into lowercase
    const handleLowercase = () => {
        setText(text.toLowerCase());
    }
    //to remove all space
    const removeSpace = () => {
        setText(text.split(/[ ]+/).join(" "));
    }
    //copy text
    const handleCopyText = () => {
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // to clear text
    const handleClear = () => {
        setText("");
    }
    return(
        <>
            <div className={`container mt-5 text-${props.mode === 'light'?'dark':'light'}`} >
                <h1>Enter Text below:</h1>  
                <div className="mb-3">
                    <textarea id="textBox"  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} className="form-control" rows="5" autoFocus></textarea>    
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUppercase}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercase}>Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove Space</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>

                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-6">
                            <h2>Preview</h2>
                            <p>{text}</p>
                        </div>
                        <div className="col-6">
                            <h2>About Text</h2>
                            <p>Total Characters: {text.length}</p>
                            <p>Total Words: {text === '' ? text.split(" ").length-1:text.split(" ").length}</p>
                            <p>Total Sentences: {text === '' ? text.split(".").length-1:text.split(".").length}</p>
                            <p>Time to read: {0.008 * text.length} minute.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;