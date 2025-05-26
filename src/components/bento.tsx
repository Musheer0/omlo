"use client"
import { CodeIcon, LucideSquareArrowOutUpRight, PaintBucketIcon, PlusIcon, SaveIcon, Trash2Icon } from "lucide-react"
import Code from "./code";
import { motion, useScroll, useTransform } from "framer-motion";

import {useRef} from 'react'
// components/Bento.tsx
export default function Bento() {
  const ref1 =useRef(null);
  const ref2= useRef(null);
    const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
offset: ["start end", "center center"]
  });
  const scale = useTransform(scrollYProgress, [0,1],[0.8,1])
  return (
    <div id="feature" className="w-full min-h-[150dvh] flex flex-col px-4 text-zinc-950 bg-[#fffce5]  p-4 space-y-4">
      {/* Top Card with Two Inner Cards */}
      <div className="w-full flex flex-col flex-1 h-full p-2 rounded-xl  text-zinc-950 md:flex-row gap-4">
        <div ref={ref1} className="flex-1 overflow-hidden rounded-2xl min-h-[350px]  bg-[url('/bento2.png')] shadow-md  flex flex-col">
          <div className="info p-6 pb-0">
            <h2 className="text-xl font-bold">Edit code visually</h2>
          <p className="max-w-[90%]">Polish and control design details using a visual editor for components, layouts, and styles.</p>
          </div>
          <div className="ui-components  relative flex-1 flex  w-full sm:min-h-[100px] min-h-[200px] ">
            <div className="ui absolute left-5 -bottom-5 flex flex-col gap-4 h-full flex-1 w-full">
              <motion.div
                 drag
                dragConstraints={ref1}
                dragSnapToOrigin
              className="navbar text-zinc-400/90 text-sm flex items-center gap-2 justify-end rounded-lg px-4 py-2 w-[70%] bg-emerald-950">
                <p>Desktop 1200</p> <LucideSquareArrowOutUpRight size={14}/>
              </motion.div>
                <motion.div 
                   drag
                dragConstraints={ref1}
                dragSnapToOrigin
                className="app w-[70%] flex-1 h-full bg-gradient-to-b to-emerald-950 rounded-xl from-zinc-950 ">
                  <div className="navbar w-full border-b p-2 flex justify-end border-zinc-300/10 ">
                    <div className="p-1 border rounded-lg border-emerald-300/20 w-fit border-dashed">
                      <button className="text-zinc-200 cursor-pointer hover:bg-emerald-950/80 px-8 py-1 text-sm rounded-lg w-fit bg-emerald-900/50 border border-emerald-700">Login</button>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                drag
                dragConstraints={ref1}
                dragSnapToOrigin
                className="toolbar text-zinc-200 p-2  -bottom-1/3 sm:-bottom-1/2 right-5 sm:right-20 absolute w-[200px] h-full bg-zinc-900 border border-emerald-950 rounded-xl">
                  <p className="text-sm opacity-70">Modify Element</p>
                  <div className="tools flex flex-col w-full gap-2 pt-2">
                    <div className="item cursor-pointer bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 bg-emerald-900 rounded-lg">
                        <CodeIcon size={14}/>
                      </span>
                      <p>Wrap in div</p>
                    </div>
                        <div className="item cursor-pointer group transition-all hover:bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 group-hover:bg-emerald-900 transition-all rounded-lg">
                        <Trash2Icon size={14}/>
                      </span>
                      <p>Delete</p>
                    </div>
                        <div className="item cursor-pointer group transition-all hover:bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 group-hover:bg-emerald-900 transition-all rounded-lg">
                        <SaveIcon size={14}/>
                      </span>
                      <p>Save as component</p>
                    </div>
                  </div>
    
            
                </motion.div>
            </div>
          </div>
        </div>
        <div ref={ref2} className="flex-1 rounded-2xl overflow-hidden min-h-[350px]  flex flex-col  ">
         <div className="info p-6 pb-0">
           <h2 className=" text-xl font-bold">Build & Maintain Design Systems</h2>
          <p className=" w-[70%]">
            Import your components from Storybook or generate a custom library in minutes
            </p>
         </div>
                   <div className="ui-components  relative flex-1 flex  w-full sm:min-h-[100px] min-h-[200px] ">
            <div className="ui absolute left-5 -bottom-5 sm:-bottom-20 flex flex-col gap-4 h-full flex-1 w-full">

                <motion.div 
                     drag
                dragConstraints={ref2}
                dragSnapToOrigin
                className="app w-[70%] flex-1 h-full bg-gradient-to-b to-emerald-950 rounded-xl from-zinc-950 ">
                  <div className="navbar w-full border-b p-2 flex justify-end items-center gap-2 border-zinc-300/10 ">
                    <img src="https://imgs.search.brave.com/cl3rnw2dDb-WAIqrui1tEYCLZCM5aw7wL8KpB7Y8dMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVU1YbWxy/TW5CY0poYUZ1SUVZ/V3hhM2F0eE81UXZE/Nkk4Ykc2c3NVNHFj/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L1pu/SmxaUzF3YUc5MGJ5/OTUvYjNWdVp5MXRZ/VzR0Wm5WdS9ibmt0/Wlhod2NtVnpjMmx2/L2JsOHhNVGswTFRN/eE1EVXUvYW5CblAz/TmxiWFE5WVdsei9Y/Mmg1WW5KcFpDWjNQ/VGMwL01B"
                    className="w-10 h-10 rounded-md border-2 border-emerald-950 object-cover"
                    alt="young happy man" />
                      <button className="text-zinc-200 cursor-pointer hover:bg-emerald-950/80 px-4 py-2 text-sm rounded-md w-fit bg-emerald-900/50 border border-emerald-700">
                      Share
                      </button>
                  </div>
                         <div className="navbar w-full border-b p-2 flex  items-center gap-4 border-zinc-300/10 ">
                   {['Design','Props','History'].map((e,i)=>{
                    return(
                       <p className="hover:opacity-100 opacity-70 text-white text-sm capitalize cursor-pointer" key={i}>{e}</p>
                    )
                   })}
                  </div>
                  <div className="form p-2 text-white/50">
                    <p className="text-white opacity-50 text-xs py-2">Class</p>
                    <div  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20">
                      <PaintBucketIcon size={13}/>
                                          <p className=" text-xs">Add Class</p>

                    </div>
                       <p className="text-white opacity-50 text-xs py-2">Modifiers</p>
                    <div  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20">
                      <PlusIcon size={13}/>
                                          <p className=" text-xs">Apply Modifiers</p>

                    </div>
                  </div>
                </motion.div>
                <motion.div
                     drag
                dragConstraints={ref2}
                dragSnapToOrigin
                className="toolbar text-zinc-200 p-2  -bottom-1/3 sm:-bottom-1/2 right-3 sm:right-20 absolute w-[200px] h-full bg-zinc-900 border border-emerald-950 rounded-xl">
        <div className="navbar w-full border-b p-2 flex  items-center gap-4 border-zinc-300/10 ">
                   {['Layers','Assets'].map((e,i)=>{
                    return(
                       <p className="hover:opacity-100 opacity-70 text-white text-sm capitalize cursor-pointer" key={i}>{e}</p>
                    )
                   })}
                  </div>
                  <div className="tools  flex flex-col w-full gap-2 pt-1">
                           <button className="text-zinc-200 text-xs cursor-pointer hover:bg-emerald-950/80 px-4 py-2  rounded-md w-fit bg-emerald-900/50 border border-emerald-700">
                      Saved a component
                      </button>
                    <div className="item cursor-pointer bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 bg-emerald-900 rounded-lg">
                        <CodeIcon size={14}/>
                      </span>
                      <p>Tooltip</p>
                    </div>
                        <div className="item cursor-pointer group transition-all hover:bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 group-hover:bg-emerald-900 transition-all rounded-lg">
                        <PaintBucketIcon size={14}/>
                      </span>
                      <p>Design</p>
                    </div>
                        <div className="item cursor-pointer group transition-all hover:bg-emerald-950  p-1 rounded-lg text-sm flex items-center gap-2">
                      <span className="p-2 group-hover:bg-emerald-900 transition-all rounded-lg">
                        <SaveIcon size={14}/>
                      </span>
                      <p>Save as component</p>
                    </div>
                  </div>
    
            
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full Width Card */}
      <motion.div
      ref={targetRef}
      style={{
        scale
      }}
      className="w-full rounded-2xl max-h-[500px] flex-1 relative overflow-hidden  sm:px-4 ">
        <div className="w-full h-full translate-y-10">
          <Code/>
        </div>
      </motion.div>
    </div>
  );
}
