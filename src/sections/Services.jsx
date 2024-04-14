import Servicecard from "../components/Servicecard";
import { services } from "../constants";
import { motion } from "framer-motion";
export default function Services() {
  return (
    <section className="dark:bg-neutral-700 max-container flex justify-center gap-9 px-8 max-sm:flex-col sm:grid sm:grid-cols-2 lg:flex">
      {services.map((service) => {
        return <Servicecard service={service} key={service.label} />;
      })}
    </section>
  );
}
