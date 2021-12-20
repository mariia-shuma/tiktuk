import React from "react";
import UserProfile from "./UserProfile";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { getUserFeed, getUserInfo } from "../../services/ApiRequests";
import Post from "../Feed/Post/Post";

function UserInfo() {
  const { name } = useParams();
  let [user, setUser] = React.useState(null);
  let [stats, setStats] = React.useState(null);
  let [feed, setFeed] = React.useState(null);

  React.useEffect(() => {
    getUserInfo(name).then(function (response) {
      setUser(response.data.user);
      setStats(response.data.stats);
    });

    getUserFeed(name).then(function (response) {
      setFeed(response.data);
    });
  }, [name]);

  return (
    <div>
      {user && stats ? <UserProfile user={user} stats={stats} /> : <Spin />}
      {feed ? feed.map((p) => <Post post={p} key={p.id} />) : <Spin />}
    </div>
  );
}

export default UserInfo;
