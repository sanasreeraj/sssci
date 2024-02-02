import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Nav = () => {
  const [state, setState] = useState(false);
  const router = useRouter();


  return (
    <div>
      <nav className="bg-[#F9EFDB]  w-full md:static md:text-sm md:border-none">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex ">
          <div className="flex items-center justify-between h-16  md:block">
            <a href="#" className='flex items-center'>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800 mt-2 pr-2"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            </a>
            
          </div>
          <div
            className={`flex-1 pb-3 mt-2 border-gray 400 border-t md:border-0 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'
              }`}
          >
            <ul className=" flex justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <NavLink className="text-lg" path="/" label="Home" currentPath={router.pathname} />
              <NavLink className="text-lg" path="/about" label="About" currentPath={router.pathname} />
              <NavLink className="text-lg" path="/products" label="Products" currentPath={router.pathname} />
              <NavLink className="text-lg" path="/contact" label="Contact" currentPath={router.pathname} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ path, label, currentPath, className }) => (
  <li>
    <Link href={path}>
      <p className={`text-gray-700 text-sm font-semibold ${currentPath === path ? 'border-b-2 border-blue-500' : ''} ${className || ''}`}>
        {label}
      </p>
    </Link>
  </li>
);

export default Nav;