
import React, { useEffect, useState } from 'react'




import { useDispatch, useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebox from './SideCategory';
import Sorte from './Sidesort';
import { Link, useNavigate } from 'react-router-dom';


const Results = () => {
  const [message, setmessage] = useState('')
  const { query } = useSelector((state) => state.add)
  const navigate = useNavigate()

  useEffect(() => {
    if (query && query.data === null) {
      setmessage(query.message)



    }
    else {
      setmessage(null)
    }

  }, [query])
  function displayer(itemId){
    
     
      localStorage.setItem('itemId',itemId)
    
  
     navigate('/compon/Details')
     
 
 
   }
   
  return (
    <div className='flex w-12/12 py-10 dark:bg-customGray flex-wrap justify-center'>
      <ToastContainer position='top-center' transition={Bounce} autoClose={1000} />

      <div className='w-full sm:w-full md:w-2/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12'>
        <Sidebox />
      </div>
      <div className='w-full sm:w-full md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12'>
        <div className='flex flex-wrap justify-between'>
          {message ? (
            <h1>{message}</h1>
          ) : (
            Array.isArray(query) && query.map((item, index) => {
              return (
                <>
                




                <div style={{cursor:'pointer'}} onClick={()=>displayer(item._id)} key={item._id} className="bma dark:bg-customGray relative mx-auto m-4 sm:m-6 md:m-8 lg:m-10 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <div key={item._id} onClick={()=>displayer(item._id)}  className="relative h-60 overflow-hidden rounded-t-xl">
    <img src={item.image1} alt="product image" className="object-cover w-full h-full"/>
  </div>
  <div className="mt-4 px-5 pb-5">
    <div>
      <h5 className="text-lg tracking-tight text-slate-900 dark:text-white">{item.name}</h5>
    </div>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-xl font-bold text-slate-900 dark:text-white">${item.price}</span>
      </p>
      <div className="flex items-center">
        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
    </div>
    <div key={item._id} onClick={()=>displayer(item._id)}  className="dark:bg-white dark:text-black flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      View Product
    </div>
  </div>
</div>









                </>
              )
            })

          )


          }

        </div>
      </div>
      <div className='w-full sm:w-full md:w-2/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12'>
        <Sorte />
      </div>

    </div>
  )
}

export default Results