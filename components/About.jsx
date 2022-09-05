import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>/I am not your average developer</p>
          <p className='py-2 text-gray-600'>
            Growing up in a world where the use of technologies increases
            exponentially over years, I always aspired to pursue a career in IT.
            I kept being fascinated with the advent of several emerging
            technologies and the fact that computers are now a part of our
            everyday modern life.In 2020, i started learning HTML and CSS in
            order to understand the basics of web pages. What i thought was just
            a time whirling turned into a love for programming
          </p>
          <p className='py-2 text-gray-600'>
            Intrigued by how interesting programming can be, i was quickly drawn
            to learn more. I started learning javascript and was even more
            interested in making websites interactive. i started learning
            Reactjs, tailwindcss in order to understand front-end engineering. I
            am now spending my time building projects with ReactJs, Firebase,
            and learning new technologies.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='/'
            className='rounded-xl'
          ></img>
        </div>
      </div>
    </div>
  )
}

export default About
