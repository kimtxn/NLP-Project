import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = [
  "We may never know how Elon funded the remaining equity to close the $TWTR deal. As a community, let’s rejoice that the deal closed and look forward to $TSLA ‘s bright future and robust catalyst list ahead. Congrats @elonmusk on getting the deal done and setting the bird free!",
  "If $TWTR stock were still trading, what would the current price be?",
  "if i had all thu money in thu world, last thing on my mind wood b buying a bankrupt company with $6B in debt and tweetin all day $TWTR fukin loozer @elonmusk $TSLA .u'd find me livin on sum island in paradise without uh care in thu world 😂 its weird how people chooze 2 live life",
  "I love AAPL stock... it always makes me money 🤑",
  "Honestly, I couldn't care less about the stock market.",
  "META stock sucks, how is this company not bankrupt yet?",
];

export default function Example() {
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

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "rgba(226, 230, 233, 0.21)" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Hrm?"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText primary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
