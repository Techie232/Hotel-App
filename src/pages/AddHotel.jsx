import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegImages } from "react-icons/fa";
import { createNewHotel } from '../services/operations/Hotel';

const AddHotel = () => {

   const {
      register,
      formState: { errors },
      setValue,
      getValues,
      handleSubmit
   } = useForm();

   const [loading, setLoading] = useState(true);

   const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('image', data.image[0]);
      formData.append('price', data.price);
      formData.append('country', data.country);
      formData.append('location', data.location);

      setLoading(true);
      await createNewHotel(formData);
      setLoading(false);
   }

   return (
      <div className='w-[70%] text-2xl ml-40 p-9 h-full'>

         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-5'
         >

            <label className='text-2xl font-semibold'>Enter the hotel name</label>
            <input
               placeholder='Add a new Hotel 🏠'
               className='p-3 rounded-xl outline-none bg-slate-100 w-[70%]'
               {...register('name', { required: true })}
            />
            {
               errors.name && <p className='text-sm text-orange-800 ml-2'>
                  Hotel name is required
               </p>
            }


            <label className='bg-teal-400 rounded-3xl p-4 cursor-pointer mt-5 w-fit'>
               <p className='flex items-center gap-x-2'>
                  Select the image
                  <FaRegImages />

                  <input
                     type='file'
                     className='hidden'
                     {...register('image', {
                        required: true,
                        validate: (FileList) => FileList[0]?.type.startsWith('image/') || 'Only Images are allowed'
                     })}
                  />
                  {
                     errors.image && <p className='text-sm text-orange-800 ml-2'>
                        Hotel Image is required
                     </p>
                  }
               </p>
            </label>

            <div className='flex'>
               <div className='flex flex-col'>
                  <label className='text-2xl font-semibold'>Price</label>
                  <input
                     placeholder='Enter Price'
                     className='p-2 rounded-xl outline-none bg-slate-100 mr-10'
                     {...register('price', { required: true })}
                  />
                  {
                     errors.price && <p className='text-sm text-orange-800 ml-2'>
                        Hotel price is required
                     </p>
                  }
               </div>

               <div className='flex flex-col'>
                  <label className='text-2xl font-semibold'>Country</label>
                  <input
                     placeholder='Enter Country name'
                     className='p-2 rounded-xl outline-none bg-slate-100'
                     {...register('country', { required: true })}
                  />
                  {
                     errors.country && <p className='text-sm text-orange-800 ml-2'>
                        Hotel Country is required
                     </p>
                  }
               </div>
            </div>

            <label className='text-2xl font-semibold'>Location</label>
            <input
               placeholder='Enter the location'
               className='p-2 rounded-xl outline-none bg-slate-100 w-[70%] mr-20'
               {...register('location', { required: true })}
            />
            {
               errors.location && <p className='text-sm text-orange-800 ml-2'>
                  Hotel's location is required
               </p>
            }

            <button
               type='submit'
               className='rounded-xl bg-blue-600 w-fit mx-auto p-2 font-light hover:scale-125 transition-all 
               duration-150'
            >
               CREATE
            </button>

         </form>

      </div>
   )
}

export default AddHotel