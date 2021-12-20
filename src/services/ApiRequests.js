import axios from "axios";

const options = {
  method: "GET",
  url: "",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_SECRET_KEY,
  },
};

export const getUserFeed = (name) => {
  // let url = 'https://tiktok33.p.rapidapi.com/user/feed/' + name
  // this url will be changed when user feed starts working again

  let url = "https://tiktok33.p.rapidapi.com/trending/feed";
  return axios.request({ ...options, url: url });
};

export const getUserInfo = (name) => {
  let url = "https://tiktok33.p.rapidapi.com/user/info/" + name;
  return axios.request({ ...options, url: url });
};

export const getTrendingFeed = () => {
  let url = "https://tiktok33.p.rapidapi.com/trending/feed";
  return axios.request({ ...options, url: url });
};
