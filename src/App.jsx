// import { motion, useInView, useAnimation } from "framer-motion";
// import { fadeIn } from "./variants";
// export default function App() {
//   return (
//     <>
//       <div className=" flex flex-col justify-center items-center gap-8">
//         <motion.div
//           variants={fadeIn("up", 0.2)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.7 }}
//           className="px-4 flex flex-col justify-center items-center h-screen"
//         >
//           <h1 className="text-green-800 text-4xl font-palanquin ">
//             hi i am tawseef
//           </h1>
//           <p className="text-yellow-800 font-montserrat max-w-md">
//             loremis simply dummy text of the printing and typesetting industry.
//             Lorem Ipsum has been the industry standard dummy text ever since the
//             1500s, when an unknown printer took a galley of type and scrambled
//             it to make a type specimen book. It has survived not only five
//             centuries, but also the leap into electronic typesetting, remaining
//             essentially unchanged. It was popularised in the 1960s with the
//             release of Letraset sheets containing Lorem Ipsum passages, and more
//             recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </p>
//         </motion.div>
//       </div>
//       <motion.div
//         variants={fadeIn("right", 0.2)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.7 }}
//         className="h-screen  flex flex-col gap-8 justify-center items-center"
//       >
//         <h1 className="text-3xl text-red-600">i live at rajpora</h1>
//         <p className="text-md text-green-600 max-w-60">
//           i have done mca,that is cool,lly unchanged. It was popularised in the
//           1960s with the release of Letraset sheets containing Lorem Ipsum
//           passages, and more recently with desktop publishing software like
//           Aldus PageMaker
//         </p>
//       </motion.div>
//     </>
//   );
// }
import { useState } from "react";
import Navbar from "./components/Navbar";
import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";
export default function App() {
  const [toggledark, setDark] = useState(false);
  return (
    <main className="relative dark:bg-neutral-700">
      <section>
        <Navbar toggledark={toggledark} setDark={setDark} />
      </section>
      <section>
        <Hero toggledark={toggledark} />
      </section>
      <section className="px-10 py-16 mt-24">
        <PopularProducts />
      </section>
      <section className="px-10 py-16 ">
        <SuperQuality />
      </section>
      <section className="px-10 py-16">
        <Services />
      </section>

      <section className="px-10 py-16 bg-pale-blue dark:bg-neutral-700">
        <CustomerReviews />
      </section>
      <section className="px-10 py-16 sm:py-32  ">
        <Subscribe />
      </section>
      <section className="px-10 py-16 bg-black  text-white ">
        <Footer />
      </section>
    </main>
  );
}
