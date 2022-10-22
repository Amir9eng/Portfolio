import Image from 'next/image'
import React from 'react'
import estateImg from '../public/assets/projects/Estate.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const estate = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10 w-full' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={estateImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Property Finder</h2>
          <h3>Next JS / Chakra UI / Rapid API</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8 pt-8 '>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Next JS and is hosted on Vercel. Users are
            able to search properties based on a set of filters like Rooms,
            Price,Purpose, Property Type and so on to retrieve a list of active
            properties currently for sale or for rent. You will be able to view
            property information as well as the specific location of the
            property integrated with the Bayut API. This is made possible with
            Rapid APIs.
          </p>
          <a href='http://estate-kappa.vercel.app'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='https://github.com/Amir9eng/Real-Estate'>
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Next Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Chakra UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Bayut API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Rapid API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                NProgress
              </p>
            </div>
          </div>
        </div>
        <Link href='/#Projects'>
          <p className='underline cursor-pointer mb-4'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default estate
