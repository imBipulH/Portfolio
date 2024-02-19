import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <div className='bg-primary w-full container text-white'>
      <div className='text-center text-3xl tracking-wider my-4'>
        <p className='text-secondary'>Resume</p>
      </div>
      <div className='text-center text-6xl my-8'>
        <h1 className='w-1/2 m-auto'>I Worked for Some Big Companies</h1>
      </div>
      <div className='flex justify-around'>
        <div>
          <h3 className='text-4xl my-10'>Experience</h3>
          <div className='relative'>
            <div className='absolute w-1 h-[calc(100%-10px)] bg-secondary left-[26px] top-1'></div>
            <Experience
              title='Outlet Manager'
              duration='(August, 2023 - Present)'
              company='Sundora Kids'
            />
            <Experience
              title='Store Manager'
              duration='(June, 2023 - July, 2023)'
              company='YOYOSO Bangladesh'
            />
            <Experience
              title='Store Manager'
              duration='(August, 2020 - May, 2023)'
              company='Grameen UNIQLO'
            />
            <Experience
              title='Assitant Store Manager'
              duration='(2018 - 2020)'
              company='Grameen UNIQLO'
            />
            <Experience
              title='Sales Associate'
              duration='(2015 - 2018)'
              company='Grameen UNIQLO'
            />
          </div>
        </div>
        <div>
          <h3 className='text-4xl my-10'>Education</h3>
          <div className='relative'>
            <div className='absolute w-1 h-[calc(100%-10px)] bg-secondary left-[26px] top-1'></div>
            <Education
              title='MERN stack development'
              year='(2023 - 2024)'
              institution='Creative IT'
            />
            <Education
              title='Bachelor of Hons'
              year='(2014/15 - 2018/19)'
              institution='Siddeshwari College'
            />
            <Education
              title='HSC'
              year='(2012 - 2014)'
              institution='Susang Degree College, Durgapur, Netrakona'
            />
            <Education
              title='SSC'
              year='(2012)'
              institution='Gobindapur High School, Kalmakanda, Netrakona'
            />    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
