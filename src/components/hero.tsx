"use client"
import React from 'react'
import CTAButton from './cta-button'
import { motion } from 'framer-motion';

const Hero = () => {
  const tags = ['AI', 'Agent+', 'Design', 'Development', 'React Components']
const wordsLine1 = 'Design & Code together'.split(' ');
const wordsLine2 = 'powered by AI.'.split(' ');
const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

  return (
    <section className='w-full flex-1 pb-[6.7rem]  h-full pt-40 flex flex-col px-8 sm:px-8'>
      
      {/* --- TOP: Image + Hero Text + Actions --- */}
      <div className="top flex w-full">
        {/* Left: Image */}
        <motion.div
        initial={{
          opacity:0,
          filter: 'blur(10px)'
        }}
             animate={{
              opacity:1,
          filter: 'blur(0px)'
        }}
        className="left max-w-[30%] flex-1  hidden lg:flex flex-col">
          <div className='bg-emerald-950/50 w-fit p-1.5 rounded-lg'>
            <img src="/house.jpg" className='w-[250px] rounded-lg shadow-md' alt="hero" />
          </div>
        </motion.div>

        {/* Right: Heading + CTA */}
        <div className="right flex flex-col flex-1 justify-center">
          <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible:{
              transition:{
                staggerChildren: 0.1
              }
            }
          }}
          className='lg:text-[5.2vw] text-[9.2vw] sm:text-[8vw]  md:text-[7.2vw] fw-medium leading-none'>
           {wordsLine1.map((w,i)=>{
            return(
              <motion.span key={i}
              variants={wordAnimation}
              >{w} </motion.span>
            )
           })} 
            <br />
            {wordsLine2.map((w,i)=>{
            return(
              <motion.span key={i}
              variants={wordAnimation}
              >{w} </motion.span>
            )
           })}
          </motion.h1>
          <motion.div 
          initial={{
            opacity: 0,
            translateY: '-30px'
          }}
           
          animate={{
            opacity: 1,
            translateY: '0px'
          }}
          className="actions flex items-center gap-3 py-6">
            <CTAButton className='text-sm py-3 border fw-regular'>
              GET STARTED
            </CTAButton>
            <CTAButton className='py-3 text-sm fw-regular' variant='outline'>
              HOW IT WORKS
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM: Tags + Description --- */}
      <div className="bottom flex-w flex-wrap flex w-full mt-12">
        {/* Left: Tags */}
        <div className="left max-w-[30%] hidden flex-1 sm:flex flex-col justify-end">
          <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible:{
              transition:{
                staggerChildren: 0.09
              }
            }
          }}
          className='flex flex-col items-start gap-1 px-1'>
            {tags.map((tag, i) => (
              <motion.li 
              variants={wordAnimation}
              key={i}>{tag}</motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: Description */}
        <div className="right flex-1 flex-wrap flex items-end">
          <motion.p
          initial="hidden"
          animate="visible"
            variants={{
            visible:{
              transition:{
                staggerChildren: 0.004
              }
            }
          }}
          className='text-zinc-400 lg:w-[62%]'>
           {` Collaborate in realtime on React components like never before, 
            streaming your workflow and enhancing productivity with instant updates and seamless interaction between team members.`.split('').map((e,i)=>{
              return(
                <motion.span key={i}
                variants={wordAnimation}
                >
                  {e}
                </motion.span>
              )
            })}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero
