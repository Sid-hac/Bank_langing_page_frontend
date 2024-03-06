import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6 ">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-4">
          <img src={discount} alt="discount_img" className="w-10 h-10" />
          <p className="text-dimWhite leading-[30.8px]">
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white font-bold">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row gap-8 justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold sm:text-6xl text-4xl  text-white">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient block">Generation</span>{" "}
          </h1>
          <div className=" sm:flex hidden">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold sm:text-6xl text-4xl text-white w-full">
          Payment Method
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[16px] max-w-[400px] mt-10">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[80%] h-[80%] right-0 bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
