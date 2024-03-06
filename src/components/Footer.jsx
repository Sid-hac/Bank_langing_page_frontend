import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 flex-col sm:px-16 px-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-5 w-full">
        <div
          className=" flex flex-col sm:flex-row justify-around items-center mr-8 w-full
        "
        >
          <div className="flex-1 flex flex-col  justify-center items-start mr-8">
            <img src={logo} alt="logo" className="w-32 h-32 object-contain " />
            <p className="font-poppins font-normal text-dimWhite text-[16px] max-w-[300px] mb-10">
              A new way to make the payments easy, reliable and secure
            </p>
          </div>

          <div className="flex-1 flex flex-row justify-between items-start flex-wrap md:mt-0 mt-6">
            {footerLinks.map((link) => (
              <div
                key={link.key}
                className="flex flex-col justify-center items-start min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] text-white">
                  {link.title}
                </h4>
                <ul>
                  {link.links.map((footerLink) => (
                    <li
                      key={footerLink.name}
                      className="font-poppins font-normal text-[15px] text-dimWhite hover:text-secondary cursor-pointer m-3"
                    >
                      {footerLink.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center sm:flex-row flex-col border-t-[1px] border-t-[#3f3r45] ">
       <div className="w-full flex sm:justify-start justify-center sm:items-start items-center">
         <p className="font-poppins font-normal text-dimWhite text-[16px] text-center w-full mt-3">
          Copyright 2021 HooBank | All Rights Reserved
         </p>
       </div>
        <div className="flex sm:justify-end justify-center items-center w-full mt-3 gap-3">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-5 h-5 object-contain cursor-pointer mr-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
