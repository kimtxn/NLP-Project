import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Example from './Example.js'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import './Content.css'

const options = [
  'BERT',
  'GPT2',
  'Bloom',
];
const descriptions = [
  'Some info about BERT',
  'Some info about GPT2',
  'Some info about Bloom',
];

export default function ModelTabs() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Hrm?"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={options[selectedIndex]}
            secondary={descriptions[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}{": "}
            {descriptions[index]}
          </MenuItem>
        ))}
      </Menu>
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
            <TextField id="user_input" variant="outlined" fullWidth />
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
    </div>
  );
}
