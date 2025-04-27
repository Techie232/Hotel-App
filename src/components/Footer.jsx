import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
   return (
      <div className='w-full bg-slate-300 text-center text-lg font-extralight h-[13%] flex flex-col gap-y-2'>

         <div className='flex gap-x-2 mx-auto mt-4'>
            <FaFacebookF
               fontSize={20}
               className='cursor-pointer'
            />
            <FaInstagram
               fontSize={20}
               className='cursor-pointer'

            />
            <FaLinkedin
               fontSize={20}
               className='cursor-pointer'
            />

         </div>

         <div>
            ©WanderLust Private Limited
         </div>

         <div>
            Privacy Terms
         </div>

      </div>
   )
}

export default Footer