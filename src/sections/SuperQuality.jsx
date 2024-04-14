import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

export default function SuperQuality() {
  return (
    <section
      className="flex  items-center gap-4 px-4 dark:bg-neutral-700"
      id="about-us"
    >
      <div className="flex flex-col  flex-1 ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="dark:text-neutral-50 text-4xl font-palanquin font-bold capitalize "
        >
          We Provide You<span className="text-coral-red"> Super Quality </span>
          Shoes
        </motion.h1>
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
          className="dark:text-neutral-50 leading-5 text-sm font-palanquin text-slate-gray  mt-2"
        >
          Step into sophistication with our meticulously crafted footwear
          collection. Experience unparalleled comfort and style with every step
          you take. Our commitment to excellence ensures that each pair delivers
          durability and timeless elegance. Elevate your wardrobe with our
          superior quality shoes today.
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="dark:text-neutral-50 mt-2 leading-5 text-sm font-palanquin text-slate-gray"
        >
          our dedication to detail and experience ensures your satisfaction
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.9, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Button label="view details" />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex-1"
      >
        <img src={shoe8} alt="superquality image" width={500} height={500} />
      </motion.div>
    </section>
  );
}
