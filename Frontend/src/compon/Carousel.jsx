
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcarousel } from "../redux/slice";


function Carousels() {
 
    const {carfile} = useSelector((state)=>state.add)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getcarousel())

    },[carfile])
  return (
    <>
    <div className="dark:bg-customGray" style={{}}>

    <div className="ch mx-auto">
      <Carousel slideInterval={5000}>
        {carfile&&carfile.map((item,index)=>{
            return(
                <>
                <img style={{objectFit:"cover",height:"100%",width:"100%"}} src={item.carimage} alt=""/>
                
                </>
            )
        })}
      </Carousel>
      

    </div>
    </div>
   
    </>
  );
}
export default Carousels
