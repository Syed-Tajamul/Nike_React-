import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants";
import { motion } from "framer-motion";

export default function Hero({ toggledark }) {
  console.log(toggledark);
  const [image, setImage] = useState(bigShoe1);
  console.log(image);
  return (
    <section
      id="home"
      className=" lg:flex-row max-sm:pt-[150px] min-h-screen  flex  flex-col justify-center gap-10 lg:gap-0  "
    >
      <div className=" z-10 lg:w-2/5 px-16 relative  flex flex-col justify-center items-start  ">
        <p className="dark:text-white mb-40 lg:text-sm text-xl font-montserrat text-slate-gray sm:mt-[100px] max-sm:text-lg lg:mb-2">
          our summer collections
        </p>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" dark:text-neutral-50 lg:leading-1 font-bold font-palanquin text-8xl sm:whitespace-nowrap sm:text-[72px] max-sm:text-[50px] max-sm:leading-[60px]"
        >
          <span
            className={` dark:text-neutral-50 ${
              toggledark === true && "lg:dark:bg-neutral-700"
            } xl:bg-white xl:whitespace-nowrap   max-sm:whitespace-wrap `}
          >
            The New Arrival
          </span>
          <br /> <span className=" text-coral-red">Nike </span> Shoes
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" dark:text-neutral-50 lg:text-sm text-lg text-slate-gray leading-6 mt-6 max-sm:whitespace-wrap "
        >
          Discover stylish nike arrivals,quality comfort and innovation for your
          active life
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Button label="shop me" iconurl={arrowRight} />
        </motion.div>
      </div>

      <div
        className={` lg:w-4/5 ${
          toggledark === true ? "dark:bg-neutral-700" : "bg-hero"
        } relative bg-cover bg-center  flex  lg:min-h-screen justify-center items-center  `}
      >
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" relative z-10 pr-10 "
          src={image}
          width={450}
          height={510}
          alt="big-shoe-image"
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4, // Adjusted delay to ensure h1 appears after img
            y: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" absolute pt-[520px] flex justify-center items-center gap-2"
        >
          {shoes.map((shoe) => (
            <ShoeCard
              shoe={shoe}
              key={shoe.bigShoe}
              image={image}
              setImage={setImage}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
