import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-16">
      
      <h1 className='mb-5 text-6xl text-center text-purple-700'>Hot & Cold Coffee</h1>
      {/* <p>Total:{coffees.length}</p> */}
      <div className="grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffee=><CoffeeCard
        key={coffee._id}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
