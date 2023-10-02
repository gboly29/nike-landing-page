import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get reward
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <section key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">
                {section.title}
              </h4>
              <ul className="text-white">
                {section.links.map((link) => (
                  <a href="/">
                    <li
                      key={link.name}
                      className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-white-400 mt-24 max-sm: flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-centergap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0 "
          />
          <p>Copyright. All Right Reserved.</p>
          <p className="font-montserrat cursor-pointer flex flex-1 justify-end items-center">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
