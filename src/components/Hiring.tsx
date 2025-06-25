"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    }
  }
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    }
  },
};

const Hiring: React.FC = () => {
  return (
    <div id="hladame-prave-teba">
      <h2 className="text-center mb-12 text-3xl lg:text-5xl lg:leading-tight font-bold">Hľadáme práve Teba?</h2>
      <section className="benefit-section">
        <motion.div
          className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}>
            <div className={clsx("flex flex-wrap items-center w-full", { "justify-start": false, "lg:order-1 justify-end": true })}>
              <div className="w-full text-center lg:text-left ">
                <motion.div className="flex flex-col w-full" variants={childVariants}>
                  <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent">
                    Nie je pre nás rozhodujúce koľko máš rokov, aké máš pohlavie, či máš prax. Dôležité je mať správne nastavenú hlavu na pomoc pre klienta a pozitívny prístup. Ak sa v tom vidíš, dohodni si nezáväzné stretnutie. 
                  </p>
                </motion.div>
              </div>
            </div>

            <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": false })}>
              <div className={clsx("w-fit flex", { "justify-start": false, "justify-end": true })}>
                <Image
                  src={'/images/fineq-now-hiring.png'} 
                  width={540}
                  height={765}
                  quality={100}
                  priority={true}
                  unoptimized={true}
                  alt="app mockup"
                  className="lg:ml-0"
                />
              </div>
            </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Hiring