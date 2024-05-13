import { ModeToggle } from "@/components/mode-toggle"
import { UserToggle } from "@/components/users"
import { filte, getproducts, searching } from "@/redux/slice"
import React from "react"
import logos from "../../public/logo-no-background.png"
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// Profile Dropdown
const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
    const profileRef = useRef()
    

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Settings", path: "javascript:void(0)" },
        { title: "Log out", path: "javascript:void(0)" },
    ]

    
    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li>
                            <a key={idx} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={'/'}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const Navbar=() => {

    
    const [menuState, setMenuState] = useState(false)
    const dispatch = useDispatch()
    const { products} = useSelector((state) => state.add)

    const navigate = useNavigate()
    const [queries, setqueries] = useState('')
    const [clickedli, setclickedli] = useState(null)
    function displayer(index){
        dispatch(filte(products[index].category))
        setclickedli(index)
        navigate('/compon/Result')
    }
    useEffect(() => {
        dispatch(getproducts())
    }, [products]) 
    function handleSubmit(event){
        event.preventDefault()
        dispatch(searching(queries))
        
       
        
        navigate('/compon/Result')
     
      }

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Customers", path: "javascript:void(0)" },
      { title: "Careers", path: "javascript:void(0)" },
      { title: "Guides", path: "javascript:void(0)" },
      { title: "Partners", path: "javascript:void(0)" },
  ]
    return (
        <nav className="dark:bg-customGray border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <img
                            src={logos} 
                            width={150} 
                            height={80}
                            alt="Float UI logo"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white dark:bg-customGray absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                        {products.map((item, index) => {
                    const firstIndex = products.findIndex(product => product.category === item.category)
                
                    if (index === firstIndex) {
                        return (

                            <li style={{cursor:'pointer',textDecoration:clickedli===index?'underline':"none"}} onClick={()=>displayer(index)} key={index}>{item.category}</li>
                        )
                    } else {
                        return null; 
                    }
                })}
                            <div  className="flex justify-between mt-5 pt-5 border-t lg:hidden">

                        <ModeToggle 
                           
                        />
                         <UserToggle 
                           
                           />
                            </div>
                           

                       
                            
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form onSubmit={handleSubmit} className="flex items-center space-x-2 border border-black dark:border-gray-600 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input onChange={(e) => setqueries(e.target.value)}
                                className="w-full dark:bg-customGray outline-none appearance-none placeholder-black dark:placeholder-white dark:text-white text-gray-500 sm:w-auto"
                                type="search"
                                placeholder="Search"
                            />
                        </form>
                        <div className="border hidden lg:block">

                        <ModeToggle 
                            
                        />
                        </div>
                        <div className="border hidden lg:block">

                        <UserToggle/>
                        </div>
                        <button 
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar