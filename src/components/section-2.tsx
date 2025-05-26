'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react'

const Section2 = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const BlurInAnimation = {
  hidden: { opacity: 0, filter: 'blur(20px)'},
  visible: { opacity: 1, filter: 'blur(0px)'}
  }
  return (
  <motion.section
  initial="hidden"
  animate={isInView? "visible":"hidden"}
  variants={{
    visible:{
      transition:{
        staggerChildren: 0.2
      }
    }
  }}
  id='components' className='w-full flex flex-col gap-5 h-full  relative  px-4 pb-20 py-10   '>
             <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
            <img src="./hero.jpg" alt="hero backdrop " className=" opacity-[0.08] mask-t " />
          </div>
          <motion.h1 
          variants={BlurInAnimation}
          ref={ref} className='xl:text-[4vw] lg:text-[5vw] md:text-[6vw] sm:text-[6.5vw] text-[7vw] fw-medium text-center  leading-none'>
            Built for designer-<br/> developer collaboaration
          </motion.h1>
          <motion.p 
          variants={BlurInAnimation}
          className=' text-center max-w-lg mx-auto text-zinc-300'>
            Our platform bridges the gap betwen visual design and functional code,enabling teams to work in perfect sync
            </motion.p>
          <motion.div 
          variants={BlurInAnimation}
          className='bg-gradient-to-tr w-fit mx-auto  h-fit border  border-emerald-900/50 to-transparent rounded-lg overflow-hidden from-zinc-950'>
            <img src="/ss1.jpg" className='w-full  max-w-6xl  mix-blend-screen object-contain  mx-auto  ' alt="" />
          </motion.div>
      </motion.section>
  )
}

export default Section2