import React from "react";
import logo from "@/public/assets/mylogo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className='py-8 md:px-24 '>
      <div className='container mx-auto '>
        <div className=' flex  justify-between  items-center'>
          {/* logo */}
          <Link href={"/"}>
            <Image src={logo} alt='' priority={true} />
          </Link>
          {/* button */}
          <a href='#contact'>
            <button className='btn btn-sm'>Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
