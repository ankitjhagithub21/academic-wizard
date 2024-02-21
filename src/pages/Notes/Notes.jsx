

import React from 'react';
import Note from '../../components/Note/Note';

const Notes = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
            Notes Section
          </h2>
          <p className="mt-4 text-lg leading-6 ">
            Access your study notes anytime, anywhere.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
         <Note/>
         <Note/>
         <Note/>

         
        </div>
      </div>
    </section>
  );
};

export default Notes;
