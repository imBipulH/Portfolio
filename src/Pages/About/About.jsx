// import React from 'react'
// import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className=' bg-primary'>
        <div className='bg-primary text-white w-full'>
          <div className='container p-4'>
            {/* <div className='flex justify-between items-center'>
              <h3 className='text-3xl uppercase font-thin tracking-widest'>
                Bipul
              </h3>
              <div className='flex text-xl gap-4 font-pops font-extralight tracking-wider cursor-pointer duration-300'>
                <Link to={'/'}>
                  <p className='focus:text-secondary'>Home</p>
                </Link>
                <Link to={'/About'}>
                  <p className='hover:text-secondary duration-300'>About</p>
                </Link>
                <p className='hover:text-secondary duration-300'>Service</p>
                <p className='hover:text-secondary duration-300'>Portfolio</p>
                <p className='hover:text-secondary duration-300'>Blog</p>
                <p className='hover:text-secondary duration-300'>Contact</p>
              </div>
            </div> */}

            <h2 className='text-center text-3xl mt-20 text-secondary'>About Me</h2>
            <h1 className='text-center text-[60px] leading-tight mt-4'>
              A Passionate Developer{' '}
              <span className='block'>Who Loves to Code</span>
            </h1>

            <div className='flex items-center justify-center gap-10 my-20 font-pops text-white'>
              <div>
                <img
                  className='w-[450px]'
                  src='../../../src/assets/Bipul2.jpg'
                />
              </div>
              <div className='w-1/2'>
                <h2 className='text-2xl'>About Me</h2>
                <p className='text-lg'>
                  <span className='text-2xl '>I</span> am Bipul Hajong. I
                  started my career in sales and marketting when I was 18. I
                  did full time job and study together. I worked there
                  for 8 years and 2.6 year as a store manager. Then I realize
                  that I am very much potential at coding, problem solving,
                  create new things. I choose to learn MERN stack development
                  from CIT to start my development career. Cause I am very good
                  at it and I love it.
                </p>
                <div className='inline-flex border border-secondary my-8 p-4 rounded-lg'>
                  <div className='border-r border-secondary pr-4'>
                    <div className='mb-2'>
                      <p className='font-semibold text-lg'>Name</p>
                      <p className='text-gray-400'>Bipul Hajong</p>
                    </div>
                    <div className='mb-2'>
                      <p className='font-semibold text-lg'>Email</p>
                      <p className='text-gray-400'>bipulh62@gmail.com</p>
                    </div>
                    <p className='font-semibold text-lg'>Phone</p>
                    <p className='text-gray-400'>+880 1633-576573</p>
                  </div>
                  <div className='pl-4'>
                    <div className='mb-2'>
                      <p className='font-semibold text-lg'>Address</p>
                      <p className='text-gray-400'>Mohammadpur, Dhaka 1207</p>
                    </div>
                    <div className='mb-2'>
                      <p className='font-semibold text-lg'>Degree</p>
                      <p className='text-gray-400'>Hons</p>
                    </div>
                    <p className='font-semibold text-lg'>Freelance</p>
                    <p className='text-gray-400'>Available</p>
                  </div>
                </div>
                <div>
                  <button className='bg-secondary py-4 px-8 my-4 text-lg hover:text-secondary hover:bg-transparent hover:border hover:border-secondary border-primary border transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-1 rounded-full'>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
            </ul> */}
    </>
  )
}
export default About
