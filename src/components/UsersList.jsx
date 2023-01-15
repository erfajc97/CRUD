import axios from "axios";
import React, { useEffect } from "react";

const UsersList = ({ usersList, getSelected, getUserList, deleteAlert }) => {
  const orderUsers = usersList.sort((a, b) =>
    a.first_name.localeCompare(b.first_name)
  );

  const btnDelete = (user) => {
    axios
      .delete(
        `https://users-crud.academlo.tech/users/
${user.id}/`
      )
      .then(() => {
        getUserList();
        deleteAlert(true)
      
      });
  };

  return (
    <div>
      <ul>
        {orderUsers.map((userList) => (
          <li key={userList.email}>
            <h2>
              {userList.first_name} {userList.last_name}{" "}
            </h2>
            <hr />
            <p>E-mail:</p>
            <b>{userList.email}</b>
            <p>Birthday</p>
            <p>{userList.birthday}</p>
            <hr />
            <div className="container-btn">
              <button
                className="btn-delete"
                onClick={() => btnDelete(userList)}>
                <i className="bx bx-trash bx-tada bx-md"></i>
              </button>
              <button
                id="btn-select"
                className="btn-select"
                onClick={() => getSelected(userList)}>
                <i className="bx bxs-edit bx-md"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
