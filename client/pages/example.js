import React from 'react'
import Example2 from '../components/Extra/Example2';
import ExampleTweet from "../components/Extra/ExampleTweet";
import InitialState from '../components/mintingModal/InitialState';
import LoadingState from '../components/mintingModal/LoadingState';


const style = {
  wrapper: `flex flex-wrap min-h-screen w-screen select-none bg-gray-200 text-black`,
  cc: `min-h-screen w-screen flex flex-wrap bg-[#c1dcf7]`
}

const example = () => {
  return (
    <div >
      {/* <ExampleTweet />
      <Example2 /> */}
      <LoadingState />
    </div>
  )
}

export default example