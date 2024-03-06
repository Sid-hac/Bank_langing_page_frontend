
import { Billing, Business, CardDeal, Clients, CtA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

function App() {


  return (
        <div className='bg-primary text-black font-bold w-full overflow-hidden'>
           <div className='flex justify-center items-center sm:px-16 px-6 '>
              <div className='w-full'>
                   <Navbar/>
              </div>
           </div>

           <div className="bg-primary flex justify-center items-start">
              <div className="w-full">
                  <Hero/>
              </div>
           </div>

           <div className="bg-primary flex justify-center items-start">
              <div className="w-full">
                  <Stats/>
                  <Business/>
                  <Billing/>
                  <CardDeal/>
                  <Testimonials/>
                  <Clients/>
                  <CtA/>
                  <Footer/>
              </div>
           </div>
        </div>
  )
}

export default App
