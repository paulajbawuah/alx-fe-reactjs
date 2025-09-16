import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      border: '2px solid #4CAF50', 
      padding: '15px', 
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3 style={{ color: '#2E7D32' }}>User Details (Using Context API)</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
