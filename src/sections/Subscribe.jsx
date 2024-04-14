import { motion } from "framer-motion";
export default function Subscribe() {
  return (
    <section className="dark:bg-neutral-700 max-container flex flex-col  justify-center items-center ">
      <h1 className="dark:text-neutral-50 text-3xl font-palanquin font-bold capitalize mb-6 max-sm:max-w-[320px] max-sm:text-center max-sm:text-2xl ">
        sign up for <span className="text-coral-red">updates</span> & newsletter
      </h1>
      <div className="flex gap-4 w-full justify-center items-center">
        <input
          type="text"
          placeholder="subscribe here"
          className="border-slate-gray border-2 rounded-full w-2/3 h-10 "
        />
        <button className=" max-sm:w-[90px] max-sm:h-10 absolute right-[18%] px-2 py-2 font-montserrat border-none border-coral-red rounded-full bg-coral-red  text-lg leading-normal  text-white w-[110px] ">
          sign up
        </button>
      </div>
    </section>
  );
}

// <input
// placeholder="subscribe to our newsletter"
// className=" rounded-full w-1/2 h-[50px] border-2 border-slate-gray max-sm:w-[330px]"
// type="search"
// />
// <button className=" max-sm:w-[80px] max-sm:left-[120px] relative bottom-11 left-[232px] h-10 font-montserrat  border-none border-coral-red rounded-full bg-coral-red text-white w-[100px]">
// sign up
// </button>
