
const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);
        form.reset();
        // to send data to the server
        fetch('http://localhost:5000/coffee', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
  return (
    <div className="text-center bg-[#F4F3F0] p-8 lg:p-24">
      <h2 className=" font-bold md:text-5xl mb-4">Add Coffee </h2>

      <form onSubmit={handleAddCoffee}>
      {/* name and quantity row */}
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control flex  gap-2 lg:w-1/2 mb-3">
            <label className=" text-start">
              Coffee Name:
            </label>
              <input type="text" name="name" className="w-full input input-bordered" placeholder="Coffee Name" />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className=" text-start">
              Available quantity:
              <input
                type="text"
                name="quantity"
                className="w-full input input-bordered"
                placeholder="Available quantity"
              />
            </label>
          </div>
        </div>
        {/* Supplier and Taste */}
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control flex  gap-2 lg:w-1/2 mb-3">
            <label className="text-start">
            Supplier Name:
            </label>
              <input type="text" name="supplier" className="w-full input input-bordered " placeholder="Supplier Name" />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className=" text-start">
            Taste:
            </label>
              <input
                type="text"
                name="taste"
                className="w-full input input-bordered"
                placeholder="Taste"
              />
          </div>
        </div>
        {/* Category and Details */}
        <div className="md:flex gap-5 p-4 ">
          <div className="form-control  flex  gap-2 lg:w-1/2 mb-3">
            <label className="text-start">
            Category:
            </label>
              <input type="text" name="category" className="w-full input input-bordered" placeholder="Category" />
          </div>
          <div className="form-control flex  gap-2 lg:w-1/2 md:ml-5 mb-3">
            <label className="text-start">
            Details:
            </label>
              <input
                type="text"
                name="details"
                className="w-full input input-bordered"
                placeholder="Details"
              />
          </div>
        </div>
        {/* Photo */}
        <div className=" ">
          <div className="form-control flex  gap-2 p-4">
            <label className="text-start">
            <span>Photo:</span>
            </label>
              <input type="text" name="photo" className="w-full input input-border" placeholder="Enter photo URL" />
          </div>
        </div>
        <input type="submit" value='ADD COFFEE' className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
