import React from 'react'
import CTAButton from './cta-button'

const Card = ({text,desc,btn}:{text:string,desc?:string,btn:string}) => {
  return (
     <section  className='w-full text-zinc-950 items-center py-10 px-4 h-fit max-h-[50dvh] flex flex-col gap-5 bg-[#fffce5]'>
              <h1 dangerouslySetInnerHTML={{__html:text}} className='text-4xl font-semibold text-center  leading-none'
              
              >
       
          </h1>
       {desc && 
          <p className=' text-center max-w-lg mx-auto  text-zinc-900'>
            {desc}
           </p>
       }
           <CTAButton variant='dark' className='py-3'>
           {btn}
           </CTAButton>
     </section>
  )
}

export default Card