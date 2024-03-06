import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-28 h-28 rounded-full bg-blue-gradient p-[2px] cursor-pointer">
      <div className="flex justify-center items-center flex-col bg-primary w-full h-full rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className=" font-poppins font-medium text-[15px] ">
            <span className="text-gradient text-[20px] mr-2">Get</span>
          </p>
          <img src={arrowUp} alt="arrow" className="w-6 h-6 object-contain " />
        </div>
        <p className="font-poppins font-medium text-[15px] ">
          <span className="text-gradient text-[20px]">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
