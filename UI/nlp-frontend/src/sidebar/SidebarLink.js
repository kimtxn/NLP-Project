import React from 'react'
import "./SidebarLink.css";

function SidebarLink({ link, text, Icon }) {
  return(
    <a href={link}>
    <div className="link">
        <Icon />
        <div className="navlink">{text}</div>
    </div>
    </a>
  );
}
export default SidebarLink;