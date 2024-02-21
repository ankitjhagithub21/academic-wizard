

import React from 'react';

const About = () => {
  return (
    <section className='container mx-auto py-12'>
       <h2 className="text-3xl leading-9 font-extrabold mb-10 sm:text-4xl sm:leading-10 px-5 w-full">
            About Us
          </h2>
  <div className="px-5 mx-auto flex flex-wrap justify-center items-center">
   
  <div className="lg:w-1/3 w-full  mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    <div className="flex flex-wrap  lg:w-2/3 w-full bg-red">
      <div className="w-full mb-6 lg:px-5">
        <h1 className="font-bold text-2xl my-2 text-gray-900">
          WELCOME TO ACADEMIC WIZARD
        </h1>
        <div className="leading-relaxed">
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quidem veniam possimus natus temporibus debitis adipisci! Distinctio harum officiis incidunt aliquid cumque, totam ad perspiciatis numquam nihil, obcaecati aperiam facilis!
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, commodi incidunt libero, magnam quia assumenda impedit magni sequi consectetur velit suscipit minus, adipisci beatae tempore repellat fugiat omnis possimus animi.</p>
         <button className='bg-indigo-500 px-2 py-2 rounded-md mt-5 text-white font-bold'>Contact Us</button>
        </div>
       
      </div>
     
    </div>
    
  </div>
</section>

  );
};

export default About;
