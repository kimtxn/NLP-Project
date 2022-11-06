import "./Content.css";

function Project() {
  return (
    <div className="content">
      <h1>Sentiment Analysis on Twitter Data</h1>
      <br />
      <h2>Problem Statement</h2>
      Sentiment Analysis is the task of interpreting and classifying emotions
      (positive or negative) in the input text. In this project, we aim to build
      a sentiment analysis model on Twitter data which can classify whether a
      Tweet about a stock is "positive", "negative", or "neutral/objective".
      <br />
      <br />
      <h2>Why stock market tweets?</h2>
      We believe this is an interesting problem as Tweet data contains language
      that is different than normal texts as it is a good source of short,
      casual, and opinionated about various topics. Social media texts also
      provide a unique challenge due to the use of slang and other conventions
      which are different from formal text.
      <br />
      <br />
      Also, there is a lot of activity and opinions on technology stocks and
      meme stocks in recent months, which has sometimes been a precursor of
      drastic changes in the stock's price (see stocks like Gamestop and Bed
      Bath and Beyond). It would be interesting to be able to automatically
      classify the sentiments of social media data and find out how the market
      feels about certain companies. <br />
      <br />
      In particular, this kind of data could be used to spot trends in stocks
      and possibly even inform trading strategies, so there is a lot of
      possibility for further research questions (please see Other
      Visualizations for an example).
      <br />
      <br />
      Hence, we have chosen to train sentiment analysis models of stock market
      Tweets for our project.
      <br />
      <br />
      <h2>About the Project</h2>
      As humans, we have an intuitive grasp of "positive" and "negative"
      sentiments. We would like to train a model to be able to perform the same
      task. However, machines don't have the same advantage of decades of being
      immersed in real-world data as we do. Hence, relevant and useful training
      data is vital in training our models.
      <br />
      <br />
      We collected stock tweets related to technology stocks on Twitter to
      fine-tune existing sentiment analysis models. Below are some examples of
      real "positive", "neutral", and "negative" Tweets.
      <br />
      <br />
      You can find out more about the models we trained as well as test out the
      models on these real inputs in the "Models Demo" tab. Besides these,
      further information can be found on our report.
      <br />
      <br />
      <h2>Real-Life Examples</h2>
      <h3>Positive Tweet</h3>
      <center>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            We may never know how Elon funded the remaining equity to close the{" "}
            <a href="https://twitter.com/search?q=%24TWTR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
              $TWTR
            </a>{" "}
            deal. As a community, let’s rejoice that the deal closed and look
            forward to{" "}
            <a href="https://twitter.com/search?q=%24TSLA&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
              $TSLA
            </a>{" "}
            ‘s bright future and robust catalyst list ahead. Congrats{" "}
            <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">
              @elonmusk
            </a>{" "}
            on getting the deal done and setting the bird free!
          </p>
          &mdash; Gary Black (@garyblack00){" "}
          <a href="https://twitter.com/garyblack00/status/1586022455700688903?ref_src=twsrc%5Etfw">
            October 28, 2022
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </center>
      <h3>Neutral Tweet</h3>
      <center>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            If{" "}
            <a href="https://twitter.com/search?q=%24TWTR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
              $TWTR
            </a>{" "}
            stock were still trading, what would the current price be?
          </p>
          &mdash; Justin Wolfers (@JustinWolfers){" "}
          <a href="https://twitter.com/JustinWolfers/status/1588710089267240960?ref_src=twsrc%5Etfw">
            November 5, 2022
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </center>
      <h3>Negative Tweet</h3>
      <center>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            if i had all thu money in thu world, last thing on my mind wood b
            buying a bankrupt company with $6B in debt and tweetin all day{" "}
            <a href="https://twitter.com/search?q=%24TWTR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
              $TWTR
            </a>{" "}
            fukin loozer{" "}
            <a href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">
              @elonmusk
            </a>{" "}
            <a href="https://twitter.com/search?q=%24TSLA&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
              $TSLA
            </a>{" "}
            .u&#39;d find me livin on sum island in paradise without uh care in
            thu world 😂 its weird how people chooze 2 live life
          </p>
          &mdash; nobullshytrading (@nobullshytrader){" "}
          <a href="https://twitter.com/nobullshytrader/status/1587858528462688258?ref_src=twsrc%5Etfw">
            November 2, 2022
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </center>
      <br />
      <br />
    </div>
  );
}

export default Project;
