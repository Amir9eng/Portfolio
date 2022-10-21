import React from 'react'

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
        <div className='absolute top-0 left-0 h-[30vh] lg:h-[40vh] bg-black/80 z-10 w-full' />
      </div>
    </div>
  )
}

export default property
