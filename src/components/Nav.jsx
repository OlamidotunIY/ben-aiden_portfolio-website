import React from 'react';
// import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs';
// import link

import { Link } from 'react-scroll'

const Nav = () => {
  return(
    <nav className='fixed bottom-2 lg:bottom-8 overflow-hidden x-50 w-full'>
      <div className="container mx-auto">
        <div className='w-full rounded-full max-w-[460px] bg-black/20 h-[96px] backdrop-blur-2xl mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>

          <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link to='services' activeClass='active' smooth={true} spy={true} offset={2} className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='work' activeClass='active' smooth={true} spy={true} offset={2} className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          <Link to='contact' activeClass='active' smooth={true} spy={true} offset={2} className='cursor-pointer w-[60px] flex items-center justify-center'>
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
