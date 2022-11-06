import "./Info.css";

function Info() {
  return (
    <div className="info">
      <div className="infoBox">
        <h2>Relevant people</h2>
        This project was jointly created by
        <ul class="repeating-counter-rule">
          <li>Kimberley</li>
          <li>Tianrun</li>
          <li>Zhong Zin</li>
          <li>Ashley</li>
          <li>Trung</li>
          <li>Shun Bin</li>
        </ul>
      </div>
      <br />
      <div className="infoBox">
        <h2>Trends for you</h2>

        <ul class="repeating-counter-rule">
          <li>NLP</li>
          <li>Twitter</li>
          <li>$TWTR</li>
          <li>Stocks</li>
          <li>Financial Tweets</li>
          <li>BERT</li>
          <li>GPT2</li>
          <li>Bloom</li>
          <li>Stacked Ensemble</li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Info;
