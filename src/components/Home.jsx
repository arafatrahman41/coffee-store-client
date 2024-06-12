import { useLoaderData } from "react-router-dom";
import CardCoffee from "./CardCoffee";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">
        Coffee Count: {coffees.length}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto my-10">
        {coffees.map((coffee) => (
          <CardCoffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CardCoffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
