import React from "react";
import Post from "./Post/Post";
import { getTrendingFeed } from "../../services/ApiRequests";
import Errormessage from "../ErrorMessage";

function Feed() {
    let [posts, setPosts] = React.useState([]);
    let [error, setError] = React.useState(false); 
    
    React.useEffect(() => {
        getTrendingFeed().then(function (response) {
            setPosts(response.data);
        }).catch(function(error){
            setError(true)
        })
    }, []);

    let postsElements = posts.map(p => <Post post={p} key={p.id} />)
    return <div>
        {(error) ? <Errormessage/> : postsElements}
    </div>
}

export default Feed;
