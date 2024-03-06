import { clients } from "../constants";

const Clients = () => {
  return (
    <section className=" flex justify-around items-center sm:px-16 px-6 sm:gap-4 gap-2 max-h-[100px]">
      
      {clients.map((client) => (
        <div key={client.id}>
          <img
            src={client.logo}
            alt="client"
            className="w-36 h-36 object-contain"
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
