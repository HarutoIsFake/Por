import React from 'react'

const About = () => {
  return (
    <div className=' w-full h-[760px] gap-5 md:gap-0 flex-col md:flex-row flex justify-start md:justify-center  md:items-center relative'>
        <div className='w-full md:w-[50%] md:h-full h-[20%] flex justify-center items-center bg-4'>
          <h1 className='text-1 text-6xl'>ABOUT ME</h1>
        </div>
        <div className='w-full md:w-[50%] md:h-full h-full gap-4 sm:gap-7 flex flex-col px-5 md:px-10 lg:px-20 md:py-7 lg:py-10 items-center justify-center sm:justify-center'>
          <p className='text-sm sm:text-base indent-10 leading-7 sm:leading-7 lg:leading-8 text-justify'>
            👋 Hey there! I'm a budding frontend developer based in the scenic town of Taunggyi, Myanmar 🌄. I craft visually stunning and interactive websites using cool tech like React and Tailwind CSS. My coding journey is all about making the web come alive!
          </p>
          <p className='text-sm sm:text-base indent-10 leading-7 sm:leading-7 lg:leading-8 text-justify'>
            🚀 I thrive on the latest web development trends and am always eager to dive into new technologies. Responsive design? State-of-the-art UI? Count me in! 💻✨
          </p>
          <p className='text-sm sm:text-base indent-10 leading-7 sm:leading-7 lg:leading-8 text-justify'>
            📊 Beyond code, I'm no stranger to data analysis. I wield Microsoft Excel like a pro, turning numbers into insights.
          </p>
          <p className='text-sm sm:text-base indent-10 leading-7 sm:leading-7 lg:leading-8 text-justify'>
            🎸 Now, let's talk about my other passion - music! 🎶 I'm addicted to the rhythm, and my weapon of choice is the bass guitar. Creating music is not just a hobby; it's a way of life.
          </p>
        </div>
    </div> 
  )
}

export default About
