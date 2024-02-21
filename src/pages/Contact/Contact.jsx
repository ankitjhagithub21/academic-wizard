
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import React from 'react';

const Contact = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-800 sm:text-4xl sm:leading-10">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Have questions or need assistance? Feel free to reach out to us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 text-lg">
          {/* Contact Form */}
          <div className="sm:col-span-2 lg:col-span-1">
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                  type="submit"
                  className="px-4 py-2 w-full bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                  Send Message
                </button>
            </form>
          </div>
            {/* Contact Information */}
           
            <div className="sm:col-span-2 lg:col-span-1  flex flex-col gap-4">
            <h2 className='text-2xl font-medium ml-2 mt-5'>Our Address</h2>
            <div className="flex items-center space-x-4 ">
            <div className='bg-red-500 text-white px-3 py-3 rounded-full text-xl'>
            <IoMdMail />
               
            </div>
              <div>
                <p className="leading-5 font-medium ">
                  Email
                </p>
                <p className="leading-5 ">
                  contact@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 lg:mt-5">
            <div className='bg-red-500 text-white px-3 py-3 rounded-full text-xl'>
            <FaPhoneAlt />
            </div>
              <div>
                <p className="leading-5 font-medium ">
                  Phone
                </p>
                <p className="leading-5 ">
                 +91-12345678
                </p>
              </div>
            </div>

           
          </div>

          

        
        </div>
      </div>
    </section>
  );
};

export default Contact;
