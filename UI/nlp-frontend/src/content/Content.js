import React from 'react'
import "./Content.css";
import Model from "./Model.js"
import ModelTabs from "./ModelTabs.js"

function Content(){
  return(
    <div className="content">
        <h1>Sentiment Analysis on Twitter Data</h1>
        Sentiment Analysis is the task of interpreting and classifying emotions (positive or negative) in the input text.
        {/* <Model/> */}
        <h2>About Model</h2>
        <ModelTabs/>
    </div>
  );
}

export default Content;