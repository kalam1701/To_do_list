import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg bg-yellow-600 text-white py-2'>
        <div className="logo">
          <span className='flex
          '>
            <img className='w-7 ml-5' src="/book1.png" alt="" />
            <span className="cursor-pointer font-bold text-xl mx-4"> TO-DO LIST</span>
            </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-100  '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Tasks</li>
             
        </ul>
    </nav>
  )
}

export default Navbar
