import "./Content.css";
import ModelTabs from "./ModelTabs.js";

function Content() {
  return (
    <div className="content">
      <h1>Models Demo</h1>
      We have prepared 4 models that can each classify a Tweet into "positive",
      "neutral", or "negative" labels by solving the subtasks of subjectivity
      detection and polarity analysis. These pre-trained NLP models have been
      fine-tuned with labeled Tweets regarding technology stocks, so they work
      best on Tweets about social media opinions on the stock market.
      <br />
      <br />
      Feel free to try out any of these with an input sentence or Tweet of your
      choice!
      <br />
      <br />
      <h2>Select Model</h2>
      <ModelTabs />
    </div>
  );
}

export default Content;
