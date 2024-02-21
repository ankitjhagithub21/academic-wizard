import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../../api/links';

const Header = () => {
  const [active, setActive] = useState(1); 
  const handleLinkClick = (linkId) => {
    setActive(linkId);
  };

  return (
    <header>
      <div className='container mx-auto text-center p-3 flex flex-col items-center justify-center gap-2'>
        <img src="/logo.png" alt="logo" width={60} />
        <h2 className='px-4 py-2 bg-red-500 text-white rounded-md uppercase font-medium text-xl'>
          Academic <span className='text-gray-900 bg-white rounded px-2'>Wizard</span>
        </h2>
        <nav className='flex gap-3 bg-white w-full items-center lg:justify-center  justify-start p-2 rounded-md' id='navbar'>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => handleLinkClick(link.id)}
              className={`transition ${
                active === link.id ? 'bg-red-500 text-white' : 'hover:text-white hover:bg-red-500'
              } px-3 rounded-md py-1 text-lg`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
