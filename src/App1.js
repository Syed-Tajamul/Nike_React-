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
