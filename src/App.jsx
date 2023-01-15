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

  const create = () =>{
    setBtnUser(!btnUser)

  }

 

 

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
          style={{ display: btnUser ? "none" : "block" }}
          className="container_form  ">
          <UsersForm
            getSelected={getSelected}
            userSelected={userSelected}
            getUserList={getUserList}
          />
          <button onClick={create} className="exit_form">
            <i className="bx bx-x bx-flashing bx-lg"></i>
          </button>
        </div>

        <UsersList
          usersList={usersList}
          getSelected={getSelected}
          getUserList={getUserList}
          // update={update}
        />
      </main>
    </div>
  );
}

export default App;