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

  async function queryEnsemble(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    //api1
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bert", //change 
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    const transformed = result[0].map(transformExtra);
    console.log(transformed);
    //api2
    const response2 = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-gpt2", //change 
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result2 = await response2.json();
    const transformed2 = result2[0].map(transformExtra);
    console.log(transformed2);
    //api3
    const response3 = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bloom", //change 
      {
        headers: { Authorization: "Bearer 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" }, //token
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result3 = await response3.json();
    const transformed3 = result3[0].map(transformExtra);
    console.log(transformed3);
    //api1+2+3
    if(transformed[0] === transformed2[0]) return transformed[0];
    if(transformed[0] === transformed3[0]) return transformed[0];
    if(transformed2[0] === transformed3[0]) return transformed[0];
    else return "Neutral"
  }
  
  function getSentimentEnsemble(e) {
    queryEnsemble("input_text").then((response) => {
      console.log(JSON.stringify(response));
      setOutput(response);
    });
  }

  function transformExtra(label) {
    if (label.label === "LABEL_0") label.label = "Negative"; //negative
    if (label.label === "LABEL_1") label.label = "Neutral"; //neutral
    if (label.label === "LABEL_2") label.label = "Positive"; //positive
    return label.label;
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
            <Tab label="Ensemble" value="4" />
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
          Bidirectional Encoder Representations from Transformers (BERT) is an open source machine learning framework that can be used in Huggingface 
          for natural language processing. It is designed to enable understanding of ambiguous text languages in text by using texts in its surrounding 
          to establish some context since it works on the core concept of attention.
          <br></br><br></br>
          Using the mechanism of attention, 
          it can enhance important input data parts and fade out the others to generate an output that devotes more computing power to important parts of the sentence/tweets. 
          <br></br><br></br>
          <h4>Model Usage</h4>
          https://huggingface.co/docs/transformers/model_doc/bert
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
          Generative Pre-trained Transformer 2 (GPT2) is a pre-trained model which scrapes away the need of training a model from scratch 
          and hence eliminates the humongous amount of time and effort to build a new model. 
          <br></br><br></br>
          Similar to BERT, it is a large-scale transformer based language model. Furthermore, it is also autoaggressive in nature which 
          assumes past values affect the current values. It functions just like other traditional models which does a prediction on the 
          outputs when it takes in the input vector words. It also portrays its ability of solving a variety of NLP tasks without 
          fine-tuning when the model is trained on large-scale data. 
          <br></br><br></br>
          <h4>Model Usage</h4>
          https://huggingface.co/gpt2?text=My+name+is+Thomas+and+my+main
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
          BLOOM is a multilingual large language model that is capable of learning from large groups of texts. 
          It can generate texts in a multitude of natural languages and programming languages. 
          <br></br><br></br>
          It guesses the next word in a tweet/sentence and compares the guess to the actual word. 
          The model parameters can be adjusted based on how well it works.
          <br></br><br></br>
          <h4>Model Usage</h4>
          https://huggingface.co/docs/transformers/model_doc/bloom
        </TabPanel>

        <TabPanel value="4">
          <h4>Sample Inputs</h4>
          <Example/>
          <h4>Enter your own input</h4>
          <div className="inputs">
            <TextField fullWidth id="input_text" variant="outlined"/>
          </div>
          <br></br>
          <button id="model" onClick={() => getSentimentEnsemble("input_text")}>
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
          For our innovation, Ensemble learning is incorporated. Ensemble learning often can boost the performance of related tasks as these often have 
          inter-dependence on each other and perform better when solved in a joint instead of a single framework. 
          <br></br><br></br>
          Its usage is basically to solve multiple different tasks in a simultaneous manner 
          and account the advantages of the similarities between these different tasks.
          <br></br><br></br>
          It forces the model to learn a more general 
          representation as it learns on not just one particular specific task but 2 or more tasks. 
          Hence each task in turn improves the performance with other tasks and can help in saving time, space and reducing complexity.
          <br></br><br></br>
          <h4>Model Usage</h4>
          https://machinelearningmastery.com/tour-of-ensemble-learning-algorithms/
        </TabPanel>

      </TabContext>
    </Box>
  );
}
