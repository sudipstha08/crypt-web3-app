import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const NavBar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src={'/imgs/logo.png'}
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {['market', 'Exchange', 'Tutorials', 'Wallets'].map((item, idx) => (
          <NavBarItem key={item + idx} title={item} classProps="" />
        ))}
        <li className="bg- py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-##2546bd">
          Login
        </li>
      </ul>
      <div className="flex relative"></div>
    </nav>
  )
}

export { NavBar }
