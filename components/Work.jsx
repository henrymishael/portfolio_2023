import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import  fadeIn  from '@/lib/variants';
// images
import Img1 from '@/public/assets/portfolio-img1.png'
import Img2 from '@/public/assets/portfolio-img2.png'
import Img3 from '@/public/assets/portfolio-img3.png'
import Image from 'next/image';
import Link from 'next/link';
const Work = () => {
  return (
    <section className='section md:px-24' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row  gap-x-10 '>
          <motion.div 
            variants={fadeIn('right', 0.3 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.3 }}
          className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
            {/* text */}
            <div className=' '>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
              <p className='max-w-sm mb-8'>
              I've built products ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
              </p>
              <Link href='./Projects' target='_blank'>
              <button className='btn btn-sm'>
                View all projects
              </button>
              </Link>
            </div>
            {/* image */}
            <Link href={`../works/food_app`}>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[260px]  '>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <Image className='group-hover:scale-125 transition-all duration-500 w-full  h-[260px] ' src={Img1} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Mobile App</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Apptech</span>
              </div>
            </div>
            </Link>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2 )}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.3 }}
          className='flex-1 flex flex-col gap-y-[3.2rem] '>
            {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[260px]  '>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <Image className='group-hover:scale-125 transition-all duration-500 w-full  h-[260px] ' src={Img2} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Movie Box</span>
              </div>
            </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-[260px] '>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

              </div>
              {/* img */}
              <Image className='group-hover:scale-125 transition-all duration-500 w-full  h-[260px] ' src={Img3} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
