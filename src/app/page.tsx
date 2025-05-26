import Bento from '@/components/bento'
import Card from '@/components/card'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'
import Section2 from '@/components/section-2'
import React from 'react'

const page = () => {
  return (
    <div className='w-full  h-full  flex flex-col flex-1'>
      <Hero/>
     <Section2/>
      <Card text='
           Start faster with AI-<br/>customization components
      ' 
      desc='Choose from ready-made components, instantly tailored by AI' 
      btn=' Learn more'/>
           <img src="/ss.png" alt="" className='w-full h-[40dvh] object-cover' />
      <Card text='
           Design effortlessly and works<br/>with any React codebase
      ' 
       btn=' Learn more'/>
       <Bento/>
       <Pricing/>
    </div>
  )
}

export default page