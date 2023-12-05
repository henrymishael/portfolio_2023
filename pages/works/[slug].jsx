import React from 'react'

const [slug] = () => {
  return (
    <div>[slug]</div>
  )
}
export default slug


// import React from 'react'
// import projects from '../works';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Image from 'next/image';
// import { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';




// // ... (your other imports)

// function Details() {
//   const router = useRouter();
//   const { slug } = router.query;
//     const workDetails = projects.previousWork.find((x) => x.slug === slug);

//     if (!workDetails) {
//         return <h2>Not found</h2>
//     }

//     return (
//         <>
//         <Head>
//             <title>{workDetails.name} ~ works</title>
//         </Head>
//         <div className='text-black xsm:p-[1rem] xsm:pt-[3rem]  lg:pt-0 lg:p-[5rem] flex justify-center'>
//             <div className='w-[90%] h-[600px] bg-[#f3f3f3]  flex items-center justify-center mt-8'>
//             <Swiper
//                 cssMode={true}
//                 navigation={true}
//                 pagination={true}
//                 mousewheel={true}
//                 keyboard={true}
//                 modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//                 className="mySwiper flex flex-row justify-center items-center">
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg1} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg2} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg3} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg4} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg5} />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image className=' ' src={workDetails.bg6} />
//                 </SwiperSlide>
//                 </Swiper>
//             </div>
//             <div>
//                 {/* {article} */}
//             </div>
//         </div>
//         </>
//     );
// }

// export default Details;

