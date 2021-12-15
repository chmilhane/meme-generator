import axios from "axios";

const API_URL = "https://api.imgflip.com";

let memesCache = [];
export function getMemes() {
  if (memesCache.length > 0) return Promise.resolve(memesCache);

  return axios.get(`${API_URL}/get_memes`)
    .then(response => {
      if (!response.data) return;
      if (!response.data.success) return;

      const memes = response.data.data.memes.map(meme => new Meme(meme));
      memesCache = memes;

      return memes;
    });
};

export default class Meme {
  constructor({ id, name, url, width, height, box_count }) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.size = {
      width,
      height
    };
    this.boxCount = box_count;
  }
};