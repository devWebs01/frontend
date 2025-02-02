import React from "react";
import { motion } from "framer-motion";

const Tentang = ({ imageSrc, alt }) => {
  return (
    <motion.section
      className="flex overflow-hidden flex-col items-center px-20 pt-12 text-center text-black max-md:px-5 bg-[#D5EFE9] "
      id="tentang-kami"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="flex flex-col items-center w-full max-w-[1671px] max-md:max-w-full">
        <motion.header
          className="px-8 pt-5 pb-3 ml-3.5 max-w-full text-5xl font-bold tracking-normal leading-none bg-emerald-100 shadow-xl rounded-[35px] w-[455px] max-md:px-5 max-md:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          Tentang Obesifit
        </motion.header>

        {/* Artikel */}
        <motion.article
          className="mt-16 ml-3.5 text-2xl font-medium tracking-wide leading-10 max-md:mt-10 max-md:max-w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          Website ini didedikasikan untuk memberikan pemahaman tentang obesitas dan cara mengelolanya, untuk semua kalangan—dari anak-anak hingga dewasa. Kami menyajikan informasi terpercaya yang mudah diakses, membantu Anda menjalani gaya
          hidup sehat dan menyadari risiko obesitas.
        </motion.article>

        {/* Gambar */}
        <motion.img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="object-contain self-stretch w-full aspect-[2.77] max-md:max-w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
        />
      </div>
    </motion.section>
  );
};

export default Tentang;
