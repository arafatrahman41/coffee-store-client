import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Users2 = () => {
  const {isPending,data: users, isError, error} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user")
      return res.json();
    }
  })  

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/user")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("delete successfully");
          //   const remainingUsers = users.filter((user) => user._id !== id);
          //   setUsers(remainingUsers);
        }
      });
  };

  if(isPending){
    return <span className="loading loading-spinner loading-lg text-amber-400"></span>
  }
  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h2 className="text-2xl text-center font-bold">
        {/* Users: {loadedUsers.length}{" "} */}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last LogIn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user?.createdAt}</td>
                <td>{user?.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-circle "
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
