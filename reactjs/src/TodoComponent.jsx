import React, { useEffect } from "react";
import { useState } from "react";

const TodoComponent = () => {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  function handleForm(e) {
    // console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form);
    const URL = "http://localhost:3000/welcome";
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(form),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  const getUsers = async () => {
    const response = await fetch(URL, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* this is for debugging */}
      <p>{JSON.stringify(form)}</p>
      <form onSubmit={handleSubmit}>
        <span>useName</span>
        <input type="text" name="user" onChange={handleForm} /> <br />
        <span>Password</span>
        <input type="text" name="pass" onChange={handleForm} />
        &nbsp;
        <button type="submit">submit</button>
      </form>
      <hr />
      <div>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <h1>hiii</h1>
              {user.username},{user.password}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoComponent;
