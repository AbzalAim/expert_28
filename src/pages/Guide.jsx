import React from 'react'
import Navbar from '../components/Navbar'

const Guide = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[22%] h-[92.8vh]'> <Navbar /> </div>
        <div className='w-[78%] pt-[32px] pl-[83px] border-l-[1px] h-[100vh] overflow-y-auto border-[#D3D3D3]'>
            <h1 className='mx-auto text-[50px] text-black mb-[50px]'>Yoriqnoma </h1>
            <iframe className='rounded-[30px]' width="97%" height="80%" src="https://www.youtube.com/embed/NnIOnwodeIs?si=11BfGCexY7qFocXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Guide