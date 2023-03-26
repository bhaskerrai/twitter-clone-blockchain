import React from 'react'
import Post from "../Post"
import { TwitterContext } from '../../context/TwitterContext';
import { useContext } from 'react';

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,

}

// const tweets = [

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

const ProfileTweets = () => {
  const { currentUser, currentAccount } = useContext(TwitterContext)

  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post 
          key={index}
          displayName={currentUser.name === "Unnamed" 
            ? `${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`
            : currentUser.name}
          userName={`${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          isProfileImageNft={currentUser.isProfileImageNft}
          timestamp={tweet.timestamp}
          
        />
      ))}
    </div>
  )
}

export default ProfileTweets