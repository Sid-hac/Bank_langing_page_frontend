import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse  sm:px-16 px-6"
    >
      <div className="flex-1 flex flex-col sm:flex-row justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5] object-contain"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient " />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient " />
        <div />
      </div>
        <div className="flex-1 flex justify-center items-start flex-col ">
          <h2 className=" font-poppins font-semibold sm:text-6xl text-4xl  text-white w-full ">
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing
          </h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] max-w-[400px] mt-10">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex flex-row flex-wrap sm:mt-8 mt-4">
          <img src={apple} alt="apple" className="w-[128px] h-[40px] object-contain mr-3 cursor-pointer" />
          <img src={google} alt="google" className="w-[128px] h-[40px] object-contain mr-3 cursor-pointer" />
        </div>
        </div>
      
    </section>
  );
};

export default Billing;
