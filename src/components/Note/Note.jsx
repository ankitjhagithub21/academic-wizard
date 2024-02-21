import React from 'react'

const Note = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Introduction to Biology
      </h3>
      <p className="mt-4 text-sm leading-5 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-6">
        <a
          href="#"
          className="text-sm leading-5 font-medium text-red-500 hover:text-blue-600 focus:outline-none focus:underline"
        >
          Read Notes
        </a>
      </div>
    </div>
  </div>
  )
}

export default Note