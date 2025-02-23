"use client"
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion"

const LogoTicker = () => {
  return <div className="py-8 bg-white md:py-12">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14"
          animate={{ translateX: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {/* Fisrt set */}
          <Image src={acmeLogo} alt="acmeLogo" className="logo-ticker" />
          <Image src={quantumLogo} alt="quantumLogo" className="logo-ticker" />
          <Image src={echoLogo} alt="echoLogo" className="logo-ticker" />
          <Image src={celestialLogo} alt="celestialLogo" className="logo-ticker" />
          <Image src={pulseLogo} alt="pulseLogo" className="logo-ticker" />
          <Image src={apexLogo} alt="apexLogo" className="logo-ticker" />
          {/* second set : repeated logos for animation */}
          <Image src={acmeLogo} alt="acmeLogo" className="logo-ticker" />
          <Image src={quantumLogo} alt="quantumLogo" className="logo-ticker" />
          <Image src={echoLogo} alt="echoLogo" className="logo-ticker" />
          <Image src={celestialLogo} alt="celestialLogo" className="logo-ticker" />
          <Image src={pulseLogo} alt="pulseLogo" className="logo-ticker" />
          <Image src={apexLogo} alt="apexLogo" className="logo-ticker" />
        </motion.div>
      </div>
    </div>
  </div>;
};
export default LogoTicker;