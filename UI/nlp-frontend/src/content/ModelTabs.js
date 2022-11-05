import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Example from './Example.js'
import { TextareaAutosize, TextField } from '@mui/material';
import { Button } from '@mui/material';
import fetch from "node-fetch";
import './Content.css'

export default function ModelTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [output, setOutput] = React.useState();

  async function queryBert(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bert",
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    const transformed = result[0].map(transformLabel);
    console.log(transformed);
    return transformed[0] + "   " + transformed[1] + "   " + transformed[2];
  }
  
  function getSentimentBert(e) {
    queryBert("input_text").then((response) => {
      console.log(JSON.stringify(response));
      setOutput(response);
    });
  }

  async function queryGPT2(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-gpt2",
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    const transformed = result[0].map(transformLabel);
    console.log(transformed);
    return transformed[0] + "   " + transformed[1] + "   " + transformed[2];
  }
  
  function getSentimentGPT2(e) {
    queryGPT2("input_text").then((response) => {
      console.log(JSON.stringify(response));
      setOutput(response);
    });
  }
 
  async function queryBloom(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bloom",
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    const transformed = result[0].map(transformLabel);
    console.log(transformed);
    return transformed[0] + "   " + transformed[1] + "   " + transformed[2];
  }
  
  function getSentimentBloom(e) {
    queryBloom("input_text").then((response) => {
      console.log(JSON.stringify(response));
      setOutput(response);
    });
  }

  async function query3in1(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bert", //change 
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    const transformed = result[0].map(transformLabel);
    console.log(transformed);
    return transformed[0] + "   " + transformed[1] + "   " + transformed[2];
  }
  
  function getSentiment3in1(e) {
    query3in1("input_text").then((response) => {
      console.log(JSON.stringify(response));
      setOutput(response);
    });
  }

  function transformLabel(label) {
    if (label.label === "LABEL_0") label.label = "Negative:";
    if (label.label === "LABEL_1") label.label = "Neutral:";
    if (label.label === "LABEL_2") label.label = "Positive:";
    return label.label + " " + label.score;
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="BERT" value="1" />
            <Tab label="GPT2" value="2" />
            <Tab label="Bloom" value="3" />
            <Tab label="3in1" value="4" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <h4>Sample Inputs</h4>
          <Example/>
          <h4>Enter your own input</h4>
          <div className="inputs">
            <TextField fullWidth id="input_text" variant="outlined"/>
          </div>
          <br></br>
          <button id="model" onClick={() => getSentimentBert("input_text")}>
              Get Sentiment
          </button>
          <br></br>
          <h4>Result</h4>
          <div className="outputs">
            <TextField fullWidth min-height="150px" id="outlined-read-only-input" variant="outlined" value={output} 
            InputProps={{readOnly: true}}
            />
          </div>
          <br></br>
          <h4>Model Card</h4>
          Further info of model
          <br></br><br></br>
          <h4>Model Usage</h4>
          How to download info
        </TabPanel>

        <TabPanel value="2">
          <h4>Sample Inputs</h4>
          <Example/>
          <h4>Enter your own input</h4>
          <div className="inputs">
            <TextField fullWidth id="input_text" variant="outlined"/>
          </div>
          <br></br>
          <button id="model" onClick={() => getSentimentGPT2("input_text")}>
              Get Sentiment
          </button>
          <br></br>
          <h4>Result</h4>
          <div className="outputs">
            <TextField fullWidth min-height="150px" id="outlined-read-only-input" variant="outlined" value={output} 
            InputProps={{readOnly: true}}
            />
          </div>
          <br></br>
          <h4>Model Card</h4>
          Further info of model
          <br></br><br></br>
          <h4>Model Usage</h4>
          How to download info
        </TabPanel>

        <TabPanel value="3">
          <h4>Sample Inputs</h4>
          <Example/>
          <h4>Enter your own input</h4>
          <div className="inputs">
            <TextField fullWidth id="input_text" variant="outlined"/>
          </div>
          <br></br>
          <button id="model" onClick={() => getSentimentBloom("input_text")}>
              Get Sentiment
          </button>
          <br></br>
          <h4>Result</h4>
          <div className="outputs">
            <TextField fullWidth min-height="150px" id="outlined-read-only-input" variant="outlined" value={output} 
            InputProps={{readOnly: true}}
            />
          </div>
          <br></br>
          <h4>Model Card</h4>
          Further info of model
          <br></br><br></br>
          <h4>Model Usage</h4>
          How to download info
        </TabPanel>

        <TabPanel value="4">
          <h4>Sample Inputs</h4>
          <Example/>
          <h4>Enter your own input</h4>
          <div className="inputs">
            <TextField fullWidth id="input_text" variant="outlined"/>
          </div>
          <br></br>
          <button id="model" onClick={() => getSentiment3in1("input_text")}>
              Get Sentiment
          </button>
          <br></br>
          <h4>Result</h4>
          <div className="outputs">
            <TextField fullWidth min-height="150px" id="outlined-read-only-input" variant="outlined" value={output} 
            InputProps={{readOnly: true}}
            />
          </div>
          <br></br>
          <h4>Model Card</h4>
          Further info of model
          <br></br><br></br>
          <h4>Model Usage</h4>
          How to download info
        </TabPanel>

      </TabContext>
    </Box>
  );
}
