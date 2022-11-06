import "./Content.css";
import Negative from "./elements/Negative.svg";
import Neutral from "./elements/Neutral.svg";
import Positive from "./elements/Positive.svg";
import Plot from "react-plotly.js";

function Dataset() {
  const data = [
    {
      type: "treemap",
      labels: ["Positive", "Negative", "Neutral"],
      values: [348, 330, 663],
      parents: ["Dataset", "Dataset", "Dataset"],
      marker: { colors: ["YellowGreen", "Tomato", "#1D9BF0"] },
    },
  ];

  const plot = (
    <Plot
      data={data}
      layout={{
        width: 500,
        height: 280,
        margin: { t: 0, l: 0, r: 0, b: 0 },
      }}
    ></Plot>
  );

  return (
    <div className="content">
      <h1>About the Dataset</h1>
      <br />
      <h2>TreeMap</h2>
      The following treemap shows the distribution of positive, negative, and
      neutral samples within the manually-labeled test data of our dataset.
      <br />
      <br />
      Preprocessing to remove extra samples has been performed in order to get
      close to the ideal ratio of 2:1:1 for neutral, positive, and negative
      records.
      <div className="image">{plot}</div>
      <br />
      <h2>WordCloud</h2>
      This shows a visual representation of the most common words in the
      positive, neutral, and negative records in our manually labelled dataset.
      Words in the wordcloud are single words, where the frequency of the word
      is visualized by its size in the wordcloud.
      <br />
      <div className="image">
        <img src={Positive} width="400vw" />
        <br />
        Words appearing most frequently in positive records.
        <br />
        <br />
        <img src={Neutral} width="400vw" />
        <br />
        Words appearing most frequently in neutral records.
        <br />
        <br />
        <img src={Negative} width="400vw" />
        <br />
        Words appearing most frequently in negative records.
        <br />
      </div>
    </div>
  );
}

export default Dataset;
