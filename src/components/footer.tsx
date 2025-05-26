import React from 'react'
import CTAButton from './cta-button'
import Image from 'next/image'

const Footer = () => {
        const tags =['AI', 'Agent+','Design','Development','React Compoenents']
        const socials = ['fb.svg', 'ig.svg','ld.svg']
  return (
    <footer id='resources' className='w-full relative  h-[40dvh] flex flex-col items-center gap-4 px-4'>
     
        <h2 className="sm:text-5xl text-4xl font-bold flex text-center leading-none items-center justify-center gap-2">
      What will your team <br/>create - together?
        </h2>
        <CTAButton className='py-3 flex mt-3 items-center gap-2'>
            GET STARTED
            <Image src="/arrow-right.svg" width={15} height={20} alt='arrow right icon'/>
        </CTAButton>
        <div className="bottom justify-end  flex-1 pb-5 flex flex-col items-start w-full">
            <div className="socials flex items-end justify-start gap-4">
                {socials.map((s,i)=>{
                    return (
                        <Image key={i} src={s} width={25} height={20} alt='social icon' className='text-white cursor-pointer invert'/>
                    )
                })}
            </div>
              <ul className='flex-1 flex  flex-wrap items-end   gap-4 px-1'>
            {tags.map((tag,i)=>{
                return(
                    <li key={i} className='hover:underline cursor-pointer'>{tag}</li>
                )
            })}
        </ul>
        </div>
        
                <div className="absolute bottom-0 left-0 -z-10 w-full h-full overflow-hidden">
                           <p className='text-[10vw] fw-medium right-5 absolute -bottom-1/4 opacity-30'>
            Omlo
        </p>
            <img src="./hero.jpg" alt="hero backdrop " className=" opacity-[0.08] mask-t " />
          </div>
 
    </footer>
  )
}

export default Footer