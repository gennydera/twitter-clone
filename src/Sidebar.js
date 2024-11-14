 import React from 'react';
 import './Sidebar.css';
 import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';

 function Sidebar() {

    const options = [
        {
            icon: <HomeIcon />,
            text: "Home", 
            active: "active"
        },
        {
            icon: <SearchIcon />,
            text: "Explore"
        },
        {
            icon: <NotificationsOutlinedIcon />,
            text: "Notifications"
        },
        {
            icon: <EmailOutlinedIcon />,
            text: "Messages"
        },
        {
            icon: <BookmarkBorderOutlinedIcon />,
            text: "Bookmarks"
        },
        {
            icon: <ListAltOutlinedIcon />,
            text: "Lists"
        },
        {
            icon: <PermIdentityOutlinedIcon />,
            text: "Profile"
        },
        {
            icon: <MoreHorizOutlinedIcon />,
            text: "More"
        },
    ]


   return (
     <div className='sidebar'>
     
      <TwitterIcon  className='twitter-icon'/>

     {options?.map ((item) => (
        <SidebarOption  {...item}/>  
     ))}

     <Button className="sidebar-tweet">
       Tweet
     </Button>
    
     </div>
   )
 }
 
 export default Sidebar