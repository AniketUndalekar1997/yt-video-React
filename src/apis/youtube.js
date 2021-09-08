import axios from "axios";

const KEY = "AIzaSyDMupqC3EkG5-xlQyhOwSELw1doULr3s6I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
