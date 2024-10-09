import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logging out
  };

  if (!user) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You must be logged in to view this page.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      
      <div>
        <h2>Your Account Info</h2>
        {/* You can add more details here */}
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
