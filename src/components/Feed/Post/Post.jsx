import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import {  EllipsisOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
const { Meta } = Card;


function Post(props) {
    let postHashtags = props.post.hashtags.map(h => <span> #{h.name}</span>)
    return <Card
        hoverable
        style={{ width: 320 }}
        cover={
            <div>
                <p>
                    {props.post.text}
                </p>
                <video width="320" height="240" controls muted autoplay="autoplay" >
                    <source src={props.post.videoUrl}></source>
                </video>
            </div>
        }
        actions={[
            <div><LikeOutlined /> {props.post.diggCount}</div>,
            <div><CommentOutlined /> {props.post.commentCount}</div>,
            <EllipsisOutlined key="ellipsis" />
        ]}
    >
        <NavLink to={"/userProfile/"+props.post.authorMeta.name}>
            <Meta
                avatar={<Avatar src={props.post.authorMeta.avatar} />}
                title={props.post.authorMeta.nickName}
            />
        </NavLink>
        <div>
            {postHashtags}
        </div>

    </Card>


}

export default Post;