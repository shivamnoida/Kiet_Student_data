import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edituser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    college: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/getUserById/${id}`);
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user', error);
        
      }
    };
    
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/update/${id}`, user);
      
      console.log('User updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating user', error);
     
    }
   
  };

  return (
    <div className='updateuser'>
      <Link to="/">Back</Link>
      <h3>Update User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label><br />
          <input 
            type="text" 
            id="username" 
            name="name" 
            value={user.name} 
            onChange={handleChange} 
          /><br />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
          /><br />
        </div>
        <div>
          <label htmlFor="address">Address:</label><br />
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={user.address} 
            onChange={handleChange} 
          /><br />
        </div>
        <div>
          <label htmlFor="college">College:</label><br />
          <input 
            type="text" 
            id="college" 
            name="college" 
            value={user.college} 
            onChange={handleChange} 
          /><br />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default Edituser;
