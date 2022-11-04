import React from 'react'
import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import HomeIcon from '@mui/icons-material/Home';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import DatasetIcon from '@mui/icons-material/Dataset';
import InsightsIcon from '@mui/icons-material/Insights';
import { Button } from "@mui/material";

function Sidebar(){
  return(
    <div className="sidebar">
      {/* <SidebarLink link="/home" text="Home" Icon={HomeIcon} /> */}
      <SidebarLink link="/" text="About the Project" Icon={SentimentSatisfiedAltIcon} />
      <SidebarLink link="/dataset" text="About the Dataset" Icon={DatasetIcon} />
      <SidebarLink link="/demo" text="Models Demo" Icon={BiotechIcon} />
      <SidebarLink link="/visualization" text="Other Visualizations" Icon={InsightsIcon} />
      <Button id="tweet">
          Tweet
      </Button>
    </div>
  );
}

export default Sidebar;