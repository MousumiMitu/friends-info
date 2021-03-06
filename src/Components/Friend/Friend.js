import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url);
  };
  return (
    <div className="friends-box">
      <div className="single-box">
        <h3>Friends name:{name}</h3>
        <p>email:{email}</p>
        {/* <p>
          <Link to={`/friend/${id}`}>show detail of id no.{id} </Link>
        </p> */}
        <button onClick={() => handleClick(id)}>Details</button>
      </div>
    </div>
  );
};

export default Friend;
