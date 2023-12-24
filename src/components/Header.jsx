import React from 'react';
import logo1 from '../assets/logo1.png';

export default function Header() {
  return (
    <div className="flex justify-between border-solid border-black border-[1px] cursor-pointer ">
        <div className=''>
            <img className='w-16 m-2 ' src={logo1} alt="logo" />
        </div>
        <div className=''>
            <ul className='flex text-xl transition-all'>
                <li className='p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md '>Home</li>
                <li className='p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md '>About</li>
                <li className='p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md '>Menu</li>
                <li className='p-2 m-3 hover:bg-zinc-900 hover:text-white rounded-md '>Contact</li>
            </ul>
        </div>
      
    </div>
  );
}