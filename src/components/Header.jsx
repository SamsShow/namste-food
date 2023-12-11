import React from 'react';
import logo1 from '../assets/logo1.png';

export default function Header() {
  return (
    <div className="flex justify-between border-solid border-black border-[1px] cursor-pointer ">
        <div className=''>
            <img className='w-16 mt-2' src={logo1} alt="logo" />
        </div>
        <div className=''>
            <ul className='flex text-xl'>
                <li className='p-3 m-3'>Home</li>
                <li className='p-3 m-3'>About</li>
                <li className='p-3 m-3'>Menu</li>
                <li className='p-3 m-3'>Contact</li>
            </ul>
        </div>
      
    </div>
  );
}