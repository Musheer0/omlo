"use client"
import React, { useEffect, useState } from 'react'
import CTAButton from './cta-button'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  useEffect(()=>{
        const handleScroll = ()=>{
          const currentScroll =window.scrollY;
          setHidden(currentScroll>prevScroll && currentScroll>50);
          setPrevScroll(currentScroll)
        };
        window.addEventListener("scroll",handleScroll);
        return(()=>{
          window.removeEventListener("scroll",handleScroll)
        })
  },[prevScroll])
  const links = [
    { label: 'Features', href: '#feature' },
    { label: 'Components', href: '#components' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <>
      <motion.nav 
      initial={{
         y:'-100%'
      }}
      animate={{
        y: hidden? '-100%': 0
      }}
      transition={{
        ease: 'easeInOut'
      }}
      className='py-4 fixed top-0 z-50 bg-black/10 backdrop-blur-2xl px-8 text-sm flex items-center gap-4 sm:justify-between w-full'>
        <p className='fw-medium text-lg'>Omlo</p>
        <ul className='sm:flex hidden items-center gap-6'>
          {links.map((link, i) => (
            <li key={i} className='hover:underline'>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <CTAButton className='py-2 ml-auto sm:ml-0'>Log in</CTAButton>
        <button
          onClick={() => setOpen(true)}
          className='p-2 rounded-full border border-white/50 sm:hidden'
        >
          <MenuIcon size={16} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' ,}}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed inset-0 z-[60]  flex'
          >
            {/* Backdrop */}
            <div
              className='absolute inset-0 bg-black/30 backdrop-blur-sm'
              onClick={() => setOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: '100%' , borderRadius: `${Infinity*1}px`}}
              animate={{ x: 0,borderRadius: `0px` }}
              exit={{ x: '100%' ,borderRadius: `${Infinity*1}px`}}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='relative ml-auto w-3/4 max-w-xs  rounded-r-none overflow-hidden bg-zinc-950 p-6 flex flex-col gap-4 text-white shadow-xl'
            >
              <button
                onClick={() => setOpen(false)}
                className='self-end p-2 rounded-full border border-white/30'
              >
                <XIcon size={18} />
              </button>
              <ul className='flex flex-col gap-4 mt-4'>
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <CTAButton className='mt-auto w-full'>Log in</CTAButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
