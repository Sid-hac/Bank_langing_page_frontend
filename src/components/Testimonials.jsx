import { feedback } from "../constants"
import FeedbackCard from "./FeedbackCard"


const Testimoniels = () => {
  return (
    <section className="sm:py-16 py-6 sm:px-16 px-6 flex justify-center items-center flex-col relative ">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

       <div className="flex justify-between items-center sm:flex-row flex-col sm:mb-16 mb-6 relative z-[1] w-full ">
         <h1 className="font-poppins font-semibold sm:text-6xl text-4xl text-white w-full">
                What people are <br className="sm:block hidden"/> saying about us
         </h1>
         <p className="font-poppins font-normal text-dimWhite text-[16px] max-w-[400px] mt-10">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore
         </p>
         
       </div>
       {/* flex sm:justify-start justify-center items-center gap-3 md:flex-row flex-col feedback-container relative z-[1] */}
       <div className=" grid max-[555px]:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-3  z-[1]">
          {feedback.map((card ) => (
               <FeedbackCard key={card.id} {...card}/>
          ))}
       </div>
    </section>
  )
}

export default Testimoniels;