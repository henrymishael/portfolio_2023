import React from 'react';
import logo from '@/public/assets/mylogo.svg'
import Image from 'next/image';


const Header = () => {
  return (
    <header className='py-8 md:px-24 '>
      <div className="container mx-auto ">
        <div className=' flex  justify-between  items-center'>
          {/* logo */}
          <a href="#">
            <Image src={logo} alt="" priority={true}/>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
