// import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className='bg-primary text-white w-full'>
        <div className='container p-4'>
          <div className='flex justify-between items-center'>
            <h3 className='text-3xl uppercase font-thin tracking-widest'>
              Bipul
            </h3>
            <div className='flex text-xl gap-4 font-pops font-extralight tracking-wider cursor-pointer duration-300'>
              <p className='focus:text-secondary'>Home</p>
              <Link to={"/About"}>
              <p className='hover:text-secondary duration-300'>About</p>
              </Link>
              <p className='hover:text-secondary duration-300'>Service</p>
              <p className='hover:text-secondary duration-300'>Portfolio</p>
              <p className='hover:text-secondary duration-300'>Blog</p>
              <p className='hover:text-secondary duration-300'>Contact</p>
            </div>
          </div>
          <div className='flex items-center justify-between mt-52'>
            <div className='font-pops'>
              <div className='text-[138px]'>
                <h1 className='leading-tight my-2 font-extralight'>Bipul
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-red-500'>Hajong</span>
                </h1>
              </div>
              <p className='text-3xl font-light leading-snug my-4'>MERN developer | JavaScript Enthusiast</p>
              <button className='bg-secondary py-4 px-8 my-4 text-xl hover:text-secondary hover:bg-transparent hover:border hover:border-secondary border-primary border transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-1'>Get connected</button>
            </div>
            <div className='w-94 rounded-full'>
              <img className='rounded-full' src='../../../src/assets/Bipul.jpeg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
