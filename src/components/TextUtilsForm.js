import React from "react";
import { useState } from "react";


export default function TextUtilsForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase Succesfully" , "success")
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase Succesfully" , "success")
  };


  const handleCapClick = () => {
    let newText =text.split(" ")
    const capitalizedText = newText.map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
    });
    setText(capitalizedText.join(" ")); 
    props.showAlert("Converted to Title Case Succesfully" , "success")
};


const handleCopy =() =>{
  let text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copy to Clipboard Succesfully" , "success")
}

const removeExtraSpaces =()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Remove extra spaces Succesfully" , "success")
}

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear text Succesfully" , "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const words = text.split(/\s+/).filter(word => word !== "");
  const numberOfWords = words.length;

  return (
    <>
      <div className="container my-4 mb-1" style={{color : props.mode==='light'?'black':'white'}}>
        <h3>Enter your text here :</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor : props.mode==='light'?'white':'grey' , color : props.mode==='light'?'black':'white'}}
          id="myBox"
          rows={10}
        ></textarea>

        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert text to UpperCase
        </button>

        <button className="btn btn-primary my-3 mx-1" onClick={handlelowClick}>
          Convert text to LowerCase
        </button>

        <button className="btn btn-primary my-3 mx-1" onClick={()=>handleCapClick()}>
          Convert text to Title Case
        </button>

        <button
          className="btn btn-primary my-3 mx-1"
          onClick={handleClearClick}>
          Clear your Text
        </button>

        <button className="btn btn-primary my-3 mx-1" onClick={()=>handleCopy()}>
          Copy your text
        </button> 

        <button className="btn btn-primary my-3 mx-1" onClick={()=>removeExtraSpaces()}>
         Remove Extra Spaces
        </button> 
        

      </div>

      <div className="container mt-0" style={{color : props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>

        {/* <p>
          {text.split(" ").length} words and {text.length} charcaters
        </p> */}

        <p>
          {`${numberOfWords} words`} words and {text.length} charcaters
        </p>
      
        <p>
          Approximately you can read it in {0.008 * text.split(" ").length}{" "}
          Minutes
        </p>
      </div>
    </>
  );
}
