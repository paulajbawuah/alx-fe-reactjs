function UserProfile() {
   const UserProfile = (props) => {
  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
}

export default UserProfile;