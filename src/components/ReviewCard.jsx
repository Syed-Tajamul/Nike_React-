import { star } from "../assets/icons";
import { motion } from "framer-motion";
export default function ReviewCard({ review }) {
  const { imgURL, customerName, rating, feedback } = review;
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="rounded-full"
        src={imgURL}
        alt="customer img"
        width={90}
        height={90}
      />
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" dark:text-neutral-50  max-w-[350px] text-md pt-4 font-montserrat text-slate-gray leading-normal"
      >
        {feedback}
      </motion.p>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex gap-4 mt-2"
      >
        <img src={star} alt="star" width={20} height={20} />
        <p className="dark:text-neutral-50 text-slate-gray">({rating})</p>
      </motion.div>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.9, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="dark:text-neutral-50 pt-2 font-palanquin font-bold text-xl"
      >
        {customerName}
      </motion.p>
    </div>
  );
}
