import React from "react";
import { motion } from "framer-motion";

const ReviewCard = ({ name, title, imageSrc, review, starsSrc }) => {
  return (
    <motion.article
      className="flex flex-col px-6 py-12 w-full rounded-2xl bg-zinc-100 shadow-[-159px_118px_55px_rgba(0,0,0,0)] max-md:px-5"
      id="testimoni"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <header className="flex gap-10">
        <motion.div className="flex flex-col flex-1 self-start mt-2.5 tracking-tighter text-black" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false }}>
          <h3 className="self-start text-3xl font-bold leading-loose">{name}</h3>
          <p className="mt-3 text-lg leading-none">{title}</p>
        </motion.div>
        {imageSrc && (
          <motion.div className="flex flex-col flex-1 rounded-full" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: false }}>
            <img loading="lazy" src={imageSrc} alt={`Portrait of ${name}`} className="object-contain aspect-[1.12] rounded-[259px] w-[135px]" />
          </motion.div>
        )}
      </header>

      <motion.p
        className="mt-24 text-lg font-light tracking-tighter leading-5 text-black max-md:mt-10 max-md:mr-2.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
      >
        {review}
      </motion.p>

      {starsSrc && (
        <motion.img
          loading="lazy"
          src={starsSrc}
          alt="Review rating"
          className="object-contain mt-12 max-w-full aspect-[5.95] w-[119px] max-md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        />
      )}
    </motion.article>
  );
};

export default ReviewCard;
