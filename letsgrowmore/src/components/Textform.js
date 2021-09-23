import React, { useState } from "react";

export default function Textform(props) {
  const uppercase = () => {
    console.log("Uppercase was clicked" + text);
    let NewText = text.toUpperCase();
    setText(NewText);
  };
 const lowercase=() => {
   console.log("lowercase was clicked")
   let NewText = text.toLowerCase();
   setText(NewText);
 }

const handleconverter =()=>{
  let NewText = text.replaceAll("class=","className=");
  setText(NewText);
  };
  const capitalize = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let NewText= firstchar.toUpperCase(); // converting that to uppercase
    setText(NewText+text.slice(1)); // printing it with rest excluding the first char by using slice

}
const intoTitleCase = () => {
  let NewText = text.split(" ").map((currentValue) => {
      let NewText = currentValue[0].toUpperCase() + currentValue.slice(1);
    <div className="" >  hiiii</div>
   return NewText
  });
  setText(NewText.join(" "));
}
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const toclear = () => {
    let NewText = " "
    setText(NewText)
  }
  const [text, setText] = useState("Enter your text here");

  //   setText("this is jiyan");
  return (
    <>
      <div className="container" style={{color:props.mode==="dark" ? "white" : "#042743"}}
>
        <h1> {props.heading} - </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{backgroundColor:props.mode==="dark" ? "grey" : "white",color:props.mode==="dark" ? "white" : "#042743"}}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={uppercase}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={lowercase}>
            covert to lowercase
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handleconverter}>
            To trim whitespace
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={capitalize}>
    TO capitalize the fist letter
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={intoTitleCase}>
To title case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={toclear}>
clear the text field
          </button>
        </div>
        <div className="container " style={{color:props.mode==="dark" ? "white" : "#042743"}}>
          <h1>Your text summary</h1>
          <p>
           <b> {text.split(" ").length} words and {text.length} characters</b>
          </p>
          <p>
            {0.008 * text.split(" ").length.toFixed(2)} MInutes to read thec contnet
          </p>
          <h2> Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
