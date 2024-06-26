import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GetList.css';

function Getuser() {
  const [users, setUsers] = useState([]);
  const [expandedUsers, setExpandedUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getdata");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/api/deleteUser/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const toggleExpand = (userId) => {
    if (expandedUsers.includes(userId)) {
      setExpandedUsers(expandedUsers.filter(id => id !== userId));
    } else {
      setExpandedUsers([...expandedUsers, userId]);
    }
  };

  return (
    <div className='userlist'>
      <h3>User List</h3>
      <Link to="/add">Add User</Link>
      <div className="user-grid">
        {users.map((user, index) => (
          <div className="user-card" key={user._id}>
            <img
              src={user.ImageURL}
              alt={user.name}
              className="user-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <button onClick={() => toggleExpand(user._id)}>
              {expandedUsers.includes(user._id) ? 'Hide' : 'View'}
            </button>
            {expandedUsers.includes(user._id) && (
              <div className="user-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>College:</strong> {user.college}</p>
                <button onClick={() => handleDelete(user._id)}>DELETE</button>
                <Link to={`/edit/${user._id}`}>Edit</Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getuser;
