import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";
export default function CustomerReviews() {
  return (
    <section className="dark:bg-neutral-700 max-container flex flex-col  text-center gap-10">
      <div>
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
          className="dark:text-neutral-50 capitalize text-3xl font-bold font-palanquin "
        >
          What our <span className="text-coral-red">customers</span> say?
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6, // Adjusted delay to ensure h1 appears after img
            x: { type: "spring", stiffness: 60 },
            // opacity: { duration: 2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="dark:text-neutral-50 text-slate-gray leading-normal max-w-[340px] mx-[auto]  "
        >
          Hear genuine stories from our customers about their exceptional
          experience with us
        </motion.p>
      </div>
      <div className="flex justify-evenly items-center max-sm:flex-col gap-10">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.customerName} />
        ))}
      </div>
    </section>
  );
}
