import React from 'react'
import VaccationBox from '../../components/VaccationBox/VaccationBox'

const Vaccation = () => {
  return (
    <section className="px-5 py-12">
      <div className='text-center mb-10'>
      <h1 class="text-4xl font-bold">Amazing Vacation Getaway</h1>
        <p class="mt-2">Escape to paradise and create unforgettable memories</p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <VaccationBox/>
      <VaccationBox/>
      <VaccationBox/>
     
     
     
    </div>
  </section>
  

  )
}

export default Vaccation