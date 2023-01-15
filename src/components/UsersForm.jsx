import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const UsersForm = ({ getSelected, userSelected, getUserList, create,createAlert }) => {
  const { handleSubmit, register, reset } = useForm();
  const empty = {
    birthday: "",
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  };

  useEffect(() => {
    if (userSelected != null) {
      reset(userSelected);

    } else {
      reset(empty);
    }
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      axios
        .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
        .then(() => {
          getUserList();
          getSelected(null);
        });
    } else {
      axios.post(`https://users-crud.academlo.tech/users/`, data).then(() => {
        getUserList();
        reset(empty);
        create();
        // createAlert(true)

      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit) }>
        <h2 className="titleform">New User</h2>
        <button onClick={create} className="exit_form">
          <i className="bx bx-x bx-flashing bx-lg"></i>
        </button>

        <div className="input_container">
          <label htmlFor="name">Name</label>
          <input
            required
            placeholder="First Name"
            type="text"
            id="first_name"
            {...register("first_name")}
          />
        </div>

        <div className="input_container">
          <label htmlFor="name">Last Name</label>
          <input
            required
            placeholder="Last Name"
            type="text"
            id="last_name"
            {...register("last_name")}
          />
        </div>

        <div className="input_container">
          <label htmlFor="name">E-mail</label>
          <input
            required
            placeholder="academlo@gmail.com"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>

        <div className="input_container">
          <label htmlFor="name">Password</label>
          <input
            required
            placeholder="%x10$xx#xx"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>

        <div className="input_container">
          <label htmlFor="release_date">Birthday</label>
          <input required type="date" id="birthday" {...register("birthday")} />
        </div>

        <button className="addButton">Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
