import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const[btnUser , setBtnUser] = useState(true);
  const[popUp,setPopUp] = useState(false);
    const [deleUp, setdeleUp] = useState(false); 

  const create = () =>{
    setBtnUser(!btnUser)
    setUserSelected(null)
  }

 const deleteAlert = (boolean) =>{
    setPopUp(boolean);
    setTimeout(() => {
       setPopUp(false);
    }, 1000);
 }
 const updateAlert = (boolean) => {
   setPopUp(boolean);
   setTimeout(() => {
     setPopUp(false);
   }, 1000);
 };
  const createAlert = (boolean) => {
    setPopUp(boolean);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };

  useEffect(() => {
    axios
      .get(`https://users-crud.academlo.tech/users/`)
      .then((res) => setUsersList(res.data));
  }, []);

  const getUserList = () => {
    axios
      .get(`https://users-crud.academlo.tech/users/`)
      .then((res) => setUsersList(res.data));
  };

  const getSelected = (user) => {
    setUserSelected(user);
    setBtnUser(!btnUser);
  };

 
 

  return (
    <div className="App">
      <header>
        <nav>
          <h1>USERS</h1>

          <button className="btn-create-users" onClick={create}>
            {" "}
            <span>+</span> <p>Create new user</p>
          </button>
        </nav>
      </header>
      <main>
        <div
          style={{ display: popUp ? "flex" : "none" }}
          className="container_pop-up">
          <div className="container_check">
            <i className="bx bx-check bx-lg bx-burst"></i>
          </div>
          <h3 className="title">User Deleted Succesfully</h3>
        </div>

        {/* <div
          style={{ display: deleUp ? "flex" : "none" }}
          className="container_pop-up">
          <div className="container_check">
            <i className="bx bx-check bx-lg bx-burst"></i>
          </div>
          <h3 className="title">User Created Succesfully</h3>
        </div> */}
        <div
          style={{ display: btnUser ? "none" : "block" }}
          className="container_form  ">
          <UsersForm
            getSelected={getSelected}
            userSelected={userSelected}
            getUserList={getUserList}
            create={create}
            // createAlert={createAlert}
          />
        </div>
        <UsersList
          deleteAlert={deleteAlert}
          usersList={usersList}
          getSelected={getSelected}
          getUserList={getUserList}
        />
      </main>
    </div>
  );
}

export default App;
