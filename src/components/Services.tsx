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

const Services: React.FC = () => {
  return (
    <div id="nase-sluzby">
      <h2 className="text-center mb-12 text-3xl lg:text-5xl lg:leading-tight font-bold">Naše služby</h2>
      <section className="benefit-section">
        <motion.div
          className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
          variants={containerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}>
            <div className={clsx("flex flex-wrap items-center w-full", { "justify-start": true, "lg:order-1 justify-end": false })}>
              <div className="w-full text-center lg:text-left ">
                <motion.div className="flex flex-col w-full" variants={childVariants}>
                  <ul className="text-foreground-accent">
                    <li className="mb-2">Komplexné finančné poradenstvo - prostredníctvom nás si môžete skontrolovať svoje zmluvy, nechať si ich vysvetliť. Máte garanciu, že ak je produkt dobrý, nebudeme ho rušiť.</li>
                    <li className="mb-2">Dôchodky - po rozhovore s nami si dokážete zabezpečiť všetky štyri dôchodkové piliere.</li>
                    <li className="mb-2">Životné poistenie - nastavenie na mieru klienta s prihliadnutím na životnú situáciu. Podložené výsledky poistného plnenia. </li>
                    <li className="mb-2">Úvery  - spotrebné úvery, hypotekárne úvery, leasingy. Zastrešíme všetko.</li>
                    <li className="mb-2">Investovanie</li>
                    <li className="mb-2">Neživotné poistenie</li>
                    <li className="mb-2">Podnikateľský sektor</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": true })}>
              <div className={clsx("w-fit flex", { "justify-start": true, "justify-end": false })}>
                <Image
                  src={'/images/fineq-services.webp'} 
                  width={540}
                  height={765}
                  quality={100}
                  priority={true}
                  unoptimized={true}
                  alt="Hľadáme práve Teba?"
                  className="lg:ml-0"
                />
              </div>
            </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Services