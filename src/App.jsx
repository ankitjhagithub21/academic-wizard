import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Notes from "./pages/Notes/Notes"
import Pyq from './pages/PYQ/Pyq'
import Notifications from './pages/Notifications/Notifications'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Vaccation from './pages/Vaccation/Vaccation'
import Header from './components/Header/Header'
import Marquee from "react-fast-marquee";
import "./App.css"
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <>
      <Header />
      <div className='bg-red-500 text-white mt-5 py-1 w-full '>
        <Marquee speed={100}>
          Important Notice
        </Marquee>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/pyq' element={<Pyq />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/vaccation' element={<Vaccation />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>

  )
}

export default App