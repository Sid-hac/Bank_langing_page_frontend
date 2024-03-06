
import {stats} from "../constants"
const Stats = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap sm:mb-10 mb-6 gap-10">
     {stats.map((stat) => (
      <div key={stat.id} className="flex-1 flex justify-center items-center flex-row m-3">
         <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white">{stat.value}</h4>
         <p className="font-poppins font-normal xs:text-[20px] text-[15px] text-gradient">{stat.title}</p>
      </div>
     ))}
    </section>
  )
}

export default Stats