import axios from "axios";

const KEY = 'AIzaSyBj0ai-K7Zi1TvWzm0x3V4P9qEmI_EknaM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})