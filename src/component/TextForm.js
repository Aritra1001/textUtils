import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    // console.log("handle up case was clicked");
    let upperText = text.toUpperCase();
    console.log(upperText);
    setText(upperText);
    props.alertMsg("Text is converted to uppercase", "success");
  };

  const handleLowCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.alertMsg("Text is converted to lowercase", "success");
  };

  const handleClearText = () => {
    let clearText = "";
    setText(clearText);
    props.alertMsg("Text is cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Onchange");
    let textValue = event.target.value;
    // console.log(textValue);
    setText(textValue);
  };

  const handleCopyText = () => {
    var text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alertMsg("Text is copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertMsg("Extra spaces removed", "success");
  };

  return (
    <>
      <div className="container my-3" style={props.mode === 'dark'? {color: 'whitesmoke'}: {color: 'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textArea"
            value={text}
            rows="8"
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={props.mode === 'dark'? {color:'white', backgroundColor: '#1f1d1d'}: {backgroundColor: 'white'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'dark'?'primary':'outline-primary'} mx-1`} onClick={handleUpCase}>
          Change to UpperCase
        </button>
        <button
          className={`btn btn-${props.mode === 'dark'? 'primary': 'outline-primary'} mx-1`}
          onClick={handleLowCase}
        >
          Change to LowerCase
        </button>
        <button className={`btn btn-${props.mode === 'dark'? 'primary': 'outline-primary'} mx-1`} onClick={handleClearText}>
          Clear Text
        </button>
        <button
          className={`btn btn-${props.mode === 'dark'? 'primary': 'outline-primary'} mx-1`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button 
          className={`btn btn-${props.mode === 'dark'? 'primary': 'outline-primary'} mx-1`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={props.mode === 'dark'? {color: 'whitesmoke'}: {color: 'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter something in the textbox to preview it"}</p>
      </div>
    </>
  );
}
