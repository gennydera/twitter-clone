import React, { useEffect, useState } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
          );
    }, [])
    
    const options = [
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa1",
            verified: true,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa2",
            verified: false,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa3",
            verified: true,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa4",
            verified: true,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa5",
            verified: false,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa6",
            verified: true,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa7",
            verified: true,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
        {
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
            displayName: "Anita Fafi", 
            userName: "Nitaaa8",
            verified: false,
            text: "Google also offers Material Symbols as an alternative to Material Icons. @mui/icons-material only covers Icons, and there are no plans to support Symbols at this time.",
            image: "https://giphy.com/embed/Q7ozWVYCR0nyW2rvPW"
        },
    ]
  return (
    <div className='feed'>
   
        <div className="feed-header ">
            <h2>Home</h2>
        </div>
       
        <TweetBox />
 
        {/* {options?.map ((item) => (
        <Post  {...item}/>  
        ))} */}

        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

    </div> 
  )
}

export default Feed