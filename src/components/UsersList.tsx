
import React, { useEffect } from "react";
import { useContext } from "react";
import myUserContext, { myUserContextProps } from "../context/UserContext";

const UsersList = () => {
  
  const { state, getUsers, getProfile } = useContext<myUserContextProps>(myUserContext);
const {users} = state;

  useEffect(() => {
    getUsers();
    //  console.log(users)
  }, []);

  return (
    <>
      <div>
        <h2>Users list</h2>

        {users.map((user: any) => (
          <div key={user.id} className="myDiv">
            <img
              onClick={() => getProfile(user.id)}
              src={user.avatar}
              alt={user.first_name}
              className="img-fluid mr-4 rounded-circle mt-3 flex-row justify-content-start"
              width="70"
            />
            <p
              onClick={() => getProfile(user.id)}
              className=" mt-1 list-group-item-action PUserlist"
            >{`${user.first_name} ${user.last_name}`}</p>
            <hr className="myHR" />
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;
