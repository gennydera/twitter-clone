import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetbox-input'>
              <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
              <input
                placeholder="What's happening?"
                type="text"
              />
             </div>
             <input
                 className='tweetbox-imageInput'
                placeholder="Optional: Enter image URL"
                type="text"
              />
             <Button className="tweetBox-button">
                 Tweet
              </Button>
        </form>   
    </div>
  )
}

export default TweetBox