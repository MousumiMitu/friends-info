import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>total friends:{friends.length}</h2>
      <div className="container-box">
        {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Home;
