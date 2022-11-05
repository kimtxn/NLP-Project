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
  
  const [input, setInput] = React.useState();

  const [output, setOutput] = React.useState();

  async function query(text_field) {
    const data = document.getElementById(text_field).value;
    console.log(data);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/LYTinn/finetuning-sentiment-model-tweet-bert",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  
  function getSentiment(e) {
    query("input_text").then((response) => {
      console.log(JSON.stringify(response));
    });
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
            <TextField id="input_text" variant="outlined"/>
          </div>
          <br></br>

          <button id="model" onClick={() => getSentiment("input_text")}>
              Get Sentiment
          </button>
          <br></br>

          <h4>Result</h4>
          <div className="outputs">
            <TextField id="outlined-read-only-input" variant="outlined" value={output} 
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
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <br></br>
          <Button id="model">
              Get Sentiment 
          </Button>
          <br></br><br></br>
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
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <br></br>
          <Button id="model">
              Run Model
          </Button>
          <br></br><br></br>
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
            <TextField id="outlined-basic" variant="outlined" />
          </div>
          <br></br>
          <Button id="model">
              Run Model
          </Button>
          <br></br><br></br>
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
