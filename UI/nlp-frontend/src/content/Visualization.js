import React from 'react'
import "./Content.css";
import WordCloud from "./elements/WordCloud";

function Visualization(){
  return(
    <div className="content">
        <h1>Some Visualizations</h1>
        <WordCloud />
    </div>
  );
}

export default Visualization;