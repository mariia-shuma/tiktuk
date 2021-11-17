import React from "react";
import UserProfile from "./UserProfile";
import { Spin } from "antd";
import { useParams } from 'react-router-dom'
import { getUserFeed,getUserInfo } from "../../services/ApiRequests";




const e = {"killed":false,"code":1,"signal":null,"cmd":"python ./scripts/getUserFeed.py kikakiim 10.10.40.6:38004"}




function UserInfo(){

  const { name } = useParams()


    let [user, setUser] = React.useState(null);
    let [stats, setStats] = React.useState(null);
    let [feed, setFeed] = React.useState([]);

    React.useEffect(() => {
      getUserInfo(name).then(function (response) {
        setUser(response.data.user);
        setStats(response.data.stats);
      })

      getUserFeed(name).then(function (response) {
          setFeed(null);
      })
    }, [name]);
    

  return <div>
    {(user && stats) ? <UserProfile user={user} stats={stats} /> : <Spin/>}
  </div>
        
    


}


export default UserInfo;
