import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, settext] = useState("");

    const upperbuttonclicked = () => {
        console.log('clicked the button');
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    function handleonchange(event) {
        console.log('onchange occured');
        settext(event.target.value);
    }
    const lowerbuttonclicked = () => {
        console.log("lowercase button clicked");
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const clearbuttonclicked = () => {
        let newtext = "";
        settext(newtext);
    }
    function copybuttonclicked() {
        var mytext = document.getElementById('my-box')
        mytext.select();
        navigator.clipboard.writeText(mytext.value);
    }
    function extraspacebuttonclicked() {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
    }
    return (

        <div className={`container text-${(props.mode == 'light') ? 'dark' : 'light'}`}>
            <div className='container my-2'>
                <h1 className='py-2'>Enter your text here</h1>
                <textarea className={`form-control bg-${(props.mode == 'dark') ? 'secondary' : 'secondary-subtle'} text-${(props.mode == 'light') ? 'dark' : 'light'}`} id='my-box' cols="30" rows="10" value={text} onChange={handleonchange}></textarea>
                <div className="container">
                    <button className={`btn btn-${(props.mode=='dark')?'secondary':'info'} my-2 mx-2`} onClick={upperbuttonclicked}>convert to uppercase</button>
                    <button className={`btn btn-${(props.mode=='dark')?'secondary':'info'} my-2 mx-2`} onClick={lowerbuttonclicked}>convert to lowercase</button>
                    <button className={`btn btn-${(props.mode=='dark')?'secondary':'info'} my-2 mx-2`} onClick={clearbuttonclicked}>clear text</button>
                    <button className={`btn btn-${(props.mode=='dark')?'secondary':'info'} my-2 mx-2`} onClick={copybuttonclicked}>copy text</button>
                    <button className={`btn btn-${(props.mode=='dark')?'secondary':'info'} my-2 mx-2`} onClick={extraspacebuttonclicked}>remove extra space</button>
                </div>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>your words <b>{(text.length == 0)?'0':text.trim().split(" ").length}</b> and your characters <b>{text.length}</b>.</p>
                <p>your text can be read in <b>{(text.length == 0)?'0':0.003 * text.split(" ").length}</b> minutes</p>
            </div>
        </div>

    )
}
