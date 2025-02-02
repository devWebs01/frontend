import React from "react";
import { motion } from "framer-motion";
import mainbg11 from "../../../assets/images/MainbG1.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  // Variants for animations
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div className="flex flex-col items-center gap-10 px-6 py-10 relative bg-[#cacbcf26]" id="home" initial="hidden" animate="visible" variants={containerVariant}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
        {/* Left Section (Text and Button) */}
        <motion.div className="relative flex-1 w-full lg:w-[50%] max-w-[832px] mb-10" variants={containerVariant}>
          <div className="w-full mb-10">
            <p className="font-black text-transparent text-[50px] sm:text-[65px] md:text-[85px] lg:text-[95px] tracking-wide leading-[60px] sm:leading-[80px] md:leading-[90px] lg:leading-[100px]">
              <span className="text-[#0e0f0c]">Pahami Obesitas, </span>
              <span className="text-[#4eac92]">Kendalikan Kesehatanmu</span>
            </p>
            <p className="font-semibold text-black text-base sm:text-lg md:text-xl lg:text-xl tracking-wide leading-7 pt-10">Mulai hidup sehat dengan edukasi, konsultasi, dan dukungan dari kami</p>
          </div>
          <div className="w-full flex justify-start">
            <motion.div className="bg-[#4eac92] rounded-xl shadow-md w-full max-w-[291px] h-[74px] flex items-center justify-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button className="font-bold text-[#eae8e8] text-2xl text-center leading-7 w-full" onClick={() => navigate("/login")}>
                Langsung Aja
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div className="relative flex-1 w-full lg:w-[50%] max-w-[828px]" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}>
          <div className="relative w-full h-auto">
            <img className="w-full h-auto object-cover" alt="Mainbg" src={mainbg11} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
