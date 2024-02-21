import React from 'react'
import Notification from '../../components/Notification/Notification'

const Notifications = () => {
  return (
    <section>
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
     
    </div>
   
  </div>
</section>

  )
}

export default Notifications