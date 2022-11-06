import "./Header.css";
import TwitterIcon from "@mui/icons-material/Twitter";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div id="twitter-icon">
          <TwitterIcon fontSize="large" />
        </div>
        <div id="header-text">
          Sentiment Analysis of Stock Market Tweets on Technology Stocks
        </div>
      </div>
    </div>
  );
}

export default Header;
