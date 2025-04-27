import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/image.jpg';
import { fetchAllHotels } from '../services/operations/Hotel';

const Home = () => {

   const [hotels, setHotels] = useState([]);
   const [loading, setLoading] = useState();

   useEffect(() => {
      setLoading(true);
      const fetchAllData = async () => {
         const response = await fetchAllHotels();
         if (response)
            setHotels(response);
      }

      fetchAllData();
      setLoading(false);
   }, [])

   return (
      <div className='w-[85%] text-center mt-10 flex flex-col'>
         <p
            className='text-2xl font-serif text-cyan-500 shadow-lg rounded-lg'
         >
            We accomodate the best Hotels in the world
         </p>

         {/* All cards belongs to here */}
         <div className='mt-16 grid gap-x-5 sm:grid-cols-2 lg:grid-cols-3 mb-10'>
            {
               hotels.map((hotel, index) => (
                  <div className='flex flex-col mb-10 hover:scale-95 transition-all  duration-150'>
                     <NavLink>
                        <img
                           src={hotel?.image}
                           width={450}
                           className='rounded-xl'
                        />
                     </NavLink>
                     <div className='flex justify-between mx-8'>
                        <p className='text-lg font-semibold'>{hotel?.name}</p>
                        <p className='text-lg font-semibold'>{hotel?.country}</p>
                     </div>
                     <p className='opacity-50 text-lg'>${hotel?.price}/night</p>
                  </div>
               ))
            }
         </div>

      </div>
   )
}

export default Home