import Image from 'next/image'
import React from 'react'
import EstateImg from '../public/assets/projects/Estate.png'
import agencyImg from '../public/assets/projects/agency.jpg'
import lawImg from '../public/assets/projects/law.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='Projects' className='w-full'>
      <div className='ma-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I’ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={EstateImg}
            projectUrl='/estate'
            tech='Next JS'
          />
          <ProjectItem
            title='Agency UI'
            backgroundImg={agencyImg}
            projectUrl='/agency'
            tech='Next JS'
          />
          <ProjectItem
            title='Law Parlance'
            backgroundImg={lawImg}
            projectUrl='/law'
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/property'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
