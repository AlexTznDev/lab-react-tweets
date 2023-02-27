function User(props) {

  return (

      <div className="top">
        <span className="user">
          <span className="name">{props.name}</span>
          <span className="handle">{props.handle}</span>

        </span>
        <span className="timestamp">{props.children}</span>
      </div>

  );
}

export default User;
