import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '@/pages/variants';

const services = [
  {
    name: 'Engineering',
    description: "In building JavaScript     applications, I'm equipped with just the  right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar",
    link: 'Learn more',
  },
  {
    name: 'Frontend Developer',
    description:'I/ve built personal products which are clone products for companies and businesses around the globe ranging from food delivery apps to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.',
    link:'Learn more',
  },
  {
    name: 'Design',
    description:"I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^).",
    link:'Learn more',
  }
]

const Services = () => {
  return (
    <section className='section md:px-24' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
          variants={fadeIn('right', 0.3 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6 font-secondary'>What I Do.</h2>
            <h3 className='h3 font-secondary max-w-[430px] mb-16'> 
              I like to craft solid and scalable frontend products with great user experiences.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left', 0.5 )}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3 }}
          className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructuring services
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 min-h-[166px] mb-[38px] flex' key={index}>
                    <div className='max-w-[496px]'> 
                      <h4 className='text-[20px] tracking-wider font-secondary font-semibold mb-6'>
                        {name}
                        </h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="#">
                        <BsArrowUpRight />
                      </a>
                      <a className='text-gradient text-sm' href="#">{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
