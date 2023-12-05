import React from 'react'
import Head from 'next/head'
import logo from '@/public/assets/mylogo.svg'
import Image from 'next/image'
import projects from './works'
import Link from 'next/link'


function Projects() {
  return (
    <>
    <Head>
      <title>My Works - Henry Mishael</title>
    </Head>
    <div className='overflow-hidden min-h-screen w-[100%] xsm:px[1rem] md:px-[2rem] lg:px-[6rem] pb-[6rem] bg-[#F5F4FC] text-black'>
    <header className='py-8 w-[100%] xsm:px-[1rem] md:px-0'>
      <div className="w-[100%] mx-auto">
        <div className='  w-[100%] flex justify-between items-center '>
          {/* logo */}
          <a href="#">
            <Image className='xsm:hidden md:block' src={logo} alt="" priority={true}/>
            <Image className='md:hidden' src={logo} alt="" priority={true} width={60}/>
          </a>
          {/* button */}
          <button className='text-[12px]  btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
      <div className='lg:mt-24 xsm:mt-12 flex flex-col gap-6'>
        <h6 className='text-black/70 xsm:hidden md:block font-bold text-[40px] text-center'><span className='text-black/30'>/</span>work.</h6>
        <p className='text-center font-medium xsm:text-[16px] sm:text-[20px]'>Selected work I've taken on in the past</p>
      </div>
      <div className='flex  flex-wrap gap-8 xsm:justify-center mt-20 lg:justify-normal '>
      
        {projects.previousWork.map((work) => (
        <a key={work?.id}  href={work?.link}>
        <div  className='xsm:w-[250px] sm:w-[345px] h-[280px] bg-white/40 relative cursor-pointer transition-all ease-in-out duration-500  hover:-translate-y-2 card flex items-center justify-center'>
          
            <Image className='flex items-center mb-12 w-auto h-[40px]' src={work?.image}/>
            <span className='absolute bottom-0 left-0 right-0 bg-white w-[100%] h-[100px] px-10 flex flex-col justify-center'>
              <p className='font-bold text-[20px]'>{work?.name}</p>
              {/* <p className='text-accent font-medium text-[20px]'>{work?.link}</p> */}
            </span>
        </div>
        </a>
        ))}
       
      </div>
    </div>
    </>
  )
}

export default Projects
