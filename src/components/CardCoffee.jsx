import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardCoffee = ({ coffees, setCoffees, coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure className="rounded-3xl">
        <img className="w-44 h-full object-cover " src={photo} />
      </figure>
      <div className="flex justify-around w-full items-center">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{category}</p>
          <p>{taste}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical lg:join-horizontal space-y-3">
            <button className="btn join-item">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardCoffee.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CardCoffee;
