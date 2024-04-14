import { motion } from "framer-motion";
export default function Servicecard({ service }) {
  console.log(service);
  return (
    <div className="dark:shadow-white flex flex-col justify-start shadow-3xl  shadow-coral-red  rounded-lg w-full px-6 py-10">
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
        className="bg-coral-red rounded-full"
        src={service.imgURL}
        alt="service image"
        width={24}
        height={24}
      />
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4, // Adjusted delay to ensure h1 appears after img
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="dark:text-neutral-50 text-2xl font-bold font-palanquin mt-4 mb-4 leading-normal"
      >
        {service.label}
      </motion.h3>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6, // Adjusted delay to ensure h1 appears after img
          x: { type: "spring", stiffness: 60 },
          // opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="dark:text-neutral-50 text-sm font-montserrat text-slate-gray leading-normal"
      >
        {service.subtext}
      </motion.p>
    </div>
  );
}
