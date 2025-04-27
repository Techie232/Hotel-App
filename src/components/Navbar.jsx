import React from 'react'
import { Link, matchPath, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/hotelLogo.avif';

const Navbar = () => {

   const location = useLocation();

   const mathRoute = (route) => {
      return matchPath({ path: route }, location.pathname);
   }

   return (
      <div className='w-full h-[10%] bg-indigo-500 flex justify-center items-center'>

         <div className='w-[80%] flex justify-between items-center'>

            <NavLink
               className='text-4xl cursor-pointer'
               to={'/'}
            >
               <img 
                  src={logo}
                  width={75}
                  className='rounded-full'
               />
            </NavLink>

            <div className='mr-20 text-lg text-slate-200'>
               <ul className='flex gap-x-10'>
                  <Link
                     to={'/'}
                     className={`${mathRoute('/') ? 'text-yellow-500' : ''}  cursor-pointer`}
                  >Home

                  </Link>
                  <Link
                     className={`${mathRoute('/addHotel') ? 'text-yellow-500' : ''}  cursor-pointer`}
                     to={'/addHotel'}
                  >
                     Add new Hotel
                  </Link>
               </ul>
            </div>

         </div>

      </div>
   )
}

export default Navbar