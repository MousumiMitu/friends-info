import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div style={{ margin: "20px 50px" }}>
      <h3>Friend No: {friendId}</h3>
      <h4>{friend.name}</h4>

      <p>email: {friend.email}</p>
      <p>phone: {friend.phone}</p>
    </div>
  );
};

export default FriendDetail;
