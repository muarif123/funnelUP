import React from 'react'
import { Link } from 'react-router-dom'
import AdmCarousels from './AdmCarousel'
import Featured from './Featured'

const Admin = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div>
      <AdmCarousels/>
    </div>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to FunnelUP.</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Empowering individuals and businesses alike, our mission is to inspire success through meaningful connections, fostering growth and prosperity in the dynamic world of affiliate marketing.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={'/compon/Result'} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Explore
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED PRODUCTS FROM</span>
           
    <div className="w-full mx-auto flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
        

        
            <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
                <img className="object-contain w-auto mx-auto h-24 " src="https://res.cloudinary.com/diksmyvyt/image/upload/v1714636491/amazonw_wpzjy2.png" alt="" />
            </div>

            <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
            
                <img className="object-contain w-auto mx-auto h-32 " src="https://res.cloudinary.com/diksmyvyt/image/upload/v1714636234/alibaba-removebg-preview_ggrmeu.png" alt="" />
            </div>

            <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3'>
                <img className="object-contain w-auto h-24 mx-auto" src="https://res.cloudinary.com/diksmyvyt/image/upload/v1714636256/daraz_pv3pbz.png" alt="" />
            </div>

           
      
    </div>


        </div> 
    </div>
    <div>
      <Featured/>
    </div>
    
</section>
  )
}

export default Admin