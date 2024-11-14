import React from 'react';
import './SidebarOption.css';

function SidebarOption({active, text, icon }) {
  return (
    <>
    <div className={`sidebarOption ${active && `sidebarOption--active`}`}>
        {icon}
    <h2 className=''>{text}</h2> 
    </div>
    </>
  )
}
 
export default SidebarOption