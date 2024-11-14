import React from 'react';
import"./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
       <div className='widgets-input'>
         <SearchIcon className='widgets -searchIcon' />
         <input placeholder='Search Twitter' type='text' />
       </div>

       <div className='widgets-widgetContainer'>
         <h2> What's happening?</h2>

         <TwitterTweetEmbed tweetId={"1502436576986644487"} />

          <TwitterTimelineEmbed
           sourceType="profile"
           screenName="_molara"
           options={{ height: 400 }}
          />

          <TwitterShareButton
           url={"#"}
           options={{ text: "#reactjs is awesome", via: "_molara" }}
          />

       </div>
    </div>
  )
}

export default Widgets