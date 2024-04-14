import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";
export default function PopularProducts() {
  return (
    <section className=" px-4 dark:bg-neutral-700" id="products  ">
      <div className=" flex flex-col gap-4 justify-center items-start">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="dark:text-neutral-50 text-4xl font-palanquin font-bold"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="dark:text-neutral-50 text-slate-gray text-sm font-montserrat"
        >
          Elevate your style with every step. Discover the perfect pair to make
          every stride a statement
        </motion.p>
      </div>
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3  mt-14 ">
        {products.map((product) => (
          <PopularProductCard product={product} key={product.imgURL} />
        ))}
      </div>
    </section>
  );
}
