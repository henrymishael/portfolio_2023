import React from 'react';
// images
import avatar from '@/public/assets/avatar.jpg'
// icons
import { FaGithub,  FaTwitter, FaLinkedinIn} from 'react-icons/fa'
// animations
import { TypeAnimation } from 'react-type-animation';
// motion 
import { motion } from 'framer-motion';
// variants
import fadeIn from '@/pages/variants';
import Image from 'next/image';
import Link from 'next/link';



const Banner = () => {
  return (
    <section className='flex items-center min-h-[85vh] lg:min-h-[78vh] md:px-24' id='home'>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8  lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} initial="hidden" 
            animate='show'
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[70px]'>
              HENRY <span>MISHAEL</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.3)} initial="hidden" 
            animate='show'
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px]  lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer.',
                2000,
                'UI/UX Designer.',
                2000,
                'UI/UX Engineer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.3)} initial="hidden" 
            animate='show'
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
                I like to craft solid and scalable frontend products with great user experiences.
                Highly Skilled at progressive enhancement, design systems & UI Engineering
              </motion.p>
              <motion.div 
              variants={fadeIn('up', 0.3)} initial="hidden" 
              animate='show'
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn  btn-lg'>Contact me</button>
                <Link href="./Resume" target='_blank' className='text-gradient btn-link'>My Resume </Link>
              </motion.div>
              {/* socials */}
              <motion.div 
              variants={fadeIn('up', 0.3)} initial="hidden" 
              animate='show'
              viewport={{once: false, amount: 0.7}}
              className='cursor-pointer flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a className='cursor-pointer' href="https://github.com/henrymishael" target="_blank" >
                  <FaGithub />
                </a>
                <a className='cursor-pointer' href="" target="_blank" >
                  <FaTwitter />
                </a>
                <a className='cursor-pointer' href="https://www.linkedin.com/in/henry-mishael-b62b19209" target="_blank" >
                  <FaLinkedinIn />
                </a>
              </motion.div>
          </div>
          {/* image */}
          <motion.div 
          variants={fadeIn('down', 0.5)} initial="hidden" 
          animate='show'
          // viewport={{once: false, amount: 0.7}}
          className='lg:flex xsm:hidden  lg:flex-1 max-w-[300px] '>
            <Image
              className='rounded-tl-[50%] rounded-bl-[50%] rounded-tr-[30%] rounded-br-[10%]' 
              src={avatar} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
