function User(props) {
  const user = props.myUser;
  const { toggle } = props;
  return (
    <div>
      <div className={`card ${user.invalid ? "bg-invalid" : ""}`}>
        <h3 className="card-header">{user.name}</h3>
        <h4>Age: {user.age}</h4>
        <h5>City: {user.city}</h5>
        <div className="card-footer">
          <button onClick={() => toggle(user.id)}>Toggle this</button>
        </div>
      </div>
    </div>
  );
}

export default User;
