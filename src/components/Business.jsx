import Button from "./Button";
import {features} from "../constants"

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title , content }) => {
      return(
        <div className="flex flex-row p-6 rounded-xl m-2 feature-card">
           <div className="w-12 h-12 rounded-full bg-dimBlue flex justify-center items-center">
              <img src={icon} alt="icon" className="w-8 h-8 object-contain"/>
           </div>
           <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-semibold text-white font-poppins text-[18px]">
                  {title}
                </h4>
                <p className="font-normal text-dimWhite font-poppins text-[16px]">
                  {content}
                </p>
           </div>
        </div>
      )
}

const Business = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 sm:px-16 px-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold  sm:text-6xl text-4xl  text-white w-full ">
          You do the business,
          <br className="sm:block hidden" />
          we&apos;ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] max-w-[400px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-5"/>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col md:mr-10 mr-0 md:mt-0 mt-10 relative">
        {features.map((feature , index) => (
           <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Business;
