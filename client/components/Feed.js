import React from 'react'
import Image from 'next/image';
import Post from "./Post";
import { TwitterContext } from '../context/TwitterContext';
import { BsStar } from 'react-icons/bs';
import TweetBox from './TweetBox';
import { useContext } from 'react';

const style = {
    wrapper: `flex-[1] border-r border-l border-[#38444d]`, //flex was 1 originally
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
}

// const tweetsOld = [

//   {
//     displayName: "Bhasker",
//     userName: "0x89ACBC87D67BBE3AFAA688732571e904310f5ea3",
//     avatar: "/../public/profile.jpeg",
//     text: "Here comes the Sun!",
//     isProfileImageNft: false,
//     timestamp: "2023-03-01T12:00:00.000Z",
//   },


//   {
//     displayName: "Bhasker",
//     userName: "0x89ACBC87D67BBE3AFAA688732571e904310f5ea3",
//     avatar: "/../public/profile.jpeg",
//     text: "Life is a fest...",
//     isProfileImageNft: false,
//     timestamp: "2023-02-01T12:00:00.000Z",
//   },


//   {
//     displayName: "Bhasker",
//     userName: "0x89ACBC87D67BBE3AFAA688732571e904310f5ea3",
//     avatar: "/../public/profile.jpeg",
//     text: "Ye duniya agar mil bhi jaey tu kya hai ~Sahir",
//     isProfileImageNft: false,
//     timestamp: "2023-01-01T12:00:00.000Z",
//   },

//   {
//     displayName: "Bhasker",
//     userName: "0x89ACBC87D67BBE3AFAA688732571e904310f5ea3",
//     avatar: "/../public/profile.jpeg",
//     text: "Hey Guy! The king is here on Twitter!",
//     isProfileImageNft: false,
//     timestamp: "2022-03-01T12:00:00.000Z",
//   },
// ]

const Feed = () => {
  const { tweets } = useContext(TwitterContext)
  
  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStar />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4,
                )}...${tweet.author.walletAddress.slice(39)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4,
          )}...${tweet.author.walletAddress.slice(39)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
