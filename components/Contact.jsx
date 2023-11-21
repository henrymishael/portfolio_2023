import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import  fadeIn  from '@/lib/variants';

const Contact = () => {
  return (
    <div className='section h-screen md:px-24' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
             variants={fadeIn('right', 0.3 )}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount:0.3 }}
            className='flex-1 flex justify-start'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide font-secondary'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
             variants={fadeIn('left', 0.3 )}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount:0.3 }}
             className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6  items-start' 
             action="mailto:henrymishael.hm@gmail.com">
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text" 
              placeholder='Your name' />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text" 
              placeholder='Your email' 
            />
            <textarea 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none' 
              placeholder='Your message'>
            </textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
