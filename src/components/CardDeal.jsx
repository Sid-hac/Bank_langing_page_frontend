import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 sm:px-16 px-6">
      <div className="flex-1 flex flex-col justify-center items-start ">
        <h2 className="font-poppins font-semibold sm:text-6xl text-4xl text-white w-full">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="font-poppins font-normal text-[18px] text-dimWhite max-w-[400px] mt-8">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-5" />
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </section>
  );
};

export default CardDeal;
