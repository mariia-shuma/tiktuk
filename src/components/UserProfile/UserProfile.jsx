import { Descriptions } from "antd";
import "antd/dist/antd.css";

function UserProfile(props) {
  let a = "a";

  return (
    <div>
      <Descriptions title="User Info:" layout="vertical">
        <Descriptions.Item label="Nickname">
          {props.user.nickname}
        </Descriptions.Item>
        <Descriptions.Item label="First registered">
          {props.user.createTime}
        </Descriptions.Item>
        <Descriptions.Item label="Number of followers">
          {props.stats.followerCount}
        </Descriptions.Item>
        <Descriptions.Item label="Friends">
          {props.stats.followingCount}
        </Descriptions.Item>
        <Descriptions.Item label="Favs">
          {props.stats.heartCount}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="My posts:" layout="vertical"></Descriptions>
    </div>
  );
}

export default UserProfile;
