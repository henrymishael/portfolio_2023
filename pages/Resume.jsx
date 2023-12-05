import React from 'react'
import Head from 'next/head'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Resume() {
  return (
    <>
    <Head>
      <title>My Resume - Henry Onyeka</title>
    </Head>
    <section className=' md:p-24 xsm:p-8 '>
      <div className='relative flex md:flex-row xsm:flex-col bg-[rgb(243,243,243)] text-slate-500 min-h-screen font-medium text-lg py-24 gap-12'>
        <div className='absolute right-24 top-4 flex flex-row gap-3'>
          <a href="https://www.linkedin.com/in/henry-mishael-b62b19209" target="_blank">
          <BsLinkedin/>
          </a>
          <a href="https://github.com/henrymishael" target="_blank" >
          <BsGithub/>
          </a>

        </div>
      <div className='md:w-[25%] text-left sm:pl-12 xsm:pl-6  flex flex-col gap-2'>
        <div className='flex flex-col gap-2 text-accent md:text-[18px] xsm:text-[14px]'>
          <a href="https://portfolio-2023-nine-theta.vercel.app">
          <h3 className='border-b-[6px] border-yellow-400/60 leading-[9px] md:w-[40%] xsm:w-[38%] sm:w-[20%]'>portfoliosite</h3></a>
          <p className='text-[16px] text-black'>Lagos, Nigeria</p>
          <a className='border-b-[6px] border-yellow-400/60 leading-[9px] md:w-[70%] xsm:w-[70%] sm:w-[35%]' href="mailto:henrymishael.hm@gmail.com">hello@henrymishael.com</a>
          <a href="tel:+2348115173291">+2348115173291</a>
        </div>
        <div className='flex xsm:flex-row md:flex-col w-full  '>
        <div className='flex flex-col w-[100%]'>
        <h3 className=' text-accent font-semibold xsm:text-[14px] sm:text-[18px] md:text-[24px] mt-6'>Core technologies:</h3>
        <div className='xsm:text-[12px] sm:text-[14px] md:text-[18px]'>
        <li>React</li>
        <li>Next Js</li>
        <li>Sass</li>
        <li>Html</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>Figma</li>
        </div>
        </div>
        <div className='flex flex-col w-[100%]'>
        <h3 className=' text-accent font-semibold xsm:text-[14px]  sm:text-[18px] md:text-[24px] mt-6'>Others:</h3>
        <div className='xsm:text-[12px] sm:text-[14px] md:text-[18px]'>
        <li>Ux Engineering</li>
        <li>Responsive/ <br />Mobile Design</li>
        <li>Django</li>
        <li>Postgress</li>
        <li>Firebase</li>
        <li>Python</li>
        </div>
        </div>
        <div className='flex flex-col w-[100%]'>
        <h3 className=' text-accent font-semibold xsm:text-[14px]  sm:text-[18px] md:text-[24px] mt-6'>Skills:</h3>
        <div className='xsm:text-[12px] sm:text-[14px] md:text-[18px]'>
        <li>Git/Version control</li>
        <li>Problem solving</li>
        <li>TEsting and debugging</li>
        <li>web Accessibility</li>
        <li>Team collaboration</li>
        <li>Good communication skill</li>
        </div>
        </div>
        </div>
      </div>
      <div className='md:w-[75%] xsm:w-full flex flex-col gap-8  '>
        <div className='sm:px-12 xsm:px-6 flex flex-col justify-center gap-4 border-b-[1px] border-black/40 pb-10'>
          <h1 className='text-left md:text-[80px] xsm:text-[50px] font-bold tracking-wide md:leading-[70px] xsm:leading-[40px] text-accent'>Henry <br /> Mishael.</h1>
          <p className='text-black/70 md:text-[30px] xsm:text-[20px] font-semibold'>FrontEnd Developer and UX Engineer.</p>
          <p className='font-semibold md:w-[70%] md:text-[20px] xsm:text-[14px] xsm:w-[90%]'> I like to craft solid and scalable frontend products with great user experiences. Highly Skilled in design systems & UI Engineering</p>
        </div>
        <div className='sm:px-12 xsm:px-6 flex flex-col gap-6'>
          <h2 className='text-accent font-bold text-[28px] border-b-[6px] border-yellow-400/60 w-[100px] leading-[9px] '>Education</h2>
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-[28px]'>Univelcity, Yaba, Lagos State </h2>
            <em><p className='text-yellow-600'>-FrontEnd Engineer</p></em>
            <li>Responsible for implementing the visual and interactive aspects
            of a website or web application based on design specifications.</li>
            <li>creating intuitive and      user-friendly interfaces by implementing
            UI components, layout structures, and navigation systems.
            </li>
            <li>
            Developed a solid understanding of HTML, CSS, and JavaScript
            frameworks and libraries such as react/Next js, Tailwind Css.
            </li>
            <li>
              Created responsive designs that work across various devices (desktop, tablet, mobile) using media queries in CSS.
            </li>
            <li>
              Debug errors, troubleshoot issues, and perform routine
              performance optimizations.
            </li>
            <li>
              Write high-quality, scalable, and reusable code.
            </li>
          </div>
          <div className='flex flex-col gap-y-4'>
            <h2 className='text-accent font-bold text-[20px] border-b-[6px] border-yellow-400/60 w-[70px] leading-[9px]'>Projects</h2>
            <p>Here are some of the projects I've worked on</p>
            <div className='flex flex-col gap-8'>
              <span className='flex flex-col'>
                <h2 className='text-accent font-semibold'>Piggyvest Landing page</h2>
                <a className='text-yellow-600' href="https://my-projects-bay-nine.vercel.app/HomePage" target='_blank'>Link to project</a>
                <p>An appreciation of one of Nigeria's leading financial companies</p>
                <li>Built with Next Js</li>
                <li>Javascript authentication handling</li>
                <li>Localstorage as a temporary databse</li>
                <li>Responsive web and mobile design</li>
                <li>React toast for messages/notifications</li>
              </span>
              <span  className='flex flex-col'>
                <h2  className='text-accent font-semibold'>Image gallery</h2>
                <a className='text-yellow-600' href="https://image-gallery-vert-gamma.vercel.app" target='_blank'>Link to project</a>
                <p>The image gallery seamlessly combines the power of Next.js, Tailwind CSS, Firebase Authentication, Unsplash API, Axios, and Beautiful DnD to deliver a modern and feature-rich web application for users to explore and interact with a curated collection of images.</p>
                <li>Leverages the power of Next.js for server-side rendering, providing fast page loads and efficient performance.</li>
                <li>Utilizes Tailwind CSS for a utility-first approach to styling, allowing for rapid development and easy customization</li>
                <li>Implements Firebase Authentication for secure user authentication and authorization</li>
                <li>Integrates the Unsplash API to dynamically fetch high-quality and royalty-free images for the gallery.</li>
                <li>Implements Beautiful DnD which allows users to effortlessly rearrange and organize images within the gallery using drag-and-drop functionality.</li>
              </span>
              <span>
                <h5 className='text-accent font-semibold'>Movie Box</h5>
                <a className='text-yellow-600' href="https://moviebox-weld.vercel.app" target='_blank'>Link to project</a>
                <p>This movie website offers a feature-rich and visually appealing platform for movie enthusiasts. With real-time data fetching, comprehensive movie information, and a user-friendly interface, it provides an immersive experience for users to explore, discover, and engage with their favorite movies effortlessly.</p>
                <li>Leverages the power of Next.js for server-side rendering, providing fast page loads and efficient performance.</li>
                <li>Utilizes Tailwind CSS for a utility-first approach to styling, allowing for rapid development and easy customization</li>
                <li>Integrates seamlessly with the TMDB (The Movie Database) API to fetch comprehensive and up-to-date information about movies.</li>
                <li>Displays a user-friendly interface for browsing a vast collection of movies with categorized listings.</li>
                <li>Provides dedicated pages for each movie with comprehensive details, including plot summaries, cast and crew information, trailers, and user ratings.</li>
              </span>
              <span>
                <h5 className='text-accent font-semibold'>Spotify clone</h5>
                <a className='text-yellow-600' href="https://spotify-clone-henrymishael.vercel.app/login" target='_blank'>Link to website</a>
                <li>Utilizes Lodash for efficient and streamlined data manipulation tasks, optimizing the handling of complex data structures.</li>
                <li>Utilizes Recoil for global state management, providing a centralized and efficient way to handle shared data across components.</li>
                <li>Integrates user authentication to allow users to create accounts, log in, and personalize their music preferences.</li>
                <li>Allows users to play, pause tracks, and control the volume directly from the websit</li>
              </span>
              <span>
                <h5 className='font-semibold text-accent'>Calculator app</h5>
                <p>A simple calculator app, responsive and efficient</p>
                <a className='text-yellow-600' href="https://henrymishael.github.io/responsive_calculator/" target="_blank">Link to app</a>
              </span>
            </div>
            
          </div>
          <div className='flex flex-col gap-y-4'>
            <h2 className='font-bold text-accent text-[28px] border-b-[6px] border-yellow-400/60 w-[30%] leading-[30px] '>Other Education</h2>
            <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-[28px]'>University Of Benin, Edo State, Nigeria </h2>
            <em><p className='text-yellow-600'>Bsc Industrial Chemistry - <span className='text-black'>2015 - 2020</span></p></em>
            <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-accent'>Experience</h2>
            <h5 className='text-accent font-semibold'>Federal Institute of Industrial Research Oshodi</h5>
            <p>Internship</p>
            <li>Assist researchers in conducting experiments and gathering data.</li>
            <li>Designing, undertaking and analyzing information from controlled laboratory-based investigations, experiments and trials.</li>    
            <li>Working as part of a team in a research laboratory.</li>  
            <li> Setting up laboratory equipment and conducting tests and experiments.</li>
            <li> ecording and analyzing data.</li>
            <li>Presenting research analysis to senior research Officers.</li>
            <li>Researching and writing papers, reports and reviews.</li>

          </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      
      </div>
    </section>
    </>
  )
}

export default Resume;
