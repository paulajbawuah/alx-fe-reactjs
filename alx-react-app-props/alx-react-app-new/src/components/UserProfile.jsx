const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '2px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'darkblue',
        margin: '0 0 10px 0',
        fontSize: '24px'
      }}>{props.name}</h2>
      <p style={{ margin: '5px 0', fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
      </p>
      <p style={{ 
        margin: '5px 0',
        fontStyle: 'italic',
        color: '#555'
      }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
