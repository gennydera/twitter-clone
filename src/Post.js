import React from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName, userName, verified, text, image, avatar}) {
  return (
    <div className='post'>
        <div className='post-avatar'>
           <Avatar src={avatar}/>
        </div>
        <div className='post-body'>
          <div className='post-header '>
            <div className='post-headerText'>
              <h3>
                {displayName} {" "}
                <span className='post-headerSpecial   '>
                 {verified && <VerifiedIcon className='post-badge ' /> } 
                 {" "} @{userName}
                </span>
              </h3>
            </div>
            <div className='post-headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          {/* <img src= {image} alt="" /> */}
          <div><iframe src={image} height="100%" id="iframe1" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p></p>
          <div className='post-footer'>
            <ChatBubbleOutlineOutlinedIcon fontSize='small' />
            <RepeatIcon  fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon  fontSize='small'/>
          </div>
        </div>
    </div>
  )
}

export default Post