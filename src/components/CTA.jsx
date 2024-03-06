import { Button } from "../components";

const CtA = () => {
  return (
    <section className="flex justify-between items-center flex-row w-full sm:px-16 px-6 sm:my-10 my-3 ">
      <div className="flex justify-around items-center sm:flex-row flex-col w-full bg-black-gradient-2 p-5 rounded-xl box-shadow">
        <div className="flex flex-col justify-between items-start gap-10 ">
          <h3 className="flex-1 font-poppins font-semibold sm:text-5xl text-2xl  text-white ">
            Let&apos;s try our service now!
          </h3>
          <p className="font-poppins font-normal text-dimWhite text-[16px] max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            
          </p>
        </div>
        <div>
          <Button styles="m-5" />
        </div>
      </div>
    </section>
  );
};

export default CtA;
