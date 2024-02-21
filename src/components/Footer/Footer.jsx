import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-white'>
  <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
    <Link to={"/"}>
      <img src="/logo.png" alt="logo" width={60} />
      
    </Link>
    <p>
      © 2023  — All right reserved
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3 text-2xl text-red-600">
    <FaFacebook />
    <FaYoutube />
    <FaInstagram/>
    <FaTelegram/>
    
    </span>
  </div>
</footer>
 
  )
}

export default Footer