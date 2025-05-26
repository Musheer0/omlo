"use client";
import Image from "next/image";
import CTAButton from "./cta-button";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedNumber } from "../../components/motion-primitives/animated-number";

export default function Pricing() {
  const [planTypeCard1, setPlanTypeCard1] = useState<"quarterly" | "annually">("quarterly");
  const [planTypeCard2, setPlanTypeCard2] = useState<"quarterly" | "annually">("quarterly");

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const blurFade = {
    hidden: { opacity: 0, filter: "blur(15px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const getPriceCard1 = () => {
    return planTypeCard1 === "quarterly"
      ? { price: "30/mo", note: "$75 billed quaterly" }
      : { price: "24/mo", note: "$288 billed annually" };
  };

  const getPriceCard2 = () => {
    return planTypeCard2 === "quarterly"
      ? { price: "4999", note: "lifetime plan" }
      : { price: "3999", note: "limited-time annual deal" };
  };

  return (
    <section id="pricing" className="w-full px-4 py-16 relative flex flex-col h-full">
      {/* Title and description */}
      <motion.div
        className="text-center mb-10"
        ref={headingRef}
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={blurFade}
          className="text-5xl font-bold flex items-center justify-center gap-2"
        >
          Plans & Pricing
        </motion.h2>
        <motion.p
          variants={blurFade}
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          Collaboration in real time on React components like never before — streaming your workflow and enhancing productivity with instant updates.
        </motion.p>
      </motion.div>

      {/* Pricing cards */}
      <div className="flex flex-col md:flex-row w-full max-w-[1300px] mx-auto bg-emerald-950/40 gap-3 rounded-xl flex-1 p-2">
        {/* Transparent Card */}
        <div className="flex-1 rounded-2xl p-10 flex flex-col items-center backdrop-blur-sm">
          <div className="top flex flex-col h-full w-full items-center">
            <h3 className="text-5xl font-semibold mb-2">$<AnimatedNumber value={parseInt(getPriceCard1().price)}/></h3>
            <p className="text-sm uppercase text-zinc-300">{getPriceCard1().note}</p>
            <div className="actions flex items-center my-2 mt-6 bg-emerald-950 rounded-md p-1">
              <button
                className={`capitalize px-4 rounded-md py-2 ${planTypeCard1 === "quarterly" ? "bg-emerald-900" : ""}`}
                onClick={() => setPlanTypeCard1("quarterly")}
              >
                quaterly
              </button>
              <button
                className={`capitalize px-4 rounded-md py-2 ${planTypeCard1 === "annually" ? "bg-emerald-900" : ""}`}
                onClick={() => setPlanTypeCard1("annually")}
              >
                annually
              </button>
            </div>
            <p className="text-sm uppercase text-zinc-300">save on an annual plan</p>
          </div>
          <div className="bottom flex flex-col items-center mx-auto">
            <p className="max-w-[80%] text-center mx-auto">
              Polish and control design details using a visual editor for components, layouts, and styles
            </p>
            <CTAButton
              variant="outline"
              className="py-3 w-[70%] justify-center flex mt-3 items-center gap-2"
            >
              GET STARTED
              <Image
                src="/arrow-right.svg"
                width={15}
                height={20}
                alt="arrow right icon"
                className="invert"
              />
            </CTAButton>
          </div>
        </div>

        {/* Colored Card */}
        <div className="flex-1 bg-emerald-900/50 rounded-2xl p-10 flex flex-col items-center backdrop-blur-sm">
          <div className="top flex flex-col h-full w-full items-center">
            <h3 className="text-5xl font-semibold mb-2">$<AnimatedNumber value={parseInt(getPriceCard2().price)}/></h3>
            <p className="text-sm uppercase text-zinc-300">{getPriceCard2().note}</p>
            <div className="actions flex items-center my-2 mt-6 bg-emerald-950 rounded-md p-1">
              <button
                className={`capitalize px-4 rounded-md py-2 ${planTypeCard2 === "quarterly" ? "bg-emerald-900" : ""}`}
                onClick={() => setPlanTypeCard2("quarterly")}
              >
                quaterly
              </button>
              <button
                className={`capitalize px-4 rounded-md py-2 ${planTypeCard2 === "annually" ? "bg-emerald-900" : ""}`}
                onClick={() => setPlanTypeCard2("annually")}
              >
                annually
              </button>
            </div>
            <p className="text-sm uppercase text-zinc-300">save on an annual plan</p>
          </div>
          <div className="bottom flex flex-col items-center mx-auto">
            <p className="max-w-[80%] text-center mx-auto">
              Polish and control design details using a visual editor for components, layouts, and styles
            </p>
            <CTAButton className="py-3 w-[70%] justify-center flex mt-3 items-center gap-2">
              BOOK A CALL
              <Image src="/arrow-right.svg" width={15} height={20} alt="arrow right icon" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
