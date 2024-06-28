import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, password, createdAt: createdAt };

        
        // using axios
        axios.post("http://localhost:5000/user", user).then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "User Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });

        // using fetch
        // fetch("http://localhost:5000/user", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //       Swal.fire({
        //         title: "Success!",
        //         text: "User Added Successfully",
        //         icon: "success",
        //         confirmButtonText: "Cool",
        //       });
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-1/2 mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">sign Up</button>
            </div>
            <Link className="text-center text-red-500 font-bold" to="/signin">
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
