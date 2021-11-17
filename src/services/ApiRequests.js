import axios from "axios";


const options = {
      method: 'GET',
      url: '',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '98df05445bmsh3d7f00a65c35441p1439c4jsn43fd10863923'
      }
    };

export const getUserFeed = (name) => {
    let url = 'https://tiktok33.p.rapidapi.com/user/feed/' + name
    url = 'http://localhost/feed.json'
    return axios.request({...options, url: url});
}

export const getUserInfo = (name) => {
    let url = 'https://tiktok33.p.rapidapi.com/user/info/' + name
    url = 'http://localhost/user.json'
    return axios.request({...options, url: url});
}

export const getTrendingFeed = () => {
    let url = 'https://tiktok33.p.rapidapi.com/trending/feed'
    url = 'http://localhost/feed.php'
    return axios.request({...options, url: url});
}
