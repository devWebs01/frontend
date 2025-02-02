import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/elements/Button/Button";

const Dokter = ({ title, description, imageSrc, alt, buttonText }) => {
  return (
    <motion.section
      className="flex overflow-hidden flex-col px-36 text-right text-black bg-neutral-300 bg-opacity-10 max-md:px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="flex flex-wrap gap-16 items-center w-full max-md:max-w-full">
        {/* Bagian Gambar */}
        <motion.img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-none aspect-[1.19] basis-5 min-w-[320px] max-md:max-w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        />

        {/* Bagian Teks */}
        <motion.div
          className="flex flex-col flex-1 shrink items-end self-stretch py-0.5 pl-5 my-auto rounded-2xl basis-0 min-w-[320px] max-md:max-w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-semibold tracking-tighter leading-none max-md:max-w-full">{title}</h2>
          <p className="self-stretch mt-7 text-lg font-light tracking-normal leading-7 max-md:max-w-full">{description}</p>
          <Button text={buttonText} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Dokter;
