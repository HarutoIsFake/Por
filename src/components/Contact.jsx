import React from 'react'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className=' w-full h-[760px] flex-col md:flex-row flex justify-center items-center relative'>
        <div className='w-full md:w-[50%] md:h-full h-[20%] flex justify-center items-center bg-4'>
          <h1 className='text-1 text-6xl'>CONTACT ME</h1>
        </div>
        <div className='w-full md:w-[50%]  md:h-full gap-7 flex flex-col px-20 py-20 justify-center'>
          <p className='text-base'>
            If you want to collaborate on development amazing website, you are very welcome to contact me.
          </p>
          <p className='text-base'>
            I am available for freelance project and full-time employment.
          </p>
          <h3 className='mt-7 text-3xl'>
            William Ye Htut Soe
          </h3>
          <ul className='leading-8 list-inside list-disc'>
            <li>Email: <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPVcXxHldCzzdKHZKGVqWRSSbxNhsCDKjVfjlwwzjFJRDvtLCqWTtZLrvmgdGslgKWGmhL">williammagnus889@gmail.com</a></li>
            <li>Phone: 09770814413</li>
          </ul>
          <div className='flex gap-4'>
            <a target='_blank' href="https://www.facebook.com/profile.php?id=61553088475725"><FaFacebook className='text-3' size={30}/></a> 
            <a target='_blank' href="https://www.instagram.com/haru_toyoru/"><FaInstagram className='text-3' size={30}/></a>
            <a target='_blank' href="https://github.com/HarutoIsFake/Haiku_World"><FaGithub className='text-3' size={30}/></a>
          </div>
        </div>
    </div> 
  )
}

export default Contact
