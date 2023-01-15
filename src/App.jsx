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
    setUserSelected(null)
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
            create={create}
          />
          
        </div>

        <UsersList
          usersList={usersList}
          getSelected={getSelected}
          getUserList={getUserList}
        />
      </main>
    </div>
  );
}

export default App;
