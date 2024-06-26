import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Adduser.css'; 

function AddUser() {
  const initialUserState = {
    image: "",
    name: "",
    email: "",
    address: "",
    college: ""
  };

  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/create", user);
      setUser(initialUserState);
    } catch (error) {
      setError("There was an error creating the user!");
      console.error(error);
      console.log(user.image);
    }
  };

  return (
    <div className='adduser'>
      <Link to="/">Back</Link>
      <h3>Add New User</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="image">Image URL:</label><br />
          <input
            type="text"
            onChange={inputHandler}
            id="image"
            name="image"
            value={user.image}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="name">Username:</label><br />
          <input
            type="text"
            onChange={inputHandler}
            id="name"
            name="name"
            value={user.name}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            onChange={inputHandler}
            id="email"
            name="email"
            value={user.email}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="address">Address:</label><br />
          <input
            type="text"
            onChange={inputHandler}
            id="address"
            name="address"
            value={user.address}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="college">College:</label><br />
          <input
            type="text"
            onChange={inputHandler}
            id="college"
            name="college"
            value={user.college}
            required
          /><br />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
