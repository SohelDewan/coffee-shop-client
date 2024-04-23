import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                console.log('Deleted successfully')
                {
                  const remaining = coffees.filter(cof=> cof._id !==_id);
                  setCoffees(remaining);
                }
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="flex justify-between w-full px-4">
        <div className="ml-3 p-4">
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="join join-vertical space-y-2 pt-2 ">
          <button className="btn join-item bg-green-600 text-white">
            View
          </button>
        <Link to={`updateCoffee/${_id}`}>
        <button className="btn join-item bg-purple-600 text-white">
            Edit
          </button>
        </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-600 text-white"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
