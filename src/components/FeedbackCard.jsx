/* eslint-disable react/prop-types */
import {  quotes } from "../assets";


const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col rounded-xl max-w-[350px] feedback-card md:mr-10 sm:mr-5 mr-0 my-5 px-5">
       <img src={quotes} alt="quotes" className="w-10 h-10 object-contain" />
       <p className="font-poppins font-normal text-xl text-white my-8">
        {content}
       </p>
       <div className="flex justify-start items-center gap-2 mb-5">
         <img src={img} alt="profile1"  className="w-10 h-10 object-contain"/>
         <div className="flex flex-col justify-center items-start ">
            <h6 className="font-poppins font-semibold text-white text-[18px]">
                {name}
            </h6>
            <p className="font-poppins font-normal text-[15px] text-dimWhite ">
                {title}
            </p>
         </div>
       </div>
    </div>
  );
};

export default FeedbackCard;
