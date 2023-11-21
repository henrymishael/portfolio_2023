import React from 'react';
// countup
import CountUp from 'react-countup'
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import fadeIn from '@/lib/variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section  className='section md:px-24' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3 }}
          className='flex-1 xsm:hidden md:flex bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'> </motion.div>
            {/* text */}
            <motion.div 
             variants={fadeIn('left', 0.5 )}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount:0.3 }}
            className='flex-1'>
              <h2 className='h2 text-accent'>About me</h2>
              <h3 className='h3 mb-4'>
                Proven experience building successful products for clients across several countries
              </h3>
              <p className='mb-6'>
                I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.
              </p>
              {/* stats */}
              {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ? <CountUp start={0.1} end={1} duration={3} /> : null
                    }
                  </div>
                  <div className='
                  font-primary text-sm tracking-[2px]' >
                    Year(s) of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ? <CountUp start={0} end={8} duration={3} /> : null
                    }
                    
                  </div>
                  <div className='
                  font-primary text-sm tracking-[2px]' >
                    Projects <br />
                    Completed
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                    {
                      inView ? <CountUp start={0} end={12} duration={3} /> : null
                    }
                    k+
                  </div>
                  <div className='
                  font-primary text-sm tracking-[2px]' >
                    Satisfied <br />
                    Clients
                  </div>
                </div>
              </div> */}
              <div className='flex gap-x-8 items-center'>
                <button className='btn   btn-lg'>Contact me</button>
                <a href="#" className='text-gradient btn-link'>
                  My Resume
                </a>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
  
  
};

export default About;
