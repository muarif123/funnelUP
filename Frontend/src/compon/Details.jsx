

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getprdetail, getrelated } from '@/redux/slice';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';


const Details = () => {
 

  const { indiv,related } = useSelector((state) => state.add)
  var settings2 = {
    
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  
      var token = JSON.parse(localStorage.getItem('token')) || {}
      

  
  const [currentsrc, setcurrentsrc] = useState("")


  const dispatch = useDispatch()
 

  
      var itemId = localStorage.getItem("itemId") || ''
     
      
    
   const navigate = useNavigate()


  useEffect(() => {
    dispatch(getprdetail(itemId))
    dispatch(getrelated(itemId))

   

  }, [itemId])

  useEffect(() => {
   
    if (indiv.length > 0) {
     
      const firstProductImage = indiv[0].image1;

      setcurrentsrc(firstProductImage);
    }
  }, [indiv]);
  function displayer(itemId){
   
    
    localStorage.setItem('itemId',itemId)
  
  dispatch(getprdetail(itemId))

  dispatch(getrelated(itemId))
   router.push('/compon/Details')
   


 }

 






  const handleafterchange = (itemimage) => {

    setcurrentsrc(itemimage);

  };

  


  return (
    <div className='py-10 dark:bg-customGray'>
   

      <ToastContainer position='top-center' transition={Bounce} autoClose={2500} />


      <div className="">
        <div className="p-6 w-full sm:w-full md:w-11/12 xl:w-10/12 2xl:w-10/12 mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 border w-full lg:sticky top-0 text-center p-8">
              <img style={{ height:"450px",transition: "0.3s linear", background: "none" }} className='object-contain w-full lg:h-full' src={currentsrc}  alt='' />



              <hr className="border-white border-2 my-6" />
              <div className="flex flex-wrap gap-x-10 gap-y-3 justify-center mx-auto">
                {indiv.map((item, index) => {
                  return (
                    <>
                      <div key={item._id} style={{}} onClick={() => handleafterchange(item.image1)} className="clicker fl p-2 image-div">
                        <a className="block border-blue-100 dark:hover:border-gray-600">
                          <img
                        
                            src={item.image1}
                            style={{ height:"170px",border: currentsrc === item.image1 ? '2px solid blue' : '1px solid black' }}

                            alt={`Image 1 of Product ${index + 1}`}
                            className="object-cover w-full"
                          />
                        </a>
                      </div>


                      <div onClick={() => handleafterchange(item.image2)} className=" p-2 clicker fl image-div">
                        <a className="block border-blue-100 dark:hover:border-gray-600">
                          <img
                        
                            src={item.image2}
                            style={{height:"170px", border: currentsrc === item.image2 ? '2px solid blue' : '1px solid black' }}

                            alt={`Image 2 of Product ${index + 1}`}
                            className="object-cover w-full lg:h-32"
                          />
                        </a>
                      </div>


                      <div onClick={() => handleafterchange(item.image3)} className=" p-2 clicker fl image-div">
                        <a className="block border-blue-100 dark:hover:border-gray-600">
                          <img
                        
                            style={{height:"170px", background: "none", border: currentsrc === item.image3 ? '2px solid blue' : '1px solid black' }}

                            src={item.image3}
                            alt={`Image 3 of Product ${index + 1}`}
                            className="object-cover w-full lg:h-32"
                          />
                        </a>
                      </div>
                    </>
                  );
                })}

              </div>
            </div>

            {
              indiv.map((item, index) => {
                return (
                  <>
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl font-extrabold ">{item.name}| {item.category}</h2>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <p className=" text-xl font-bold">$ {item.price}</p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-lg font-bold ">Features</h3>
                        <ul className="space-y-3 list-disc list-outside mt-4 text-sm">
                          {item.description &&
                            item.description.split('\n').map((line, index) => (
                              <li className='mt-2' key={index}>
                                <p style={{ fontSize: "13px" }}>{line}</p>
                              </li>
                            ))}
                        </ul>

                      </div>
                      <div className="mt-8 max-w-md">

                       
                        <div className="flex items-start mt-8">

                        </div>
                        <Link to={item.link}  className="w-full mt-10 border inline-flex dark:hover:bg-black  dark:hover:text-white hover:bg-white hover:border-black hover:text-black bg-black text-white dark:bg-white dark:text-black items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-4 w-4 mr-2 -translate-x-1"
                          >
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </svg>
                          Buy Product?
                        </Link>
                      </div>
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='w-full py-10'>

<section className="">
  <div className="container mx-auto">
    <div className="">
      <div className="">
        <h2 className="text-2xl font-bold">Related Products</h2>


      </div>

      <div className="w-12/12">
        <Slider className='relative' {...settings2}>


          {related.map((item, index) => {
            return (
              <>
               
       


<div key={item._id} onClick={()=>displayer(item._id)} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
<div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
<img  className="transition hover:scale-110 peer absolute top-0 right-0 h-full w-full object-cover" src={item.image1} alt="product image" />

</div>
<div className="mt-4 px-5 pb-5 dark:bg-gray-900">
<a>
<h5 className="text-lg tracking-tight dark:text-gray-300 text-slate-900">{item.name}</h5>
</a>
<div className="mt-2 mb-5 flex items-center justify-between">
<p>
<span className="text-md font-bold dark:text-gray-300 text-slate-900">$ {item.price}</span>

</p>
</div>


</div>
</div>


                            



              </>
            )
          })}
        </Slider>
      </div>













    </div>
  </div>
</section>

</div>










    </div>

  )
}

export default Details
