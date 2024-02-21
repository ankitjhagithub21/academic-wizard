import React from 'react'

const VaccationBox = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img
                src="https://media.istockphoto.com/id/187230032/photo/spring-break.jpg?s=612x612&w=0&k=20&c=1v69eKznAahMfdFyrwQ0rwp55MIVx10sseTNrNGvLrw="
                alt="Beach 1"
                className="w-full h-44 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">Sunny Beach Retreat</h2>
            <p className="text-gray-600">
                Relax on the pristine sandy beaches and enjoy the clear blue waters.
            </p>
            <a href="#" className="mt-4 text-blue-500 inline-block">
                Learn More
            </a>
        </div>
    )
}

export default VaccationBox