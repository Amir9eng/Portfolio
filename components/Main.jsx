import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='Home' className='w-full h-screen text-center'>
      <div className='max-w-[1241px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase tracking-widest text-sm text-gray-600'>
            LET’S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi I’m <span className='text-[#5651e5]'>Mukhtar</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-end Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a frontend web developer specializing in bulding(occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building responsive front-end applications while using some
            back-end technologies
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
              {/* <FaLinkedinIn /> */}
              <a
                href='https://www.linkedin.com/in/muhammad-mukhtar-9ab2bb249/'
                target='#blank'
                rel='noreferrer'
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
              <a
                href='https://github.com/Amir9eng'
                target='#blank'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
              <a target='#blank' href='mailto:amirmukhtarme@gmail.com'>
                <AiOutlineMail />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  ease-in duration-300'>
              <a
                href='https://docs.google.com/document/d/1a67xFTk8aU6hNO8-D-6oIhbFupz-LYiOtJ0c7XdEOCo/edit?usp=sharing'
                target='#blank'
                rel='noreferrer'
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
