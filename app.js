// src/UserList.js  
import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import './UserList.css'; // Optional: Create a CSS file for styling  

const UserList = () => {  
  const [listOfUsers, setListOfUsers] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState('');  

  // Fetch the user data from the API  
  useEffect(() => {  
    const fetchUsers = async () => {  
      try {  
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');  
        setListOfUsers(response.data);  
      } catch (err) {  
        setError('Failed to fetch users');  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchUsers();  
  }, []);  

  if (loading) {  
    return <div>Loading...</div>;  
  }  

  if (error) {  
    return <div>{error}</div>;  
  }  

  return (  
    <div className="user-list">  
      <h1>User List</h1>  
      <ul>  
        {listOfUsers.map((user) => (  
          <li key={user.id} className="user-item">  
            <h2>{user.name}</h2>  
            <p>Email: {user.email}</p>  
            <p>Phone: {user.phone}</p>  
            <p>Website: {user.website}</p>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default UserList;