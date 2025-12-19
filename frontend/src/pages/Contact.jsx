import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl text-gray-500 pt-10'>
        <p>CONTACT  <span className='font-semibold text-gray-700'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
    <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

    <div className='flex flex-col items-start gap-6 justify-center'>
      <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
      <p className='text-gray-500'>63575 Amit Parihar <br /> Suite 350, Washington,USA</p>
      <p className='text-gray-500'>Tel:(654) 555-9867 <br /> Email :amitparihar1208@gmail.com</p>
      <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO </p>
      <p className='text-gray-600'>Learn more about our teams and job openings</p>

      <button className='border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
    </div>
      </div>
    </div>
  )
}

export default Contact
