import React from 'react'
import { IoIosNotifications } from "react-icons/io";
const Notification = () => {
  return (
    <div className="p-2  w-full">
    <div className="bg-white shadow rounded flex p-4 h-full items-center">
    <IoIosNotifications className='text-xl text-indigo-500 mx-3'/>
      <span className="font-medium">
       This  is a notification
      </span>
    </div>
  </div>
  )
}

export default Notification