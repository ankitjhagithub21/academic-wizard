import React from 'react'

const SyllabusBox = ({sy}) => {
  return (
    <div className="p-4 lg:w-1/3 w-full">
        <div className="h-full">
          <h2 className="font-medium mb-1 bg-red-500 text-white text-xl p-2 rounded">
            {sy.name}
          </h2>
          <div>
            <ul className='border border-gray-900 rounded mt-3 p-2'>
             {
               sy.links.map((link,index)=>{
                return <li key={index} className='hover:bg-white cursor-pointer p-2'>{link}</li>
               })
             }
            </ul>
          </div>
          
         
        </div>
      </div>
  )
}

export default SyllabusBox