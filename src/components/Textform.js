import React, { useState } from "react";

export default function Textform(props) {
  const handleChange = (event) => {
    // console.log('Handle change occured')
    setText(event.target.value);
  };
  const UpperCase = () => {
    //console.log("Button was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success","Converted to Upper Case.")

  }
  const LowerCase = () => {
    //console.log("Button was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert( 'success','Converted to lower case')

  };
  //cleartext
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert( 'success','Text has been cleared')

  };

  //handleonchange
  const handleFindChange = (event) => {
    setfindWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
    setreplaceWord(event.target.value);
  };

  const handleFindAndReplace = () => {
    if (findWord) {
      const newText = text.replaceAll(findWord, replaceWord);
      setText(newText);
      props.showAlert( 'success','Word replaced successfully')

    }
  };

  //remove extra spaces
  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert( 'success','Extra spaces removed successfully')

  };

  const [text, setText] = useState("");
  const [findWord, setfindWord] = useState("");
  const [replaceWord, setreplaceWord] = useState("");

  //text is our value.setText() is a function to change value of text.

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            onChange={handleChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className=" btn btn-secondary mx-5" style={{backgroundColor:'#19297C'}} onClick={UpperCase}>
          Convert to upper case
        </button>
        <button className="btn btn-secondary mx-5"style={{backgroundColor:'#19297C'}}  onClick={LowerCase}>
          Convert to lower case
        </button>
        <button className="btn btn-secondary mx-5"style={{backgroundColor:'#19297C'}}  onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-5" style={{backgroundColor:'#19297C'}}  onClick={removeSpace}>
          Remove Extra Spaces
        </button>
      </div>
       {/* Input field for the word/phrase to find */}
       <div className="mb-3">
          <label htmlFor="findWord" className="form-label" style={{
              color: props.mode === "dark" ? "white" : "#5C6B73"}}>
            Find
          </label>
          <input
            type="text"
            className="form-control"
            id="findWord"
            value={findWord}
            onChange={handleFindChange}
            style={{
              color: props.mode === "dark" ? "white" : "#5C6B73",
              backgroundColor: props.mode === "dark" ? "#5C6B73" : "white",
            }}
            placeholder="Enter word or phrase to find"
          />
        </div>

        {/* Input field for the word/phrase to replace with */}
        <div className="mb-3">
          <label htmlFor="replaceWord" className="form-label" style={{
              color: props.mode === "dark" ? "white" : "#5C6B73"}}>
            Replace With
          </label>
          <input
            type="text"
            className="form-control"
            id="replaceWord"
            value={replaceWord}
            onChange={handleReplaceChange}
            style={{
              color: props.mode === "dark" ? "white" : "#5C6B73",
              backgroundColor: props.mode === "dark" ? "#5C6B73" : "white",
            }}
            placeholder="Enter word or phrase to replace with"
          />
          <button
            className="btn btn-success my-2"
            onClick={handleFindAndReplace} style={{backgroundColor:'#19297C'}} 
          >
            Replace Text
          </button>
        </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#5C6B73" : "white",
        }}
      >
        <h2>Summary</h2>
        <p>
          words {text.split(" ").length} characters {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p> {text.length>0 ? text :"Enter the text in the textbox above to preview here"} </p>
      </div>
    </>
  );
}