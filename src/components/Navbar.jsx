import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

export default function Navbar({ toggledark, setDark }) {
  const handledark = () => {
    setDark((prev) => !prev);
    const htmlElement = document.documentElement; // Access the <html> element
    console.log(htmlElement.classList);
    htmlElement.classList.toggle("dark"); // Toggle the 'dark' class on <html>
  };
  return (
    <header className=" absolute w-full py-8 px-10 mt-2 z-10 ">
      <nav className="flex  justify-between items-center  ">
        <a href="/">
          <img src={headerLogo} alt="header" width={130} height={29} />
        </a>
        <ul className="dark:text-neutral-50  font-montserrat text-lg leading-normal text-slate-gray flex gap-24 flex-1 justify-center items-center pl-20  max-lg:hidden">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact us</li>
        </ul>
        <div>
          <img
            className="lg:hidden"
            src={hamburger}
            alt="hamburger-menu "
            width={23}
            height={23}
          />
        </div>
        <button
          onClick={handledark}
          className="
          
          fixed right-1 top-1 shadow-3xl shadow-red-600 animate-pulse   dark:shadow-3xl dark:shadow-yellow-200 font-montserrat  border-none border-coral-red rounded-full dark:bg-neutral-50  bg-white   text-lg leading-normal px-2 w-10 h-10 "
        >
          {toggledark ? " ☀" : " 🌙"}
        </button>
      </nav>
    </header>
  );
}
