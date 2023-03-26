import React from 'react'
import Image from 'next/image';

import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";

const ExampleTweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border border-gray-200 flex bg-white">

        <Image src='/../public/profile.jpeg' alt='pic' height={70} width={70} className="h-12 w-12 rounded-full mr-3" />
        
        <div className='w-full' >

            <div className='flex'>
                <div className='flex'>
                    <strong className='text-gray-800'>Bhasker Rai</strong>
                    <span className='ml-1 text-gray-500'>@bhaskerrai22</span>
                    <span className='ml-1 text-gray-500'>&middot;</span>
                    <span className='ml-1 text-gray-500'>Mar 18</span>
                </div>
                
                <div className='ml-auto'>
                    <GoKebabHorizontal />
                </div>

            </div>

            
            <div>
                You are amazing if you take time to comment on a tweet or YouTube
                video or a blogpost that has helped you! 🙌
               
            </div>

            <div className='flex mt-2 justify-between'>

                <div className='flex items-center '>
                    <FaRegComment className='mr-2 text-gray-600'/>
                    <span className='text-gray-600'>20</span>
                </div>

                <div className='flex items-center '>
                    <FaRetweet className='mr-2 text-gray-600'/>
                    <span className='text-gray-600'>13</span>
                </div>

                <div className='flex items-center '>
                    <AiOutlineHeart className='mr-2 text-gray-600'/>
                    <span className='text-gray-600'>37</span>

                </div>

                <div className='flex items-center '>
                    <BsUpload className='mr-2 text-gray-600'/>
                </div>

                <div className='flex items-center '>
                    <FiBarChart2 className='mr-2 text-gray-600'/>
                </div>
                
            </div>

            {/* <div className='mx-4 bg-blue-300 h-40'>

                <div className='flex flex-row'>
                    <div className='font-bold text-sm'>Bhasker Rai</div>
                    <div className='mx-2 text-sm'>@bhaskerrai22 •</div>
                    <div className='text-sm'>2h</div>
                </div>

                <div className='bg-yellow-300 h-2/3 w-full'>
                    A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though

                </div>
                
                <div>
                    
                </div>
            </div>
        </div> */}

        </div>
    </div>
  )
}

export default ExampleTweet