import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className=" flex flex-col justify-start  max-container px-6">
      <div className="flex flex-col justify-start ">
        <img src={footerLogo} alt="footerlogo" width={150} height={46} />
        <p className=" mt-4 max-w-sm text-sm leading-6 font-montserrat">
          Elevate every step with our premium footwear collection. Find your
          perfect pair today and stride with confidence. Discover comfort,
          style, and quality crafted for every occasion
        </p>
        <div className="flex gap-6 justify-start items-center mt-6 mb-8">
          {socialMedia.map((icon) => (
            <img
              className="bg-white rounded-full "
              key={icon.src}
              src={icon.src}
              alt={icon.alt}
              width={30}
              height={30}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-20 justify-start ">
        {footerLinks.map((footer) => {
          return (
            <div className="flex flex-col justify-start " key={footer.title}>
              <h3 className=" font-palanquin font-bold text-lg mb-4 mt-8">
                {footer.title}
              </h3>
              {footer.links.map((link) => {
                return (
                  <li
                    className=" cursor-pointer list-none font-montserrat text-sm py-1 hover:text-slate-gray"
                    key={link.link}
                  >
                    {link.name}
                  </li>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
