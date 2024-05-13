
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcarousel } from "../redux/slice";
import { useNavigate } from "react-router-dom";


function AdmCarousels() {
 
    const {carfile} = useSelector((state)=>state.add)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getcarousel())

    },[carfile])
    function displayer(itemId){
    
     
        localStorage.setItem('carId',itemId)
      
       navigate('/compon/Caredit')
       
   
   
     }
  return (
    <>
    <div className="dark:bg-customGray" style={{}}>

    <div className="ch mx-auto relative">
        <Carousel slideInterval={3000}>
          {carfile &&
            carfile.map((item, index) => {
              return (
                <div key={item._id} className="relative">
                 
                <img style={{objectFit:"cover",height:"100%",width:"100%"}} src={item.carimage} alt=""/>
                  
                  
             
                  <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-50 transition-opacity duration-300">
                   
                   
                    
                    <button key={item._id} onClick={()=>displayer(item._id)}  className="text-white bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
                      Edit
                    </button>
               
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
   
    </>
  );
}
export default AdmCarousels
