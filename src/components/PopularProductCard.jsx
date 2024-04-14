import { star } from "../assets/icons";
import { motion } from "framer-motion";
export default function PopularProductCard({ product }) {
  return (
    <div className="flex flex-col justify-center items-start w-3/4">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6, // Adjusted delay to ensure h1 appears after img
          y: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="w-[250px] h-[250px]  "
        src={product.imgURL}
        alt="popular product image"
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" flex justify-center items-start gap-2 mt-2"
      >
        <img src={star} alt="star" width={24} height={24} />
        <p className="dark:text-neutral-50 text-slate-gray">(4.5)</p>
      </motion.div>
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="dark:text-neutral-50 font-bold font-palanquin leading-10 "
      >
        {product.name}
      </motion.h3>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.9, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-coral-red font-montserrat font-bold "
      >
        {product.price}
      </motion.p>
    </div>
  );
}
