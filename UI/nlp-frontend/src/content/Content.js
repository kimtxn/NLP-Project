import "./Content.css";
import Model from "./Model.js";
import ModelTabs from "./ModelTabs.js";

function Content() {
  return (
    <div className="content">
      <h1>Sentiment Analysis on Twitter Data</h1>
      Sentiment Analysis is the task of interpreting and classifying emotions
      (positive or negative) in the input text.
      <br />
      <br />
      <h2>Select Model</h2>
      <ModelTabs />
    </div>
  );
}

export default Content;
