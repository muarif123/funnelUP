import { getproducts } from '@/redux/slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const Featured = () => {
    const { products } = useSelector((state) => state.add)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var settings2 = {

        infinite: true,
        arrows: true,
        speed: 1000,
        autoplay: true,
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
    useEffect(() => {
        dispatch(getproducts())


    }, [])
    function displayer(itemId) {


        localStorage.setItem('itemId', itemId)


        navigate('/compon/Details')



    }
    return (
        <div className="dark:bg-customGray">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6">
                    <Slider className='relative' {...settings2}>


                        {products.map((item, index) => {
                            return (
                                <>




                                    <div key={item._id} onClick={() => displayer(item._id)} style={{height:"350px"}} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                                            <img className="transition hover:scale-110 peer absolute top-0 right-0 h-90 w-full object-cover" src={item.image1} alt="product image" />

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
    )
}

export default Featured