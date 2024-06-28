import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {
          name,
          quantity,
          supplier,
          taste,
          category,
          details,
          photo,
        };
        console.log(updatedCoffee);
    
        // send data to the sever
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
              Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          });
      };

    return (
        <div className="bg-[#F4F3F0]">
        <div>
          <div className="flex-col">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Update Coffee: <span className="text-[#cf9d5a]">{name}</span></h1>
              <p className="md:w-1/2 mx-auto pt-3 pb-6">
                It is a long established fact that a reader will be distraceted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here.
              </p>
            </div>
            <div className="md:w-1/2 mx-auto shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateCoffee} className="card-body">
                {/* form name and quantity row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter coffee Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      defaultValue={quantity}
                      placeholder="Available Quantity"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                {/* form supplier and taste row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Supplier</span>
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter coffee supplier"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Taste</span>
                    </label>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter coffee taste"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                {/* form category and details row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Enter coffee category"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Enter coffee details"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                {/* form photo URL row */}
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Update Coffee"
                    className="border-2 border-[#331A15] bg-[#D2B48C] py-3 rounded-md hover:opacity-90 duration-300 cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffee;