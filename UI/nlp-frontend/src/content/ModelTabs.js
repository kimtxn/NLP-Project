import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Example from './Example.js'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import './Content.css'

export default function ModelTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Demo" value="1" />
            <Tab label="Model Card" value="2" />
            <Tab label="Model Usage" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
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
        </TabPanel>
        <TabPanel value="2">Content Two</TabPanel>
        <TabPanel value="3">Content Three</TabPanel>
      </TabContext>
    </Box>
  );
}
