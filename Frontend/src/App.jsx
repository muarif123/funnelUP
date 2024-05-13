import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import Navbar from './compon/Navbar'
import Sup from './compon/SignUp'
import Logins from './compon/Login'
import Footers from './compon/Footer'
import Uploads from './compon/Upload'

import Dashboards from './compon/Dashboard'

import Chanpass from './compon/Changep'
import Admin from './compon/Admin'

import Newpass from './compon/Emailpass'

import Admproduct from './compon/Products'
import Edform from './compon/Editform'

import Sorte from './compon/Sidesort'
import Results from './compon/Result'
import Details from './compon/Details'
import About from './compon/About'
import Contact from './compon/Contact'
import SamplePrevArrow from './compon/SamplePrevArrow'
import SampleNextArrow from './compon/SampleNextArrow'
import Carpanel from './compon/Carouselp'
import Carousels from './compon/Carousel'
import AdmCarousels from './compon/AdmCarousel'
import Caredit from './compon/Caredit'
import Featured from './compon/Featured'
import Homepage from './compon/HomePage'




function App() {
 

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>

     <Navbar/>
     <Routes>
     <Route path='/' Component={Homepage}/>
     
      <Route path='/compon/SignUp' Component={Sup}/>
      <Route path='/compon/Login' Component={Logins}/>
      <Route path='/compon/Upload' Component={Uploads}/>
      <Route path='/compon/Dashboard' Component={Dashboards}/>
      <Route path='/compon/Products' Component={Admproduct}/>
      <Route path='/compon/Changep' Component={Chanpass}/>
      <Route path='/compon/Admin' Component={Admin}/>
      <Route path='/compon/Emailpass' Component={Newpass}/>
      <Route path='/compon/Editform' Component={Edform}/>
      <Route path='/compon/Result' Component={Results}/>
      <Route path='/compon/Sidesort' Component={Sorte}/>
      <Route path='/compon/Details' Component={Details}/>
      <Route path='/compon/About' Component={About}/>
      <Route path='/compon/Contact' Component={Contact}/>
      <Route path='/compon/SamplePrevArrow' Component={SamplePrevArrow}/>
      <Route path='/compon/SampleNextArrow' Component={SampleNextArrow}/>
      <Route path='/compon/Carouselp' Component={Carpanel}/>
      <Route path='/compon/Carousel' Component={Carousels}/>
      <Route path='/compon/AdmCarousel' Component={AdmCarousels}/>
      <Route path='/compon/Caredit' Component={Caredit}/>
      <Route path='/compon/Featured' Component={Featured}/>




     </Routes>
    <Footers/>
    </BrowserRouter>
     
      
    </ThemeProvider>
    
    </>
  )
}

export default App
